import React from 'react';
import { FAQS, ArticleItem } from '../data/pancangData';

interface SeoStructuredDataProps {
  currentPage: string;
  currentArticle: ArticleItem | null;
}

export const SeoStructuredData: React.FC<SeoStructuredDataProps> = ({ currentPage, currentArticle }) => {
  // WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Harga Pancang Jakarta',
    url: 'https://hargapancangjakarta.com/',
    description: 'Informasi harga pancang Jakarta, harga tiang pancang, mini pile, spun pile, HSPD dan jasa pemancangan untuk berbagai kebutuhan proyek konstruksi.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hargapancangjakarta.com/artikel/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // Breadcrumb items based on current page
  let breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://hargapancangjakarta.com/'
    }
  ];

  if (currentArticle) {
    breadcrumbItems.push(
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Artikel',
        item: 'https://hargapancangjakarta.com/artikel/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: currentArticle.title,
        item: `https://hargapancangjakarta.com/artikel/${currentArticle.slug}`
      }
    );
  } else if (currentPage === 'harga') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Harga Pancang Jakarta',
      item: 'https://hargapancangjakarta.com/harga-pancang-jakarta/'
    });
  } else if (currentPage === 'jenis-tiang') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Jenis Tiang Pancang',
      item: 'https://hargapancangjakarta.com/jenis-tiang-pancang/'
    });
  } else if (currentPage === 'jasa-pancang') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Jasa Pancang Jakarta',
      item: 'https://hargapancangjakarta.com/jasa-pancang-jakarta/'
    });
  } else if (currentPage === 'area-layanan') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Area Layanan',
      item: 'https://hargapancangjakarta.com/area-layanan/'
    });
  } else if (currentPage === 'artikel') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Artikel',
      item: 'https://hargapancangjakarta.com/artikel/'
    });
  } else if (currentPage === 'kontak') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Kontak',
      item: 'https://hargapancangjakarta.com/kontak/'
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
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
