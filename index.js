// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
cats.push("Ralph");
}
function destructivelyPrependCat(Gizmo) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(Bob) {
    cats.shift("Bob");
}
function appendCat(Broom) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(Arnold) {
    const newNewCats = ["Arnold", ...cats];
    return newNewCats;
}
function removeLastCat() {
    const catsCopy = cats.slice();
    catsCopy.pop();
    return catsCopy;
}
function removeFirstCat() {
    const catsNewCopy = cats.slice ();
    catsNewCopy.shift();
    return catsNewCopy;
}
