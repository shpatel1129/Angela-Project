import { Link } from 'react-router-dom';
import { collections } from '../../data/content';
import CollectionCard from '../CollectionCard/CollectionCard';

const FEATURED_COUNT = 6;

function Collections() {
  const featuredCollections = collections.slice(0, FEATURED_COUNT);

  return (
    <section style={{ background: 'var(--ivory)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Start Here</span>
            <h2>Featured Collections</h2>
          </div>
          <Link to="/blog/collections" className="view-all">
            View All Collections →
          </Link>
        </div>
        <div className="collections-grid">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.title} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
