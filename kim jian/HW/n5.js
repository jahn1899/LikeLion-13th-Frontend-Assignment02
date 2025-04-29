let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];

color.push("Babyblue", "Pink");

let greenIndex = color.indexOf("Green");

let removed = color.splice(greenIndex, 1, "Lightgreen");

console.log(removed[0]);

console.log(color);

console.log(color.length);