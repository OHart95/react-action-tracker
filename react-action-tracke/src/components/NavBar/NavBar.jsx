import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <h2>WorkFlow Hub</h2>

            <div className={styles.links}>
                <Link to="/" className={styles.link}>Actions</Link>
                <Link to="/create" className={styles.link}>Create</Link>
            </div>
        </nav>
    )
}

export default NavBar