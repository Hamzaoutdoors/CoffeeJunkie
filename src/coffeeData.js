import React from "react";
const coffeeData = [
  {
    id: 200,
    category: 2,
    name: "Caffè Americano",
    thumbnail_image:
      "file:///productsthumbespresso-beveragescaffe-americano.jpg",
    description:
      "Espresso shots are topped with hot water to produce a light layer of crema. The result is this wonderfully rich cup with depth and nuance.",
    price: 2.2,
  },
  {
    id: 201,
    category: 2,
    name: "Caffè Latte",
    thumbnail_image: "./products/thumb/caffe-latte.jpg",
    detail_image: "./products/detail/caffe-latte.jpg",
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up.",
    price: 4,
  },
  {
    id: 202,
    category: 2,
    name: "Caffè Mocha",
    thumbnail_image: "./products/thumb/caffe-mocha.jpg",
    detail_image: "./products/detail/caffe-mocha.jpg",
    description:
      "We combine our rich, full-bodied espresso with bittersweet mocha sauce and steamed milk, then top it off with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.",
    price: 2.4,
  },
  {
    id: 203,
    category: 2,
    name: "Cappuccino",
    thumbnail_image: "./products/thumb/cappuccino.jpg",
    detail_image: "./products/detail/cappuccino.jpg",
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas' craft.",
    price: 1.9,
  },
  {
    id: 204,
    category: 2,
    name: "Caramel Macchiato",
    thumbnail_image: "./products/thumb/caramel-macchiato.jpg",
    detail_image: "./products/detail/caramel-macchiato.jpg",
    description:
      "Freshly steamed milk with vanilla-flavored syrup is marked with espresso and topped with caramel drizzle for an oh-so-sweet finish.",
    price: 1.8,
  },
  {
    id: 205,
    category: 2,
    name: "Cinnamon Dolce Latte",
    thumbnail_image: "./products/thumb/cinnamon-dolce-latte.jpg",
    detail_image: "./products/detail/cinnamon-dolce-latte.jpg",
    description:
      "We add freshly steamed milk and cinnamon dolce flavored syrup to our classic espresso, then top it off with sweetened whipped cream and cinnamon dolce topping. You're in for a treat.",
    price: 3.3,
  },
  {
    id: 206,
    category: 2,
    name: "Coconutmilk Mocha Macchiato",
    thumbnail_image: "./products/thumb/coconutmilk-mocha-macchiato.jpg",
    detail_image: "./products/detail/coconutmilk-mocha-macchiato.jpg",
    description:
      "Sumatran coconutmilk, white chocolate mocha, and Espresso roast combined with caramel drizzle and a swirl of mocha to create five perfectly-balanced layers of espresso sweetness in every sip.",
    price: 2.9,
  },
  {
    id: 207,
    category: 2,
    name: "Espresso",
    thumbnail_image: "./products/thumb/espresso.jpg",
    detail_image: "./products/detail/espresso.jpg",
    description:
      "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
    price: 3.6,
  },
  {
    id: 208,
    category: 2,
    name: "Espresso Con Panna",
    thumbnail_image: "./products/thumb/espresso-con-panna.jpg",
    detail_image: "./products/detail/espresso-con-panna.jpg",
    description:
      "Espresso meets a dollop of whipped cream to enhance the rich and caramelly flavors of a straight-up shot.",
    price: 1.7,
  },
  {
    id: 209,
    category: 2,
    name: "Espresso Macchiato",
    thumbnail_image: "./products/thumb/espresso-macchiato.jpg",
    detail_image: "./products/detail/espresso-macchiato.jpg",
    description:
      "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
    price: 1.7,
  },
  {
    id: 210,
    category: 2,
    name: "Flat White",
    thumbnail_image: "./products/thumb/flat-white.jpg",
    detail_image: "./products/detail/flat-white.jpg",
    description:
      "Bold ristretto shots of espresso get the perfect amount of steamed whole milk to create a not too strong, not too creamy, just right flavor.",
    price: 1.9,
  },
  {
    id: 211,
    category: 2,
    name: "Iced Caffè Americano",
    thumbnail_image: "./products/thumb/iced-caffe-americano.jpg",
    detail_image: "./products/detail/iced-caffe-americano.jpg",
    description:
      "Espresso shots are topped with water to produce a light layer of crema, then served over ice. The result is this wonderfully rich cup with depth and nuance.",
    price: 1.9,
  },
  {
    id: 212,
    category: 2,
    name: "Iced Caffè Latte",
    thumbnail_image: "./products/thumb/iced-caffe-latte.jpg",
    detail_image: "./products/detail/iced-caffe-latte.jpg",
    description:
      "Our dark, rich espresso is combined with milk and served over ice. A perfect milk forward warm up.",
    price: 1.9,
  },
  {
    id: 213,
    category: 2,
    name: "Iced Caffè Mocha",
    thumbnail_image: "./products/thumb/iced-caffe-mocha.jpg",
    detail_image: "./products/detail/iced-caffe-mocha.jpg",
    description:
      "Espresso combined with bittersweet mocha sauce and milk over ice. Topped with sweetened whipped cream.",
    price: 1.9,
  },
  {
    id: 214,
    category: 2,
    name: "Iced Caramel Macchiato",
    thumbnail_image: "./products/thumb/iced-caramel-macchiato.jpg",
    detail_image: "./products/detail/iced-caramel-macchiato.jpg",
    description:
      "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with caramel drizzle for an oh-so-sweet finish.",
    price: 1.9,
  },
  {
    id: 215,
    category: 2,
    name: "Iced Cinnamon Dolce Latte",
    thumbnail_image: "./products/thumb/iced-cinnamon-dolce-latte.jpg",
    detail_image: "./products/detail/iced-cinnamon-dolce-latte.jpg",
    description:
      "We add milk and cinnamon dolce flavored syrup to our signature espresso and ice, then top it off with sweetened whipped cream and cinnamon dolce topping. You're in for a treat.",
    price: 2.5,
  },
  {
    id: 216,
    category: 2,
    name: "Iced Coconutmilk Mocha Macchiato",
    thumbnail_image: "./products/thumb/iced-coconut-mocha.jpg",
    detail_image: "./products/detail/iced-coconut-mocha.jpg",
    description:
      "Chilled Sumatran coconutmilk, white chocolate mocha, and Espresso roast combine with caramel drizzle and a swirl of mocha to create five perfectly-balanced layers of espresso sweetness in every sip.",
    price: 2.5,
  },
  {
    id: 217,
    category: 2,
    name: "Iced Skinny Cinnamon Dolce Latte",
    thumbnail_image: "./products/thumb/iced-skinny-cinnamon-dolce-latte.jpg",
    detail_image: "./products/detail/iced-skinny-cinnamon-dolce-latte.jpg",
    description:
      "Espresso, steamed non-fat milk, sugar-free cinnamon dolce flavored syrup and ice get a cinnamon dolce topping for a drink that says you can have it all.",
    price: 2.5,
  },
  {
    id: 218,
    category: 2,
    name: "Iced Skinny Latte",
    thumbnail_image: "./products/thumb/iced-skinny-latte.jpg",
    detail_image: "./products/detail/iced-skinny-latte.jpg",
    description:
      "Bittersweet skinny mocha sauce, espresso and non-fat milk served over ice.",
    price: 2.5,
  },
  {
    id: 219,
    category: 2,
    name: "Iced Vanilla Latte",
    thumbnail_image: "./products/thumb/iced-vanilla-latte.jpg",
    detail_image: "./products/detail/iced-vanilla-latte.jpg",
    description:
      "Rich, full-bodied espresso blended with milk and vanilla syrup, served over ice.",
    price: 2.5,
  },
  {
    id: 220,
    category: 2,
    name: "Iced White Chocolate Mocha",
    thumbnail_image: "./products/thumb/iced-white-chocolate-mocha.jpg",
    detail_image: "./products/detail/iced-white-chocolate-mocha.jpg",
    description:
      "Our signature espresso meets white chocolate sauce, milk and ice, then is finished off with sweetened whipped cream in this white chocolate delight.",
    price: 3.7,
  },
  {
    id: 221,
    category: 2,
    name: "Latte Macchiato",
    thumbnail_image: "./products/thumb/latte-macchiato.jpg",
    detail_image: "./products/detail/latte-macchiato.jpg",
    description:
      "This espresso classic has espresso shots slowly poured over lightly aerated milk for a bold and roasty new way to sip.",
    price: 2.1,
  },
  {
    id: 222,
    category: 2,
    name: "Skinny Mocha",
    thumbnail_image: "./products/thumb/skiny-mocha.jpg",
    detail_image: "./products/detail/skiny-mocha.jpg",
    description:
      "Bittersweet skinny mocha sauce, espresso and steamed non-fat milk are lightly topped with foam. Sip on the lighter side of sweet.",
    category: 2,
    price: 2.2,
  },
  {
    id: 223,
    category: 2,
    name: "Vanilla Latte",
    thumbnail_image: "./products/thumb/vanilla-latte.jpg",
    detail_image: "./products/detail/vanilla-latte.jpg",
    description:
      "Rich, full-bodied espresso blended with creamy steamed milk and vanilla syrup.",
    price: 3.1,
  },
  {
    id: 224,
    category: 2,
    name: "White Chocolate Mocha",
    thumbnail_image: "./products/thumb/white-chocolate-mocha.jpg",
    detail_image: "./products/detail/white-chocolate-mocha.jpg",
    description:
      "Our signature espresso meets white chocolate sauce and steamed milk, then is finished off with sweetened whipped cream in this white chocolate delight.",
    price: 2.3,
  },
];

export default coffeeData;
