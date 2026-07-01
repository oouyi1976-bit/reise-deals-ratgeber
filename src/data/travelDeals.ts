export type AffiliateStatus = 'placeholder' | 'ready';

export type TravelDeal = {
	title: string;
	destination: string;
	category: string;
	teaser: string;
	bestFor: string;
	priceHint: string;
	affiliateStatus: AffiliateStatus;
	affiliateUrl: string;
	image: string;
	buttonText: string;
};

const placeholderHint = 'Konkrete Preise werden erst angezeigt, wenn ein Angebot manuell geprüft oder per Partnerdaten angebunden ist.';

export const affiliatePartners = {
	check24: {
		name: 'CHECK24',
		type: 'travel-comparison',
		disclosure: 'Partnerlink',
		links: {
			packageTravel:
				'https://a.check24.net/misc/click.php?pid=1173958&aid=18&deep=pauschalreisen-vergleich&cat=9',
			rentalCar: 'https://a.check24.net/misc/click.php?pid=1173958&aid=215&deep=mietwagen-preisvergleich&cat=10',
		},
		banners: {
			packageTravel:
				'https://a.check24.net/misc/click.php?pid=1173958&aid=259&deep=pauschalreisen-vergleich&cat=9',
			packageTravelImage: 'https://a.check24.net/misc/view.php?pid=1173958&aid=259&cat=9',
			rentalCar: 'https://a.check24.net/misc/click.php?pid=1173958&aid=215&deep=mietwagen-preisvergleich&cat=10',
			rentalCarImage: 'https://a.check24.net/misc/view.php?pid=1173958&aid=215&cat=10',
		},
	},
};

export const travelDeals: TravelDeal[] = [
	{
		title: 'Spontane Sonnenreise',
		destination: 'Mittelmeer & Europa',
		category: 'Last-Minute-Reisen',
		teaser: 'Platzhalter für kurzfristige Reisen mit flexibler Dauer, offenem Ziel und sauber geprüften Leistungen.',
		bestFor: 'Flexible Paare, Alleinreisende und Freunde',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/last-minute-airport.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Pauschalreise mit Hotel & Transfer',
		destination: 'Beliebte Baderegionen',
		category: 'Pauschalreisen',
		teaser: 'CHECK24-Partnerlink für den Vergleich von Pauschalreisen verschiedener Anbieter. Leistungen bitte vor der Buchung genau prüfen.',
		bestFor: 'Reisende, die möglichst wenig selbst organisieren möchten',
		priceHint: 'Externer Vergleich über CHECK24. Es werden hier keine eigenen Preise, Rabatte oder Rankings behauptet.',
		affiliateStatus: 'ready',
		affiliateUrl: affiliatePartners.check24.links.packageTravel,
		image: '/travel-images/hotel-pool.webp',
		buttonText: 'Pauschalreisen vergleichen',
	},
	{
		title: 'Familienfreundlicher Sommerurlaub',
		destination: 'Deutschland, Österreich & Südeuropa',
		category: 'Familienurlaub',
		teaser: 'Platzhalter für familiengeeignete Reisen mit kurzen Wegen, passenden Zimmern und fairen Nebenkosten.',
		bestFor: 'Familien mit Kindern im Kita- oder Schulalter',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/family-airport.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'All-inclusive-Auszeit am Meer',
		destination: 'Strandhotels in Europa',
		category: 'All-inclusive-Urlaub',
		teaser: 'Platzhalter für All-inclusive-Reisen, bei denen Mahlzeiten, Getränke und Zusatzkosten klar geprüft werden.',
		bestFor: 'Urlauber mit planbarem Reisebudget',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/hotel-room-sea-view.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Budgetreise mit kleinem Gepäck',
		destination: 'Nahziele & Nebensaison',
		category: 'Urlaub unter 500 Euro',
		teaser: 'Platzhalter für echte Budgetangebote, die erst nach Verfügbarkeits- und Preisprüfung eingebunden werden.',
		bestFor: 'Preisbewusste Reisende mit flexiblen Terminen',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/budget-suitcase.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Städtetrip übers Wochenende',
		destination: 'Deutschland & Europa',
		category: 'Städtereisen',
		teaser: 'Platzhalter für günstige Städtereisen mit Bahn, Bus oder Flug und sinnvoll gelegenen Unterkünften.',
		bestFor: 'Wochenendtrips, Kultur und kurze Auszeiten',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/city-alley.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Strandurlaub in der Nebensaison',
		destination: 'Küstenregionen in Europa',
		category: 'Strandurlaub',
		teaser: 'Platzhalter für Strandreisen mit gutem Wetterfenster, ruhiger Lage und transparenten Gesamtkosten.',
		bestFor: 'Sonnenurlaub ohne Hauptsaison-Aufpreis',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/beach-holiday.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Kurzurlaub ohne lange Anreise',
		destination: 'Seen, Berge & Städte',
		category: 'Kurzurlaub',
		teaser: 'Platzhalter für kurze Reisen mit zwei bis vier Nächten, guter Erreichbarkeit und wenig Planungsaufwand.',
		bestFor: 'Wochenenden, Brückentage und kleine Pausen',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/lake-short-trip.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Reiseplanung mit Sparfokus',
		destination: 'Flexibel nach Saison',
		category: 'Reisetipps',
		teaser: 'Platzhalter für redaktionelle Empfehlungen, Checklisten und später angebundene Vergleichslinks.',
		bestFor: 'Alle, die vor der Buchung strukturierter vergleichen möchten',
		priceHint: placeholderHint,
		affiliateStatus: 'placeholder',
		affiliateUrl: '',
		image: '/travel-images/travel-tips-desk.webp',
		buttonText: 'Angebot folgt',
	},
	{
		title: 'Mietwagen für den Urlaub vergleichen',
		destination: 'Urlaubsziele mit eigener Mobilität',
		category: 'Mietwagen',
		teaser:
			'CHECK24-Partnerlink für Mietwagenvergleiche. Prüfe vor der Buchung Versicherung, Kaution, Tankregelung und Abholstation.',
		bestFor: 'Reisende, die vor Ort flexibel bleiben möchten',
		priceHint: 'Externer Vergleich über CHECK24. Es werden hier keine eigenen Preise oder Rabatte behauptet.',
		affiliateStatus: 'ready',
		affiliateUrl: affiliatePartners.check24.links.rentalCar,
		image: '/travel-images/budget-suitcase.webp',
		buttonText: 'Mietwagen vergleichen',
	},
];
