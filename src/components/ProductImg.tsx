import React from 'react';
import { CSSProperties, useContext } from "react";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import ProductContext from "./ProductCardContext";


export interface ProductCardImgProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductImg = ({ className = "", style }: ProductCardImgProps) => {
  const { product } = useContext(ProductContext);
  const { img } = product;

  return (
    <img
      style={style}
      src={img ? img : NoImage}
      alt="Image product Coffe"
      className={`${styles.productImg} ${className}`}
    />
  );
};
