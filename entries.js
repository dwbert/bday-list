const context = {
	entries: [
		{
			name: 'Hallway Rug',
			category: 'home',
			image: 'https://secure.img1-fg.wfcdn.com/im/19406364/resize-h800-w800%5Ecompr-r85/4026/40266290/Broomhedge+Oriental+Brown%2FRust+Area+Rug.jpg',
			description: 'Broomhedge Oriental Brown/Rust Area Rug',
			price_label: '$$$',
			links: [
				{
					price: '$115.99',
					url: 'https://www.wayfair.com/rugs/pdp/charlton-home-broomhedge-oriental-brownrust-area-rug-w005759826.html?piid=1480287156'
				}
			],
			purchase_ready: false,
			fund_raising: false,
			taken: true
		},
		{
			name: 'Wrist Watch',
			category: 'clothing',
			image: 'https://m.media-amazon.com/images/I/81Q-Rf3am2L._AC_UY879_.jpg',
			description: 'SEIKO 5 Automatic Stainless Steel Watch with White Dial - SNK789',
			price_label: '$$$',
			links: [
				{
					price: '$92.00',
					url: 'https://www.amazon.com/Seiko-SNK789-Automatic-Stainless-Steel/dp/B0018N0HL0'
				},
				{
					price: '$99.00',
					url: 'https://www.jomashop.com/seiko-watch-snk789.html'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Watch Band',
			category: 'clothing',
			image: 'https://cdn.shopify.com/s/files/1/0835/8495/products/Caramel_Tan_SS_buckle_040249e6-65c8-41f7-9774-b99f9a83aa31_1024x1024@2x.jpg?v=1623255864',
			description: 'Weathered Brown Leather Quick Release | 18mm | Stainless Steel Buckle',
			price_label: '$',
			links: [
				{
					price: '$26.00',
					url: 'https://www.bartonwatchbands.com/collections/leather-watch-bands/products/weathered-brown-leather?variant=31616731906102'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Nintendo Switch Travel Case',
			category: 'video-games',
			image: 'https://target.scene7.com/is/image/Target/GUEST_12fff90e-fbe8-4e3a-a645-9f3b50c24ee0?fmt=pjpeg&wid=1400&qlt=80',
			description: 'Nintendo Switch Game Traveler Slim Traveler Case',
			price_label: '$',
			links: [
				{
					price: '$12.99',
					url: 'https://www.target.com/p/nintendo-switch-game-traveler-slim-traveler-case/-/A-76439793#lnk=sametab',
				}		
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Bike Lights',
			category: 'bike',
			image: 'https://m.media-amazon.com/images/I/71CcHj5j2-S._AC_SX679_.jpg',
			description: 'Vont "Pyro" Bike Light Set',
			price_label: '$',
			links: [
				{
					price: '$11.89',
					url: 'https://www.amazon.com/Vont-Rechargeable-Illumination-Resistant-Accessories/dp/B078TB9TMK'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Bridge',
			category: 'pool',
			image: 'https://media.pooldawg.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/h/bhjb_01.jpg',
			description: 'Justa Bridge Billiards Bridge',
			price_label: '$$',
			links: [
				{
					price: '$36.95',
					url: 'https://www.pooldawg.com/justa-bridge-billiards-bridge',
				}		
			],
			purchase_ready: false,
			fund_raising: false,
			taken: true
		},
		{
			name: 'Jump/Break Cue',
			category: 'pool',
			image: 'https://m.media-amazon.com/images/I/418gj5N-ozL._AC_.jpg',
			description: 'RAGE Heavy Hitter Jump Break Cue - 25oz 3 Piece Pool Stick with Extra Hard bakelite tip',
			price_label: '$$$',
			links: [
				{
					price: '$97.01',
					url: 'https://www.amazon.com/25oz-Rage-Heavy-Hitter-Break/dp/B00EAIF6SY'
				}
			],
			purchase_ready: false,
			fund_raising: false,
			taken: true
		},
		{
			name: 'Super Mario Odyssey',
			category: 'video-games',
			image: 'https://m.media-amazon.com/images/I/51NgDXzErYL.jpg',
			description: 'Super Mario Odyssey | Nintendo Switch | Standard | Physical Game',
			price_label: '$$',
			links: [
				{
					price: '$38.99',
					url: 'https://www.gamestop.com/video-games/nintendo-switch/products/super-mario-odyssey/10141908.html?condition=New'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Purell Dispenser',
			category: 'home',
			image: 'https://m.media-amazon.com/images/I/71Q3m075gOL._SL1500_.jpg',
			description: 'Purell ES1 Hand Sanitizer Dispenser',
			price_label: '$',
			links: [
				{
					price: '$15.99',
					url: 'https://www.amazon.com/Sanitizer-Dispenser-Starter-Push-Style-Advanced/dp/B08NFJ7TG5'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		},
		{
			name: 'Birkenstocks',
			category: 'clothing',
			image: 'https://www.birkenstock.com/dw/image/v2/BDXC_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d46e7e4/951313/951313.jpg?sw=848&sh=848',
			description: 'Arizona Soft Footbed | Mocha | Size 10',
			price_label: '$$$',
			links: [
				{
					price: '$125.00',
					url: 'https://www.amazon.com/Birkenstock-Arizona-Birko-Flo-Birko-Flor-Sandals/dp/B000EYBKSI'
				},
				{
					price: '$135.00',
					url: 'https://www.birkenstock.com/us/arizona-suede-leather/arizona-core-suedeleather-softfootbed-eva-u_90.html?dwvar_arizona-core-suedeleather-softfootbed-eva-u__90_size=260&region=US'
				}
			],
			purchase_ready: false,
			fund_raising: false,
			taken: true
		},
		{
			name: 'Bicycle Tires',
			category: 'bike',
			image: 'https://m.media-amazon.com/images/I/412CG7MPSZL._AC_.jpg',
			description: 'Set of 2, Sunlite Road Raised Center Tire - 27 x 1-1/4, Black/Gum',
			price_label: '$$',
			links: [
				{
					price: '$62.95',
					url: 'https://www.amazon.com/Sunlite-Road-Raised-Center-Tire/dp/B00BMFJ7ZQ'
				}
			],
			purchase_ready: true,
			fund_raising: false,
			taken: false
		}
	]
};
