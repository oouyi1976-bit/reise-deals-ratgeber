import { SITE } from './site';
import type { FaqItem } from './pages';

type WebPageSchemaInput = {
	title: string;
	description: string;
	path: string;
	image?: string;
};

export function createWebPageSchema({ title, description, path, image = SITE.defaultImage }: WebPageSchemaInput) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url: new URL(path, SITE.url).toString(),
		image: new URL(image, SITE.url).toString(),
		isPartOf: {
			'@type': 'WebSite',
			name: SITE.name,
			url: SITE.url,
		},
	};
}

export function createFaqSchema(faqs: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
}
