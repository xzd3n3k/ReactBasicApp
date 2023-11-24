import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';


// Instead of using custom CSS I would suggest using some library like Tailwind css.
export default function Navbar(): ReactElement {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
