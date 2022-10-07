import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import styles from "../styles/Home.module.scss";
import React from "react";

import cover from "../public/cover.jpg";
import alert from "../public/iconAlert.png";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.dandy-music.com/?category=181&per_page=20"
  );
  const data = await res.json();

  return {
    props: {
      items: data,
    },
    revalidate: 60,
  };
};

const Home = ({ items }) => {
  const tax = 10;
  return (
    <>
      <Head>
        <title>musit Store | Top </title>
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          name="description"
        />
        <meta content="musit store" property="og:title" />
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          property="og:description"
        />
        <meta
          content="https://store.musit.net/musitstoreOG.jpg"
          property="og:image"
        />
        <meta content="musit store" property="twitter:title" />
        <meta
          content="音楽メディア「musit」が展開する小さなセレクト・ショップ。ZINEやリトルプレスの書籍を中心に、運営陣が良いと感じたものを取り揃えています。"
          property="twitter:description"
        />
        <meta
          content="https://store.musit.net/musitstoreOG.jpg"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          name="keywords"
          content="zine, リトルプレス, ZINE　ショップ, ZINE　オンラインショップ, ZINE　本屋, アイドル, zine store"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <div className={styles.content}>
        <div className={styles.banner_container}>
          <a
            href="https://store.dandy-music.com/product/musit-wave-vol-1%e3%80%90musit-%e3%82%aa%e3%83%aa%e3%82%b8%e3%83%8a%e3%83%abzine%e3%80%91/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.banner_img_container}>
              <div className={styles.hideText_container}>
                <p className={styles.hideText}>
                  musit
                  オリジナルZINE『(W)AVE』Vol.1　※よみ：ウェイヴ▼収録内容　※（）内はライター名巻頭特集：スピッツ30周年
                  <br />
                  ・『スピッツ』&amp;『見っけ』クロスレビュー
                  <br />
                  ・全アルバムレビュー
                  <br />
                  ※寄稿者：翳目／Goseki／鮭いくら／高橋まりな／對馬拓／仲川ドイツ／中澤星児
                  <br />
                  ※ジャケットイラスト：鮭いくらエッセイ
                  <br />
                  ・さらりとした風（みくりや佐代子）
                  <br />
                  ・音楽への不器用な愛を、呪いの歌姫に託して。（すなくじら）コラム
                  <br />
                  ・歪み系エフェクターを購入する際に知っておくべきこと（Ot3）
                  <br />
                  ・Good Music酒場探訪記 Vol.1 レレレノレコード（仲川ドイツ）
                  <br />
                  ・ピンク・フロイドの叙情性（鈴木レイヤ）小説
                  <br />
                  ・私、宇宙（安藤エヌ）
                  <br />
                  ・destruction（中澤星児）
                  <br />
                  ・CLOVER（高橋まりな）
                  <br />
                  ・雯（鈴木レイヤ）▼仕様・サイズ：A5
                  <br />
                  ・ページ数：50　※表紙含む
                  <br />
                  ・色：オールカラー　※小説部分のみモノクロ※送料はZINEのみ購入の場合、一律¥300となります。
                </p>
              </div>
              <div className={styles.banner_image}>
                <Image
                  src={cover}
                  alt="bannerImage"
                  width={280}
                  height={392}
                  layout={"responsive"}
                />
              </div>
            </div>

            <div className={styles.banner_info}>
              <p className={styles.item_tite}>
                (W)AVE Vol.1【musit オリジナルZINE】
              </p>
              <p className={styles.item_price}>¥ 1,000 （税込）</p>
            </div>
          </a>
        </div>

        <div className={styles.cards_container}>
          <h2 className={styles.title}>NEW ARRIVAL</h2>
          <div className={styles.grid_container}>
            <div className={`${styles.grid_item} ${styles.item_notification}`}>
              <Image
                src={alert}
                alt="iconAlert"
                layout={"fixed"}
                width={70}
                height={70}
              />
              <h4 className={styles.notification}>
                何点買っても
                <br />
                送料￥300
              </h4>
            </div>

            {items.map((item) => (
              <div className={styles.grid_item} key={item.id}>
                <Link href={item.permalink}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className={styles.item_link}
                  >
                    <div className={styles.item_imgContainer}>
                      <div
                        className={styles.hideText_container}
                        dangerouslySetInnerHTML={{
                          __html: item.short_description,
                        }}
                      ></div>
                      <Image
                        className={styles.item_image}
                        src={item.images[0].src}
                        alt="itemPic"
                        width={200}
                        height={320}
                        layout={"responsive"}
                        objectFit="contain"
                      />
                    </div>
                    <p className={styles.item_title}>{item.name}</p>
                    <p className={styles.item_price}>
                      <span> ￥</span>

                      {Math.round(item.price * (1 + tax / 100))}
                    </p>
                    <p className={styles.item_price}>{`${
                      item.stock_status === "instock" ? "在庫あり" : "在庫切れ"
                    }`}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
