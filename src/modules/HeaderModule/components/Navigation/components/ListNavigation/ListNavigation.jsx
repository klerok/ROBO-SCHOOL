import styles from './styles/index.module.css'

export const ListNavigation = ({ navList }) => {
  return (
    <ul className={styles.nav_list}>
      {navList.map((item) => (
        <li key={item.id} className={styles.list_item}>
          <a href={item.link} className={styles.list_link}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}