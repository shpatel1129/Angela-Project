import React, { useState } from 'react';
import styles from './ShipAmenitiesShowcase.module.css';
import { Ship, Anchor, Compass, Coffee } from 'lucide-react';

const icons = [Ship, Coffee, Anchor, Compass];

const ShipAmenitiesShowcase = ({ data, images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.items) return null;

  const ActiveIcon = icons[activeIndex % icons.length];

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          {data.subtitle && <p className={styles.subtitle}>{data.subtitle}</p>}
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.tabsContainer}>
            {data.items.map((item, index) => (
              <div
                key={index}
                className={`${styles.tab} ${activeIndex === index ? styles.activeTab : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.tabIcon}>
                  {React.createElement(icons[index % icons.length], { size: 24 })}
                </div>
                <div className={styles.tabContent}>
                  <h3>{item.title}</h3>
                  <span className={styles.highlightBadge}>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.displayArea}>
            <div className={styles.displayCard}>
              <div className={styles.imagePlaceholder}>
                {images[activeIndex] ? (
                  <img 
                    src={images[activeIndex]} 
                    alt={data.items[activeIndex].title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <>
                    <ActiveIcon size={64} className={styles.placeholderIcon} />
                    <span className={styles.imageText}>Image Placeholder: {data.items[activeIndex].title}</span>
                  </>
                )}
              </div>
              <div className={styles.displayInfo}>
                <h3>{data.items[activeIndex].title}</h3>
                <p>{data.items[activeIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShipAmenitiesShowcase;
