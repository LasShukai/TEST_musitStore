import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import store from "../public/store.jpg"
import logo from "../public/logo.png"
import styles from "../styles/Home.module.css"
const about = () => {
    return (
      <div className={styles.content}>
        <h1 className={styles.store}>
          <Image src={store} width={1100} height={600} layout={"responsive"} />
        </h1>
        <div className={styles.about_container}>
          <p className="about_text">
            当ストアは、ZINEやリトルプレスの書籍を中心に、音楽メディア「musit」の運営陣が良いと感じたものをセレクトし販売するオンライン・ショップです。
            <br />
            musitは音楽系のWebマガジンですが、取り扱う商品は音楽に関連するものはもちろん、音楽とは直接的な繋がりのない商品もございます。
            <br />
          </p>
          <p className="about_text">
            音楽との親和性や、どこか近しい部分を感じ取れる、言わばセレクト・ショップのようなラインナップをお楽しみいただきたいと考えています。
            musitが掲げる“音楽にまつわる様々なコンテンツを通して、あなたに「新しい発見」を届ける”というコンセプトを、これまでとは異なる形で提示できれば幸いです。
          </p>
        </div>
        <div className={styles.contact_info}>
          <div className={styles.contact_info_item}>
            <h2>Location</h2>
            <p>
              〒150-0001 東京都渋谷区神宮前３丁目２７−１５ ＨＩサンロード原宿
              102
            </p>
            <a
              href="https://goo.gl/maps/dwNWmkxj9iSQHoLYA"
              target="_blank"
              rel="noreferrer"
              className={styles.contact_info_map}
            >
              map_
            </a>
          </div>
          <div className={styles.contact_info_item}>
            <h2>E-mail</h2>
            <p className="">info@musit.net</p>
          </div>
        </div>
      </div>
    );
}

export default about;