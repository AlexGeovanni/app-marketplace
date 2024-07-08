import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { incrementQuantity, removeFromCart } from "../redux/features/cartSlice";

export const CountItem = (id: number, quantity: number) => {
  const [count, setCount] = useState<number>(quantity);
  const Dispatch = useAppDispatch();

  const handleCouterIncre = () => {
    setCount(count + 1);
    Dispatch(incrementQuantity({ id, value: count + 1 }));
  };
  const handleCouterDecre = () =>{
    if (count > 1) {
      setCount(count - 1);
      Dispatch(incrementQuantity({ id, value: count - 1 }));
      return
    } 
    setCount(1);
    Dispatch(incrementQuantity({ id, value: 1 }))
  }
    
  const handleBlur = () => {
    const value = count;
    if (!value || value === 0) {
        window.confirm(`Seguro quieres eliminar el producto.`) && Dispatch(removeFromCart(id));
        setCount(1);
        Dispatch(incrementQuantity({ id, value: 1 }))
    } else {
      Dispatch(incrementQuantity({ id, value }));
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  };

  return {
    handleCouterIncre,
    handleCouterDecre,
    handleBlur,
    handleOnChange,
    count,
  };
};
