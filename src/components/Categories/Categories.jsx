import React from 'react';

import styles from './Categories.module.scss';

const categories = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export const Categories = () => {
  return (
    <nav className={styles.categories}>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category} className={styles.categoriesItem}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};
