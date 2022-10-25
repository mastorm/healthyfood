import { agriApi } from "./api";
import "./globals.css";

interface FruitOrVegetable {
  product: string;
  productGroupCode: string;
}

async function getFruitsAndVeggies() {
  const res = await fetch(agriApi("fruitAndVegetable/products"));

  return (await res.json()) as FruitOrVegetable[];
}

export default async function Home() {
  const veggies = await getFruitsAndVeggies();
  return (
    <ul>
      {veggies.map((x) => (
        <li key={x.productGroupCode}>{x.product}</li>
      ))}
    </ul>
  );
}
