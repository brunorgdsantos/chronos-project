import type React from "react";
import "../styles/global.css";
import "../styles/global.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
}
