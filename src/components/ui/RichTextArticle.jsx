import React from 'react';
import Markdown from 'react-markdown';
import FadeIn from './FadeIn';

const RichTextArticle = ({ content }) => {
  if (!content) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="prose prose-slate prose-lg md:prose-xl mx-auto
            prose-headings:font-display prose-headings:text-navy-950 prose-headings:font-semibold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-navy-800 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-navy-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:text-slate-700 prose-li:marker:text-navy-800
            prose-blockquote:border-l-4 prose-blockquote:border-navy-800 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600 prose-blockquote:my-8
          ">
            <Markdown>{content}</Markdown>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default RichTextArticle;
