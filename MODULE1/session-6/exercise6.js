function calculateDataStudent(dataStudent) {
  const result = {
    score: {
      highest: dataStudent[0].score,
      lowest: dataStudent[0].score,
      average: 0,
    },
    age: {
      highest: dataStudent[0].age,
      lowest: dataStudent[0].age,
      average: 0,
    },
  };

  let totalAge = 0;
  let totalScore = 0;

  for (item of dataStudent) {
    if (item.score > result.score.highest) {
      result.score.highest = item.score;
    }

    if (item.score < result.score.lowest) {
      result.score.lowest = item.score;
    }

    if (item.age > result.age.highest) {
      result.age.highest = item.age;
    }

    if (item.age < result.age.lowest) {
      result.age.lowest = item.age;
    }

    totalScore += item.score;
    totalAge += item.age;
  }

  result.score.average = Math.round(totalScore / dataStudent.length);
  result.age.average = Math.round(totalAge / dataStudent.length);

  return result;
}

const dataStudent = [
  { name: "Aries D", email: "aries@purwadhika.com", age: 27, score: 90 },
  { name: "Rian D", email: "rian@purwadhika.com", age: 25, score: 85 },
  { name: "Go D Ussop", email: "ussop@purwadhika.com", age: 23, score: 87 },
  { name: "sogeking", email: "sogeking@purwadhika.com", age: 24, score: 89 },
];

console.log(calculateDataStudent(dataStudent));

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total = 0;
  constructor() {
    this.productCart = [];
  }

  addToCart(product, qty) {
    this.productCart.push({
      product: JSON.stringify(product),
      qty: qty,
      subtotal: product.price * qty,
    });

    for (item of this.productCart) {
      this.#total += item.subtotal;
      //console.log(item.subtotal);
    }
  }

  get showTotal() {
    return this.#total;
  }

  get checkOut() {
    return {
      products: this.productCart,
      total: this.#total,
    };
  }
}

product1 = new Product("Asus Gaming B35 Motherboard", 1500000);
product2 = new Product("Casing Tower NZXT Black", 1300000);
product3 = new Product("AOC monitor 27inch", 2300000);

transaction1 = new Transaction();

transaction1.addToCart(product1, 2);
transaction1.addToCart(product3, 3);

console.log(transaction1.showTotal);

console.log(transaction1.checkOut);
