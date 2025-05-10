import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFilteredUsers } from '../redux/selectors';
import styles from './ProductDetail.module.css';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector(selectFilteredUsers);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return (
      <div className={styles.notFound}>
        <h2>Kullanıcı bulunamadı</h2>
        <button onClick={() => navigate('/users')}>Tüm Kullanıcılara Dön</button>
      </div>
    );
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Message sending logic will be implemented here
    console.log('Message sent:', message);
    setMessage('');
    setIsMessageOpen(false);
  };

  return (
    <div className={styles.userDetail}>
      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <img src={user.image} alt={user.name} />
            <div className={`${styles.status} ${user.isAvailable ? styles.available : styles.unavailable}`}>
              {user.isAvailable ? 'Çevrimiçi' : 'Çevrimdışı'}
            </div>
          </div>
          
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>{user.name}</h1>
            <p className={styles.age}>{user.age} yaşında</p>
            <div className={styles.location}>
              <i className="fas fa-map-marker-alt"></i>
              <span>{user.location}</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <i className="fas fa-user-friends"></i>
                <span>{user.friendCount} Arkadaş</span>
              </div>
              <div className={styles.stat}>
                <i className="fas fa-star"></i>
                <span>{user.rating || 0} Puan</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button 
              className={styles.messageButton}
              onClick={() => setIsMessageOpen(true)}
            >
              <i className="fas fa-envelope"></i>
              Mesaj Gönder
            </button>
            <button className={styles.friendButton}>
              <i className="fas fa-user-plus"></i>
              Arkadaş Ekle
            </button>
          </div>
        </div>

        <div className={styles.profileContent}>
          <div className={styles.section}>
            <h2>Hakkımda</h2>
            <p className={styles.bio}>{user.bio}</p>
          </div>

          <div className={styles.section}>
            <h2>İlgi Alanları</h2>
            <div className={styles.interests}>
              {user.interests.map((interest, index) => (
                <span key={index} className={styles.interestTag}>
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2>Ortak Arkadaşlar</h2>
            <div className={styles.commonFriends}>
              {user.commonFriends?.map((friend, index) => (
                <div key={index} className={styles.friendCard}>
                  <img src={friend.image} alt={friend.name} />
                  <span>{friend.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isMessageOpen && (
        <div className={styles.messageModal}>
          <div className={styles.messageContent}>
            <h3>Mesaj Gönder</h3>
            <form onSubmit={handleSendMessage}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                rows="4"
              />
              <div className={styles.messageActions}>
                <button type="submit" className={styles.sendButton}>
                  Gönder
                </button>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => setIsMessageOpen(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail; 