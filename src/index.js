// create a HashMap class or factory function
// it should have at least two variables for load factor and capacity

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 12;
    this.size = 0;
    this.table = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  resize() {
    this.capacity *= 2;
    const oldTable = this.table;
    this.table = new Array(this.capacity);
    this.size = 0;

    oldTable.forEach((bucket) => {
      if (bucket !== null) {
        Object.keys(bucket).forEach((key) => {
          this.set(key, bucket[key]);
        });
      }
    });

    console.log(`Hash map resized. New capacity: ${this.capacity}`);
  }

  set(key, value) {
    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }

    const bucket = this.hash(key);

    if (bucket < 0 || bucket >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    if (this.table[bucket] && this.table[bucket].hasOwnProperty(key)) {
      console.log(
        `Collision detected! Key: "${key}" is overwriting bucket ${bucket} which already holds Key: "${key}" and Value: "${this.table[bucket][key]}".`
      );
    }

    if (!this.table[bucket]) {
      this.table[bucket] = {};
    }

    this.table[bucket][key] = value;
    this.size++;
    console.log(`HashMap after setting "${key}":`, this.table);
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
  get(key) {
    const bucket = this.hash(key);

    if (!this.table[bucket]) {
      return null;
    }

    return this.table[bucket];
  }

  // has(key) takes one key as an argument and returns true or false based on whether or not the key is in the hash map
  has(key) {
    const bucket = this.hash(key);

    if (!this.table[bucket]) {
      return false;
    }

    return this.table[bucket].hasOwnProperty(key);
  }

  // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn't in the hash map,it should return false.

  remove(key) {
    const bucket = this.hash(key);

    if (this.table[bucket]) {
      this.table[bucket] = null;
      return true;
    }
    return false;
  }

  // length(key) returns the number of stored keys in the hash map.
  length() {
    let array = this.table;
    let arrayCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        arrayCount++;
      }
    }
    return arrayCount;
  }

  //clear () removes all entries in the hash map
  clear() {
    this.table = new Array(this.capacity);
  }

  //keys() returns an array containing all the keys inside the hash map
  keys() {
    let counterArray = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null && typeof this.table[i] === "object") {
        counterArray.push(...Object.keys(this.table[i]));
      }
    }
    return counterArray;
  }

  //values() returns an array containing all the value
  values() {
    let counterArray = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null && typeof this.table[i] === "object") {
        counterArray.push(...Object.values(this.table[i]));
      }
    }
    return counterArray;
  }

  // entries() returns an array that contains each key,value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]
  entries() {
    let counterArray = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== null && typeof this.table[i] === "object") {
        // Loop over the keys in this object and push the [key, value] pair into counterArray
        Object.keys(this.table[i]).forEach((key) => {
          counterArray.push([key, this.table[i][key]]);
        });
      }
    }
    return counterArray;
  }
}
// const map = new HashMap();
// map.set("banana", 1);
// // Logs: HashMap after setting "apple": [[null], [null], ... , ["apple", 1]]

// map.set("apple", 2);
// // Logs: HashMap after setting "banana": [[null], [null], ..., ["apple", 1], ["banana", 2]]

// // test get
// let getApple = map.get("apple");
// console.log("Get Test:", getApple);

// // test has
// let hasOrange = map.has("orange");
// console.log("Has Test", hasOrange);

// // test remove
// let removeApple = map.remove("apple");
// console.log("Remove Test", map);

// // length remove
// let hashMapLength = map.length();
// console.log("Length Test", hashMapLength);

// // // test clear
// // let clearMap = map.clear();
// // console.log("Clear Test", map);

// // test keys counter
// let counter = map.keys();
// console.log("Keys Test", counter);

// // test keys counter
// let counterValues = map.values();
// console.log("Values Test", counterValues);

// let counterPairs = map.entries();
// console.log("Test Counter Pair", counterPairs);
