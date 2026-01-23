import logo from "../../assets/ROBO-SCHOOL.png";
import styles from "./styles/index.module.css";

export const Logo = () => {
  return (
    <a className={styles.logo}>
      <img src={logo} alt="Логотип компании" />
    </a>
  );
};
