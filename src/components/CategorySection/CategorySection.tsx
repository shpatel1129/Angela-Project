import { Link } from 'react-router-dom';
import articlesRegistry from '../../articles/articleData';
import { categories, riverCruises, safaris, hotels, lifeMoments, planning } from '../../data/content';
import { ArticleItem } from '../../data/types';
import ArticleCard from '../ArticleCard/ArticleCard';

interface CategorySectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  viewAllLabel: string;
  category: 'river' | 'safari' | 'hotel' | 'life' | 'planning' | 'intelligence';
}

const MAX_CARDS = 3;

// Maps each lower-section key to the real category name used site-wide (articlesRegistry,
// CategoryPage.tsx, FeaturedCategories.tsx) and its verified /category/:slug archive route
// (matches FeaturedCategories.tsx's slugify(name) output — hardcoded here rather than importing
// that helper, since it's a small fixed set of six known-good routes, not a general slugifier).
// `placeholders` are the existing hand-written fallback arrays in data/content.ts. Travel
// Intelligence intentionally has none — it shows its one real article only, per instruction.
const categoryConfig: Record<
  CategorySectionProps['category'],
  { realCategoryName: string; archiveHref: string; placeholders: ArticleItem[] }
> = {
  river: { realCategoryName: 'Luxury Cruises', archiveHref: '/category/luxury-cruises', placeholders: riverCruises },
  safari: { realCategoryName: 'African Safaris', archiveHref: '/category/african-safaris', placeholders: safaris },
  hotel: { realCategoryName: 'Hotels & Resorts', archiveHref: '/category/hotels-and-resorts', placeholders: hotels },
  life: { realCategoryName: 'Life Moments', archiveHref: '/category/life-moments', placeholders: lifeMoments },
  planning: { realCategoryName: 'Travel Planning', archiveHref: '/category/travel-planning', placeholders: planning },
  intelligence: { realCategoryName: 'Travel Intelligence', archiveHref: '/category/travel-intelligence', placeholders: [] }
};

function normalizeTitle(title: string) {
  return title.trim().toLowerCase();
}

// Real articles first (newest publishDate first, matching LatestArticles.tsx's convention),
// then existing placeholders fill any remaining slots up to MAX_CARDS, skipping placeholders
// that duplicate a real article already shown (by slug, or by normalized title when a
// placeholder has no slug of its own).
function getSectionItems(category: CategorySectionProps['category']): ArticleItem[] {
  const { realCategoryName, placeholders } = categoryConfig[category];

  const realItems: ArticleItem[] = Object.values(articlesRegistry)
    .filter((article) => article.category === realCategoryName)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, MAX_CARDS)
    .map((article) => ({
      cat: article.category,
      tone: categories.find((c) => c.name === article.category)?.tone ?? 't1',
      title: article.title,
      excerpt: article.description,
      meta: article.author,
      slug: article.slug,
      image: article.heroImage,
      readTime: article.readTime
    }));

  const items = [...realItems];

  if (items.length < MAX_CARDS) {
    const seenSlugs = new Set(items.map((item) => item.slug).filter(Boolean));
    const seenTitles = new Set(items.map((item) => normalizeTitle(item.title)));

    for (const placeholder of placeholders) {
      if (items.length >= MAX_CARDS) break;
      const isDuplicate = placeholder.slug
        ? seenSlugs.has(placeholder.slug)
        : seenTitles.has(normalizeTitle(placeholder.title));
      if (isDuplicate) continue;
      items.push(placeholder);
      if (placeholder.slug) seenSlugs.add(placeholder.slug);
      seenTitles.add(normalizeTitle(placeholder.title));
    }
  }

  return items;
}

function CategorySection({ id, eyebrow, heading, description, viewAllLabel, category }: CategorySectionProps) {
  const items = getSectionItems(category);
  const { archiveHref } = categoryConfig[category];

  return (
    <section className="cat-row" id={id}>
      <div className="wrap">
        <div className="cat-row-head">
          <div className="heading-block">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
          <Link to={archiveHref} className="view-all">
            {viewAllLabel}
          </Link>
        </div>
        <div className="card-grid cols-3">
          {items.map((item) => (
            <ArticleCard key={item.slug ?? item.title} article={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
