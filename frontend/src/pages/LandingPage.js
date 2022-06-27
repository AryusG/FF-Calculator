import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function LandingPage() {

  return (
    <div className="bg-purple-900 w-full sm:h-screen h-full">
      <NavBar />
      <Hero />
    </div>
  );
}

export default LandingPage;
