import { categories } from '../../data/content';
import { Link } from 'react-router-dom';

// Must match the slugify logic in CategoryPage.tsx exactly — this generates the link,
// CategoryPage generates the lookup key, and they need to agree on the same slug for
// any category name (e.g. "Hotels & Resorts") to actually match.
function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s/_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

function FeaturedCategories() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Explore by Interest</span>
            <h2>Featured Categories</h2>
          </div>
        </div>
            <div className="cat-tiles">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  className={`cat-tile ${category.tone}`}
                  to={`/category/${slugify(category.name)}`}
                >
                  {category.name === 'Luxury Cruises' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a470db220f1c14ba9b703ff.webp"
                      alt="Luxury European river cruise sailing past a medieval castle, vineyard-covered hillsides, and a picturesque riverside village along the Rhine River in Germany."
                      loading="lazy"
                    />
                  )}
                  {category.name === 'African Safaris' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a4714927f3b0b0034de0c84.webp"
                      alt="Luxury African safari landscape featuring an elephant walking across the savanna at sunset with acacia trees and Mount Kilimanjaro in the background."
                      loading="lazy"
                    />
                  )}
                  {category.name === 'Hotels & Resorts' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a471618eb5101f8dcf45c9f.webp"
                      alt="Luxury oceanfront resort with an infinity pool, private villa, and panoramic sunset views overlooking the tropical coastline."
                      loading="lazy"
                    />
                  )}
                  {category.name === 'Life Moments' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a4716d8ac41ea59b02e2860.webp"
                      alt="Couple enjoying a luxury beachfront sunset dinner with candlelight, ocean views, and a romantic tropical setting."
                      loading="lazy"
                    />
                  )}
                  {category.name === 'Travel Planning' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a47190e6f5641e10528b682.webp"
                      alt="Luxury travel planning workspace with a laptop, passport, destination guides, world map, and itinerary notebook prepared for a personalized vacation."
                      loading="lazy"
                    />
                  )}
                  {category.name === 'Travel Intelligence' && (
                    <img
                      src="https://assets.cdn.filesafe.space/255UFzMdP7hJgjlRB0sZ/media/6a471a0d6f5641e10528c7b8.webp"
                      alt="Luxury travel intelligence workspace featuring destination research, global travel insights, market analysis, and strategic travel planning resources."
                      loading="lazy"
                    />
                  )}
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
