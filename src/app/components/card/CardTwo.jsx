import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const CardTwo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/health-meal.jpg" alt="post-pic" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>TRAVEL</span>
            </div>
            <Link href="/post-two">
            <h1>Healthy Eating Made Easy: Quick and Nutritious Meal Ideas</h1>
            </Link>
            <p className={styles.desc}>Are you struggling to maintain a healthy diet amidst a busy schedule? Don't worry; we've got you covered with these quick and nutritious meal ideas that will keep you energized and satisfied throughout the day.</p>
            <Link href="/post-two" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default CardTwo