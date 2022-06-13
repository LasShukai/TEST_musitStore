import Head from "next/head";
import Image from "next/image"

import Link from "next/link";
import styles from "../styles/Home.module.css"
import React from "react";
import cover from "../public/cover.jpg"
import alert from "../public/iconAlert.png"

import {motion} from "framer-motion"

const hiddenVarient = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            type:'spring',
            stiffness:100,
        }
    }
}



export const getStaticProps = async () => {
  const res = await fetch("https://api.dandy-music.com/?category=153");
  const data = await res.json();

  return {
    props: {
      items: data
    },
  };
};

const Home = ({ items }) => {
    const tax = 10;
    return (
      <>
        <Head>
          <title>musit Store | Top </title>
          <meta name="keywords" content="zine store" />
        </Head>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div className={styles.banner_container}>
            <a
              href="https://store.dandy-music.com/product/musit-wave-vol-1%e3%80%90musit-%e3%82%aa%e3%83%aa%e3%82%b8%e3%83%8a%e3%83%abzine%e3%80%91/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className={styles.banner_image}
                whileHover={{
                  scale: 1.03,
                }}
              >
                <motion.p
                  className={styles.banner_hideText}
                  variants={hiddenVarient}
                  initial="hidden"
                  whileHover="visible"
                >
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
                </motion.p>
                <Image
                  src={cover}
                  alt="bannerImage"
                  width={500}
                  height={700}
                  layout={"responsive"}
                />
              </motion.div>

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
              <div className={styles.grid_item}>
                <Image
                  src={alert}
                  alt="iconAlert"
                  layout={"responsive"}
                  width={90}
                  height={90}
                />
                <h4 className={styles.notification}>何点買っても送料￥250</h4>
              </div>

              {items.map((item) => (
                <div className={styles.grid_item} key={item.id}>
                  <Link href={item.permalink}>
                    <a target="_blank" rel="noreferrer">
                      <div className={styles.item_imgContainer}>
                        <motion.div
                          className={styles.item_hideText}
                          variants={hiddenVarient}
                          initial="hidden"
                          whileHover="visible"
                          dangerouslySetInnerHTML={{
                            __html: item.short_description,
                          }}
                        ></motion.div>
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
                        item.stock_status === "instock"
                          ? "在庫あり"
                          : "在庫切れ"
                      }`}</p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </>
    );
}


export default Home;