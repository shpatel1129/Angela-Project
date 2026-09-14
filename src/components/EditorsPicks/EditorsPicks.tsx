import { picks } from '../../data/content';
import ArticleCard from '../ArticleCard/ArticleCard';

function EditorsPicks() {
  return (
    <section className="editors-picks">
      <div className="wrap">
        <div className="picks-note">
          <div className="avatar-sm">AH</div>
          <p>"These are the stories I send clients first." — Angela Hughes, Editor</p>
        </div>
        <div className="section-head">
          <div>
            <span className="eyebrow">Curated by Angela</span>
            <h2>Angela's Personal Recommendations</h2>
          </div>
        </div>
        <div className="card-grid cols-3">
          {picks.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorsPicks;
