const products = [
  {
    productId: '#123-asdf-789-retey-bhye-00000',
    image: 'images/bed/download (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2000
    },
    name: 'Scorpio',
    price: 50000
  },
  {
    productId: 'cxv9v-3y6sp-v13zv-tcv4p',
    image: 'images/bed/download (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1500
    },
    name: 'Mustang',
    price: 75000
  },
  {
    productId: '3v334-gzhaj-dfgqu-i0ybw',
    image: 'images/bed/download (3).jpg',
    rating: {
      rating_image: 'images/bed/download (5).jpg',
      rating_people: 1000
    },
    name: 'Civic',
    price: 30000
  },
  {
    productId: 'burro-gg0i0-l571p-g5u4u',
    image: 'images/bed/download (5).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 3500
    },
    name: 'Corolla',
    price: 25000
  },
  {
    productId: 'd4n0b-pxwig-83u3w-mibsr',
    image: 'images/bed/download.jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 500
    },
    name: 'Tesla Model S',
    price: 80000
  },
  {
    productId: '7svc2-tw9oe-qa094-syaru',
    image: 'images/bed/images (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1800
    },
    name: 'Camaro',
    price: 62000
  },
  {
    productId: 'vvwa9-xgcq7-4bxof-apnpe',
    image: 'images/bed/images (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2700
    },
    name: 'BMW X5',
    price: 90000
  },
  {
    productId: 'eo0fz-sv06q-h13z4-e3kmb',
    image: 'images/bed/images (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1200
    },
    name: 'Audi A4',
    price: 55000
  },
  {
    productId: 'cg4c8-kx6b4-z6t2t-e79cr',
    image: 'images/bed/images (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2000
    },
    name: 'Mercedes C-Class',
    price: 67000
  },
  {
    productId: '8ccs4-3wpfy-vj20x-co2z',
    image: 'images/bed/images (5).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 900
    },
    name: 'Honda Accord',
    price: 32000
  },
  {
    productId: 'amcy9-89rzs-u074z-thiva',
    image: 'images/bed/images.jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 300
    },
    name: 'Hyundai Sonata',
    price: 29000
  },
  
  //-----------------sofa-----------
  {
    productId: 'gdatv-ppdmp-3l13r-vm034',
    image: 'images/sofa/download (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 4000
    },
    name: 'Ford Explorer',
    price: 74000
  },
  {
    productId: 'q7bge-atvv5-bas13-z96fh',
    image: 'images/sofa/download (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1500
    },
    name: 'Nissan Altima',
    price: 33000
  },
  {
    productId: 'gd12p-fyetj-a74dq-gohx6',
    image: 'images/sofa/download (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1100
    },
    name: 'Chevrolet Malibu',
    price: 31000
  },
  {
    productId: 'j0ey0-ppubd-redrk-zzno',
    image: 'images/sofa/download.jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 600
    },
    name: 'Kia Soul',
    price: 26000
  },
  {
    productId: 'ntcko-hcjxt-k89yl-bkh16',
    image: 'images/sofa/images (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 5000
    },
    name: 'Subaru Outback',
    price: 37000
  },
  {
    productId: '52vq9-aglae-kjmmn-tu1vd',
    image: 'images/sofa/images (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2000
    },
    name: 'Mazda CX-5',
    price: 38000
  },
  {
    productId: 'gk0zf-3jkcn-bz9t8-ij4xb',
    image: 'images/sofa/images (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1500
    },
    name: 'Toyota RAV4',
    price: 36000
  },
  {
    productId: '6b1df-dh9w1-8sggm-7o57y',
    image: 'images/sofa/images (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 4500
    },
    name: 'Volkswagen Jetta',
    price: 34000
  },
  {
    productId: 'nxza2-vm0no-qb5dv-a3vs5',
    image: 'images/sofa/images (5).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1300
    },
    name: 'Jeep Cherokee',
    price: 55000
  },
  {
    productId: 'va265-cy8uu-gdwd2-56k77',
    image: 'images/sofa/images.jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2300
    },
    name: 'Dodge Charger',
    price: 62000
  },

  //--------------chair-------------
  {
    productId: 'lfk2r-jp19k-srrxg-3nc89',
    image: 'images/chair/download (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 800
    },
    name: 'Chrysler 300',
    price: 58000
  },
  {
    productId: 'slq8l-ah5x1-qumy4-lij0x',
    image: 'images/chair/download (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 600
    },
    name: 'Buick Enclave',
    price: 65000
  },
  {
    productId: 'w8md1-w5xam-ul0qw-o33r5',
    image: 'images/chair/download (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2100
    },
    name: 'Honda CR-V',
    price: 40000
  },
  {
    productId: '8thmb-jnp3i-nt4qs-pqpjb',
    image: 'images/chair/download (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 900
    },
    name: 'Toyota Camry',
    price: 30000
  },
  {
    productId: 'rc2cz-f377y-4dntp-cwb8',
    image: 'images/chair/download.jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 450
    },
    name: 'Infiniti Q50',
    price: 55000
  },
  {
    productId: '6lnf8-wa23j-5mcus-hz2di',
    image: 'images/chair/images (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 3200
    },
    name: 'Lexus RX 350',
    price: 72000
  },
  {
    productId: 's1tw6-utkjz-qm4dn-qt2tq',
    image: 'images/chair/images (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1900
    },
    name: 'Acura MDX',
    price: 70000
  },
  {
    productId: 'r4cvl-81clu-a1qjw-2e41',
    image: 'images/chair/images (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1100
    },
    name: 'Porsche Macan',
    price: 80000
  },
  {
    productId: 'uwhlr-w7zn9-02gag-i0zgd',
    image: 'images/chair/images (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 4400
    },
    name: 'Jaguar F-PACE',
    price: 85000
  },

  {
    productId: 'm5fgq-7q574-nxdq9-k69xt',
    image: 'images/chair/images.jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2000
    },
    name: 'Scorpio',
    price: 50000
  },

  //------Bikes----------------
  {
    productId: 'kt43e-j0he0-yyni4-pz4ue',
    image: 'images/Bikes/download (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1500
    },
    name: 'Mustang',
    price: 75000
  },
  {
    productId: '6fqpb-9wmvc-et78r-puz8a',
    image: 'images/Bikes/download.jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1000
    },
    name: 'Civic',
    price: 30000
  },
  {
    productId: 'h5qpy-z8yf2-3s19c-kyic2',
    image: 'images/Bikes/images (1).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 3500
    },
    name: 'Corolla',
    price: 25000
  },
  {
    productId: 'tmauk-e2asn-wed32-iu9m2',
    image: 'images/Bikes/images (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 500
    },
    name: 'Tesla Model S',
    price: 80000
  },
  {
    productId: 'm8o5y-ba12o-x8dje-srk9n',
    image: 'images/Bikes/images (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1800
    },
    name: 'Camaro',
    price: 62000
  },
  {
    productId: 'z3cbk-cljh6-y7cpp-jn1mr',
    image: 'images/Bikes/images (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2700
    },
    name: 'BMW X5',
    price: 90000
  },
  {
    productId: '90jpy-7fnpt-hbtgb-61a40',
    image: 'images/Bikes/images (5).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1200
    },
    name: 'Audi A4',
    price: 55000
  },
  {
    productId: 'bm8sp-fyaf8-3m2ad-hpraw',
    image: 'images/Bikes/images (6).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2000
    },
    name: 'Mercedes C-Class',
    price: 67000
  },
  {
    productId: 'mvupv-e7gfj-6yh0j-365q0',
    image: 'images/Bikes/images (7).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 900
    },
    name: 'Honda Accord',
    price: 32000
  },
  {
    productId: '5mp1i-y6iku-48m34-i31m5',
    image: 'images/Bikes/images (8).jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 300
    },
    name: 'Hyundai Sonata',
    price: 29000
  },
  {
    productId: '1jvk8-x6jx1-pbalz-qjlyb',
    image: 'images/Bikes/images (9).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 4000
    },
    name: 'Ford Explorer',
    price: 74000
  },
  {
    productId: 'yx7ia-i4pg7-grx7k-1pfd6',
    image: 'images/Bikes/images.jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1500
    },
    name: 'Nissan Altima',
    price: 33000
  },

  // ------------------------cars-----------;
  {
    productId: 'xx5y4-irmfn-1hmv6-idnz4',
    image: 'images/cars/a07691ea-5554-403c-a911-9fc61ef4a40e.webp',
    rating: {
      rating_image: 'images/cars/images (1).jpg',
      rating_people: 1100
    },
    name: 'Chevrolet Malibu',
    price: 31000
  },
  {
    productId: 'jc75a-twwbu-0iwcx-nv17j',
    image: 'images/cars/images (2).jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 600
    },
    name: 'Kia Soul',
    price: 26000
  },
  {
    productId: 'okftv-1pqpc-j27l9-f1wn5',
    image: 'images/cars/images (3).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 5000
    },
    name: 'Subaru Outback',
    price: 37000
  },
  {
    productId: '5bn85-9ux9f-am8q4-wcxtm',
    image: 'images/cars/images (4).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2000
    },
    name: 'Mazda CX-5',
    price: 38000
  },
  {
    productId: 'y3was-v3ynt-58c2x-zzysk',
    image: 'images/cars/images (5).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 1500
    },
    name: 'Toyota RAV4',
    price: 36000
  },
  {
    productId: 'nvdgy-8fbgf-w4npo-mp1yc',
    image: 'images/cars/images (6).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 4500
    },
    name: 'Volkswagen Jetta',
    price: 34000
  },
  {
    productId: '91q6x-ewmda-eub07-fb2bw',
    image: 'images/cars/images (7).jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 1300
    },
    name: 'Jeep Cherokee',
    price: 55000
  },
  {
    productId: 'ox3yl-rbw6w-l1iru-k6dh3',
    image: 'images/cars/images (8).jpg',
    rating: {
      rating_image: 'images/rating/rating(5).jpg',
      rating_people: 2300
    },
    name: 'Dodge Charger',
    price: 62000
  },
  {
    productId: 'm1yaf-dpnyy-n2nhz-eg9yi',
    image: 'images/cars/images (9).jpg',
    rating: {
      rating_image: 'images/rating/rating(2).jpg',
      rating_people: 800
    },
    name: 'Chrysler 300',
    price: 58000
  },
  {
    productId: 'pih1c-6hn7z-ynz0u-16v7k',
    image: 'images/cars/images (10).jpg',
    rating: {
      rating_image: 'images/rating/rating(3).jpg',
      rating_people: 600
    },
    name: 'Buick Enclave',
    price: 65000
  },
  {
    productId: 'odmo4-6ii9c-38y1q-dbcy1',
    image: 'images/cars/images.jpg',
    rating: {
      rating_image: 'images/rating/rating(4).jpg',
      rating_people: 2100
    },
    name: 'Honda CR-V',
    price: 40000
  },
];
