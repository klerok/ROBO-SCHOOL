import styles from './styles/index.module.css'

export const Button = ({text}) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}