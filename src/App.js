import "./App.css";

import React from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// Products-data
let data = [
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$40.00 - $80.00",
    cart: false,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: true,
    title: "Sale Item",
    star: false,
    discount: "$50.00",
    price: "$25.00",
    cart: true,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: false,
    title: "Fancy Product",
    star: false,
    discount: "",
    price: "$120.00 - $280.00",
    cart: false,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: true,
    title: "Special Item",
    star: true,
    discount: "$20.00",
    price: "$18.00",
    cart: true,
  },
  {
    image:
      "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
    sale: false,
    title: "Popular Item",
    star: true,
    discount: "",
    price: "$40.00",
    cart: true,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // function for count  (addcart and remove cart action)
  addcart = (event) => {
    if (event) {
      this.setState(() => ({
        count: this.state.count + 1,
      }));
      this.scrollTop();
    } else {
      this.setState(() => ({
        count: this.state.count - 1,
      }));
      this.scrollTop();
    }
  };

  // function to scrollup after add/remove cart
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        <Navbar count={this.state.count} />
        <Header />
        <div className="card-content d-flex flex-wrap justify-content-center">
          {data.map((item, index) => {
            // to iterate Products
            return (
              <Card
                key={index}
                image={item.image}
                sale={item.sale}
                title={item.title}
                star={item.star}
                discount={item.discount}
                price={item.price}
                cart={item.cart}
                addcart={this.addcart}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;