import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Slide = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise(async () => {
      const res = await axios.get("http://localhost:5000/api/category/all/banner");
      if (res.data) {
        setItems(res.data);
      }
    }, []);
  }, []);

  return (
    <Carousel>
      {items.map((item) => (
        <div key={item.id}>
          <a href={item.linkPage} target="_blank">
            <img className="slide" src={item.linkImg} alt="" />
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default Slide;
