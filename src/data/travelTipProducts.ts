export type TravelTipProduct = {
	id: string;
	title: string;
	provider: 'Digistore24' | 'Unaufschiebbar';
	category: string;
	description: string;
	bestFor: string;
	image: string;
	affiliateUrl: string;
	affiliateStatus: 'ready';
	buttonText: string;
};

export const travelTipProducts: TravelTipProduct[] = [
	{
		id: 'mallorca-auswandern-ratgeber',
		title: 'Auswandern nach Mallorca: Vom Urlaubsgefühl zum echten Zuhause',
		provider: 'Digistore24',
		category: 'Reise-Ratgeber',
		description: 'Ratgeber für Menschen, die Mallorca nicht nur als Urlaubsziel, sondern als neuen Lebensmittelpunkt prüfen.',
		bestFor: 'Reisende, die einen längeren Mallorca-Aufenthalt oder einen Umzug auf die Insel planen.',
		image: '/travel-tip-images/mallorca-auswandern-guide.webp',
		affiliateUrl: 'https://www.digistore24.com/redir/702242/Benman8810/',
		affiliateStatus: 'ready',
		buttonText: 'Ratgeber ansehen',
	},
	{
		id: 'mallorca-leben-ratgeber',
		title: 'Auf Mallorca leben: vom Urlauber zum echten Insulaner',
		provider: 'Digistore24',
		category: 'Digitaler Reiseguide',
		description: 'Digitaler Guide mit Fokus auf Alltag, Orientierung und realistisches Leben auf Mallorca.',
		bestFor: 'Mallorca-Fans, die mehr als klassische Urlaubstipps suchen.',
		image: '/travel-tip-images/mallorca-leben-guide.webp',
		affiliateUrl: 'https://www.digistore24.com/redir/702244/Benman8810/',
		affiliateStatus: 'ready',
		buttonText: 'Guide ansehen',
	},
	{
		id: 'mallorca-alltag-ratgeber',
		title: 'Alltag auf Mallorca: Leben, wo andere Urlaub machen',
		provider: 'Digistore24',
		category: 'Reiseplanung-Ratgeber',
		description: 'PDF-Ratgeber zur praktischen Vorbereitung auf den Alltag und längere Aufenthalte auf Mallorca.',
		bestFor: 'Reisende, die Alltag, Organisation und Inselrealität besser einschätzen möchten.',
		image: '/travel-tip-images/mallorca-alltag-guide.webp',
		affiliateUrl: 'https://www.digistore24.com/redir/702245/Benman8810/',
		affiliateStatus: 'ready',
		buttonText: 'Ratgeber ansehen',
	},
	{
		id: 'madeira-bildband',
		title: 'Madeira Bildband',
		provider: 'Unaufschiebbar',
		category: 'Bildband',
		description: 'Bildband und Inspiration für Madeira-Reisen mit Fokus auf Landschaft, Küste und Inselgefühl.',
		bestFor: 'Reisende, die Madeira vorab visuell besser kennenlernen möchten.',
		image: '/travel-tip-images/madeira-bildband.webp',
		affiliateUrl: 'https://www.unaufschiebbar.de/madeira-bildband/#aff=Benman8810',
		affiliateStatus: 'ready',
		buttonText: 'Bildband ansehen',
	},
	{
		id: 'lanzarote-bildband',
		title: 'Lanzarote Bildband',
		provider: 'Unaufschiebbar',
		category: 'Bildband',
		description: 'Bildband und Inspiration für Lanzarote-Reisen mit Vulkanlandschaften, Küsten und Inselmotiven.',
		bestFor: 'Reisende, die sich vorab ein Gefühl für Lanzarote verschaffen möchten.',
		image: '/travel-tip-images/lanzarote-bildband.webp',
		affiliateUrl: 'https://www.unaufschiebbar.de/lanzarote-bildband/#aff=Benman8810',
		affiliateStatus: 'ready',
		buttonText: 'Bildband ansehen',
	},
	{
		id: 'teneriffa-bildband',
		title: 'Teneriffa Bildband',
		provider: 'Unaufschiebbar',
		category: 'Bildband',
		description: 'Bildband und Inspiration für Teneriffa-Reisen mit Teide, Küste und Inselstimmung.',
		bestFor: 'Reisende, die Teneriffa visuell entdecken und Reiseideen sammeln möchten.',
		image: '/travel-tip-images/teneriffa-bildband.webp',
		affiliateUrl: 'https://www.unaufschiebbar.de/teneriffa-bildband/#aff=Benman8810',
		affiliateStatus: 'ready',
		buttonText: 'Bildband ansehen',
	},
	{
		id: 'fuerteventura-highlights',
		title: '99 Highlights auf Fuerteventura',
		provider: 'Unaufschiebbar',
		category: 'Insel-Guide',
		description: 'Guide mit Fuerteventura-Ideen für Strände, Ausflüge und Aktivitäten auf der Insel.',
		bestFor: 'Reisende, die Fuerteventura strukturiert planen und mehrere Inselorte vergleichen möchten.',
		image: '/travel-tip-images/fuerteventura-highlights.webp',
		affiliateUrl: 'https://www.unaufschiebbar.de/99-highlights-auf-fuerteventura/#aff=Benman8810',
		affiliateStatus: 'ready',
		buttonText: 'Guide ansehen',
	},
	{
		id: 'teneriffa-sehenswuerdigkeiten',
		title: '99 Teneriffa Sehenswürdigkeiten',
		provider: 'Unaufschiebbar',
		category: 'Insel-Guide',
		description: 'Guide mit Teneriffa-Sehenswürdigkeiten, Ausflugszielen und Ideen für die Reiseplanung.',
		bestFor: 'Reisende, die Teneriffa-Ausflüge und Orte vorab sortieren möchten.',
		image: '/travel-tip-images/teneriffa-sehenswuerdigkeiten.webp',
		affiliateUrl: 'https://www.unaufschiebbar.de/99-teneriffa-sehenswuerdigkeiten/#aff=Benman8810',
		affiliateStatus: 'ready',
		buttonText: 'Guide ansehen',
	},
];
