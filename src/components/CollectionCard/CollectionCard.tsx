import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { CollectionItem } from '../../data/types';

interface Props {
  collection: CollectionItem;
}

function CollectionCard({ collection }: Props) {
  const style = collection.image
    ? ({ '--card-image': `url("${collection.image}")` } as CSSProperties)
    : undefined;
  const ariaLabel = `${collection.title} — ${collection.count}`;

  if (collection.href) {
    return (
      <Link className={`collection-card ${collection.tone}`} to={collection.href} style={style} aria-label={ariaLabel}>
        <span className="collection-count">{collection.count}</span>
        <span className="collection-title">{collection.title}</span>
      </Link>
    );
  }

  return (
    <a className={`collection-card ${collection.tone}`} href="#" style={style} aria-label={ariaLabel}>
      <span className="collection-count">{collection.count}</span>
      <span className="collection-title">{collection.title}</span>
    </a>
  );
}

export default CollectionCard;
