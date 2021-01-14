import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <img
        className="checkout__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_LP_Header_NYNY_en_US.png"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
          <p>To add items in your basket click on "add to basket" </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              price={item.price}
              rating={item.rating}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
