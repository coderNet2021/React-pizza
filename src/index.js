import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "green",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaCount = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaCount > 0 ? (
        <>
          <p>authentic italian restaurant, very delicious! yum yum!</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on our menu , please come back later :)</p>
      )}

      {/* <Pizza
        name="pizza spinacci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, and pepperoni"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, and pepperoni"
        price={13}
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = 11; //new Date().getHours();
  const openAt = 12;
  const closeAt = 22;
  const isOpen = hour >= openAt && hour <= closeAt;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order CloseH={closeAt} />
      ) : (
        <MessageClosed Obj={{ openAt: openAt, closeAt: closeAt }} />
      )}
    </footer>
  );
}

function Order({ CloseH }) {
  return (
    <div className="order">
      <p>
        we are currently open unitll {CloseH}:00 . Come visit or order online{" "}
      </p>
      <button className="btn">order now</button>
    </div>
  );
}
function MessageClosed({ Obj }) {
  return (
    <p>
      we are happy to welcome you between {Obj.openAt} and {Obj.closeAt}
    </p>
  );
}

//react 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//react before 18 :
// ReactDOM.render(<App />,document.getElementById("root")); and import from react-dom
