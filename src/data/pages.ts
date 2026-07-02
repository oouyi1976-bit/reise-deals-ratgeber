export type FaqItem = {
	question: string;
	answer: string;
};

export type PageContent = {
	slug: string;
	href: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	eyebrow: string;
	intro: string;
	image: string;
	imageAlt: string;
	dealCategory: string;
	adviceTitle: string;
	body: string[];
	tips: string[];
	faqs: FaqItem[];
	relatedSlugs: string[];
	internalLinks?: {
		href: string;
		title: string;
		description: string;
	}[];
};

const productInternalLink = {
	href: '/produkte-fuer-den-urlaub/',
	title: 'Praktische Produkte für den Urlaub ansehen',
	description: 'Packhilfen, Reiseorganisation und neutrale Produktideen für Flug, Hotel, Strand und Mietwagen.',
};

export const pageContents: PageContent[] = [
	{
		slug: 'last-minute-urlaub',
		href: '/last-minute-urlaub/',
		metaTitle: 'Last-Minute-Urlaub günstig finden | GünstigeUrlaubsreisen',
		metaDescription:
			'Last-Minute-Urlaub seriös planen: flexible Reisezeiten, echte Angebotsprüfung, Spartipps und passende Kategorien ohne Fantasiepreise.',
		h1: 'Last-Minute-Urlaub günstig finden',
		eyebrow: 'Spontan reisen',
		intro:
			'Last-Minute-Reisen können günstig sein, wenn du bei Ziel, Abflughafen und Reisedauer flexibel bleibst. Wichtig ist trotzdem der Blick auf Gesamtleistung, Gepäck, Transfer und Stornobedingungen.',
		image: '/travel-images/last-minute-airport.webp',
		imageAlt: 'Koffer in einem hellen Flughafen-Terminal vor dem Abflug',
		dealCategory: 'Last-Minute-Reisen',
		adviceTitle: 'Wann Last Minute wirklich spart',
		body: [
			'Der größte Spielraum entsteht meist, wenn mehrere Ziele infrage kommen und du auch Abflüge unter der Woche prüfen kannst. Kurzfristige Reisen sind nicht automatisch billiger; sie lohnen sich vor allem, wenn Anbieter Restkontingente seriös ausweisen.',
			'Vergleiche nicht nur den ersten Reisepreis. Zusatzgepäck, Flughafentransfer, Verpflegung und ungünstige Flugzeiten können ein scheinbar günstiges Angebot deutlich verändern.',
		],
		tips: [
			'Mehrere Abflughäfen im Umkreis vergleichen.',
			'Bei sieben, zehn und vierzehn Nächten parallel suchen.',
			'Hotelbewertungen inhaltlich lesen, nicht nur Punktzahlen vergleichen.',
			'Vor der Buchung prüfen, ob Transfer und Aufgabegepäck enthalten sind.',
		],
		faqs: [
			{
				question: 'Sind Last-Minute-Reisen immer günstiger?',
				answer:
					'Nein. Kurzfristige Reisen können günstiger sein, wenn Restplätze verfügbar sind. In Ferienzeiten oder bei sehr beliebten Zielen können die Preise aber auch steigen.',
			},
			{
				question: 'Wie kurzfristig sollte ich suchen?',
				answer:
					'Für klassische Last-Minute-Angebote lohnt sich oft ein Fenster von wenigen Tagen bis etwa drei Wochen vor Abreise. Wer sehr feste Wünsche hat, sollte früher vergleichen.',
			},
			{
				question: 'Welche Ziele eignen sich für Last Minute?',
				answer:
					'Ziele mit vielen Flug- und Hotelkapazitäten eignen sich meist besser als kleine Spezialziele. Wichtig bleibt, Wetter, Einreise und Transfer realistisch zu prüfen.',
			},
		],
		relatedSlugs: ['pauschalreisen', 'all-inclusive-urlaub', 'urlaub-unter-500-euro', 'strandurlaub-guenstig'],
		internalLinks: [productInternalLink],
	},
	{
		slug: 'pauschalreisen',
		href: '/pauschalreisen/',
		metaTitle: 'Pauschalreisen günstig vergleichen | GünstigeUrlaubsreisen',
		metaDescription:
			'Pauschalreisen günstig finden: Leistungen, Transfer, Gepäck, Reisezeit und Hotelniveau sauber vergleichen. Mit Spartipps und FAQ.',
		h1: 'Pauschalreisen günstig vergleichen',
		eyebrow: 'Flug, Hotel und Transfer',
		intro:
			'Pauschalreisen sind praktisch, weil mehrere Reiseleistungen gebündelt werden. Für einen fairen Vergleich solltest du aber genau ansehen, was im Paket enthalten ist und welche Kosten später noch dazukommen.',
		image: '/travel-images/hotel-pool.webp',
		imageAlt: 'Sonniger Hotelpool in einer mediterranen Anlage',
		dealCategory: 'Pauschalreisen',
		adviceTitle: 'Pauschalreise ist nicht gleich Pauschalreise',
		body: [
			'Ein günstiges Paket ist nur dann wirklich attraktiv, wenn Lage, Flugzeiten, Zimmerkategorie und Verpflegung zu deinen Plänen passen. Gerade bei sehr günstigen Angeboten lohnt sich der Blick auf Transferdauer und Zusatzleistungen.',
			'Vergleiche Pauschalreisen nach Gesamtwert statt nach dem niedrigsten Einstiegspreis. Eine etwas teurere Reise kann günstiger wirken, wenn sie bessere Flugzeiten, Gepäck oder Verpflegung enthält.',
		],
		tips: [
			'Reisezeitraum um ein paar Tage nach vorne und hinten verschieben.',
			'Abflughafen, Transferzeit und Gepäckregeln zusammen prüfen.',
			'Zimmerkategorien und Verpflegung nicht blind gleichsetzen.',
			'Nebensaison und Randzeiten der Ferien beobachten.',
		],
		faqs: [
			{
				question: 'Für wen eignen sich Pauschalreisen?',
				answer:
					'Pauschalreisen eignen sich für Reisende, die Planung bündeln möchten und Wert auf klare Leistungen legen. Besonders bei Badeurlaub, Familienreisen und Erstbesuchen eines Zieles kann das angenehm sein.',
			},
			{
				question: 'Was sollte ich beim Vergleich beachten?',
				answer:
					'Vergleiche Abflugzeiten, Gepäck, Transfer, Verpflegung, Zimmer und Stornobedingungen. Der reine Einstiegspreis sagt wenig über den Gesamtwert aus.',
			},
			{
				question: 'Kann eine Pauschalreise günstiger sein als einzeln gebuchte Leistungen?',
				answer:
					'Ja, das ist möglich. Es hängt aber stark von Ziel, Saison und Verfügbarkeit ab. Deshalb sollten Paket und Einzelbuchung bei flexiblen Reisen beide geprüft werden.',
			},
		],
		relatedSlugs: ['last-minute-urlaub', 'all-inclusive-urlaub', 'familienurlaub-guenstig', 'strandurlaub-guenstig', 'mietwagen'],
		internalLinks: [productInternalLink],
	},
	{
		slug: 'all-inclusive-urlaub',
		href: '/all-inclusive-urlaub/',
		metaTitle: 'All-inclusive-Urlaub günstig planen | GünstigeUrlaubsreisen',
		metaDescription:
			'All-inclusive-Urlaub ohne Kostenfallen: wann sich All inclusive lohnt, welche Leistungen wichtig sind und wie du faire Angebote erkennst.',
		h1: 'All-inclusive-Urlaub günstig planen',
		eyebrow: 'Planbare Urlaubskosten',
		intro:
			'All inclusive kann das Reisebudget planbarer machen, besonders bei Familien, Strandurlaub und Hotelurlaub mit wenig Ausflügen. Entscheidend ist, welche Leistungen wirklich enthalten sind.',
		image: '/travel-images/hotel-room-sea-view.webp',
		imageAlt: 'Helles Hotelzimmer mit Balkon und Blick auf das Meer',
		dealCategory: 'All-inclusive-Urlaub',
		adviceTitle: 'Was bei All inclusive zählt',
		body: [
			'Nicht jedes All-inclusive-Angebot umfasst dieselben Leistungen. Getränkezeiten, Snacks, Restaurants, Sportangebote und Strandservices unterscheiden sich je nach Hotel deutlich.',
			'Wenn du ohnehin viele Ausflüge, lokale Restaurants oder Mietwagen planst, kann Halbpension oder Frühstück günstiger sein. All inclusive lohnt sich besonders, wenn du viel Zeit in der Anlage verbringst.',
		],
		tips: [
			'Leistungsbeschreibung für Getränke, Snacks und Restaurants lesen.',
			'Hotelgröße und Lage gegen geplante Ausflüge abwägen.',
			'Bei Familien auf Kinderbuffet, Pools und Zimmeraufteilung achten.',
			'Nebenkosten wie Strandliegen, Safe oder lokale Abgaben prüfen.',
		],
		faqs: [
			{
				question: 'Ist All inclusive automatisch günstiger?',
				answer:
					'Nicht automatisch. Es spart vor allem dann, wenn du viele Mahlzeiten und Getränke im Hotel nutzt und wenig zusätzliche Restaurantkosten einplanst.',
			},
			{
				question: 'Was bedeutet All inclusive genau?',
				answer:
					'Die genaue Bedeutung hängt vom Anbieter und Hotel ab. Meist sind Mahlzeiten und ausgewählte Getränke enthalten, Details wie Zeiten und Spezialrestaurants müssen geprüft werden.',
			},
			{
				question: 'Für Familien sinnvoll?',
				answer:
					'Für Familien kann All inclusive praktisch sein, weil Kosten kalkulierbarer werden. Trotzdem sollten Kinderleistungen, Zimmer und Transferzeiten sorgfältig verglichen werden.',
			},
		],
		relatedSlugs: ['pauschalreisen', 'familienurlaub-guenstig', 'strandurlaub-guenstig', 'urlaub-unter-500-euro'],
	},
	{
		slug: 'familienurlaub-guenstig',
		href: '/familienurlaub-guenstig/',
		metaTitle: 'Familienurlaub günstig planen | GünstigeUrlaubsreisen',
		metaDescription:
			'Günstiger Familienurlaub: Reisezeiten, Unterkunft, Verpflegung und Anreise klug planen. Mit Spartipps, Kategorien und FAQ.',
		h1: 'Familienurlaub günstig planen',
		eyebrow: 'Urlaub mit Kindern',
		intro:
			'Günstiger Familienurlaub entsteht selten nur durch den billigsten Reisepreis. Wichtiger sind passende Reisezeiten, kurze Wege, sinnvolle Zimmer und möglichst wenig teure Extras vor Ort.',
		image: '/travel-images/family-airport.webp',
		imageAlt: 'Familie mit Koffern in einem hellen Flughafen-Terminal',
		dealCategory: 'Familienurlaub',
		adviceTitle: 'Familienfreundlich und bezahlbar kombinieren',
		body: [
			'Familien zahlen oft für mehrere Personen gleichzeitig. Deshalb lohnt es sich besonders, die gesamte Reisekette zu prüfen: Anreise, Gepäck, Transfers, Zimmeraufteilung, Verpflegung und Aktivitäten.',
			'Wer nicht an die teuersten Ferienwochen gebunden ist, findet häufig entspanntere Zeiträume. Auch Urlaub ohne Flug kann für Familien günstiger und stressärmer sein.',
		],
		tips: [
			'Ferienrandzeiten und weniger gefragte Wochentage prüfen.',
			'Familienzimmer, Apartment und Ferienwohnung gegeneinander vergleichen.',
			'Kurze Transfers und kindgerechte Lage höher gewichten als reine Sterne.',
			'Verpflegung so wählen, dass teure Spontankäufe reduziert werden.',
		],
		faqs: [
			{
				question: 'Wie kann Familienurlaub günstiger werden?',
				answer:
					'Flexibilität bei Reiseziel, Unterkunftsart und Anreise hilft am meisten. Außerdem lohnt ein genauer Blick auf Verpflegung, Gepäck und Aktivitäten vor Ort.',
			},
			{
				question: 'Ist Urlaub ohne Flug für Familien sinnvoll?',
				answer:
					'Ja, oft. Bahn, Auto oder Fernbus können günstiger und entspannter sein, wenn das Ziel gut erreichbar ist und vor Ort kein Mietwagen nötig wird.',
			},
			{
				question: 'Sollte man früh buchen?',
				answer:
					'Bei festen Ferienzeiten und bestimmten Familienhotels kann frühes Vergleichen sinnvoll sein. Wer flexibel ist, kann auch spätere Angebote beobachten.',
			},
		],
		relatedSlugs: ['pauschalreisen', 'all-inclusive-urlaub', 'strandurlaub-guenstig', 'kurzurlaub'],
	},
	{
		slug: 'urlaub-unter-500-euro',
		href: '/urlaub-unter-500-euro/',
		metaTitle: 'Urlaub unter 500 Euro finden | GünstigeUrlaubsreisen',
		metaDescription:
			'Urlaub unter 500 Euro realistisch planen: Budgetgrenzen, Nebenkosten, Anreise und Reisezeit prüfen. Ohne erfundene Preise.',
		h1: 'Urlaub unter 500 Euro realistisch planen',
		eyebrow: 'Budgetreisen',
		intro:
			'Ein Urlaub unter 500 Euro ist möglich, aber stark abhängig von Reisedauer, Saison, Anreise und Anspruch. Diese Seite arbeitet bewusst ohne erfundene Lockpreise und zeigt, wie du realistisch filterst.',
		image: '/travel-images/budget-suitcase.webp',
		imageAlt: 'Kleiner Koffer und Reiseutensilien auf einem sonnigen Balkon',
		dealCategory: 'Urlaub unter 500 Euro',
		adviceTitle: 'Das Budget ehrlich rechnen',
		body: [
			'Bei Budgetreisen zählt der Gesamtpreis: Unterkunft, Anreise, Gepäck, Verpflegung, Transfers, lokale Gebühren und Ausgaben vor Ort. Ein niedriger Einstiegspreis ist nur hilfreich, wenn die Nebenkosten überschaubar bleiben.',
			'Für kleine Budgets eignen sich kurze Reisen, Ziele ohne teure Hauptsaison und Unterkünfte mit Küche oft besonders gut. Auch Bahn- oder Autoreisen können günstiger sein, wenn Flughafenkosten wegfallen.',
		],
		tips: [
			'Gesamtbudget vor der Suche in Anreise, Unterkunft und Vor-Ort-Kosten aufteilen.',
			'Kurze Aufenthalte und Ziele ohne Flug einbeziehen.',
			'Unterkünfte mit Küchenzeile oder Frühstück prüfen.',
			'Preisangaben erst übernehmen, wenn Verfügbarkeit und Leistungen bestätigt sind.',
		],
		faqs: [
			{
				question: 'Gibt es wirklich Urlaub unter 500 Euro?',
				answer:
					'Ja, je nach Reisedauer, Ziel und Saison. Seriös ist aber nur ein Angebot, dessen Preis, Leistungen und Verfügbarkeit konkret geprüft wurden.',
			},
			{
				question: 'Welche Reisearten passen zu kleinem Budget?',
				answer:
					'Kurzurlaub, Städtereisen, Nebensaison-Strandurlaub, Bahnreisen und einfache Apartments sind oft realistischer als lange Fernreisen.',
			},
			{
				question: 'Warum stehen hier noch keine Preise?',
				answer:
					'Weil keine erfundenen Angebote eingebunden werden. Preise erscheinen erst, wenn echte Partnerdaten oder manuell geprüfte Links verfügbar sind.',
			},
		],
		relatedSlugs: ['kurzurlaub', 'staedtereisen-guenstig', 'last-minute-urlaub', 'strandurlaub-guenstig'],
		internalLinks: [productInternalLink],
	},
	{
		slug: 'staedtereisen-guenstig',
		href: '/staedtereisen-guenstig/',
		metaTitle: 'Städtereisen günstig planen | GünstigeUrlaubsreisen',
		metaDescription:
			'Günstige Städtereisen in Deutschland und Europa: Anreise, Lage, Reisezeit und Nebenkosten sinnvoll vergleichen.',
		h1: 'Städtereisen günstig planen',
		eyebrow: 'Kurztrip in die Stadt',
		intro:
			'Städtereisen lassen sich gut an ein kleines Budget anpassen, wenn Anreise und Unterkunftslage zusammenpassen. Ein günstiges Hotel am Rand lohnt sich nicht immer, wenn tägliche Wege teuer werden.',
		image: '/travel-images/city-alley.webp',
		imageAlt: 'Mediterrane Gasse mit Cafe-Tischen im warmen Morgenlicht',
		dealCategory: 'Städtereisen',
		adviceTitle: 'Gute Lage spart oft mehr als gedacht',
		body: [
			'Bei Städtereisen entscheidet nicht nur der Zimmerpreis. Gute ÖPNV-Anbindung, Frühstück, Gepäckaufbewahrung und flexible Anreisezeiten können den Trip deutlich angenehmer und günstiger machen.',
			'Viele Städte sind außerhalb großer Events oder Schulferien deutlich entspannter. Wer bei Wochentagen flexibel ist, findet häufig bessere Hotelraten.',
		],
		tips: [
			'Hotelpreis immer mit Nahverkehrskosten zusammen betrachten.',
			'Bahn, Fernbus und Flug parallel prüfen.',
			'Große Events, Messen und Feiertage meiden, wenn möglich.',
			'Kostenlose Stadtführungen, Parks und Museen mit einplanen.',
		],
		faqs: [
			{
				question: 'Wann sind Städtereisen am günstigsten?',
				answer:
					'Häufig außerhalb von Ferien, Feiertagen, Messen und Großevents. Unter der Woche können Unterkünfte günstiger sein als an beliebten Wochenenden.',
			},
			{
				question: 'Ist ein Hotel außerhalb des Zentrums immer günstiger?',
				answer:
					'Nicht immer. Wenn tägliche Fahrtkosten und Zeitverlust hoch sind, kann eine etwas zentralere Unterkunft den besseren Gesamtwert bieten.',
			},
			{
				question: 'Welche Anreise ist am besten?',
				answer:
					'Das hängt von Entfernung, Gepäck und Reisezeit ab. Bahn und Fernbus sind oft bequem, Flüge lohnen sich eher bei längeren Distanzen oder sehr guten Verbindungen.',
			},
		],
		relatedSlugs: ['kurzurlaub', 'urlaub-unter-500-euro', 'last-minute-urlaub', 'pauschalreisen'],
	},
	{
		slug: 'strandurlaub-guenstig',
		href: '/strandurlaub-guenstig/',
		metaTitle: 'Strandurlaub günstig finden | GünstigeUrlaubsreisen',
		metaDescription:
			'Günstiger Strandurlaub ohne Lockpreise: Nebensaison, Lage, Verpflegung und Reisekosten clever vergleichen.',
		h1: 'Strandurlaub günstig finden',
		eyebrow: 'Meer, Sonne und Budget',
		intro:
			'Günstiger Strandurlaub hängt stark von Reisezeit und Lage ab. Wer nicht direkt in der Hauptsaison reisen muss, findet oft mehr Auswahl und angenehmere Bedingungen.',
		image: '/travel-images/beach-holiday.webp',
		imageAlt: 'Breiter Sandstrand mit türkisfarbenem Meer und sanften Wellen',
		dealCategory: 'Strandurlaub',
		adviceTitle: 'Strandnähe klug bewerten',
		body: [
			'Direkte Strandlage ist bequem, aber nicht immer nötig. Eine Unterkunft wenige Gehminuten entfernt kann günstiger sein, wenn Wege sicher und einfach sind.',
			'Für Strandurlaub lohnt ein Blick auf Wetterfenster kurz vor oder nach der Hauptsaison. Dort können Preise sinken, während das Meer und die Temperaturen noch attraktiv sind.',
		],
		tips: [
			'Nebensaison und Schultermonate prüfen.',
			'Strandlage, Transfer und Verpflegung zusammen vergleichen.',
			'Kleine Küstenorte statt nur bekannte Hotspots ansehen.',
			'Bei Selbstverpflegung Supermarkt- und Restaurantpreise berücksichtigen.',
		],
		faqs: [
			{
				question: 'Welche Monate eignen sich für günstigen Strandurlaub?',
				answer:
					'Oft sind Monate kurz vor oder nach der Hauptsaison interessant. Das genaue Wetter hängt vom Ziel ab und sollte immer separat geprüft werden.',
			},
			{
				question: 'Ist All inclusive bei Strandurlaub sinnvoll?',
				answer:
					'Wenn du viel Zeit im Hotel verbringst, kann All inclusive planbar sein. Bei vielen Ausflügen oder lokalen Restaurants kann eine andere Verpflegung günstiger passen.',
			},
			{
				question: 'Warum keine konkreten Strandangebote?',
				answer:
					'Konkrete Angebote werden erst eingebunden, wenn Preise, Verfügbarkeit und Affiliate-Links echt geprüft sind.',
			},
		],
		relatedSlugs: ['all-inclusive-urlaub', 'pauschalreisen', 'last-minute-urlaub', 'urlaub-unter-500-euro'],
	},
	{
		slug: 'kurzurlaub',
		href: '/kurzurlaub/',
		metaTitle: 'Kurzurlaub günstig buchen | GünstigeUrlaubsreisen',
		metaDescription:
			'Kurzurlaub günstig planen: Wochenendtrip, Brückentage, Bahnreise, Wellness, See oder Stadt ohne unnötige Nebenkosten.',
		h1: 'Kurzurlaub günstig planen',
		eyebrow: 'Kleine Auszeit',
		intro:
			'Kurzurlaub ist ideal, wenn du Erholung suchst, aber keine lange Reise planen möchtest. Günstig wird er vor allem durch kurze Anreise, gute Zeitwahl und klare Erwartungen.',
		image: '/travel-images/lake-short-trip.webp',
		imageAlt: 'Ruhiger See mit Holzsteg, Bergen und Wochenendtasche',
		dealCategory: 'Kurzurlaub',
		adviceTitle: 'Wenig Reisezeit, mehr Erholung',
		body: [
			'Bei zwei bis vier Tagen sollte die Anreise nicht den halben Urlaub auffressen. Ziele in der Nähe, Bahnverbindungen und flexible Check-in-Zeiten sind oft wichtiger als ein spektakuläres Fernziel.',
			'Brückentage sind beliebt und dadurch nicht immer günstig. Manchmal ist ein normaler Sonntag-bis-Dienstag-Trip deutlich entspannter.',
		],
		tips: [
			'Anreisezeit realistisch begrenzen.',
			'Sonntag bis Donnerstag als Alternative zum Wochenende prüfen.',
			'Frühstück, Parkplatz und ÖPNV-Anbindung in den Gesamtpreis einrechnen.',
			'Seen, Mittelgebirge und kleinere Städte statt nur Top-Hotspots ansehen.',
		],
		faqs: [
			{
				question: 'Wie viele Nächte lohnen sich für Kurzurlaub?',
				answer:
					'Zwei bis vier Nächte sind typisch. Bei längerer Anreise sollte der Aufenthalt entsprechend länger sein, damit der Trip erholsam bleibt.',
			},
			{
				question: 'Ist Kurzurlaub ohne Flug günstiger?',
				answer:
					'Oft ja, besonders bei nahen Zielen. Bahn oder Auto sparen Flughafentransfers und Gepäckkosten, müssen aber ebenfalls realistisch kalkuliert werden.',
			},
			{
				question: 'Welche Ziele passen für Kurzurlaub?',
				answer:
					'Seen, Berge, Thermen, kleinere Städte und gut angebundene Regionen eignen sich besonders, wenn die Anreise kurz bleibt.',
			},
		],
		relatedSlugs: ['staedtereisen-guenstig', 'urlaub-unter-500-euro', 'familienurlaub-guenstig', 'last-minute-urlaub'],
	},
	{
		slug: 'reisetipps',
		href: '/reisetipps/',
		metaTitle: 'Reisetipps zum Sparen | GünstigeUrlaubsreisen',
		metaDescription:
			'Praktische Reisetipps zum Sparen: Reisezeit, Buchung, Gepäck, Unterkunft, Anreise und Nebenkosten vor dem Urlaub besser planen.',
		h1: 'Reisetipps zum Sparen',
		eyebrow: 'Clever planen',
		intro:
			'Günstig reisen heißt nicht, an allem zu sparen. Besser ist, die richtigen Stellschrauben zu kennen: Zeitpunkt, Ziel, Anreise, Unterkunft, Verpflegung und Nebenkosten.',
		image: '/travel-images/travel-tips-desk.webp',
		imageAlt: 'Reiseplanung mit Notizbuch, Karte und Sonnenbrille auf einem hellen Tisch',
		dealCategory: 'Reisetipps',
		adviceTitle: 'Die wichtigsten Sparhebel',
		body: [
			'Die größte Ersparnis entsteht häufig durch Flexibilität. Schon ein anderer Abreisetag, eine nahe Alternative zum bekannten Urlaubsort oder eine Unterkunft mit Küche kann den Gesamtpreis verändern.',
			'Seriöse Reiseplanung vermeidet Lockpreise. Prüfe immer, ob Steuern, Gepäck, Transfers, Verpflegung, lokale Gebühren und Stornoregeln zum Angebot passen.',
		],
		tips: [
			'Erst Budget und Reiseart festlegen, dann Angebote prüfen.',
			'Mehrere Zeiträume und Abreiseorte vergleichen.',
			'Nebenkosten konsequent in den Gesamtpreis einrechnen.',
			'Bewertungen nach wiederkehrenden Aussagen lesen, nicht nur nach Score.',
			'Echte Angebote dokumentieren und Preisänderungen nicht schönrechnen.',
		],
		faqs: [
			{
				question: 'Was ist der wichtigste Spartipp für Reisen?',
				answer:
					'Flexibilität bei Reisedatum, Ziel und Unterkunft bringt meist am meisten. Danach kommen Nebenkosten, Gepäck und Verpflegung.',
			},
			{
				question: 'Sollte ich immer das billigste Angebot buchen?',
				answer:
					'Nein. Das billigste Angebot ist nur gut, wenn Lage, Leistungen, Zeiten und Zusatzkosten passen. Sonst wird es schnell teurer oder unpraktisch.',
			},
			{
				question: 'Wie geht diese Seite mit Affiliate-Links um?',
				answer:
					'Affiliate-Links werden klar gekennzeichnet. Solange kein echter geprüfter Link vorhanden ist, bleibt der Angebotsbutton deaktiviert.',
			},
		],
		relatedSlugs: [
			'urlaub-unter-500-euro',
			'pauschalreisen',
			'mietwagen',
			'last-minute-urlaub',
			'kurzurlaub',
			'staedtereisen-guenstig',
			'strandurlaub-guenstig',
		],
		internalLinks: [productInternalLink],
	},
	{
		slug: 'mietwagen',
		href: '/mietwagen/',
		metaTitle: 'Mietwagen günstig vergleichen | GünstigeUrlaubsreisen',
		metaDescription:
			'Tipps zum Mietwagen-Vergleich im Urlaub: Versicherung, Kaution, Tankregelung, Kilometer und Abholung beachten. Mit CHECK24 Mietwagen vergleichen.',
		h1: 'Mietwagen günstig vergleichen – Tipps für Urlaub & Reise',
		eyebrow: 'Vor Ort flexibel',
		intro:
			'Ein Mietwagen kann im Urlaub praktisch sein, wenn Strände, Ausflugsziele oder Unterkünfte schlecht mit Bus und Bahn erreichbar sind. Damit der Vergleich fair bleibt, solltest du nicht nur auf den Einstiegspreis schauen.',
		image: '/travel-images/budget-suitcase.webp',
		imageAlt: 'Kleiner Koffer und Reiseutensilien auf einem sonnigen Balkon',
		dealCategory: 'Mietwagen',
		adviceTitle: 'Worauf du beim Mietwagen-Vergleich achten solltest',
		body: [
			'Günstige Mietwagen wirken oft erst im Detail wirklich vergleichbar. Versicherung, Kaution, Tankregelung, Kilometer und Abholzeit können den Unterschied zwischen einem guten Angebot und unnötigem Stress machen.',
			'Prüfe vor der Buchung, ob die Station zu deiner Anreise passt und ob alle Fahrer, Kindersitze oder Zusatzleistungen korrekt angegeben sind. So vermeidest du teure Überraschungen am Schalter.',
		],
		tips: [
			'Vollkasko ohne Selbstbeteiligung prüfen.',
			'Faire Tankregelung wählen, zum Beispiel voll/voll.',
			'Kilometerbegrenzung beachten.',
			'Kaution und Kreditkarte prüfen.',
			'Abholstation und Uhrzeit kontrollieren.',
			'Zusatzfahrer und Kindersitze vorher prüfen.',
		],
		faqs: [
			{
				question: 'Welche Versicherung ist beim Mietwagen wichtig?',
				answer:
					'Häufig sinnvoll ist eine Vollkasko ohne Selbstbeteiligung oder mit Erstattung der Selbstbeteiligung. Prüfe außerdem Glas, Reifen, Unterboden und Ausschlüsse im Detail.',
			},
			{
				question: 'Was bedeutet faire Tankregelung?',
				answer:
					'Bei voll/voll bekommst du den Wagen vollgetankt und gibst ihn vollgetankt zurück. Das ist oft transparenter als vorausbezahlte Tankmodelle.',
			},
			{
				question: 'Brauche ich eine Kreditkarte?',
				answer:
					'Viele Vermieter verlangen für die Kaution eine Kreditkarte auf den Namen des Hauptfahrers. Das solltest du vor der Buchung prüfen.',
			},
			{
				question: 'Lädt das CHECK24 Mietwagen-Widget sofort?',
				answer:
					'Nein. Das Widget wird auf dieser Seite erst geladen, wenn du den Button zum Laden des CHECK24 Mietwagen-Vergleichs anklickst.',
			},
		],
		relatedSlugs: ['pauschalreisen', 'last-minute-urlaub', 'familienurlaub-guenstig'],
		internalLinks: [
			productInternalLink,
			{
				href: '/reisetipps/',
				title: 'Reisetipps zum Sparen',
				description: 'Mehr Hinweise zu Nebenkosten, Reisezeiten und cleverer Urlaubsplanung.',
			},
		],
	},
];

export const pageContentBySlug = Object.fromEntries(pageContents.map((page) => [page.slug, page])) as Record<
	string,
	PageContent
>;
