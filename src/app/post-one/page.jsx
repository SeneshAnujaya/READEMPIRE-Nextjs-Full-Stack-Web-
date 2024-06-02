import styles from './singlePage.module.css';
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
          <Image src="/happy-travel.jpg" alt="post-pic" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>10 Tips for Stress-Free Traveling</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/happy-travel.jpg" alt="" fill className={styles.avatar}/>
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
            <p>Are you tired of feeling frazzled and exhausted every time you travel? It's time to make your journeys more enjoyable and stress-free with these 10 essential tips. Plan Ahead: Research your destination, book accommodations and transportation in advance, and create a flexible itinerary to avoid last-minute hassles. Pack Light: Stick to the essentials and avoid overpacking. Choose versatile clothing and travel-sized toiletries to save space and weight. Organize Documents: Keep your passport, tickets, and other important documents in a secure and easily accessible place, such as a travel wallet or organizer.</p>
            <p> Stay Hydrated: Drink plenty of water before, during, and after your travels to stay hydrated and refreshed. Bring Snacks: Pack healthy snacks like nuts, fruits, and granola bars to keep hunger at bay and avoid overpriced airport or roadside food. Use Technology: Download useful travel apps for navigation, translation, currency conversion, and local recommendations to enhance your travel experience. Stay Flexible: Embrace unexpected changes or delays with a positive attitude and be prepared to adapt your plans accordingly. Take Breaks: Don't over-schedule your itinerary. </p>
            
           <p> Allow time for rest and relaxation to prevent burnout and enjoy the journey. Stay Safe: Be aware of your surroundings, follow local safety guidelines, and keep emergency contacts handy. Enjoy the Moment: Take photos, savor local cuisine, and immerse yourself in the culture to create lasting memories of your travels. Remember, traveling should be an adventure, not a source of stress. By following these tips, you can make your next trip a smooth and enjoyable experience.</p>
           
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