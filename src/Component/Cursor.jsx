import { useEffect } from "react";

function Cursor() {
 useEffect(() => {
  const cursor = document.querySelector(".cursor");
  const border = document.querySelector(".cursor-border");

  let x = 0, y = 0;
  let bx = 0, by = 0;

  const move = (e) => {
    x = e.clientX;
    y = e.clientY;

    // 👉 inner dot = exact cursor
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  const animate = () => {
    // 👉 outer smooth follow
    bx += (x - bx) * 0.1;
    by += (y - by) * 0.1;

    border.style.left = bx + "px";
    border.style.top = by + "px";

    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", move);
  animate();

  return () => window.removeEventListener("mousemove", move);
}, []);

  return (
  <>
    <div className="cursor"></div>
    <div className="cursor-border"></div>
  </>
);
}

export default Cursor;
