import "./App.css";

const tomb = [
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

function Lista() {
	return (
		<ul className='lista'>
			{tomb.map((elem, index) => {
				return (
					<li key={index}>
						{elem.termek} - {elem.ar} Ft - {elem.db} db
					</li>
				);
			})}
		</ul>
	);
}

function App() {
	return (
		<>
			<h1>React [ ].map( )</h1>
			<Lista />
		</>
	);
}

export default App;
