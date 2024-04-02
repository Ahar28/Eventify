import React, { useEffect, useState } from "react";
import loginImage from "../../assets/auth-background.jpg";
import Container from "../../components/Container";
import LoginForm from "../../components/Login";
import SignUpForm from "../../components/SignUp";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../../components/ForgotPassword";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const Authentication: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const validPaths = ["/auth/login", "/auth/register", "/auth/forgot-password", "/auth/reset-password"];
    if (!validPaths.includes(location.pathname)) {
      navigate("/auth/login");
    }
  }, [location, navigate]);

  const renderComponents = (location: any) => {
    console.log("location", location);
    switch (location.pathname) {
      case "/auth/login":
        return <LoginForm />;
      case "/auth/register":
        return <SignUpForm />;
      case "/auth/forgot-password":
        return <ForgotPasswordForm />;
      case "/auth/reset-password":
        return <ResetPasswordForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center h-screen min-h-screen mb-5">
        <div className="hidden lg:block lg:w-3/5">
          <img
            src={loginImage}
            alt="Login"
            className="h-screen w-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center min-h-screen ">
          {renderComponents(location)}
        </div>
      </div>
    </Container>
  );
};

export default Authentication;
