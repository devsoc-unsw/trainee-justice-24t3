"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function createRipple(event: React.MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  button.appendChild(circle);
}

function Button({ children, onClick }: ButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <>
      <div>
        <button
          type="button"
          className="relative overflow-hidden px-10 py-2 text-lg font-semibold font-spartan text-[hsl(50,21%,95%)] bg-[hsl(30,9%,17%)] hover:opacity-85 duration-200 rounded-3xl outline-0 border-0"
          onClick={handleClick}
        >
          {children}
        </button>
      </div>
    </>
  );
}
export default Button;
