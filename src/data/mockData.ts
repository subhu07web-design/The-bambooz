export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Starters' | 'Main Course' | 'Noodles' | 'Rice' | 'Beverages' | 'Desserts';
  image: string;
  featured?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Bamboo Shoot Spring Rolls',
    price: 220,
    description: 'Crispy rolls filled with fresh bamboo shoots and seasoned vegetables.',
    category: 'Starters',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774773522/babooshot_spring_roll_byzufg.webp',
    featured: true
  },
  {
    id: 's2',
    name: 'Honey Chilli Potato',
    price: 180,
    description: 'Crispy potato fingers tossed in a sweet and spicy honey chilli sauce.',
    category: 'Starters',
    image: 'https://i.postimg.cc/pr5QS8Dk/Honey-Chilli-Potatoes-3.jpg'
  },
  {
    id: 'm1',
    name: 'Schezwan Chicken',
    price: 350,
    description: 'Tender chicken chunks cooked in a fiery Schezwan sauce with peppers.',
    category: 'Main Course',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774773750/schezwan_chick_zr9wib.jpg',
    featured: true
  },
  {
    id: 'm2',
    name: 'Veg Manchurian Gravy',
    price: 280,
    description: 'Vegetable dumplings in a thick, savory soy-based gravy.',
    category: 'Main Course',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774557/veg_manchurain_gravy_lt65ox.jpg'
  },
  {
    id: 'n1',
    name: 'Hakka Noodles',
    price: 200,
    description: 'Classic stir-fried noodles with crunchy vegetables and mild spices.',
    category: 'Noodles',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774773908/hakka_nodls_t3llbh.jpg',
    featured: true
  },
  {
    id: 'n2',
    name: 'Singapore Rice Noodles',
    price: 240,
    description: 'Thin rice vermicelli with curry powder, vegetables, and choice of protein.',
    category: 'Noodles',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774626/singapoor_rice_nodles_o6wj96.jpg'
  },
  {
    id: 'r1',
    name: 'Egg Fried Rice',
    price: 210,
    description: 'Fragrant jasmine rice stir-fried with eggs, scallions, and soy sauce.',
    category: 'Rice',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774643/egg_fried_rice_wga7ve.jpg'
  },
  {
    id: 'r2',
    name: 'Burnt Garlic Fried Rice',
    price: 230,
    description: 'Aromatic rice with a deep flavor of golden-browned garlic.',
    category: 'Rice',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774716/burnt_garlic_fried_rice_pu47v1.jpg'
  },
  {
    id: 'b1',
    name: 'Iced Peach Tea',
    price: 120,
    description: 'Refreshing cold tea with a hint of sweet peach.',
    category: 'Beverages',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774852/iced_peace_tea_fnjlnf.jpg'
  },
  {
    id: 'd1',
    name: 'Fried Ice Cream',
    price: 180,
    description: 'A warm, crunchy shell with a cold, creamy vanilla center.',
    category: 'Desserts',
    image: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774774871/fried_ice_cream_xcwzym.jpg'
  }
];

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rahul Sharma',
    rating: 5,
    comment: 'Everything was exactly to my taste, from the quality to the service.',
    date: '2024-03-15'
  },
  {
    id: '2',
    author: 'Priya Das',
    rating: 4,
    comment: 'The unlimited buffet is a steal! Great variety of Chinese dishes.',
    date: '2024-03-10'
  },
  {
    id: '3',
    author: 'Amit Gogoi',
    rating: 4,
    comment: 'Best Chinese in North Lakhimpur. The private dining room is perfect for families.',
    date: '2024-03-05'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'g-new-1',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776071/bambooz_gallery_img1_a5xu7k.webp',
    title: 'Bambooz Special Dish'
  },
  {
    id: 'g-new-2',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776082/bam_booz_gallery_img_2_qozmfw.webp',
    title: 'Bambooz Interior View'
  },
  {
    id: 'g-new-3',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776098/bambooz_gallery_img_3_irbrel.webp',
    title: 'Bambooz Dining Experience'
  },
  {
    id: 'g-new-4',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776116/bambooz_gallery_img_4_ib9zqf.webp',
    title: 'Bambooz Ambiance'
  },
  {
    id: 'g-new-5',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776137/bambooz_gallery_img_5_twyzfb.webp',
    title: 'Bambooz Gourmet Selection'
  },
  {
    id: 'g-new-6',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776161/bambooz_img_6_ejyhkv.webp',
    title: 'Bambooz Signature Dish'
  },
  {
    id: 'g-new-7',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776174/bambooz_img_7_gveolu.webp',
    title: 'Bambooz Culinary Art'
  },
  {
    id: 'g-new-8',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776660/bambooz_gallery_img_8_mlqlyp.webp',
    title: 'Bambooz Chef Special'
  },
  {
    id: 'g-new-9',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776671/bambooz_gallery_img_9_gffprp.webp',
    title: 'Bambooz Platter'
  },
  {
    id: 'g-new-10',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776689/bambooz_galldery_img_10_suuxtv.webp',
    title: 'Bambooz Fine Dining'
  },
  {
    id: 'g-new-11',
    url: 'https://res.cloudinary.com/duy2rot8s/image/upload/v1774776703/bambooz_gallery_img_11_tdalgk.webp',
    title: 'Bambooz Presentation'
  },
  ...Array.from({ length: 1 }).map((_, i) => ({
    id: `g${i}`,
    url: `https://picsum.photos/seed/bambooz${i}/800/600`,
    title: `Bambooz Interior/Food ${i + 1}`
  }))
];
