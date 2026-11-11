export const COMPANY = {
  name: 'Y.A.I.M.S. Steel Industries',
  shortName: 'YAIMS',
  tagline: 'Built for Industry. Made for Progress.',
  phones: ['9448436605', '9035614650'],
  whatsapp: '919448436605',
  email: 'info@yaimssteel.com',
  address: {
    line1: 'KSSIDC, Plot No.10',
    line2: 'Rambag Industrial Estate, Jambagi Road',
    line3: 'Bagalkot, Jamkhandi – 587301',
    line4: 'Karnataka, India',
  },
  location: 'Jamkhandi, Karnataka',
  visitingCardImage: '/yaims/visiting-card.jpg',
}

export const CERTIFICATION = {
  standard: 'ISO 9001:2015',
  title: 'Quality Management System',
  certNo: '21ZQAE8492Q',
  issued: '13 Jun 2021',
  body: 'International Quality Certification Services UK Ltd',
  image: '/yaims/iso-certificate.jpg',
  scope:
    'Manufacturers & Suppliers of Tractor Dozer, Loader, Backhoe, Trailers & Various Types of Agro Implements.',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'ISO Certificate', href: '#certification' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const TRACTOR_BRANDS = [
  { name: 'Mahindra', models: '575 DI, 585, Arjun 555, Novo', hp: '35 - 75 HP' },
  { name: 'Swaraj', models: '855 FE, 744 XT, 735, 963', hp: '35 - 65 HP' },
  { name: 'John Deere', models: '5050 D, 5310, 5405, 5045', hp: '45 - 75 HP' },
  { name: 'New Holland', models: '3630 TX, 3230, 5620', hp: '35 - 75 HP' },
  { name: 'Sonalika', models: 'DI 745, DI 750, Tiger 50', hp: '40 - 75 HP' },
  { name: 'Massey Ferguson', models: '241 DI, 1035 Maha Mahaan, 9500', hp: '35 - 60 HP' },
  { name: 'Kubota', models: 'MU4501, MU5501 4WD', hp: '45 - 55 HP' },
  { name: 'Farmtrac', models: '60 PowerMaxx, 45, 6055', hp: '40 - 65 HP' },
]

export type SpecItem = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: 'dozers-loaders' | 'trailers' | 'agro'
  categoryLabel: string
  description: string
  highlights?: string[]
  image: string
  features: string[]
  applications: string[]
  specifications: SpecItem[]
  warranty?: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'tractor-dozers',
    name: 'Tractor Dozer Attachment',
    category: 'dozers-loaders',
    categoryLabel: 'Heavy Earthmoving',
    description:
      'Authentic heavy-duty tractor-mounted dozers engineered with high-tensile steel blade, dual hydraulic lift cylinders, and custom tractor mounting brackets.',
    image: '/images/yaims-real/dozer-blue-new-holland.jpg',
    features: [
      'High-tensile curved steel blade with reinforced cutting edge',
      'Heavy-duty dual hydraulic lift system engineered for high torque',
      'Custom sub-frame bracket fitments for New Holland, Swaraj, Mahindra, John Deere, etc.',
      'Front push-bar and heavy bumper protection',
    ],
    applications: ['Land clearing', 'Soil pushing & levelling', 'Site preparation', 'Road & farm work'],
    specifications: [
      { label: 'Blade Width', value: '6 ft to 8.5 ft (Customizable)' },
      { label: 'Sheet Thickness', value: '10mm - 12mm High Tensile Steel' },
      { label: 'Hydraulic System', value: 'Heavy Duty Dual Actuating Cylinders' },
      { label: 'Compatible Tractors', value: '35 HP to 90 HP (New Holland, Swaraj, Mahindra, etc.)' },
      { label: 'Contact Numbers', value: '9448436605 / 9035614650' },
    ],
    warranty: '1 Year Manufacturer Structural Warranty',
  },
  {
    slug: 'agricultural-trailers',
    name: 'Heavy Duty 4-Wheel Trailer',
    category: 'trailers',
    categoryLabel: 'Transport & Haulage',
    description:
      'Authentic YAIMS 4-wheel trailers featuring heavy corrugated steel body, reinforced chassis channels, and dual hydraulic cylinders.\n\n• 90mm axle\n• 13/16 hub\n• 900.20 MRF tyres\n• 6 tonn capacity',
    highlights: ['90mm Axle', '13/16 Hub', '900.20 MRF Tyres', '6 Tonn Capacity'],
    image: '/images/yaims-real/trailer-tipping-4wheel.jpg',
    features: [
      '90mm heavy-duty solid steel axle',
      '13/16 precision heavy wheel hub assembly',
      '900.20 MRF commercial heavy-duty tyres',
      '6 Tonn capacity heavy load carrying frame',
      'Single and multi-stage hydraulic jack system',
      'Thick corrugated steel load body with heavy chassis beam',
      'Branded YAIMS finish with contact numbers (9448436605 / 9035614650)',
    ],
    applications: ['Grain & produce haulage', 'Soil & sand transport', 'Construction material', 'Farm logistics'],
    specifications: [
      { label: 'Load Capacity', value: '6 Tonn Capacity' },
      { label: 'Axle Specs', value: '90mm Axle' },
      { label: 'Hub Specs', value: '13/16 Hub' },
      { label: 'Tyre Specs', value: '900.20 MRF Tyres' },
      { label: 'Hydraulic Mechanism', value: 'Heavy Duty Hydraulic Ram' },
      { label: 'Body Sheet', value: '4mm Bottom / 3mm Sides' },
      { label: 'Braking System', value: 'Hydraulic / Pneumatic Option' },
    ],
    warranty: '1 Year Heavy Chassis Warranty',
  },
  {
    slug: 'sugarcane-trailer',
    name: 'High Cage Double-Axle Sugarcane Trailer',
    category: 'trailers',
    categoryLabel: 'Transport & Haulage',
    description:
      'Specialized high-capacity double-axle cage trailer designed for sugarcane, forage, and high-volume crop haulage.',
    image: '/images/yaims-real/trailer-cage-side-view.jpg',
    features: [
      'Dual tandem axle design for maximum road stability and weight distribution',
      'High steel side cage frame for maximum volumetric capacity',
      'Heavy-duty hitch drawbar and multi-leaf spring suspension',
      'Built specifically for sugarcane mill transport and agricultural bulk load',
    ],
    applications: ['Sugarcane haulage', 'Bulk forage & straw transport', 'High-volume agro produce', 'Mill logistics'],
    specifications: [
      { label: 'Load Capacity', value: '8 Ton to 14 Ton Bulk Volume' },
      { label: 'Axle Config', value: 'Tandem Double Axle Assembly' },
      { label: 'Cage Height', value: 'Custom High Frame (8 ft - 10 ft)' },
      { label: 'Steel Grade', value: 'Heavy Duty Structural Channel & Pipe' },
    ],
    warranty: '1 Year Heavy Chassis Warranty',
  },
  {
    slug: 'high-tipping-trailer',
    name: 'High Tipping Trailer',
    category: 'trailers',
    categoryLabel: 'Transport & Haulage',
    description:
      'Advanced high-angle tipping trailer engineered for rapid bulk unloading into storage bins, trucks and mills.',
    image: '/images/yaims-real/trailer-high-tipping-elevated.jpg',
    features: [
      'Dual hydraulic tipping cylinders for extreme tipping angles',
      'Heavy steel container body for fast grain and produce transfer',
      'High ground clearance chassis with heavy-duty multi-leaf suspension',
      'Tested for high-tonnage agricultural bulk load operations',
    ],
    applications: ['Automated grain transfer', 'Sugarcane & harvest loading', 'Bulk crop transfer', 'Storage bin filling'],
    specifications: [
      { label: 'Tipping Ram', value: 'Dual High-Lift Hydraulic Cylinders' },
      { label: 'Max Tipping Angle', value: 'Up to 55 Degrees' },
      { label: 'Capacity', value: '5 Ton - 12 Ton Payload' },
      { label: 'Braking System', value: 'Heavy Hydraulic / Pneumatic Brakes' },
    ],
    warranty: '1 Year Warranty',
  },
  {
    slug: 'agro-implements',
    name: 'Agro Cultivator & Land Leveller Implements',
    category: 'agro',
    categoryLabel: 'Agricultural Equipment',
    description:
      'Authentic heavy-duty steel frame cultivators, land levellers, ploughs and rotavators manufactured for durability and everyday farm work.',
    image: '/images/yaims-real/agro-cultivator-real.jpg',
    features: [
      'Wear-resistant forged steel tines and heavy land leveller blade',
      'Optimised frame engineering for Indian soil conditions',
      'Low maintenance design with sealed bearing assemblies',
      'Consistent field performance and soil pulverisation',
    ],
    applications: ['Tilling & ploughing', 'Field levelling', 'Weed management', 'Soil conditioning'],
    specifications: [
      { label: 'Types Available', value: 'Cultivators, Land Levellers, Ploughs, Rotavators' },
      { label: 'Frame Steel', value: 'Heavy Duty Structural Channel & Box Section' },
      { label: 'Tine Material', value: 'Forged High Carbon Steel' },
    ],
    warranty: '1 Year Structural Warranty',
  },
]

export const GALLERY = [
  { src: '/images/yaims-real/dozer-blue-new-holland.jpg', category: 'Tractor Dozers', title: 'New Holland Tractor Dozer Attachment', alt: 'Blue New Holland tractor with YAIMS dozer attachment', span: 'row-span-2' },
  { src: '/images/yaims-real/trailer-high-tipping-elevated.jpg', category: 'Authentic Trailers', title: 'Elevated High-Tipping Hydraulic Trailer', alt: 'Orange tipping trailer elevated high on dual hydraulic cylinders', span: 'row-span-2' },
  { src: '/images/yaims-real/agro-cultivator-real.jpg', category: 'Agro Implements', title: 'Heavy Duty Steel Cultivator Frame', alt: 'Heavy duty cultivator and land leveller frame in factory yard', span: '' },
  { src: '/images/yaims-real/trailer-tipping-4wheel.jpg', category: 'Authentic Trailers', title: 'YAIMS 4-Wheel Trailer', alt: 'YAIMS 4-wheel trailer on road', span: '' },
  { src: '/images/yaims-real/trailer-cage-tipping-field.jpg', category: 'Sugarcane Trailers', title: 'Tractor High-Cage Trailer Field Unloading', alt: 'High cage tipping trailer on tractor in factory yard', span: 'row-span-2' },
  { src: '/images/yaims-real/trailer-cage-side-view.jpg', category: 'Sugarcane Trailers', title: 'Sugarcane Double-Axle Cage Trailer', alt: 'High cage sugarcane double-axle trailer side view', span: '' },
  { src: '/images/yaims-real/trailer-hydraulic-ram-underbody.png', category: 'Works Floor', title: 'Underbody Hydraulic Ram & Chassis View', alt: 'Underbody hydraulic tipping ram view connected to tractor', span: '' },
  { src: '/images/yaims-real/trailer-cage-tipping-workshop.png', category: 'Works Floor', title: 'High Cage Trailer Workshop Assembly', alt: 'Massive high cage tipping trailer tipped high in workshop floor', span: 'row-span-2' },
  { src: '/images/yaims-real/trailer-tipping-night.jpg', category: 'Works Floor', title: 'Tipping Trailers Fleet Dispatch', alt: 'Night photo of dual orange tipping trailers', span: '' },
  { src: '/images/yaims-real/trailer-tipping-jambagi-works.jpg', category: 'Works Floor', title: 'Jamkhandi Assembly Works', alt: 'Orange tipping trailer inside Jamkhandi works factory', span: '' },
  { src: '/images/yaims-real/dozer-green-tractor.jpg', category: 'Tractor Dozers', title: 'Swaraj Tractor Dozer Attachment', alt: 'Green tractor with YAIMS dozer attachment', span: '' },
  { src: '/images/yaims-real/trailer-cage-double-axle.jpg', category: 'Sugarcane Trailers', title: 'High Cage Frame Structure', alt: 'High cage sugarcane double-axle trailer', span: '' },
  { src: '/images/yaims-real/trailer-tipping-factory.jpg', category: 'Works Floor', title: 'Jamkhandi Works Floor Assembly', alt: 'Factory works floor assembly at Jamkhandi unit', span: '' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.26 PM.jpeg', category: 'Authentic Trailers', title: 'YAIMS High Tipping Hydraulic Trailer', alt: 'Orange high tipping trailer elevated inside workshop shed', span: 'row-span-2' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.27 PM.jpeg', category: 'Sugarcane Trailers', title: 'Mahindra Tractor Hitched High-Cage Trailer', alt: 'Mahindra tractor hitched to high cage sugarcane trailer', span: '' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.28 PM.jpeg', category: 'Works Floor', title: 'Twin High-Cage Trailer Fabrication', alt: 'Two high cage trailer bodies on workshop floor', span: '' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.29 PM.jpeg', category: 'Tractor Dozers', title: 'John Deere Tractor Dozer Attachment', alt: 'John Deere tractor equipped with YAIMS front dozer blade', span: 'row-span-2' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.37 PM.jpeg', category: 'Authentic Trailers', title: 'YAIMS Heavy Duty 4-Wheel Commercial Trailer', alt: 'YAIMS 4-wheel commercial trailer side profile view', span: '' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.38 PM.jpeg', category: 'Sugarcane Trailers', title: 'Sugarcane Bulk Load Tandem Transport', alt: 'Fully loaded sugarcane tandem trailers on road', span: 'row-span-2' },
  { src: '/images/yaims-real/WhatsApp Image 2026-08-18 at 7.20.39 PM.jpeg', category: 'Works Floor', title: 'Hydraulic Tipping Mechanism Factory Testing', alt: 'High tipping trailer hydraulic lift testing inside factory shed', span: '' },
]

export const FAQ_ITEMS = [
  {
    question: 'Where are YAIMS Steel Industries manufacturing facilities located?',
    answer:
      'Our state-of-the-art works unit is located at KSSIDC Plot No.10, Rambag Industrial Estate, Jambagi Road, Jamkhandi - 587301, Bagalkot District, Karnataka, India.',
  },
  {
    question: 'Are your products customizable for different tractor brands and models?',
    answer:
      'Yes! We design and manufacture custom mounting sub-frames and brackets tailored specifically for Swaraj, Mahindra, John Deere, Sonalika, New Holland, TAFE, Eicher, and all major tractor models.',
  },
  {
    question: 'Is YAIMS Steel Industries ISO certified?',
    answer:
      'Yes, YAIMS Steel Industries is ISO 9001:2015 certified for Quality Management Systems covering the manufacture and supply of Tractor Dozers, Loaders, Backhoes, Trailers, and Agro Implements.',
  },
  {
    question: 'What warranty and spare parts support do you offer?',
    answer:
      'All our machinery comes with a 1-Year Structural Manufacturer Warranty. Being a direct manufacturer, we keep complete spare parts (cylinders, hoses, pins, cutting edges) in stock for immediate dispatch.',
  },
  {
    question: 'How can I request a quote or contact YAIMS Steel Industries?',
    answer:
      'You can request a quick quote directly via WhatsApp (+91 9035614650), call our sales team at 9035614650, or submit a request through our online contact form to schedule a guided factory visit.',
  },
]






