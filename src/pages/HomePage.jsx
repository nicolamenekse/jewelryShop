import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/selectors";
import { fetchProducts } from "../redux/operations";
import { Link, useNavigate } from "react-router-dom";
import OurMission from "../components/OurMission";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Etnik Mücevherlerin Büyülü Dünyası",
      description: "El yapımı, benzersiz tasarımlarla kültürünüzü yansıtın"
    },
    {
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Özel Tasarım Koleksiyonu",
      description: "Her parça bir sanat eseri"
    },
    {
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Geleneksel Motifler",
      description: "Kültürel mirasımızı modern tasarımlarla buluşturuyoruz"
    }
  ];

  useEffect(() => {
    dispatch(fetchProducts());
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const featuredImages = [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  ];

  // İlk 3 ürünü alıp featured görsellerle eşleştiriyoruz
  const featuredProducts = products.slice(0, 3).map((product, index) => ({
    ...product,
    featuredImage: featuredImages[index]
  }));

  // Slider için ürünleri 3 kez tekrarlıyoruz
  const repeatedProducts = [...featuredProducts, ...featuredProducts, ...featuredProducts];

  return (
    <div className={styles.homePage}>
      {/* Sliding Header Section */}
      <section className={styles.slidingHeader}>
        <div className={styles.sliderContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
              }}
            >
              <div className={styles.slideContent}>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/allProducts" className={styles.viewAllButton}>
                  Koleksiyonu Keşfet
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.sliderDots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.categoriesContainer}>
        <h2 className={styles.allProductsTitle}>Öne Çıkan Kategoriler</h2>
        <div className={styles.categorySection}>
          <div className={styles.categoryCard}>
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Kolyeler" 
              className={styles.categoryImage} 
            />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Kolyeler</h3>
              <Link to="/necklace" className={styles.categoryLink}>Keşfet</Link>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <img 
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Bileklikler" 
              className={styles.categoryImage} 
            />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryTitle}>Bileklikler</h3>
              <Link to="/bracelet" className={styles.categoryLink}>Keşfet</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.mainContent}>
        <h2 className={styles.allProductsTitle}>Neden Bizi Tercih Etmelisiniz?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <i className="fas fa-gem"></i>
            <h3 className={styles.categoryTitle}>El Yapımı</h3>
            <p>Her parça özenle el işçiliği ile üretilir</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-award"></i>
            <h3 className={styles.categoryTitle}>Kalite</h3>
            <p>En kaliteli malzemeler kullanılır</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-shipping-fast"></i>
            <h3 className={styles.categoryTitle}>Hızlı Teslimat</h3>
            <p>Güvenli ve hızlı kargo</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.allProductsTitle}>Yeni Koleksiyonlardan Haberdar Olun</h2>
          <p className={styles.allProductsSubtitle}>En yeni ürünler ve özel fırsatlardan ilk siz haberdar olun</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="E-posta adresiniz" />
            <button type="submit" className={styles.viewAllButton}>Abone Ol</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
