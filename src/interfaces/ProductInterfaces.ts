import { ProductTitleProps } from "../components/ProductTitle";
import { ProductCardProps } from "../components/ProductCard";
import { ProductCardButtonsProps } from "../components/ProductButtons";
import { ProductCardImgProps } from "../components/ProductImg";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
  onChange?: () => void;
  inititialValues?: InitialValues
  maxCount?: number
}

export interface ProductCardHOCProps {
  ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps): JSX.Element
  Title: ({ title, className, style }: ProductTitleProps) => JSX.Element;
  Img: ({ className, style }: ProductCardImgProps) => JSX.Element;
  Buttons: ({ className, style }: ProductCardButtonsProps) => JSX.Element;
}

export interface onChangeArguments {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product,

  increaseBy: (value: number) => void;
  reset: () => void;


}