import { memo } from "react";

function HeavyComponent({ func, kazkas }) {
  func();

  return (
    <div>
      {Array.from({ length: 10000 })
        .fill(0)
        .map((x, index) => {
          return <div key={index}>Labas</div>;
        })}
    </div>
  );
}

export default memo(HeavyComponent);
