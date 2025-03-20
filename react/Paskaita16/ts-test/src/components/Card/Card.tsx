import { ReactNode } from "react";

type Owner = {
  name: string;
  age: number;
};

export type Komplektacija = {
  heating: boolean;
  cooling: boolean;
  turnSignal: boolean;
};

type Car = {
  brand: string;
  model: string;
  accidents?: string[];
  owners: Owner[];
  komplektacija: Komplektacija;
};

type CardProps = {
  title?: string;
  description: string;
  children: ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
  function doStuff(name: string, age?: number) {
    return 5;
  }

  const doStuffResult = doStuff();

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.target);
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
      <div>Footer</div>
      <button onClick={onClickHandler}>Click me</button>
    </div>
  );
}
