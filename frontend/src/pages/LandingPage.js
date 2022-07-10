import React from "react";
import Hero from "../components/LandingComponents/Hero";
import NavBar from "../components/LandingComponents/NavBar";

function LandingPage() {

  return (
    <div className="bg-purple-900 w-full min-h-screen overflow-hidden">
      <NavBar />
      <Hero />
    </div>
  );
}

export default LandingPage;
