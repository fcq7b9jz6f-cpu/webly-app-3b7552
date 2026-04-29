import React from "react";
import Hero from "./Hero";
import Biography from "./Biography";
import Timeline from "./Timeline";
import Songs from "./Songs";
import Legacy from "./Legacy";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Biography />
      <Timeline />
      <Songs />
      <Legacy />
      <Footer />
    </div>
  );
}
