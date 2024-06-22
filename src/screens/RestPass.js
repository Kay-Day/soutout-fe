import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";

const RestPass = () => {
    const [email, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const { id } = useParams();
    const history = useHistory();

    const submitHandler = async(e) => {
        e.preventDefault();
        if (!email || !confirmPass) {
            toast.error("Please enter input")
            return;
        } else {
            if (email !== confirmPass) {
                toast.error("Password not match Confirm Pass");
                return;
            return;
            } else {
                const res = await axios.put("http://localhost:5000/api/users/change-password", { password: email, id: id });
                if (res.status === 200)
                {
                    setPassword("")
                    setConfirmPass("")
                    history.push("/login");
                }   
            }
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
            type="password"
            placeholder="Enter Password"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
    </>
  );
};

export default RestPass;
