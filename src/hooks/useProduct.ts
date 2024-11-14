import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArguments, Product } from "../interfaces/ProductInterfaces";

interface UseProductHookProps {
  product: Product;
  onChange?: (arg: onChangeArguments) => void;
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductHookProps) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false)

  const handleIncreaseBy = (value: number) => {

    //Math max toma el valor maximo de counter y value pero es un calculo so siempre sera maximo entre ese valor y 0
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      //Toma el valor maximo enrte newValue y initialValues.maxCount
      newValue = Math.min(newValue, initialValues.maxCount);

    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value)
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, [])


  return {
    counter,
    handleIncreaseBy,
    reset,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
  };
};
