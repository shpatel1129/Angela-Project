import { Link } from 'react-router-dom';
import { ArticleItem } from '../../data/types';

interface Props {
  article: ArticleItem;
}

function ArticleCard({ article }: Props) {
  const displayCat = article.cat === 'River Cruises' ? 'Luxury Cruises' : article.cat;
  const displayTone = article.cat === 'River Cruises' ? 't1' : article.tone;

  const content = (
    <>
      <div className={`card-thumb ${displayTone}`}>
        {article.image ? (
          <img src={article.image} alt={article.title} loading="lazy" />
        ) : null}
      </div>
      <span className="eyebrow card-cat">{displayCat}</span>
      <h3 className="card-title">{article.title}</h3>
      <p className="card-excerpt">{article.excerpt}</p>
      <div className="card-meta">{article.meta}{article.readTime ? ` · ${article.readTime}` : ''}</div>
    </>
  );

  if (article.slug) {
    return (
      <Link className="article-card" to={`/articles/${article.slug}`} aria-label={`${article.title} article`}> 
        {content}
      </Link>
    );
  }

  return (
    <a className="article-card" href="#" aria-label={`${article.title} preview`}>
      {content}
    </a>
  );
}

export default ArticleCard;
