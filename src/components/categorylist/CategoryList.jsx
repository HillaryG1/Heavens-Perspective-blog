import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          faith
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          wisdom
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          prayer
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          stories
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          scripture
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/im1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Christ
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
