import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Background() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const numStars = 80;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Generate star particles
    const stars = d3.range(numStars).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      opacity: Math.random(),
    }));

    const simulation = d3.forceSimulation(stars)
      .velocityDecay(0)
      .force("collide", d3.forceCollide(6)) // Avoid overlap
      .force("charge", d3.forceManyBody().strength(-30)) // Slight repulsion
      .on("tick", () => {
        svg.selectAll("polygon")
          .data(stars)
          .join("polygon")
          .attr("points", "5,0 2,3 3,6 0,4 -3,6 -2,3 -5,0 -2,-3 -3,-6 0,-4 3,-6 2,-3") // Star shape
          .attr("fill", "white")
          .attr("opacity", (d) => d.opacity)
          .attr("transform", (d) => `translate(${d.x}, ${d.y}) scale(1.5)`);
      });

    // Randomly flicker stars (blinking effect)
    function flickerStars() {
      stars.forEach((star) => {
        star.opacity = Math.random() * 0.8 + 0.2; // Opacity varies between 0.2 and 1
      });
      simulation.alpha(0.3).restart();
      setTimeout(flickerStars, 800 + Math.random() * 1200); // Flickers at random intervals
    }

    flickerStars(); // Start flickering

    // Mouse repelling effect
    svg.on("mousemove", (event) => {
      const [mouseX, mouseY] = d3.pointer(event);
      stars.forEach((star) => {
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          star.vx += (dx / distance) * 2;
          star.vy += (dy / distance) * 2;
        }
      });
      simulation.alpha(1).restart();
    });

    // Keep stars moving inside screen
    function keepStarsMoving() {
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x <= 0 || star.x >= width) {
          star.vx *= -1;
          star.x = Math.max(1, Math.min(width - 1, star.x));
        }
        if (star.y <= 0 || star.y >= height) {
          star.vy *= -1;
          star.y = Math.max(1, Math.min(height - 1, star.y));
        }
      });

      simulation.alpha(0.3).restart();
      requestAnimationFrame(keepStarsMoving);
    }

    keepStarsMoving(); // Start movement

    return () => {
      simulation.stop();
    };
  }, []);

  return <svg ref={svgRef} className="fixed z-0 top-0 left-0 w-full h-full"></svg>;
}
