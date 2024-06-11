import React, { useState } from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: 10,
    },
  },
};
const containerVarints = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  // visible: { x: [20, -20, 20, -20, 20, -20, 0], transition: { delay: 0.2 } },
  // scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1],

  return (
    <motion.div
      variants={containerVarints}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <motion.h2
        animate={{
          fontSize: "50px",
        }}
        transition={{ delay: 0.2, duration: 1.5 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
