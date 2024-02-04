// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Agnes) {
    cats.push(Agnes);
}

function destructivelyPrependCat(Orangey) {
    cats.unshift(Orangey);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(Snowy) {
    return [...cats, Snowy];
}
function prependCat(Midnight) {
    return [Midnight, ...cats]
}
function removeLastCat() {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat() {
    return cats.slice(1);
}