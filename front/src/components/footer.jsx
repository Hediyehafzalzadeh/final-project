import React from "react";
const Footer = () => {
  return (
    <div className="text-[#faf0e6] bg-[#483c3b]">
      <div className="flex mt-24 h-96 ">
        <p className="m-20 md:text-4xl text-xl">
          You Can Find Us in :{" "}
          <span className="pi pi-instagram m-3 text-3xl"></span>{" "}
          <span className="text-3xl pi pi-youtube m-3"></span>{" "}
          <span
            className="text-3xl pi pi-facebook
                m-3"
          ></span>{" "}
        </p>
        <ul className="m-20">
          <li className="p-3 text-2xl">Terms & Privacy</li>
          <li className="p-3">Terms & Conditions</li>
          <li className="p-3">Privacy Policy</li>
          <li className="p-3">Accessibility Statement</li>
        </ul>

        <ul className="m-20 md:text-xl text-sm">
          <li className="p-3 text-2xl">Help</li>
          <li className="p-3">Parts & Service</li>
          <li className="p-3">Support Center</li>
          <li className="p-3">Contact Us</li>
        </ul>

        <ul className="m-20 md:text-xl text-sm">
          <li className="p-3 text-2xl">Resources</li>
          <li className="p-3">Size & Fit Guide</li>
          <li className="p-3">Citizen LIVE</li>
          <li className="p-3">Gift Cards</li>
        </ul>
      </div>
      <p className="ml-3">© 2024 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
