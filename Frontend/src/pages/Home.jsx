import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Health Matrix Institute | Your Trusted Healthcare provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about5.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
