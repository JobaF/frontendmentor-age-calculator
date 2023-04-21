import ArrowIcon from "./ArrowIcon"

function App() {
	return (
		<div className="h-screen bg-slate-100 flex items-center justify-center">
			<div className="font-poppins h-1/2 w-4/5 bg-gray-200  pt-10 rounded-md font-light flex flex-col items-center">
				<div className="flex gap-10 justify-center items-start h-1/5">
					<div className="flex flex-col">
						<label htmlFor="day">DAY</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
							type="text"
							id="day"
							name="day"
							placeholder="DD"
							maxLength={2}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="month">MONTH</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
							type="text"
							id="month"
							name="month"
							placeholder="MM"
							maxLength={2}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="year">YEAR</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold"
							type="text"
							id="year"
							name="year"
							placeholder="YYYY"
							maxLength={4}
						/>
					</div>
				</div>
				<div className="relative h-1/5 w-full flex flex-col items-center justify-center">
					<button type="button" className="bg-black rounded-full p-4 z-10">
						<ArrowIcon style={"w-6 h-6"} stroke="white" />
					</button>
					<span className="absolute w-4/5 h-0.5 bg-gray-300 z-0" />
				</div>
				<div className="h-3/5 w-full">
					<p>years</p>
					<p>months</p>
					<p>days</p>
				</div>
			</div>
		</div>
	)
}

export default App
