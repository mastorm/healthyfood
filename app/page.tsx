import { use } from "react";
import "./globals.css";
import { getFruitsAndVeggies } from "../modules/veggies";

export default function Home() {
  const veggies = use(getFruitsAndVeggies());
  return (
    <main>
      <h1>All this stuff will make you feel good 🍉</h1>
    </main>
  );
}
