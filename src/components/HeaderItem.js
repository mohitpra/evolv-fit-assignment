import React from 'react';

const styles = {
  image: 'm-2 items-center',
  container: 'flex items-center p-2 w-18 h-13 hover:cursor-pointer',
  imageContent: 'w-7 h-6',
  text: 'w-22 h-6 text-white',
};

function HeaderItem({ image, name }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <i class="fas fa-running"></i>
        <img src={image} className={styles.imageContent} />
      </div>
      <div className={styles.text}>{name}</div>
    </div>
  );
}

export default HeaderItem;
