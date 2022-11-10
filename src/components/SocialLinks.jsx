import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function SocialLinks() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="text-pink-squid text-xl px-2 font-medium">
        Find us on:{" "}
      </div>
      <button
        className="px-3"
        onClick={() => {
          window.open("https://www.instagram.com/bit.iiitp", "_blank");
        }}
      >
        <BsInstagram className="text-pink-squid" size={30} />
      </button>
      <button
        className="px-3`"
        onClick={() => {
          window.open("https://twitter.com/bit_iiitp", "_blank");
        }}
      >
        <BsTwitter className="text-pink-squid" size={30} />
      </button>
      <button
        className="px-3"
        onClick={() => {
          window.open("https://www.linkedin.com/company/bitlegion", "_blank");
        }}
      >
        <BsLinkedin className="text-pink-squid" size={30} />
      </button>
    </div>
  );
}

export default SocialLinks;
