import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionContent}>
        <h2 className={styles.title}>Hikayemiz</h2>
        <p className={styles.description}>
          2024 yılında kurulan JewelryShop, mücevher dünyasında kalite, zarafet ve yenilikçiliği bir araya getirerek, 
          her müşterimize özel ve unutulmaz bir deneyim sunmayı hedefliyor. El yapımı her parça, bir sanat eseri olarak 
          tasarlanıyor ve sizlere sunuluyor.
        </p>

        <div className={styles.valuesContainer}>
          <div className={styles.valueCard}>
            <h3>Kalite ve Zarafet</h3>
            <p>
              En kaliteli malzemeler ve özenli işçilik ile üretilen mücevherlerimiz, 
              uzun yıllar boyunca değerini koruyacak şekilde tasarlanmaktadır. Her parça, 
              modern tasarım anlayışı ile klasik zarafeti bir araya getiriyor.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>Yenilikçi Tasarım</h3>
            <p>
              Geleneksel el sanatlarını modern tasarım anlayışıyla buluşturarak, 
              her tarza uygun özel parçalar yaratıyoruz. Her koleksiyonumuz, 
              benzersiz hikayeler anlatıyor.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3>Kişiye Özel Deneyim</h3>
            <p>
              Her müşterimizin benzersiz tarzını ve ihtiyaçlarını anlayarak, 
              kişiye özel çözümler ve hizmetler sunuyoruz. Amacımız, 
              her müşterimize unutulmaz bir alışveriş deneyimi yaşatmak.
            </p>
          </div>
        </div>

        <div className={styles.visionContainer}>
          <h3>Vizyonumuz</h3>
          <p>
            Mücevher sektöründe güvenilir, yenilikçi ve öncü bir marka olarak, 
            müşterilerimize en kaliteli ürünleri ve hizmetleri sunmaya devam edeceğiz. 
            Her parçamız, bir sanat eseri olarak tasarlanıyor ve sizlere sunuluyor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission; 