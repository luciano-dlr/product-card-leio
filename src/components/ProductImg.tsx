import React from 'react';
import { CSSProperties, useContext } from "react";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import ProductContext from "./ProductCardContext";


export interface ProductCardImgProps {
  className?: string;
  style?: CSSProperties;
  img?: string;
}

export const ProductImg = ({ className, style, img }: ProductCardImgProps) => {
  const { product } = useContext(ProductContext);
  // const { img } = product;


  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = NoImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
      alt="Product"
    />
  );
};
