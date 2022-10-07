import Link from "next/link";
import styles from "./style.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <Link href="/">
          <a>
            <h1 className={styles.nav_brand}>musit store</h1>
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
