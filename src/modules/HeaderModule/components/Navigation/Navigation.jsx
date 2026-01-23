import { Logo } from "../../../../components/Logo/Logo";
import { Phone } from "../../../../components/Phone/Phone.jsx";
import { ListNavigation } from "./components/ListNavigation/ListNavigation.jsx";
import { navList } from "./constants/navList.js";
import styles from "./styles/index.module.css";

export const Navigation = () => {
  return (
    <>
      <Logo />
      <nav className={styles.navigation}>
        <ListNavigation navList={navList}/>
      </nav>
      <Phone />
    </>
  );

};
