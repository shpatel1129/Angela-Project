import React from 'react';
import styles from './LuxuryVibeGallery.module.css';

const LuxuryVibeGallery = ({ data, images = [] }) => {
  if (!data || !data.items) return null;

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          {data.subtitle && <p className={styles.subtitle}>{data.subtitle}</p>}
        </div>

        <div className={styles.galleryGrid}>
          {data.items.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.galleryItem} ${index % 3 === 0 ? styles.largeItem : styles.regularItem}`}
            >
              <div className={styles.imagePlaceholder}>
                {images[index] ? (
                  <img 
                    src={images[index]} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>Image: {item.title}</span>
                )}
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryVibeGallery;
