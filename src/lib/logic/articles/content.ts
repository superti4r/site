import type { ArticleModule } from '$contents/articles/utils';

type ArticleModules = Record<string, () => Promise<ArticleModule>>;

export const getArticleModules = (): ArticleModules =>
	import.meta.glob<ArticleModule>('/src/contents/articles/*/*.svx');

export const getArticleModuleKey = (lang: string, slug: string) =>
	`/src/contents/articles/${lang}/${slug}.svx`;

export const getArticleModulePromise = (modules: ArticleModules, key: string) => modules[key]?.();
