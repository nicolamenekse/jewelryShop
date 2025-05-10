import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/operations";
import { selectUserStats } from "../redux/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const stats = useSelector(selectUserStats);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Yeni Arkadaşlar Edin",
      description: "Ortak ilgi alanlarına sahip insanlarla tanışın"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Sosyal Çevrenizi Genişletin",
      description: "Yeni insanlarla tanışın ve hayatınıza renk katın"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      title: "Güvenli ve Samimi",
      description: "Güvenli bir ortamda yeni arkadaşlıklar kurun"
    }
  ];

  useEffect(() => {
    dispatch(fetchUsers());
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={styles.homePage}>
      <section className={styles.slidingHeader}>
        <div className={styles.sliderContainer}>
          <button className={`${styles.sliderArrow} ${styles.prev}`} onClick={handlePrevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className={`${styles.sliderArrow} ${styles.next}`} onClick={handleNextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`
              }}
            >
              <div className={styles.slideContent}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/users" className={styles.viewAllButton}>
                  Arkadaş Bul
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categoriesContainer}>
        <h2 className={styles.allProductsTitle}>Arkadaş Bulma Kategorileri</h2>
        <div className={styles.categorySection}>
          <div className={styles.categoryCard}>
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Erkek Arkadaşlar" 
              className={styles.categoryImage} 
            />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Erkek Arkadaşlar</h3>
              <Link to="/male" className={styles.categoryLink}>Keşfet</Link>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Kadın Arkadaşlar" 
              className={styles.categoryImage} 
            />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Kadın Arkadaşlar</h3>
              <Link to="/female" className={styles.categoryLink}>Keşfet</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <h2 className={styles.allProductsTitle}>Platform İstatistikleri</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <i className="fas fa-users"></i>
            <h3>Toplam Kullanıcı</h3>
            <p>{stats.totalUsers} aktif üye</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-user-friends"></i>
            <h3>Arkadaş Olmaya Hazır</h3>
            <p>{stats.availableUsers} kişi</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-heart"></i>
            <h3>Ortalama Arkadaş</h3>
            <p>Kişi başı {stats.averageFriendCount} arkadaş</p>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Yeni Arkadaşlıklar İçin Bize Katılın</h2>
          <p>Yeni üyeler ve etkinliklerden haberdar olun</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="E-posta adresiniz" />
            <button type="submit">Üye Ol</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
