import Comments from '../components/comments/Comments';
import Menu from '../components/menu/Menu';
import styles from './singlePage.module.css';
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="post-pic" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
          </div>
          <div className={styles.comment}>
          <Comments />
          </div>
     
        </div>
        <Menu />
      </div>
    </div> 
  )
}

export default SinglePage