import { Link } from 'react-router-dom';
import articlesRegistry from '../../articles/articleData';

// Pulls straight from the shared article registry — no separate hardcoded list to keep in sync.
// The site has no real analytics/view-count field, so "popular" can't be measured — inventing a
// fake ranking would just reintroduce the old fabricated "Trending #1 this week" problem. Instead
// this uses two real, non-fabricated signals so the set differs from LatestArticles' newest-first
// list rather than duplicating it: editorially `featured` articles surface first, then the
// longest-published (oldest publishDate) articles fill the rest, standing in for "reader
// favorites" that have had the most time to be read. Swap in a real view-count field here if one
// is ever added to the article data model.
const popularArticles = Object.values(articlesRegistry)
  .sort((a, b) => {
    const featuredDiff = (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0);
    if (featuredDiff !== 0) return featuredDiff;
    return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
  })
  .slice(0, 5)
  .map((article) => ({
    slug: article.slug,
    cat: article.category,
    title: article.title,
    readTime: article.readTime
  }));

function Trending() {
  return (
    <section className="trending">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--ice)' }}>
              Most Read
            </span>
            <h2>Popular This Month</h2>
          </div>
        </div>
        <ol className="trending-list">
          {popularArticles.map((item) => (
            <li key={item.slug} className="trending-item">
              <Link to={`/articles/${item.slug}`} className="trending-link">
                <span className="eyebrow card-cat">{item.cat}</span>
                <h3 className="trending-title">{item.title}</h3>
                <div className="trending-meta">{item.readTime}</div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Trending;
