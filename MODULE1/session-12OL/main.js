const Queue = require("./Queue");

let objQ = new Queue();

objQ.add("burger");
objQ.add("steak");
objQ.add("ice tea");

objQ.print();

objQ.run();
