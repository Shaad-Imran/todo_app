/* eslint-disable react/prop-types */
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

const Button = ({ children, variant = "primary", type, ...rest }) => {
  // Generate the CSS class for the button variant
  const buttonTypeClass = styles[`button--${variant}`];

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([styles.button, buttonTypeClass])}
      {...rest}
    >
      {children}
    </button>
  );
};

const SelectButton = ({ children, id, ...rest }) => {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
};

export { Button, SelectButton };
