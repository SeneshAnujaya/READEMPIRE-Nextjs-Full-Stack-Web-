import React from 'react';
import Link from 'next/link';
import styles from './menuPosts.module.css';
import Image from 'next/image';

const MenuPosts = ({withImages}) => {
  return (
    <div className={styles.items}>

    <Link href="/" className={styles.item}>
    {withImages && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>
            Travel
        </span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>john Doe</span>
            <span className={styles.date}>10.03.2023</span>
        </div>
    </div>
    </Link>

    <Link href="/" className={styles.item}>
    {withImages && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>
        culture
        </span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>john Doe</span>
            <span className={styles.date}>10.03.2023</span>
        </div>
    </div>
    </Link>
 

    <Link href="/" className={styles.item}>
    {withImages && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>
            food
        </span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>john Doe</span>
            <span className={styles.date}>10.03.2023</span>
        </div>
    </div>
    </Link>
 

    <Link href="/" className={styles.item}>
    {withImages && (<div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>)}
    <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>
            fashion
        </span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
            <span className={styles.username}>john Doe</span>
            <span className={styles.date}>10.03.2023</span>
        </div>
    </div>
    </Link>
 
 

    
</div>
  )
}

export default MenuPosts