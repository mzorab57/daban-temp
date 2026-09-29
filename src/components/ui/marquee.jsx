import React from "react";

export function Marquee({
  className = "",
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      style={{ '--duration': '40s', '--gap': '1rem', ...props.style }}
      className={`tw-group tw-flex tw-overflow-hidden tw-p-2 tw-[gap:var(--gap)] ${!vertical ? "tw-flex-row" : "tw-flex-col"} ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
            className={`tw-flex tw-shrink-0 tw-justify-around tw-[gap:var(--gap)] ${!vertical ? "tw-animate-marquee tw-flex-row" : "tw-animate-marquee-vertical tw-flex-col"} ${pauseOnHover ? "tw-group-hover:[animation-play-state:paused]" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
