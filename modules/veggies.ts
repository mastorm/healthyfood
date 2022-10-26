import { agriApi } from "./api";

export interface Product {
  product: string;
  productGroupCode: string;
}

export async function getFruitsAndVeggies() {
  const res = await fetch(agriApi("fruitAndVegetable/products"));

  return (await res.json()) as Product[];
}
