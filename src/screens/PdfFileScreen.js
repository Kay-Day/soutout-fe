import React from "react";
import Header from "../components/Header";
import ShopSectionPdf from "../components/pdfComponent/ShopSectionPdf";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const PdfFileScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSectionPdf />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default PdfFileScreen;
