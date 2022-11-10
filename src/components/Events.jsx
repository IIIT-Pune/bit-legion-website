import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Events() {
  const pastEvents = [
    { name: "InfInITy 2021", link: "https://www.codechef.com/INFI2021" },
    { name: "InfInITy 2020", link: "https://www.codechef.com/INFI2020" },
    { name: "InfInITy 2019", link: "https://www.codechef.com/INFI2019" },
  ];
  return (
    <div className="p-16 overflow-x-hidden">
      <div className="flex flex-col items-center">
        <div className="py-8 uppercase text-5xl text-pink-squid font-Aquire font-bold text-center">
          Events
        </div>
        {pastEvents.map((event) => (
          <div className="bg-pink-squid h-24 w-72 md:w-3/4 flex flex-col md:flex-row justify-between items-center rounded my-3">
            <div className="md:py-0 py-1 px-8 text-3xl font-Aquire font-extrabold">
              {event.name}
            </div>
            <div className="md:px-4 md:py-0 py-2">
              <button
                className="md:px-4 text-base text-white font-medium flex flex-row bg-[#04b8b8] rounded-lg"
                onClick={() => {
                  window.open(event.link, "_blank");
                }}
              >
                <div className="px-1 h-8 flex flex-row items-center">
                  Contest Link
                </div>
                <div className="px-1 h-8 flex flex-row items-center">
                  <FaExternalLinkAlt />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
