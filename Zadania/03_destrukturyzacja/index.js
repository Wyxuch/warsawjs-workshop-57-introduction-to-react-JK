const [potato, spaghetti, ...other] = ["mashed potatos", "mom's spaghetti", "other random stuff1", "other random stuff2", "other random stuff3"];
const randomObject = {a: 10, b: 22, c: 333};

console.log(potato)
console.log(spaghetti)
console.log(other)

const displayC = ({ c }) => {
    console.log(c)
}

displayC(randomObject)