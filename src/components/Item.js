import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = React.useState("");
  const [buttonName, setButton] = React.useState("Add to Cart");

  function handleClick() {
    setInCart(() => {
      if (inCart === "") {
        setButton("Remove From Cart");
        return "in-cart";
      } else {
        setButton("Add to Cart");
        return "";
      }
    });
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {buttonName}
      </button>
    </li>
  );
}

export default Item;
