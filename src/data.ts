import { Service, Accomplishment, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'diesel-ago-supply',
    title: 'Diesel (AGO) Supply',
    description: 'Supply of premium Automotive Gas Oil (AGO) for businesses, industries, estates, hospitals and institutions.',
    longDescription: 'We supply premium Automotive Gas Oil (AGO) to ensure your operations run smoothly. Our diesel meets the highest quality standards and is delivered reliably to your location. Best for factories, hotels, hospitals, estates, offices, and construction companies.',
    iconName: 'Fuel',
    category: 'supply',
    imageUrl: '/construction.jpg'
  },
  {
    id: 'petroleum-products',
    title: 'Petroleum Products Supply',
    description: 'Supply of diesel, petrol, kerosene and other petroleum products.',
    longDescription: 'We provide comprehensive petroleum product supply including diesel, petrol (PMS), kerosene (DPK), and other refined products. Our products are sourced from certified depots and delivered with strict quality control measures.',
    iconName: 'Droplet',
    category: 'supply',
    imageUrl: '/manufacturing.jpg'
  },
  {
    id: 'bulk-fuel-delivery',
    title: 'Bulk Fuel Delivery',
    description: 'Safe and timely bulk fuel transportation directly to customer locations.',
    longDescription: 'Our bulk fuel delivery service ensures safe and timely transportation of petroleum products directly to your location. We have the capacity to handle large-volume orders for manufacturing companies, institutions, and large businesses with our fleet of specialized tankers.',
    iconName: 'Truck',
    category: 'logistics',
    imageUrl: '/pexels-thisisengineering-3862384.jpg'
  },
  {
    id: 'energy-consulting',
    title: 'Energy Consulting',
    description: 'Professional advisory services for fuel management and energy optimisation.',
    longDescription: 'Our energy consulting services provide professional advisory on fuel management, energy optimisation strategies, and cost-effective energy solutions. We help corporate organisations and government agencies optimise their energy consumption and reduce operational costs.',
    iconName: 'Lightbulb',
    category: 'consulting',
    imageUrl: '/why-choose-us.jpg'
  },
  {
    id: 'procurement-logistics',
    title: 'Procurement & Logistics',
    description: 'Efficient sourcing and transportation of petroleum-related products.',
    longDescription: 'We offer efficient procurement and logistics solutions for petroleum-related products. Our team handles sourcing, transportation coordination, and delivery management to ensure businesses receive reliable supply chain solutions tailored to their specific needs.',
    iconName: 'Package',
    category: 'logistics',
    imageUrl: '/pexels-ezrah-lane-3654374-5693845.jpg'
  }
];

export const ACCOMPLISHMENTS_DATA: Accomplishment[] = [
  {
    id: 'cac-registration',
    title: 'CAC Registration & Incorporation',
    description: 'Officially incorporated under the Corporate Affairs Commission (CAC) with registration number 7830522, establishing Primo Energy as a licensed Nigerian company.',
    location: 'Abuja, Federal Capital Territory, Nigeria',
    imageUrl: '/CAC_-registered.jpg',
    year: '2024'
  },
  {
    id: 'regional-expansion',
    title: 'Multi-State Service Coverage',
    description: 'Expanded operations to cover Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi, providing reliable energy solutions across Northern Nigeria.',
    location: 'Northern Nigeria Region',
    imageUrl: '/multistate-coverage.jpg',
    year: '2024'
  },
  {
    id: 'industry-recognition',
    title: 'Trusted Industry Partner',
    description: 'Established as a preferred supplier for construction companies, manufacturing industries, hospitals, schools, and government agencies through consistent quality delivery.',
    location: 'Nigeria',
    imageUrl: '/manufacturing.jpg',
    year: '2024'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Operations Manager',
    role: 'Operations Manager',
    company: 'Abuja-based Manufacturing Company',
    quote: 'Primo Energy has consistently delivered quality diesel on time. Their professionalism and reliability have made them our preferred supplier.',
    avatarUrl: 'https://images.pexels.com/photos/33048698/pexels-photo-33048698.jpeg?auto=compress&cs=tinysrgb&h=150&w=150&q=80'
  }
];
