/* eslint-disable react/prop-types */
import styles from "../styles/modules/todoItem.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: { duration: 0.1 },
  },
  unchecked: { background: "var(--gray-2)", transition: { duration: 0.1 } },
};

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const CheckButton = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className={styles.svgBox}
      animate={checked ? "checked" : "unchecked"}
      variants={boxVariants}
      onClick={handleCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          variants={checkVariants}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
};

export default CheckButton;
