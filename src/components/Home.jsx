import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import infinityText from "../assets/infinity-text.svg";
import Registration from "./Registration";
import Team from "./Team";
function Home() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="bg-pink-squid px-5 py-1 rounded-lg font-bold text-center">
          LIVE NOW
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div className="bg-pink-squid px-5 py-1 rounded-lg font-bold flex flex-row text-[#4D4D4D]">
          <div className="flex flex-col items-center ">
            <div
              key={days}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            >
              {days}
            </div>
            <div className="text-black text-xs font-mono tracking-tighter uppercase">
              DayS
            </div>
          </div>
          :
          <div className="flex flex-col items-center">
            <motion.div
              key={hours}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            >
              {hours}
            </motion.div>
            <div className="text-black text-xs font-mono tracking-tighter uppercase">
              HOURS
            </div>
          </div>{" "}
          :
          <div className="flex flex-col items-center">
            <motion.div
              key={minutes}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            >
              {minutes}
            </motion.div>{" "}
            <div className="text-black text-xs font-mono tracking-tighter uppercase">
              MINS
            </div>
          </div>
          :
          <div className="flex flex-col items-center">
            <motion.div
              key={seconds}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
              }}
            >
              {seconds}
            </motion.div>{" "}
            <div className="text-black text-xs font-mono tracking-tighter uppercase">
              SECS
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="text-white w-full  min-h-[90vh]  flex flex-col p-5">
      <div className="flex items-center justify-center w-full mt-16 md:mt-0">
        <img
          src={infinityText}
          className="max-w-xs md:max-w-2xl min-h-[20rem] md:max-h-96"
        />
      </div>
      <div className="font-montserrat font-bold tracking-widest antialiased w-full text-center text-xl mt-20 md:mt-4">
        HOSTED ON{" "}
        <span className="text-pink-squid font-extrabold">CODECHEF</span>
      </div>
      <div className="font-montserrat font-medium tracking-wide antialiased w-full text-xl mt-5 md:mt-2 flex flex-row  items-center justify-center">
        <CalendarIcon className="text-pink-squid h-6 w-6 mr-1" />
        NOV 16' 2022 <ClockIcon className="text-pink-squid h-6 w-6 ml-1 mr-1" />
        20:00 -23:00
      </div>
      <div className="font-montserrat  tracking-wide antialiased w-full text-xl mt-10 md:mt-3 flex flex-row  items-center justify-center ">
        <Countdown
          date={new Date(2022, 10, 16, 20, 0, 0).getTime()}
          renderer={renderer}
        />
      </div>
      <h1
        className="font-Aquire text-pink-squid py-12"
        style={{ fontSize: "3rem", textAlign: "center" }}
      >
        ABOUT THE CONTEST
      </h1>
      <div
        className="text-white font-montserrat text-[18px]"
        style={{ width: "90%", margin: "0 auto" }}
      >
        InfInITy is IIIT Pune's annual flagship coding contest hosted every year
        on Codechef. A 3 hour coding contest that's guaranteed to get your head
        itching and your heart wanting more. InfInITy started in 2017 and was
        limited only to IIIT Pune. The contest follows ACM style scoring and
        consists of problems designed for particpants ranging from beginners to
        experts. Anyone having a knack for coding is encouraged to participate.
      </div>
      <Registration />
      <Team />
    </div>
  );
}

export default Home;
