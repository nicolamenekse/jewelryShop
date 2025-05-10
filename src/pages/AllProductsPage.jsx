import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers, selectGenderFilter, selectAvailabilityFilter, selectAgeRange } from '../redux/selectors';
import { fetchUsers, setGenderFilter, setAvailabilityFilter, setAgeRange } from '../redux/operations';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './AllProductsPage.module.css';

export default function AllUsersPage() {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGender, setSelectedGender] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [ageRange, setAgeRange] = useState({ min: 18, max: 100 });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const gender = params.get('gender');
    if (gender) {
      setSelectedGender(gender);
    }
  }, [location]);

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    dispatch(setGenderFilter(gender));
    
    const params = new URLSearchParams(location.search);
    if (gender) {
      params.set('gender', gender);
    } else {
      params.delete('gender');
    }
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleAvailabilityChange = (isAvailable) => {
    dispatch(setAvailabilityFilter(isAvailable));
  };

  const handleAgeRangeChange = (min, max) => {
    setAgeRange({ min, max });
    dispatch(setAgeRange({ minAge: min, maxAge: max }));
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  const sortedUsers = [...users].sort((a, b) => {
    switch (sortBy) {
      case 'age-asc':
        return a.age - b.age;
      case 'age-desc':
        return b.age - a.age;
      case 'friends-asc':
        return a.friendCount - b.friendCount;
      case 'friends-desc':
        return b.friendCount - a.friendCount;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className={css.allProductsPage}>
      <div className={css.header}>
        <h1 className={css.title}>Arkadaş Bul</h1>
        <p className={css.subtitle}>
          Ortak ilgi alanlarına sahip yeni arkadaşlar edinmek için ideal platform.
        </p>
      </div>

      <div className={css.categories}>
        <button
          className={`${css.categoryButton} ${selectedGender === '' ? css.active : ''}`}
          onClick={() => handleGenderChange('')}
        >
          Tümü
        </button>
        <button
          className={`${css.categoryButton} ${selectedGender === 'male' ? css.active : ''}`}
          onClick={() => handleGenderChange('male')}
        >
          Erkekler
        </button>
        <button
          className={`${css.categoryButton} ${selectedGender === 'female' ? css.active : ''}`}
          onClick={() => handleGenderChange('female')}
        >
          Kadınlar
        </button>
      </div>

      <div className={css.filters}>
        <div className={css.filterGroup}>
          <label htmlFor="sort">Sırala:</label>
          <select 
            id="sort" 
            className={css.select}
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="newest">En Yeniler</option>
            <option value="age-asc">Yaş (Küçükten Büyüğe)</option>
            <option value="age-desc">Yaş (Büyükten Küçüğe)</option>
            <option value="friends-asc">Arkadaş Sayısı (Azdan Çoğa)</option>
            <option value="friends-desc">Arkadaş Sayısı (Çoktan Aza)</option>
          </select>
        </div>

        <div className={css.filterGroup}>
          <label>Arkadaş Olmaya Hazır:</label>
          <div className={css.availabilityButtons}>
            <button
              className={`${css.availabilityButton} ${css.active}`}
              onClick={() => handleAvailabilityChange(true)}
            >
              Evet
            </button>
            <button
              className={css.availabilityButton}
              onClick={() => handleAvailabilityChange(false)}
            >
              Hayır
            </button>
          </div>
        </div>

        <div className={css.filterGroup}>
          <label>Yaş Aralığı:</label>
          <div className={css.ageRange}>
            <input
              type="number"
              min="18"
              max="100"
              value={ageRange.min}
              onChange={(e) => handleAgeRangeChange(Number(e.target.value), ageRange.max)}
              className={css.ageInput}
            />
            <span>-</span>
            <input
              type="number"
              min="18"
              max="100"
              value={ageRange.max}
              onChange={(e) => handleAgeRangeChange(ageRange.min, Number(e.target.value))}
              className={css.ageInput}
            />
          </div>
        </div>
      </div>

      <div className={css.productsGrid}>
        {sortedUsers.map((user) => (
          <div 
            key={user.id} 
            className={css.productCard}
            onClick={() => handleUserClick(user.id)}
          >
            <div className={css.imageContainer}>
              <img 
                src={user.image} 
                alt={user.name} 
                className={css.productImage}
              />
              <div className={css.overlay}>
                <button className={css.viewButton}>Profili Gör</button>
              </div>
            </div>
            <div className={css.productInfo}>
              <h3 className={css.productTitle}>{user.name}</h3>
              <p className={css.productPrice}>{user.age} yaşında</p>
              <p className={css.productDescription}>{user.bio}</p>
              <div className={css.userStats}>
                <span className={css.friendCount}>
                  <i className="fas fa-user-friends"></i> {user.friendCount} arkadaş
                </span>
                <span className={`${css.availability} ${user.isAvailable ? css.available : css.unavailable}`}>
                  {user.isAvailable ? 'Arkadaş olmaya hazır' : 'Şu an müsait değil'}
                </span>
              </div>
              <div className={css.interests}>
                {user.interests.map((interest, index) => (
                  <span key={index} className={css.interestTag}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedUsers.length === 0 && (
        <div className={css.noProducts}>
          <p>Bu kriterlere uygun kullanıcı bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
