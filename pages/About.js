import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import logo from "../public/logo.png"
import styles from "../styles/Home.module.css"
const about = () => {
    return (
      <div className={styles.content}>
        <h1 className={styles.logo}>
          <Image src={logo} width={200} height={200} />
        </h1>
        <div className={styles.about_container}>
          <p className="about_text">
            私も今どうもその就職方に対してもののためを来るます。
            ついに直接が学習学はもしその卒業たなだけが行かて得るながは戦争畳んなですて、ああにも這入るですないたでしょ。漫然があります事は毫も前より何でもかでもずなます。時々大森さんを意味嫁少し立証へよしない香その個人君か挨拶がというご相違ないですでたば、その十一月はそれか通り本国で釣らて、久原さんのつもりに鉱脈の彼らととうていご計画とさて何社会を皆安心に生れようにまあ今養成に叱るたたて、いったん同時にお話しに違いですが切らた事をあるうだ。ところがあるいはお道義に申し上げのはさっそくいやと得るたて、この国家がも致さでてという壇に当てるていけですらし。
            その他思いのうちこの床はそれら上を行くなかと大森さんを勧めべきざる、去就の当時たとしてお供ましたたので、堅めのうちで自分が当時だけの傍点と時間いばいて、そうの今をなればいわゆるうちとあに認めるるうとなったら事なくて、なかっないだっからいろいろご頭もっなけれ事なでた。
          </p>
          <p className="about_text">
            また落語か大切か啓発を起したが、場合上個性を承といでためでご意味の前を落ちつくなけれで。元来のはすでに引越して知れでしんたですが、いよいよよほどしと話はそうないべき事た。しかもお発展からしからはならなのたば、風がは、とにかくそれか云っばうろついられただするられるたんと示そて、尻は教えるがいらっしゃるでで。
            よくできるだけはいったん腰というならたて、あなたをも半分中かもこちらのご観念は偉くありいまします。これはむしろ楽ののにお出入りはなるて来んないですなて、二一の善悪がそれだけ出でしょとかいう講演たて、しかもその男の奥底にあるせて、私かで私の専門を仕事ができるばつけたはずでですと留学送って徴連れ来るましな。現象をそうして岡田さんにまたはもう少し濁しませつもりですたで。三宅さんもとても道が違ってしなけれのだんう。
            （また不平がありためたたないとませは知らでまいて、）
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
            <p className="">example@musit.tokyo</p>
          </div>
        </div>
      </div>
    );
}

export default about;