import { HashMap } from "./index.js";

const test = new HashMap();

function populateHashMap() {
  test.set("apple", "red");
  test.set("banana", "yellow");
  test.set("carrot", "orange");
  test.set("dog", "brown");
  test.set("elephant", "gray");
  test.set("frog", "green");
  test.set("grape", "purple");
  test.set("hat", "black");
  test.set("ice cream", "white");
  test.set("jacket", "blue");
  test.set("kite", "pink");
  test.set("lion", "golden");
  console.log(test);
}

(function populateHashMapTrigger() {
  populateHashMap();
  console.log("Before", test);
  console.log("Before Length", test.length());
})();

test.set("banana", "yellow with orange spots");
test.set("moon", "silver");
console.log("After", test);
