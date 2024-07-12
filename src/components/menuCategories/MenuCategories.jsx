import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Christ
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Faith
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Scripture
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Prayer
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Stories
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Wisdom
      </Link>
    </div>
  );
};

export default MenuCategories;
