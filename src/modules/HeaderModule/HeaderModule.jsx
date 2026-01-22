import { Navigation } from "./components/Navigation/Navigation.jsx";
import styles from "./styles/index.module.css";

export const HeaderModule = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Navigation/>
            </header>
        </div>
    )
}