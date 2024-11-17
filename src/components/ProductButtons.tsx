import React from 'react';
import { CSSProperties, useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import ProductContext from "./ProductCardContext";

export interface ProductCardButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className = "", style, }: ProductCardButtonsProps) => {
  // todo: Extraer del context maxCount 
  const { counter, handleIncreaseBy, maxCount } = useContext(ProductContext);

  //isMaxReach = ueCallback, [counter,maxCount] 
  //true si el count es igual a maxcount
  //false si no lo es
  const isMaxReach = useCallback(() => counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReach() && styles.disable}`} onClick={() => handleIncreaseBy(1)}>
        +
      </button>
    </div>
  );
};
