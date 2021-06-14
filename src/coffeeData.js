const coffeeData = [
  {
    id: 100,
    categories: 1,
    name: "Blonde Roast",
    thumbnail_image: "./products/thumb/freshly-brewed-coffee/blonde-roast.jpg",
    detail_image: "./products/detail/freshly-brewed-coffee/blonde-roast.jpg",
    description:
      "Lightly roasted coffee that's soft, mellow and flavorful. Easy-drinking on its own and delicious with milk, sugar or flavored with vanilla, caramel or hazelnut.",
    price: 1.0,
  },
  {
    id: 101,
    categories: 1,
    name: "Caffe Misto",
    thumbnail_image: "./products/thumb/freshly-brewed-coffee/caffe-misto.jpg",
    detail_image: "./products/detail/freshly-brewed-coffee/caffe-misto.jpg",
    description:
      "A one-to-one mix of fresh brewed coffee and steamed milk add up to one distinctly delicious coffee drink.",
    price: 1.0,
  },
  {
    id: 102,
    categories: 1,
    name: "Decaf Roast",
    thumbnail_image: "./products/thumb/freshly-brewed-coffee/decaf-coffee.jpg",
    detail_image: "./products/detail/freshly-brewed-coffee/decaf-coffee.jpg",
    description:
      "Our signature medium roasted coffee with a smooth, balanced and rich flavor, minus the caffeine.",
    price: 1.0,
  },
  {
    id: 103,
    categories: 1,
    name: "Featured Dark Roast",
    thumbnail_image:
      "./products/thumb/freshly-brewed-coffee/featured-dark-roast.jpg",
    detail_image:
      "./products/detail/freshly-brewed-coffee/featured-dark-roast.jpg",
    description:
      "This full-bodied dark roast coffee has the bold, robust flavors to showcase our roasting and blending artistry.",
    price: 1.0,
  },
  {
    id: 104,
    categories: 1,
    name: "Nitro Cold Brew",
    thumbnail_image:
      "./products/thumb/freshly-brewed-coffee/nitro-cold-brew.jpg",
    detail_image: "./products/detail/freshly-brewed-coffee/nitro-cold-brew.jpg",
    description:
      "Our small-batch cold brew—slow-steeped for a super smooth taste—gets even better. We're infusing it with nitrogen for a naturally sweet flavor and cascading, velvety crema. Perfection is served.",
    price: 1.0,
  },
  {
    id: 105,
    categories: 1,
    name: "Nitro Cold Brew with Sweet Cream",
    thumbnail_image:
      "./products/thumb/freshly-brewed-coffee/nitro-cold-brew-sweet-cream.jpg",
    detail_image:
      "./products/detail/freshly-brewed-coffee/nitro-cold-brew-sweet-cream.jpg",
    description:
      "Served cold, straight from the tap, our Nitro Cold Brew is topped with a float of house-made vanilla sweet cream. The result is a subtly-sweet cascade of velvety coffee that is more sippable than ever.",
    price: 1.0,
  },
  {
    id: 106,
    categories: 1,
    name: "Toasted Coconut Cold Brew",
    thumbnail_image:
      "./products/thumb/freshly-brewed-coffee/toasted-coconut-cold-brew.jpg",
    detail_image:
      "./products/detail/freshly-brewed-coffee/toasted-coconut-cold-brew.jpg",
    description:
      "We'll bring the coconut, you bring a beach state of mind... Refreshing and balanced Nariño 70 Cold Brew is sweetened with flavors of toasted coconut and honey, then finished with a float of coconutmilk.",
    price: 1.0,
  },
  {
    id: 107,
    categories: 1,
    name: "Vanilla Sweet Cream Cold Brew",
    thumbnail_image:
      "./products/thumb/freshly-brewed-coffee/vanilla-sweet-cream-cold-brew.jpg",
    detail_image:
      "./products/detail/freshly-brewed-coffee/vanilla-sweet-cream-cold-brew.jpg",
    description:
      "Just before serving, our slow-steeped custom blend Nariño 70 Cold Brew is topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup.",
    price: 1.0,
  },
  {
    id: 200,
    categories: 2,
    name: "Caffè Americano",
    thumbnail_image: "./products/thumb/espresso-beverages/caffe-americano.jpg",
    detail_image: "./products/detail/espresso-beverages/caffe-americano.jpg",
    description:
      "Espresso shots are topped with hot water to produce a light layer of crema. The result is this wonderfully rich cup with depth and nuance.",
    price: 1.0,
  },
  {
    id: 201,
    categories: 2,
    name: "Caffè Latte",
    thumbnail_image: "./products/thumb/espresso-beverages/caffe-latte.jpg",
    detail_image: "./products/detail/espresso-beverages/caffe-latte.jpg",
    description:
      "Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk forward warm up.",
    price: 1.0,
  },
  {
    id: 202,
    categories: 2,
    name: "Caffè Mocha",
    thumbnail_image: "./products/thumb/espresso-beverages/caffe-mocha.jpg",
    detail_image: "./products/detail/espresso-beverages/caffe-mocha.jpg",
    description:
      "We combine our rich, full-bodied espresso with bittersweet mocha sauce and steamed milk, then top it off with sweetened whipped cream. The classic coffee drink to satisfy your sweet tooth.",
    price: 1.0,
  },
  {
    id: 203,
    categories: 2,
    name: "Cappuccino",
    thumbnail_image: "./products/thumb/espresso-beverages/cappuccino.jpg",
    detail_image: "./products/detail/espresso-beverages/cappuccino.jpg",
    description:
      "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas' craft.",
    price: 1.0,
  },
  {
    id: 204,
    categories: 2,
    name: "Caramel Macchiato",
    thumbnail_image:
      "./products/thumb/espresso-beverages/caramel-macchiato.jpg",
    detail_image: "./products/detail/espresso-beverages/caramel-macchiato.jpg",
    description:
      "Freshly steamed milk with vanilla-flavored syrup is marked with espresso and topped with caramel drizzle for an oh-so-sweet finish.",
    price: 1.0,
  },
  {
    id: 205,
    categories: 2,
    name: "Cinnamon Dolce Latte",
    thumbnail_image:
      "./products/thumb/espresso-beverages/cinnamon-dolce-latte.jpg",
    detail_image:
      "./products/detail/espresso-beverages/cinnamon-dolce-latte.jpg",
    description:
      "We add freshly steamed milk and cinnamon dolce flavored syrup to our classic espresso, then top it off with sweetened whipped cream and cinnamon dolce topping. You're in for a treat.",
    price: 1.0,
  },
  {
    id: 206,
    categories: 2,
    name: "Coconutmilk Mocha Macchiato",
    thumbnail_image:
      "./products/thumb/espresso-beverages/coconutmilk-mocha-macchiato.jpg",
    detail_image:
      "./products/detail/espresso-beverages/coconutmilk-mocha-macchiato.jpg",
    description:
      "Sumatran coconutmilk, white chocolate mocha, and Espresso roast combined with caramel drizzle and a swirl of mocha to create five perfectly-balanced layers of espresso sweetness in every sip.",
    price: 1.0,
  },
  {
    id: 207,
    categories: 2,
    name: "Espresso",
    thumbnail_image: "./products/thumb/espresso-beverages/espresso.jpg",
    detail_image: "./products/detail/espresso-beverages/espresso.jpg",
    description:
      "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.",
    price: 1.0,
  },
  {
    id: 208,
    categories: 2,
    name: "Espresso Con Panna",
    thumbnail_image:
      "./products/thumb/espresso-beverages/espresso-con-panna.jpg",
    detail_image: "./products/detail/espresso-beverages/espresso-con-panna.jpg",
    description:
      "Espresso meets a dollop of whipped cream to enhance the rich and caramelly flavors of a straight-up shot.",
    price: 1.0,
  },
  {
    id: 209,
    categories: 2,
    name: "Espresso Macchiato",
    thumbnail_image:
      "./products/thumb/espresso-beverages/espresso-macchiato.jpg",
    detail_image: "./products/detail/espresso-beverages/espresso-macchiato.jpg",
    description:
      "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.",
    price: 1.0,
  },
  {
    id: 210,
    categories: 2,
    name: "Flat White",
    thumbnail_image: "./products/thumb/espresso-beverages/flat-white.jpg",
    detail_image: "./products/detail/espresso-beverages/flat-white.jpg",
    description:
      "Bold ristretto shots of espresso get the perfect amount of steamed whole milk to create a not too strong, not too creamy, just right flavor.",
    price: 1.0,
  },
  {
    id: 211,
    categories: 2,
    name: "Iced Caffè Americano",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-caffe-americano.jpg",
    detail_image:
      "./products/detail/espresso-beverages/iced-caffe-americano.jpg",
    description:
      "Espresso shots are topped with water to produce a light layer of crema, then served over ice. The result is this wonderfully rich cup with depth and nuance.",
    price: 1.0,
  },
  {
    id: 212,
    categories: 2,
    name: "Iced Caffè Latte",
    thumbnail_image: "./products/thumb/espresso-beverages/iced-caffe-latte.jpg",
    detail_image: "./products/detail/espresso-beverages/iced-caffe-latte.jpg",
    description:
      "Our dark, rich espresso is combined with milk and served over ice. A perfect milk forward warm up.",
    price: 1.0,
  },
  {
    id: 213,
    categories: 2,
    name: "Iced Caffè Mocha",
    thumbnail_image: "./products/thumb/espresso-beverages/iced-caffe-mocha.jpg",
    detail_image: "./products/detail/espresso-beverages/iced-caffe-mocha.jpg",
    description:
      "Espresso combined with bittersweet mocha sauce and milk over ice. Topped with sweetened whipped cream.",
    price: 1.0,
  },
  {
    id: 214,
    categories: 2,
    name: "Iced Caramel Macchiato",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-caramel-macchiato.jpg",
    detail_image:
      "./products/detail/espresso-beverages/iced-caramel-macchiato.jpg",
    description:
      "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with caramel drizzle for an oh-so-sweet finish.",
    price: 1.0,
  },
  {
    id: 215,
    categories: 2,
    name: "Iced Cinnamon Dolce Latte",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-cinnamon-dolce-latte.jpg",
    detail_image:
      "./products/detail/espresso-beverages/iced-cinnamon-dolce-latte.jpg",
    description:
      "We add milk and cinnamon dolce flavored syrup to our signature espresso and ice, then top it off with sweetened whipped cream and cinnamon dolce topping. You're in for a treat.",
    price: 1.0,
  },
  {
    id: 216,
    categories: 2,
    name: "Iced Coconutmilk Mocha Macchiato",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-coconut-mocha.jpg",
    detail_image: "./products/detail/espresso-beverages/iced-coconut-mocha.jpg",
    description:
      "Chilled Sumatran coconutmilk, white chocolate mocha, and Espresso roast combine with caramel drizzle and a swirl of mocha to create five perfectly-balanced layers of espresso sweetness in every sip.",
    price: 1.0,
  },
  {
    id: 217,
    categories: 2,
    name: "Iced Skinny Cinnamon Dolce Latte",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-skinny-cinnamon-dolce-latte.jpg",
    detail_image:
      "./products/detail/espresso-beverages/iced-skinny-cinnamon-dolce-latte.jpg",
    description:
      "Espresso, steamed non-fat milk, sugar-free cinnamon dolce flavored syrup and ice get a cinnamon dolce topping for a drink that says you can have it all.",
    price: 1.0,
  },
  {
    id: 218,
    categories: 2,
    name: "Iced Skinny Latte",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-skinny-latte.jpg",
    detail_image: "./products/detail/espresso-beverages/iced-skinny-latte.jpg",
    description:
      "Bittersweet skinny mocha sauce, espresso and non-fat milk served over ice.",
    price: 1.0,
  },
  {
    id: 219,
    categories: 2,
    name: "Iced Vanilla Latte",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-vanilla-latte.jpg",
    detail_image: "./products/detail/espresso-beverages/iced-vanilla-latte.jpg",
    description:
      "Rich, full-bodied espresso blended with milk and vanilla syrup, served over ice.",
    price: 1.0,
  },
  {
    id: 220,
    categories: 2,
    name: "Iced White Chocolate Mocha",
    thumbnail_image:
      "./products/thumb/espresso-beverages/iced-white-chocolate-mocha.jpg",
    detail_image:
      "./products/detail/espresso-beverages/iced-white-chocolate-mocha.jpg",
    description:
      "Our signature espresso meets white chocolate sauce, milk and ice, then is finished off with sweetened whipped cream in this white chocolate delight.",
    price: 1.0,
  },
  {
    id: 221,
    categories: 2,
    name: "Latte Macchiato",
    thumbnail_image: "./products/thumb/espresso-beverages/latte-macchiato.jpg",
    detail_image: "./products/detail/espresso-beverages/latte-macchiato.jpg",
    description:
      "This espresso classic has espresso shots slowly poured over lightly aerated milk for a bold and roasty new way to sip.",
    price: 1.0,
  },
  {
    id: 222,
    categories: 2,
    name: "Skinny Mocha",
    thumbnail_image: "./products/thumb/espresso-beverages/skinny-mocha.jpg",
    detail_image: "./products/detail/espresso-beverages/skinny-mocha.jpg",
    description:
      "Bittersweet skinny mocha sauce, espresso and steamed non-fat milk are lightly topped with foam. Sip on the lighter side of sweet.",
    categories: 2,
    price: 1.0,
  },
  {
    id: 223,
    categories: 2,
    name: "Vanilla Latte",
    thumbnail_image: "./products/thumb/espresso-beverages/vanilla-latte.jpg",
    detail_image: "./products/detail/espresso-beverages/vanilla-latte.jpg",
    description:
      "Rich, full-bodied espresso blended with creamy steamed milk and vanilla syrup.",
    price: 1.0,
  },
  {
    id: 224,
    categories: 2,
    name: "White Chocolate Mocha",
    thumbnail_image:
      "./products/thumb/espresso-beverages/white-chocolate-mocha.jpg",
    detail_image:
      "./products/detail/espresso-beverages/white-chocolate-mocha.jpg",
    description:
      "Our signture espresso meets white chocolate sauce and steamed milk, then is finished off with sweetened whipped cream in this white chocolate delight.",
    price: 1.0,
  },
  {
    id: 300,
    categories: 3,
    name: "Iced Coffee",
    thumbnail_image: "./products/thumb/iced-coffee/iced-coffee.jpg",
    detail_image: "./products/detail/iced-coffee/iced-coffee.jpg",
    description:
      "Freshly brewed Starbucks® Iced Coffee Blend served chilled and lightly sweetened over ice.",
    price: 1.0,
  },
  {
    id: 301,
    categories: 3,
    name: "Iced Coffee with Milk",
    thumbnail_image: "./products/thumb/iced-coffee/iced-coffee-with-milk.jpg",
    detail_image: "./products/detail/iced-coffee/iced-coffee-with-milk.jpg",
    description:
      "Freshly brewed Starbucks® Iced Coffee Blend with milk – served chilled and lightly sweetened over ice.",
    price: 1.0,
  },
  {
    id: 400,
    categories: 4,
    name: "Shaken Sweet Tea",
    thumbnail_image: "./products/thumb/iced-tea/shaken-sweet-tea.jpg",
    detail_image: "./products/detail/iced-tea/shaken-sweet-tea.jpg",
    description:
      "A nourishing blend of mocha flavored sauce, a whole banana, milk, whey protein and fiber powder, and ice.",
    price: 1.0,
  },
  {
    id: 401,
    categories: 4,
    name: "Shaken Iced Black Tea",
    thumbnail_image: "./products/thumb/iced-tea/shaken-iced-black-tea.jpg",
    detail_image: "./products/detail/iced-tea/shaken-iced-black-tea.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 402,
    categories: 4,
    name: "Shaken Iced Black Tea Lemonade",
    thumbnail_image:
      "./products/thumb/iced-tea/shaken-iced-black-tea-lemonade.jpg",
    detail_image:
      "./products/detail/iced-tea/shaken-iced-black-tea-lemonade.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 403,
    categories: 4,
    name: "Shaken Iced Green Tea",
    thumbnail_image: "./products/thumb/iced-tea/shaken-iced-green-tea.jpg",
    detail_image: "./products/detail/iced-tea/shaken-iced-green-tea.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 404,
    categories: 4,
    name: "Shaken Iced Green Tea Lemonade",
    thumbnail_image:
      "./products/thumb/iced-tea/shaken-iced-green-tea-lemonade.jpg",
    detail_image:
      "./products/detail/iced-tea/shaken-iced-green-tea-lemonade.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 405,
    categories: 4,
    name: "Shaken Iced Passion Tango Tea",
    thumbnail_image: "./products/thumb/iced-tea/shaken-iced-passion-tango.jpg",
    detail_image: "./products/detail/iced-tea/shaken-iced-passion-tango.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 406,
    categories: 4,
    name: "Shaken Iced Passion Tango Tea Lemonade",
    thumbnail_image:
      "./products/thumb/iced-tea/shaken-iced-passion-tango-lemonade.jpg",
    detail_image:
      "./products/detail/iced-tea/shaken-iced-passion-tango-lemonade.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 407,
    categories: 4,
    name: "Shaken Iced Peach Green Tea",
    thumbnail_image:
      "./products/thumb/iced-tea/shaken-iced-peach-green-tea.jpg",
    detail_image: "./products/detail/iced-tea/shaken-iced-peach-green-tea.jpg",
    description:
      "A whole banana, natural shaken-iced puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
  {
    id: 500,
    categories: 5,
    name: "Chocolate Smoothie",
    thumbnail_image: "./products/thumb/smoothies/chocolate-smoothie.jpg",
    detail_image: "./products/detail/smoothies/chocolate-smoothie.jpg",
    description:
      "A nourishing blend of mocha flavored sauce, a whole banana, milk, whey protein and fiber powder, and ice.",
    price: 1.0,
  },
  {
    id: 501,
    categories: 5,
    name: "Strawberry Smoothie",
    thumbnail_image: "./products/thumb/smoothies/strawberry-smoothie.jpg",
    detail_image: "./products/detail/smoothies/strawberry-smoothie.jpg",
    description:
      "A whole banana, natural strawberry puree, milk and our special powder mix of whey protein and fiber are blended with ice. Nourish your body and treat your tastebuds.",
    price: 1.0,
  },
];

export default coffeeData;
