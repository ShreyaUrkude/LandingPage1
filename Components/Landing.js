"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span>LOGO</span>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Course</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>
            BUSINESS <br /> LANDING PAGE
          </h1>
          <p>
            Learn more about alternative ways to use CSS in your application.
            Tailwind CSS helps you build modern UI faster.
          </p>

          <div className="btn-group">
            <button className="primary-btn">Course Info</button>
            <button className="secondary-btn">Get Started</button>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/boy.jpg"
            alt="Hero"
            width={600}
            height={400}
          />
        </div>
      </section>

      <section className="cta">
        <h2>Ready to get started?</h2>
      </section>
    </>
  );
}
