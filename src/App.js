import React from "react";
import { uid } from "uid";
import "./App.css";
import Header from "./ComponentHeader/Header";
import Main from "./ComponentMain/Main";
import product2 from "./Picture/product2.jpg";
import product3 from "./Picture/product3.jpg";
import product5 from "./Picture/product5.jpg";
import product6 from "./Picture/product6.jpg";

function App() {
  const productList = [
    {
      id: "1",
      name: "sad",
      product: product2,
      time: new Date().getMinutes(),
    },
    {
      id: "2",
      name: "sad",
      product: product3,
      time: new Date().getMinutes(),
    },
    {
      id: "3",
      name: "sad",
      product: product5,
      time: new Date().getMinutes(),
    },
    {
      id: "4",
      name: "sad",
      product: product6,
      time: new Date().getMinutes(),
    },
  ];

  return (
    <div className="App">
      <Header />

      {productList.map((list) => {
        return (
          <Main
            key={uid()}
            id={list.id}
            picture={list.product}
            name={list.name}
            time={list.time}
          />
        );
      })}
    </div>
  );
}

export default App;
