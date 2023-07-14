import { Product } from "./products";

export type Cart = {
    id: number;
    products: Product[],
    price: number,
  };
  