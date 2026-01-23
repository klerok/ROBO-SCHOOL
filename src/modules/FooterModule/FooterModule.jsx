import { Logo } from "../../components/Logo/Logo";
import { Phone } from "../../components/Phone/Phone";
import styles from "./styles/index.module.css";

export const FooterModule = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_info}>
          <Logo />
          <Phone />
        </div>
        <p className={styles.footer_desc}>© ROBO.SCHOOL</p>
      </div>
    </footer>
  );
};
