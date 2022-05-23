import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import styles from "../styles/Home.module.css"
import React from "react";


export const getStaticProps = async () => {
  const res = await fetch("https://api.dandy-music.com/?category=153");
  const data = await res.json();

  return {
    props: { items: data },
  };
};

const Home = ({ items }) => {
    const tax = 10;
    return (
      <div className={styles.content}>
        <div className={styles.banner_container}>
          <div className={styles.banner_image}>
            <Image src="/../public/cover.jpg" width={500} height={700} />
          </div>
          <div className={styles.banner_info}>
            <p className={styles.item_tite}>
              (W)AVE Vol.1【musit オリジナルZINE】
            </p>
            <p className={styles.item_price}>¥ 1,000 （税込）</p>
          </div>
        </div>

        <div className={styles.cards_container}>
          <h2 className={styles.title}>NEW ARRIVAL</h2>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <Image
              src="/../public/iconAlert.png"
              alt="iconAlert"
              width={10}
              height={50}
              layout={"responsive"}
              />
              <h4 className={styles.notification}>何点買っても送料￥250</h4>
            </div>

            {items.map((item) => (
              <div className={styles.grid_item} key={item.id}>
                <Link href={item.permalink}>
                  <a target="_blank">
                    <Image
                      className={styles.item_image}
                      src={item.images[0].src}
                      alt="itemPic"
                      width={200}
                      height={180}
                      layout={"responsive"}
                    />
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
    );
}


export default Home;