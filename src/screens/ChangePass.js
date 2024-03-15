import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import axios from "axios";
import { toast } from "react-toastify";

const ChangePass = () => {
    const [email, setEmail] = useState("");
    
    const submitHandler = async(e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:5000/api/users/forgot-password", { email: email });
        if (res.status === 200) {
            setEmail("");
            toast.success("Please Checking Email");
        }

    }

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Code</button>
        </form>
      </div>
    </>
  );
};

export default ChangePass;
