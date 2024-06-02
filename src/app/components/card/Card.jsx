import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/happy-travel.jpg" alt="post-pic" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>TRAVEL</span>
            </div>
            <Link href="/post-one">
            <h1>10 Tips for Stress-Free Traveling</h1>
            </Link>
            <p className={styles.desc}>Are you tired of feeling frazzled and exhausted every time you travel? It's time to make your journeys more enjoyable and stress-free with these 10 essential tips.</p>
            <Link href="/post-one" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card