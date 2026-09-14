import { useMemo, useState } from 'react';
import { categories } from '../../data/content';
import articlesRegistry from '../../articles/articleData';
import ArticleCard from '../ArticleCard/ArticleCard';
import { ArticleData, ArticleItem } from '../../data/types';

function Search() {
  const [query, setQuery] = useState('');
  const suggestionLabels = useMemo(
    () => ['River Cruises', 'African Safaris', 'Luxury Hotels', 'Italy', 'Japan', 'Europe'],
    []
  );
  const [results, setResults] = useState<ArticleItem[] | null>(null);

  function mapArticleToItem(a: ArticleData): ArticleItem {
    return {
      cat: a.category,
      tone: (categories.find((c) => c.name === a.category) || { tone: 't1' }).tone,
      title: a.title,
      excerpt: a.description,
      meta: a.author,
      slug: a.slug,
      image: a.heroImage,
      readTime: a.readTime,
    };
  }

  function runSearch(q: string) {
    const term = q.trim().toLowerCase();
    if (!term) {
      setResults(null);
      return;
    }

    const articles = Object.values(articlesRegistry);
    const matches = articles.filter((a) => {
      const fields = [a.title, a.category, a.description, a.slug, (a.keywords || []).join(' ')].filter(Boolean).join(' ').toLowerCase();
      return fields.includes(term);
    });

    setResults(matches.map(mapArticleToItem));
  }

  // expose for debug/testing in dev environment
  (window as unknown as { runTripsSearch: typeof runSearch }).runTripsSearch = runSearch;

  return (
    <section className="search-experience">
      <div className="wrap">
        <div className="search-card">
          <h2>Search Luxury Travel Guides</h2>
          <form
            className="search-form"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              runSearch(query);
            }}
          >
            <svg className="search-form-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <label htmlFor="magazineSearch" style={{ position: 'absolute', left: '-9999px' }}>
              Search luxury travel guides
            </label>
            <input
              id="magazineSearch"
              type="text"
              placeholder="Search destinations, guides, and collections…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit" className="btn btn-navy" onClick={() => runSearch(query)}>
              Search
            </button>
          </form>
          <div className="search-suggestions">
            <span className="suggest-label">Popular searches:</span>
            {suggestionLabels.map((label) => (
              <button
                key={label}
                type="button"
                className="suggest-pill"
                onClick={() => {
                  setQuery(label);
                  const input = document.getElementById('magazineSearch');
                  if (input instanceof HTMLInputElement) {
                    input.focus();
                  }
                  runSearch(label);
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search results (reuses ArticleCard) */}
          {results !== null && (
            <div style={{ marginTop: 28 }}>
              {results.length === 0 ? (
                <div className="card-empty">
                  <p>No results found. Try different keywords.</p>
                </div>
              ) : (
                <div className="card-grid cols-3">
                  {results.map((r) => (
                    <ArticleCard key={r.slug} article={r} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
