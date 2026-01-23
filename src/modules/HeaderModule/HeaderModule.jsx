import { Navigation } from "./components/Navigation/Navigation.jsx";
import styles from "./styles/index.module.css";


export const HeaderModule = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Navigation />
            </div>
        </header>
    )
}