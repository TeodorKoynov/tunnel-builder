import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={`${styles.navList}`}>
                    <li className={`${styles.navItem} ${styles.active}`}>
                        Home
                    </li>
                    <li className={styles.navItem}>
                        Profile
                    </li>
                    <li className={styles.navItem}>
                        Build
                    </li>
                </ul>
            </nav>
        </header>)
}