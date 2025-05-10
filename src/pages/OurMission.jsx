import React from 'react';
import styles from './OurMission.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Hakkımızda</h1>
        <p className={styles.subtitle}>
          Arkadaşlık platformumuz, insanları ortak ilgi alanları etrafında bir araya getirerek
          anlamlı bağlantılar kurmalarını sağlar.
        </p>
      </div>

      <div className={styles.missionSection}>
        <div className={styles.missionContent}>
          <h2 className={styles.sectionTitle}>Misyonumuz</h2>
          <p className={styles.missionText}>
            FriendFinder olarak amacımız, insanların gerçek ve anlamlı arkadaşlıklar kurmasına
            yardımcı olmaktır. Modern hayatın getirdiği yoğunluk ve sosyal izolasyon karşısında,
            insanların birbirleriyle bağlantı kurmasını kolaylaştırıyoruz.
          </p>
        </div>
        <div className={styles.missionImage}>
          <img src="/images/mission.jpg" alt="Misyonumuz" />
        </div>
      </div>

      <div className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <i className="fas fa-heart"></i>
            <h3>Güven</h3>
            <p>Kullanıcılarımızın güvenliği ve gizliliği bizim için en önemli önceliktir.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="fas fa-users"></i>
            <h3>Topluluk</h3>
            <p>Çeşitliliği kucaklayan ve herkesi kabul eden bir topluluk oluşturuyoruz.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="fas fa-handshake"></i>
            <h3>Dürüstlük</h3>
            <p>Şeffaf ve dürüst bir platform olarak kullanıcılarımıza güven veriyoruz.</p>
          </div>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3>10K+</h3>
          <p>Aktif Kullanıcı</p>
        </div>
        <div className={styles.statCard}>
          <h3>5K+</h3>
          <p>Başarılı Eşleşme</p>
        </div>
        <div className={styles.statCard}>
          <h3>50+</h3>
          <p>Şehir</p>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Ekibimiz</h2>
        <p className={styles.teamText}>
          Arkadaşlık platformumuzun arkasında, kullanıcı deneyimini en üst düzeye çıkarmak için
          çalışan tutkulu bir ekip var. Her gün, platformumuzu daha iyi hale getirmek için
          çalışıyoruz.
        </p>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/images/team1.jpg" alt="Takım Üyesi" />
            <h3>Ahmet Yılmaz</h3>
            <p>Kurucu & CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team2.jpg" alt="Takım Üyesi" />
            <h3>Ayşe Demir</h3>
            <p>Ürün Müdürü</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/images/team3.jpg" alt="Takım Üyesi" />
            <h3>Mehmet Kaya</h3>
            <p>Teknoloji Direktörü</p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>İletişime Geçin</h2>
        <p className={styles.contactText}>
          Sorularınız veya önerileriniz için bizimle iletişime geçmekten çekinmeyin.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <p>info@friendfinder.com</p>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            <p>+90 (212) 123 45 67</p>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt"></i>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
