console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    //iterate over array
    //reduce and give back sum
    let sum = 0;

    arr.forEach((num) => {
        sum += num;        
    });

        //for loop version
       // for (let i = 0; i < arr.length; i++){
       //     sum += arr[i];
    //}

    return sum;
}
console.log(arraySum(numbers))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 662,
    read: 7,
    pub: "DAW",
    pubyear: 2007,
    sequel: "The Wise Man's Fear"
};

function info(){
    console.log(`${this.title} bu ${this.author} is ${this.pages} long.\n It's my favorite book so I've read it ${this.read} times!\n It was published in ${this.pubyear} by ${this.pub}\n it has one sequel named ${this.sequel}.`);
}

book.info = info;

book.info();
