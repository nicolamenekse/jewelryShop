import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionContent}>
        <h2 className={styles.title}>Misyonumuz</h2>
        <p className={styles.description}>
          Mücevher dünyasında kalite, zarafet ve müşteri memnuniyetini bir araya getirerek, 
          her müşterimize özel ve unutulmaz bir deneyim sunmayı hedefliyoruz.
        </p>

        <div className={styles.valuesContainer}>
          <div className={styles.valueCard}>
            <h3>Kalite</h3>
            <p>
              En kaliteli malzemeler ve işçilik ile üretilen mücevherlerimiz, 
              uzun yıllar boyunca değerini koruyacak şekilde tasarlanmaktadır.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>Yenilikçilik</h3>
            <p>
              Modern tasarımlar ve klasik zarafeti bir araya getirerek, 
              her tarza uygun özel parçalar yaratıyoruz.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>Müşteri Odaklılık</h3>
            <p>
              Her müşterimizin ihtiyaçlarını anlayarak, 
              kişiye özel çözümler ve hizmetler sunuyoruz.
            </p>
          </div>
        </div>

        <div className={styles.visionContainer}>
          <h3>Vizyonumuz</h3>
          <p>
            Mücevher sektöründe güvenilir, yenilikçi ve öncü bir marka olarak, 
            müşterilerimize en kaliteli ürünleri ve hizmetleri sunmaya devam edeceğiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission; 