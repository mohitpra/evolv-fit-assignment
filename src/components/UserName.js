import React from 'react';
import tom from '../assets/images/tom.jpg';
const styles = {
  details:
    'flex items-center justify-center lg:justify-start h-auto w-auto p-2 items-center',
  imageContainer: 'mr-5',
  email: 'text-gray-400',
  image: 'w-10 h-10 rounded-2xl',
  nameEmail: 'text-white',
};

function UserName({ name, id }) {
  return (
    <div className={styles.details}>
      <div className={styles.imageContainer}>
        <img src={tom} className={styles.image} />
      </div>

      <div className={styles.nameEmail}>
        <h3>{name}</h3>
        <h4 className={styles.email}>{id}</h4>
      </div>
    </div>
  );
}

export default UserName;
