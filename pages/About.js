import Head from "next/head";
import Image from "next/image";
import musitstoreOG from "../public/musitstoreOG.jpg";
import store from "../public/store.jpg";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <div>
      <Head>
        <title>musit Store | About </title>
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          name="description"
        />
        <meta content="musit store" property="og:title" />
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          property="og:description"
        />
        <meta content={musitstoreOG} property="og:image" />
        <meta content="musit store" property="twitter:title" />
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          property="twitter:description"
        />
        <meta content={musitstoreOG} property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          name="keywords"
          content="zine, リトルプレス, ZINE　ショップ, ZINE　オンラインショップ, ZINE　本屋, アイドル, zine store"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div className={styles.content}>
        <div className={styles.store}>
          <Image
            src={store}
            alt="about-musit-store"
            width={16}
            height={9}
            layout={"responsive"}
          />
        </div>
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
              map &#x2197;
            </a>
          </div>
          <div className={styles.contact_info_item}>
            <h2>E-mail</h2>
            <p className="">info@musit.net</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
