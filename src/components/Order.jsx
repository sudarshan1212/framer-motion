import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";
const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,

      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const childerenVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3500);
  }, [setShowModal]);

  const [ture, setture] = useState(true);
  setTimeout(() => {
    setture(false);
  }, 3000);
  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      exit="exit"
      animate="visible"
      className="container order"
    >
      <AnimatePresence>
        {ture && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childerenVarients}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childerenVarients}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
