import "./App.css"

function App() {
	return (
		<div className="h-screen bg-slate-100 flex items-center justify-center">
			<div className="font-poppins h-1/2 w-4/5 bg-gray-200 flex gap-10 justify-center items-start pt-10 rounded-md font-light">
				<div className="flex flex-col">
					<label htmlFor="day">DAY</label>
					<input
						className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
						type="text"
						id="day"
						name="day"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="month">MONTH</label>
					<input
						className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
						type="text"
						id="month"
						name="month"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="year">YEAR</label>
					<input
						className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
						type="text"
						id="year"
						name="year"
					/>
				</div>
			</div>
		</div>
	)
}

export default App
