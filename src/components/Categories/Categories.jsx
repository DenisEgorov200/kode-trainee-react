import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setSort } from '@/store/filter/filterSlice.js';

import styles from './Categories.module.scss';

const categories = [
  { name: 'Все', type: 'all' },
  { name: 'Designers', type: 'design' },
  { name: 'Analysts', type: 'analytics' },
  { name: 'Managers', type: 'management' },
  { name: 'Android', type: 'android' },
];

export const Categories = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.filter.categoryId);

  const onClickCategory = (index, category) => {
    dispatch(setCategoryId(index));
    dispatch(setSort(category));
  };

  return (
    <nav className={styles.categories}>
      <ul className={styles.categoriesList}>
        {categories.map((category, index) => (
          <li
            key={category.type}
            className={
              activeIndex === index
                ? `${styles.categoriesItem} ${styles.active}`
                : styles.categoriesItem
            }
            onClick={() => onClickCategory(index, category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};