const fruits = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);

console.log(newFruits);

newFruits.add("ope ope no mi");
newFruits.add("mera mera no mi");

// console.log(newFruits);
console.log(newFruits.entries());

newFruits.add("magu magu no mi");
newFruits.add("ope ope no mi");

console.log(newFruits.has("banana"));

newFruits.clear();

let obj = new Object({ david: "001", dimas: "002" });

console.log(obj.length);
