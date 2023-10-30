import styles from "../styles/modules/title.module.scss";

/* eslint-disable react/prop-types */
const PageTitle = ({ children, ...rest }) => {
  return (
    <div>
      <h1 className={styles.title} {...rest}>
        {children}
      </h1>
    </div>
  );
};
export default PageTitle;
