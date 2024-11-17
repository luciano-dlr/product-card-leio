import React from 'react';
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties } from "react";
import {
  InitialValues,
  onChangeArguments,
  Product,
  ProductCardHandlers,
} from "../interfaces/ProductInterfaces";
import ProductContext from "./ProductCardContext";

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: (arg: ProductCardHandlers) => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: (arg: onChangeArguments) => void;
  value?: number;
  initialValues?: InitialValues
}

const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { counter, handleIncreaseBy, maxCount, reset, isMaxCountReached } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider
      value={{ counter, handleIncreaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            increaseBy: handleIncreaseBy,
            product,
            maxCount,
            isMaxCountReached,
            reset
          })}
      </div>
    </Provider>
  );
};
