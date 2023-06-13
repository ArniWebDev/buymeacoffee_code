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

for (let i = 0; i < tomb.length; i++) {
	szamol(tomb[i]);
}

console.log(szamlaTomb);
console.log({ osszeg });
