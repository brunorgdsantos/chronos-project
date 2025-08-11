import type React from "react";
import styles from "./style.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}
