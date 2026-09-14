import articlesRegistry from '../../articles/articleData';
import { categories } from '../../data/content';
import { ArticleItem } from '../../data/types';
import ArticleCard from '../ArticleCard/ArticleCard';

// This feed is for dated journal-style posts. Pillar/category guides are excluded by default
// (they're broad evergreen references, not dated posts) unless explicitly marked featured:true,
// which lets a specific pillar article (e.g. "Complete Guide to Luxury African Safaris") appear anyway.
const latestArticles: ArticleItem[] = Object.values(articlesRegistry)
  .filter((article) => (article.type ?? 'journal') === 'journal' || article.featured === true)
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 4)
  .map((article) => ({
    cat: article.category,
    tone: categories.find((c) => c.name === article.category)?.tone ?? 't1',
    title: article.title,
    excerpt: article.description,
    meta: article.author,
    slug: article.slug,
    image: article.heroImage,
    readTime: article.readTime,
  }));

function LatestArticles() {
  return (
    <section style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">Fresh From the Journal</span>
            <h2>Latest Articles</h2>
          </div>
        </div>
        <div className="card-grid cols-4">
          {latestArticles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
