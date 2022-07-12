import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://api.dandy-music.com/?category=181");
    const data = await res.json();

    return{
        props:{
            items:data,
        }
    }
}

const Card = ({items}) => {
    const tax = 10;
    return (
        <div className={StyleSheet.grid_item} key={items.id}>
        <Link href={item.permalink}>
            <a
                target="_blank"
                rel="noreferrer"
                className={styles.item_link}
                ></a>
        </Link>
        </div>
     );
}

export default Card;