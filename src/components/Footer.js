import React from "react";

const Footer = () => {
  return (
    <footer className="footer  bg-indigo-700 h-48">
      <div className="container p-5 mx-auto text-indigo-50 border-b border-indigo-50 flex justify-between items-center">
        <div className="footer-left">
          <div className="contact flex flex-col gap-1">
            <p>+88098712131212</p>
            <p>lu.alumni.edu</p>
            <p>Kamalbazar, sylhet</p>
          </div>
        </div>
        <div className="footer-right text-5xl uppercase font-semibold">
          logo
        </div>
      </div>
      <p className="text-center pt-3 text-indigo-50">
        &copy; {new Date().getFullYear} LU-Alumni All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
