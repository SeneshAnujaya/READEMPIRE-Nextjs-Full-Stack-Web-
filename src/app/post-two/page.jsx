import styles from './singlePage.module.css';
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
          <Image src="/health-meal.jpg" alt="post-pic" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Healthy Eating Made Easy: Quick and Nutritious Meal Ideas</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/health-meal.jpg" alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>john Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
       
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Are you struggling to maintain a healthy diet amidst a busy schedule? Don't worry; we've got you covered with these quick and nutritious meal ideas that will keep you energized and satisfied throughout the day. Start your day right with a hearty breakfast bowl packed with Greek yogurt, fresh fruits, nuts, and a drizzle of honey for a boost of protein and antioxidants. For a satisfying lunch on the go, whip up a colorful salad jar with layers of leafy greens, chopped vegetables, quinoa or brown rice, grilled chicken or tofu, and a homemade vinaigrette dressing.</p> 
             <p> Need a quick dinner option? Try a one-pan roasted vegetable and salmon dish seasoned with herbs and spices, served with a side of whole grain couscous or roasted sweet potatoes. Craving something sweet? Indulge in a guilt-free dessert like chia seed pudding topped with sliced bananas and dark chocolate shavings. With these simple and delicious meal ideas, eating healthy has never been easier or more enjoyable.</p>

            
           <p>This vibrant and nutritious meal will leave you feeling satisfied and nourished, without spending hours in the kitchen. Whether you're cooking for yourself or feeding your family, these quick and easy recipes are sure to become staples in your healthy eating routine.</p>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio impedit repellat quae placeat quidem fugiat sequi dolore eum explicabo cupiditate, adipisci neque, assumenda deleniti nulla consequatur nam? Eaque, mollitia.</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default SinglePage