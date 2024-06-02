import Card from '../card/Card';
import CardTwo from '../card/CardTwo';
import styles from './cardList.module.css';


const CardList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
            <Card />
            <CardTwo />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default CardList