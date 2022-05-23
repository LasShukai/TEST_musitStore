
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <nav>
      <div className={styles.nav_container}>
        <Link href="/">
          <a>
            <h1 className={styles.brand}>musit Store</h1>
          </a>
        </Link>
        <Link href="/About">
          <a>
            <p>About</p>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;