import "./App.css"

function App() {
	return (
		<div className="font-poppins h-screen bg-gray-100 flex flex-col">
			<div>
				<label htmlFor="day">DAY</label>
				<input type="text" id="day" name="day" />
			</div>
			<div>
				<label htmlFor="month">MONTH</label>
				<input type="text" id="month" name="month" />
			</div>
			<div>
				<label htmlFor="year">YEAR</label>
				<input type="text" id="year" name="year" />
			</div>
		</div>
	)
}

export default App
