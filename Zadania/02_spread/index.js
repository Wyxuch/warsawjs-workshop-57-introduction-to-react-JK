const randomArray = ["mashed potatos", "mom's spaghetti", "other random stuff"];

// Zadanie 1
const newArray1 = [...randomArray, 'orange'];
console.log(newArray1);

const fruitsArray = ['orange', 'apple', 'plum'];
const newArray2 = [...randomArray, ...fruitsArray];
console.log(newArray2)

// Zadanie 2
const sum = (...args) => {
    return args.reduce((previous, current) => previous + current)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))