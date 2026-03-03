import type { ArticleData } from '$contents/articles/utils';
import { origin } from '$lib/url';

export type ArticleDetail = ArticleData & { lang: 'en' | 'id' };

export const getArticlesSchema = (articles: ArticleData[]) => ({
	'@context': 'https://schema.org',
	'@type': 'Blog',
	name: 'Articles | superti4r',
	url: origin('/articles'),
	description:
		'Articles, notes, and reflections from superti4r — mostly about development, learning, and personal insights.',
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	mainEntity: articles.map((article) => ({
		'@type': 'BlogPosting',
		image: origin(article.thumbnail),
		headline: article.title,
		url: origin(`/articles/${article.slug}`),
		datePublished: article.created,
		author: {
			'@type': 'Person',
			name: 'Bachtiar Dwi Pramudi (superti4r)',
			url: origin()
		}
	}))
});

export const getArticleSchema = (article: ArticleDetail) => ({
	'@context': 'https://schema.org',
	'@type': 'BlogPosting',
	headline: article.title,
	description: article.excerpt,
	image: origin(article.thumbnail),
	author: {
		'@type': 'Person',
		name: 'Bachtiar Dwi Pramudi (superti4r)',
		url: origin()
	},
	publisher: {
		'@type': 'Organization',
		name: 'superti4r',
		logo: {
			'@type': 'ImageObject',
			url: origin('https://avatars.githubusercontent.com/u/142956484?v=4')
		}
	},
	datePublished: article.created,
	dateModified: article.updated,
	mainEntityOfPage: {
		'@type': 'WebPage',
		'@id': origin(`articles/${article.slug}`)
	}
});
