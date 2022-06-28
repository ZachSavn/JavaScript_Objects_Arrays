console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}
console.log(arraySum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};
book.title = "Name of the Wind by Patrick Rothfuss";
book.pages = 662;
book.readCount = 5;
book.info = () => {
  return `${book.title}, ${book.pages} pages, read ${book.readCount} times.`;
};

console.log(book.info());
