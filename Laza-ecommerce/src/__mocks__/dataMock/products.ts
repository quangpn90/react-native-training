import { IProduct } from 'types/models/Products';

export const product: IProduct = {
  id: '0',
  brandId: '2',
  name: 'Fila',
  price: 100,
  type: 'Cotton',
  like: true,
  title: 'Fila Sportswear Club Fleece',
  source:
    'https://images.unsplash.com/photo-1618212179058-8fc73c26668d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
  description:
    "Fila is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
  reviewers: {
    id: '2',
    name: 'John Doe',
    date: '13, Sep, 2020',
    image:
      'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  sizes: [
    {
      id: '0',
      size: 'S'
    },
    {
      id: '1',
      size: 'M'
    },
    {
      id: '2',
      size: 'L'
    },
    {
      id: '3',
      size: 'XL'
    },
    {
      id: '4',
      size: '2XL'
    },
    {
      id: '5',
      size: '3XL'
    }
  ],
  imagesPreview: [
    {
      id: '0',
      image:
        'https://images.unsplash.com/photo-1618212158973-5e36714e374b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1612462768418-d844d50931d2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928'
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1613418035472-424391ded253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80'
    }
  ],
  rating: '4.5',
  comment:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,adipisicing elit. Quisquam, quia.'
};

export const products: IProduct[] = [
  {
    id: '0',
    brandId: '2',
    name: 'Fila',
    price: 100,
    type: 'Cotton',
    like: true,
    title: 'Fila Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1618212179058-8fc73c26668d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
    description:
      "Fila is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1618212158973-5e36714e374b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1612462768418-d844d50931d2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928'
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1613418035472-424391ded253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80'
      }
    ],
    rating: '4.5',
    comment:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,adipisicing elit. Quisquam, quia.'
  },
  {
    id: '1',
    brandId: '0',
    name: 'Nike',
    price: 100,
    type: 'shoes',
    like: true,
    title: 'Nike Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1611824204322-24963b44d68b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1514651872441-3f794c1df249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80'
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1619352915541-45a6ace41ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1525450754258-0f4cbd02718d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1604702770021-6e8fcc5f9a17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '2',
    brandId: '0',
    name: 'Nike',
    price: 100,
    type: 'shoes',
    like: false,
    title: 'Nike Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1612874470096-d93a610de87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1549062573-edc78a53ffa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1616723355545-95f2f2abb4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1623421536280-fa8ae906ed1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '3',
    brandId: '3',
    name: 'Puma',
    like: false,
    price: 100,
    type: 'shoes',
    title: 'Adidas Sportswear Fleece',
    source:
      'https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1618149103302-fd4c48df88c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80'
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1596636222220-dfb7071e3676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1524087689795-d449b477c4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80'
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1618149103489-0e1210d6128a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
      }
    ],
    rating: '4.0',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '4',
    brandId: '4',
    name: 'Gucci',
    price: 100,
    type: 'Veston Man',
    like: false,
    title: 'Gucci Sportswear Club Fleece',
    source: 'https://cf.shopee.sg/file/0a96a3f84dc488099d74e8107742b6e9',
    description:
      "Gucci is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2021',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image: 'https://cf.shopee.sg/file/d067b18bb1cf30a577a9d378b76b7963'
      },
      {
        id: '1',
        image: 'https://cf.shopee.sg/file/70d1388b4699ec424da50c411fdf7ed7'
      },
      {
        id: '2',
        image: 'https://cf.shopee.sg/file/510bb3e391efec4204f953be9da1c4f2'
      },
      {
        id: '3',
        image: 'https://cf.shopee.sg/file/1c24d853b59ee51129b57ed5d155abb9'
      },
      {
        id: '4',
        image: 'https://cf.shopee.sg/file/47afd42b91f190cd362d39bd4e07976f'
      },
      {
        id: '5',
        image: 'https://cf.shopee.sg/file/d067b18bb1cf30a577a9d378b76b7963'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '5',
    brandId: '4',
    name: 'Gucci',
    price: 100,
    type: 'shoes',
    like: true,
    title: 'Fila Sportswear Club Fleece',
    source:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image:
          'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '1',
        image:
          'https://images.unsplash.com/photo-1523260578934-e9318da58c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '2',
        image:
          'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80'
      },
      {
        id: '3',
        image:
          'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      {
        id: '4',
        image:
          'https://images.unsplash.com/photo-1521402966881-852a3b2551fc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774'
      },
      {
        id: '5',
        image:
          'https://images.unsplash.com/photo-1613967210245-25e2e65d73b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '6',
    brandId: '5',
    name: 'Puma',
    price: 100,
    type: 'Unisex AMOUR',
    like: false,
    title: 'Puma Unisex AMOUR Sneakers',
    source: 'https://cf.shopee.vn/file/4d29fe1b7c914aa25feca4c6f6612a54',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imw'id'th=1400"
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image: 'https://cf.shopee.vn/file/b73ac2f8043bdbd104e01f5a5ab8a607'
      },
      {
        id: '1',
        image: 'https://cf.shopee.vn/file/6b15b68a613e7d19dd985cf4aed06b22'
      },
      {
        id: '2',
        image: 'https://cf.shopee.vn/file/d7021e60aab5ff493a29fab89015a133'
      },
      {
        id: '3',
        image: 'https://cf.shopee.vn/file/146576718a8bdfa24a35cc4c11bebab5'
      },
      {
        id: '4',
        image: 'https://cf.shopee.vn/file/a61be12b71b136f7fcd694b1001d1a32'
      },
      {
        id: '5',
        image: 'https://cf.shopee.vn/file/1c8eb5a85c73a0e34742124a4b5f1719'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '7',
    brandId: '4',
    name: 'Guci',
    price: 100,
    type: 'Jean Close',
    like: false,
    title: 'Jean  Body Close',
    source: 'https://cf.shopee.vn/file/93a89076e2c97e74f9bf0fbe401b4e97',
    description:
      "Guci is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2020',
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imw'id'th=1400"
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image: 'https://cf.shopee.vn/file/ea2a2954f2941f94aa6f5e87ec3562b7'
      },
      {
        id: '1',
        image: 'https://cf.shopee.vn/file/7bd43ed6c15b13e5b5cb2dedad91ebe6'
      },
      {
        id: '2',
        image: 'https://cf.shopee.vn/file/2cecd0e3faaf6a21d0e31b7cbf15e08d'
      },
      {
        id: '3',
        image: 'https://cf.shopee.vn/file/768ff74d28aaa06f3ba694ecf3dc6d13'
      },
      {
        id: '4',
        image: 'https://cf.shopee.vn/file/57300974b0d3b14f90ab78f877bcb244'
      },
      {
        id: '5',
        image: 'https://cf.shopee.vn/file/a8496a64cf6506726d2aa509223237e6'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  },
  {
    id: '9',
    brandId: '1',
    name: 'Nike',
    price: 180,
    type: 'Sport shoes',
    like: true,
    title: 'Nike air max 97 golf shoes',
    source: 'https://cf.shopee.vn/file/594942fd13ccef2379723095b3c05881',
    description:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila.",
    reviewers: {
      id: '2',
      name: 'John Doe',
      date: '13, Sep, 2022',
      image:
        "https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imw'id'th=1400"
    },
    sizes: [
      {
        id: '0',
        size: 'S'
      },
      {
        id: '1',
        size: 'M'
      },
      {
        id: '2',
        size: 'L'
      },
      {
        id: '3',
        size: 'XL'
      },
      {
        id: '4',
        size: '2XL'
      },
      {
        id: '5',
        size: '3XL'
      }
    ],
    imagesPreview: [
      {
        id: '0',
        image: 'https://cf.shopee.vn/file/594942fd13ccef2379723095b3c05881'
      },
      {
        id: '1',
        image: 'https://cf.shopee.vn/file/ce8ae00b1115e863d563c71f9b10d504_tn'
      },
      {
        id: '2',
        image: 'https://cf.shopee.vn/file/2872b73041df76c226e2e07e7897dc96_tn'
      },
      {
        id: '3',
        image: 'https://cf.shopee.vn/file/491a1399831eaedfd5b32a5f59292c0d_tn'
      },
      {
        id: '4',
        image: 'https://cf.shopee.vn/file/6b2f220a7d6150d5c55e7934fe0405d2_tn'
      },
      {
        id: '5',
        image: 'https://cf.shopee.vn/file/594942fd13ccef2379723095b3c05881'
      }
    ],
    rating: '4.5',
    comment:
      "Nike is a multinational corporation headquartered in Novi, Florida. It is the world's largest sports brand, with revenues in excess of $1.5 billion. The company was founded in 1908 by American football star Bill Belichick and retired quarterback Jack Nicklaus. Nike's products include apparel, shoes, equipment, and accessories. Nike also owns and operates the majority of the world's sporting goods brands, including Adidas, Puma, and Fila."
  }
];
