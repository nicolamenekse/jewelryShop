import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers } from '../redux/selectors';
import { fetchUsers } from '../redux/operations';
import { useNavigate } from 'react-router-dom';
import styles from './NecklacePage.module.css';

const MalePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const maleUsers = users.filter(user => user.gender === 'male');

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const renderUserCard = (user) => (
    <div 
      key={user.id} 
      className={styles.productCard}
      onClick={() => handleUserClick(user.id)}
    >
      <div className={styles.imageContainer}>
        <img 
          src={user.image} 
          alt={user.name} 
          className={styles.productImage}
        />
        <div className={styles.overlay}>
          <button className={styles.viewButton}>Profili Gör</button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{user.name}</h3>
        <p className={styles.productPrice}>{user.age} yaşında</p>
        <p className={styles.productDescription}>{user.bio}</p>
        <div className={styles.userStats}>
          <span className={styles.friendCount}>
            <i className="fas fa-user-friends"></i> {user.friendCount} arkadaş
          </span>
          <span className={`${styles.availability} ${user.isAvailable ? styles.available : styles.unavailable}`}>
            {user.isAvailable ? 'Arkadaş olmaya hazır' : 'Şu an müsait değil'}
          </span>
        </div>
        <div className={styles.interests}>
          {user.interests.map((interest, index) => (
            <span key={index} className={styles.interestTag}>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.necklacePage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Erkek Arkadaşlar</h1>
        <p className={styles.subtitle}>
          Ortak ilgi alanlarına sahip erkek arkadaşlar edinmek için ideal platform.
        </p>
      </div>

      <div className={styles.productsGrid}>
        {maleUsers.length > 0 ? (
          maleUsers.map(renderUserCard)
        ) : (
          <div className={styles.noProducts}>
            <p>Henüz erkek kullanıcı bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MalePage;
