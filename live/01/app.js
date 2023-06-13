let tomb = [
	{
		termek: "🍌",
		ar: 100,
		db: 3,
	},
	{
		termek: "🍎",
		ar: 50,
		db: 8,
	},
	{
		termek: "🥝",
		ar: 150,
		db: 3,
	},
	{
		termek: "🍒",
		ar: 200,
		db: 1,
	},
	{
		termek: "🍑",
		ar: 60,
		db: 5,
	},
	{
		termek: "🥝",
		ar: 150,
		db: 6,
	},
];

let szamlaTomb = [];
let osszeg = 0;

const szamol = (elem) => {
	const { ar, db } = elem;
	const ertek = ar * db;
	osszeg += ertek;
	szamlaTomb.push({ ...elem, ertek });
};

// for (let i = 0; i < tomb.length; i++) {
// 	szamol(tomb[i]);
// }

// for (const elem of tomb) {
// 	console.log(elem);
// }

// const thisEntries = tomb.values();
// console.log(thisEntries.next());

// let elem = thisEntries.next();
// console.log(elem)

// while (!elem.done) {
// 	console.log(elem.value);
// 	szamol(elem.value);
// 	elem = thisEntries.next();
// }
console.log(szamlaTomb);
console.log({ osszeg });

// try {
// tomb.forEach((element, index, array) => {
// 	console.log(element, index, array);
// 	if (element.ar > 100) {
// 		console.log("drága");
// 		throw new Error("drága");
// 	}
// });
// } catch (error) {
// 	console.error(error.message);
// }

tomb.forEach(({ar, db}) => {
	console.log(ar * db);
	if (ar * db > 400) {
		console.log("drága");
	}
});
