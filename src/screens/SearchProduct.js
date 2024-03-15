import React from "react";
import Header from "./../components/Header";
import ShopSearchSection from "../components/homeComponents/ShopSearchSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const SearchProduct = ({ match }) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSearchSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default SearchProduct;
