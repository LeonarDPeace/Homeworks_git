import React from 'react';
import styles from './ProfileCard.module.scss';

export default function ProfileCard({ name, avatar }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt={name} className={styles.avatar} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <button className={styles.button}>Seguir</button>
    </div>
  );
}
