import { Logo } from "../../../../components/Logo/Logo";
import { Phone } from "../../../../components/Phone/Phone.jsx";
import styles from "./styles/index.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo/>
      <div className={styles.about}>
        <span>О школе</span>
        <span>Тренеры</span>
        <span>Стоимость</span>
      </div>
      <Phone/>
    </nav>
  );
};
