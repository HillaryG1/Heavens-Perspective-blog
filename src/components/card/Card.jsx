import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/im1.jpg" alt="" fill className="styles.image" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>07.07.2024</span>
          <span className={styles.category}>FAITH</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          quam nisi magni ea laborum inventore voluptatum laudantium repellat
          ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde
          sit culpa debitis.
        </p>
        {/* Consider if you need another "Learn More" link here */}
      </div>
    </div>
  );
};

export default Card;
