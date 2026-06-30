export const SITE = {
	name: 'GünstigeUrlaubsreisen',
	title: 'GünstigeUrlaubsreisen – günstige Urlaube, Pauschalreisen & Last-Minute-Reisen finden',
	description:
		'Seriöse Reiseideen, Spartipps und Angebotskategorien für günstige Urlaubsreisen, Pauschalreisen, Last-Minute-Urlaub und Kurztrips.',
	url: 'https://www.guenstigeurlaubsreisen.de',
	defaultImage: '/travel-images/hero-beach.webp',
};

export type CategoryPage = {
	slug: string;
	href: string;
	title: string;
	shortTitle: string;
	description: string;
	image: string;
	imageAlt: string;
	tag: string;
};

export const categoryPages: CategoryPage[] = [
	{
		slug: 'last-minute-urlaub',
		href: '/last-minute-urlaub/',
		title: 'Last-Minute-Reisen',
		shortTitle: 'Last Minute',
		description: 'Spontane Reiseideen, flexible Abflugorte und Hinweise, worauf du vor der Buchung achten solltest.',
		image: '/travel-images/last-minute-airport.webp',
		imageAlt: 'Koffer in einem hellen Flughafen-Terminal vor dem Abflug',
		tag: 'Spontan reisen',
	},
	{
		slug: 'pauschalreisen',
		href: '/pauschalreisen/',
		title: 'Pauschalreisen',
		shortTitle: 'Pauschalreisen',
		description: 'Flug, Hotel und Transfer im Paket vergleichen und die Leistungen wirklich sauber gegenüberstellen.',
		image: '/travel-images/hotel-pool.webp',
		imageAlt: 'Sonniger Hotelpool in einer mediterranen Anlage',
		tag: 'Alles im Paket',
	},
	{
		slug: 'familienurlaub-guenstig',
		href: '/familienurlaub-guenstig/',
		title: 'Günstiger Familienurlaub',
		shortTitle: 'Familienurlaub',
		description: 'Familienfreundliche Reisearten, Spartipps für Ferienzeiten und sinnvolle Kriterien für Kinder.',
		image: '/travel-images/family-airport.webp',
		imageAlt: 'Familie mit Koffern in einem hellen Flughafen-Terminal',
		tag: 'Mit Kindern',
	},
	{
		slug: 'all-inclusive-urlaub',
		href: '/all-inclusive-urlaub/',
		title: 'All-inclusive-Urlaub',
		shortTitle: 'All inclusive',
		description: 'Wann All inclusive wirklich spart und welche Nebenkosten du vor der Buchung prüfen solltest.',
		image: '/travel-images/hotel-room-sea-view.webp',
		imageAlt: 'Helles Hotelzimmer mit Balkon und Blick auf das Meer',
		tag: 'Planbare Kosten',
	},
	{
		slug: 'urlaub-unter-500-euro',
		href: '/urlaub-unter-500-euro/',
		title: 'Urlaub unter 500 Euro',
		shortTitle: 'Unter 500 Euro',
		description: 'Budget-Reisen ohne Fantasiepreise: mit klaren Filtern, flexiblen Zeiträumen und realistischen Erwartungen.',
		image: '/travel-images/budget-suitcase.webp',
		imageAlt: 'Kleiner Koffer und Reiseutensilien auf einem sonnigen Balkon',
		tag: 'Budget im Blick',
	},
	{
		slug: 'staedtereisen-guenstig',
		href: '/staedtereisen-guenstig/',
		title: 'Günstige Städtereisen',
		shortTitle: 'Städtereisen',
		description: 'Wochenendtrips, Bahnreisen und günstige Reisezeiten für Städte in Deutschland und Europa.',
		image: '/travel-images/city-alley.webp',
		imageAlt: 'Mediterrane Gasse mit Cafe-Tischen im warmen Morgenlicht',
		tag: 'Kurz & urban',
	},
	{
		slug: 'strandurlaub-guenstig',
		href: '/strandurlaub-guenstig/',
		title: 'Günstiger Strandurlaub',
		shortTitle: 'Strandurlaub',
		description: 'Strandziele klug auswählen, Nebensaison nutzen und Unterkunftslage gegen Reisekosten abwägen.',
		image: '/travel-images/beach-holiday.webp',
		imageAlt: 'Breiter Sandstrand mit türkisfarbenem Meer und sanften Wellen',
		tag: 'Meer & Sonne',
	},
	{
		slug: 'kurzurlaub',
		href: '/kurzurlaub/',
		title: 'Kurzurlaub',
		shortTitle: 'Kurzurlaub',
		description: 'Günstige Auszeiten ohne lange Anreise: Wellness, Berge, Seen, Städte und Bahnziele.',
		image: '/travel-images/lake-short-trip.webp',
		imageAlt: 'Ruhiger See mit Holzsteg, Bergen und Wochenendtasche',
		tag: '2 bis 4 Tage',
	},
];

export const mainNav = [
	{ href: '/', label: 'Start' },
	{ href: '/last-minute-urlaub/', label: 'Last Minute' },
	{ href: '/pauschalreisen/', label: 'Pauschalreisen' },
	{ href: '/urlaub-unter-500-euro/', label: 'Unter 500 Euro' },
	{ href: '/reisetipps/', label: 'Reisetipps' },
];

export const sitemapPages = [
	{ href: '/', priority: '1.0' },
	...categoryPages.map((page) => ({ href: page.href, priority: '0.8' })),
	{ href: '/reisetipps/', priority: '0.7' },
	{ href: '/impressum/', priority: '0.3' },
	{ href: '/datenschutz/', priority: '0.3' },
];
