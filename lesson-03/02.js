​const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange() {
    const pos = words.indexOf("апельсин");
    return pos === -1 ? "Придется поискать в другом магазине…" : "Ура! нашел";
}

console.log(findOrange());