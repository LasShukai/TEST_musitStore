import Link from "next/link";
import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_link}>
        <Link href="https://musit.net/">
          <a>
            <h2 className={styles.logo}>musit</h2>
          </a>
        </Link>
        <ul className={styles.footer_sns}>
          <Link href="https://twitter.com/musit7">
            <a target="_blank">
              <li>twitter</li>
            </a>
          </Link>
          <Link href="https://www.facebook.com/musit7.music.x.it/">
            <a target="_blank">
              <li>FaceBook</li>
            </a>
          </Link>
          <Link href="https://www.instagram.com/musit7/">
            <a target="_blank">
              <li>instagram</li>
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCInJO-cQf8A1KdsUHalr0jg">
            <a target="_blank">
              <li>Youtube</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="footer_copyright">
        <p>© All rights reserved by lasfactory.</p>
      </div>
    </footer>
  );
};

export default Footer;
