const testValues = [
	{
		value: null,
		expectedResult: false,
	},
	{
		value: undefined,
		expectedResult: false,
	},
	{
		value: true,
		expectedResult: true,
	},
	{
		value: false,
		expectedResult: false,
	},
	{
		value: 0,
		expectedResult: false,
	},
	{
		value: 10,
		expectedResult: true,
	},
	{
		value: NaN,
		expectedResult: false,
	},
	{
		value: "",
		expectedResult: false,
	},
	{
		value: "string",
		expectedResult: true,
	},
	{
		value: {},
		expectedResult: false,
	},
	{
		value: { name: "Arni" },
		expectedResult: true,
	},
	{
		value: [],
		expectedResult: false,
	},
	{
		value: [1, 2, 3],
		expectedResult: true,
	},
];

const testIsTrue = () => {
	testValues.forEach(({ value, expectedResult }) => {
		const status = isTrue(value) === expectedResult ? "✅" : "❌";
		console.log(status, value);
	});
};

const isTrue = (value) => {
	return typeof value === "object" &&
		value !== null &&
		!Object.keys(value).length
		? false
		: !!value;
};

testIsTrue();