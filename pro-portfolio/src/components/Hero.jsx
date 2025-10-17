import React from "react";
import { Button } from "@mui/material";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
      {/* 3D Background */}
      <HeroCanvas />

      {/* Hero Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I’m Ziyas</h1>
        <p className="text-xl md:text-2xl mb-6">Full-Stack Developer | UI/UX Enthusiast</p>
        <Button variant="contained" color="secondary" href="#projects">
          View My Work
        </Button>
      </div>
    </section>
  );
}
