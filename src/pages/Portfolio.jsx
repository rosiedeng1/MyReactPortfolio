// This is a static page mocking a "Portfolio" section about myself where the components are imported and Portoflio is exported
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { portfolio } from "./data.js";
import Header from "../components/Header.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"

export default function Portfolio() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="apps flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="portfolio flex-wrap -m-4">
          {portfolio.map((portfolio) => (
            <a
              href={portfolio.link}
              key={portfolio.image}
              className="sm:w-1/2 w-50 p-4">
              <div className="project">
                <img
                  alt="gallery"
                  className="img"
                //   className="absolute inset-0 w-full h-full object-cover object-center"
                  src={portfolio.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-sm text-green-400 mb-1">
                    {portfolio.subtitle}
                  </h2>
                  <h3 className="title-font text-sm font-sm text-white mb-3">
                    {portfolio.title}
                  </h3>
                  <h4 className="title-font text-sm font-sm text-white mb-3">
                    {portfolio.githubrepo}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    
    <Footer></Footer>
    </>
  );
}