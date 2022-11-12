import "./Team.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function MemberBox(props) {
  const splitName = props.data.name.toUpperCase().split(" ");
  return (
    <motion.div
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      }}
      className={
        "person-box " + (props.val ? "person-box-native" : "person-box-white")
      }
    >
      <div className="icons">
        <a href={props.data.github} className="team-a" target="_blank">
          <FaGithub className="icon-style" />
        </a>
        <a href={props.data.instagram} className="team-a" target="_blank">
          <FaInstagram className="icon-style" />
        </a>
        <a href={props.data.linkedin} className="team-a" target="_blank">
          <FaLinkedin className="icon-style" />
        </a>
      </div>
      <div
        className={
          "person-name " +
          (props.val ? "person-name-black" : "person-name-native")
        }
      >
        {splitName.map((name, idx) => {
          console.log(name);
          return splitName.length - 1 != idx ? (
            <div>{name}&nbsp;</div>
          ) : (
            <div>{name}</div>
          );
        })}
      </div>
      <div
        className={
          "person-work " +
          (props.val ? "person-work-white" : "person-work-black")
        }
      >
        {props.data.work}
      </div>
    </motion.div>
  );
}

function Team({ teamMembers }) {
  return (
    <div className="team-section mx-auto">
      <div className="header flex justify-center">
        <span className="text-pink-squid font-Aquire">OUR</span>{" "}
        <span className="text-pink-squid font-Aquire">TEAM</span>
      </div>
      <div className="grid">
        {teamMembers.map((member, index) => {
          return <MemberBox key={index} val={index % 2} data={member} />; //val is for alternating colors
        })}
      </div>
    </div>
  );
}

export default Team;
