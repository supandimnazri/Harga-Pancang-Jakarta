import React from 'react';
import { FAQS, ArticleItem } from '../data/pancangData';

interface SeoStructuredDataProps {
  currentArticle: ArticleItem | null;
}

export const SeoStructuredData: React.FC<SeoStructuredDataProps> = ({ currentArticle }) => {
  // WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Harga Pancang Jakarta',
    url: 'https://hargapancangjakarta.com/',
    description: 'Informasi harga pancang Jakarta, harga tiang pancang, mini pile, spun pile, HSPD dan jasa pemancangan untuk berbagai kebutuhan proyek konstruksi.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hargapancangjakarta.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://hargapancangjakarta.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Harga Pancang',
        item: 'https://hargapancangjakarta.com/#harga'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Jasa Pancang',
        item: 'https://hargapancangjakarta.com/#jasa-pancang'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Jenis Tiang Pancang',
        item: 'https://hargapancangjakarta.com/#jenis-tiang'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Area Layanan',
        item: 'https://hargapancangjakarta.com/#area-layanan'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Artikel',
        item: 'https://hargapancangjakarta.com/#artikel'
      }
    ]
  };

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // Article schema if an article is actively viewed
  const articleSchema = currentArticle
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: currentArticle.title,
        description: currentArticle.metaDescription,
        image: `https://hargapancangjakarta.com${currentArticle.featuredImage}`,
        author: {
          '@type': 'Organization',
          name: 'Harga Pancang Jakarta'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Harga Pancang Jakarta',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hargapancangjakarta.com/logo.png'
          }
        },
        datePublished: '2026-09-01T08:00:00+07:00',
        dateModified: '2026-10-08T10:00:00+07:00',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://hargapancangjakarta.com/artikel/${currentArticle.slug}`
        }
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
};
