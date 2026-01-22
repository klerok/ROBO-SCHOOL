import logo from "../../assets/ROBO-SCHOOL.png";
import styles from "./styles/index.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Логотип компании" />
    </div>
  );
};
