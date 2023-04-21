import { useState } from "react"
import ArrowIcon from "./ArrowIcon"

interface DateState {
	day: number | null
	month: number | null
	year: number | null
}

function App() {
	const [date, setDate] = useState<DateState>({
		day: null,
		month: null,
		year: null,
	})

	const [timeToDate, setTimeToDate] = useState<DateState>({
		day: null,
		month: null,
		year: null,
	})

	return (
		<div className="h-screen bg-slate-100 flex items-center justify-center">
			<div className="font-poppins h-1/2 w-4/5 bg-gray-200  pt-10 rounded-md font-light flex flex-col items-center shadow-lg">
				<div className="flex gap-8 justify-center items-start h-1/5">
					<div className="flex flex-col">
						<label htmlFor="day">DAY</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold shadow-lg"
							type="text"
							id="day"
							name="day"
							placeholder="DD"
							maxLength={2}
							onChange={(e) =>
								setDate((prev) => ({
									...prev,
									day: isNaN(parseInt(e.target.value))
										? null
										: parseInt(e.target.value),
								}))
							}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="month">MONTH</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold shadow-lg"
							type="text"
							id="month"
							name="month"
							placeholder="MM"
							maxLength={2}
							onChange={(e) =>
								setDate((prev) => ({
									...prev,
									month: isNaN(parseInt(e.target.value))
										? null
										: parseInt(e.target.value),
								}))
							}
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="year">YEAR</label>
						<input
							className="w-16 h-10 rounded-md border border-gray-300 text-center text-lg font-bold shadow-lg"
							type="text"
							id="year"
							name="year"
							placeholder="YYYY"
							maxLength={4}
							onChange={(e) =>
								setDate((prev) => ({
									...prev,
									year: isNaN(parseInt(e.target.value))
										? null
										: parseInt(e.target.value),
								}))
							}
						/>
					</div>
				</div>
				<div className="relative h-1/5 w-full flex flex-col items-center justify-center">
					<button
						type="button"
						className="bg-black rounded-full p-4 z-10 hover:bg-gray-500"
					>
						<ArrowIcon style={"w-6 h-6"} stroke="white" />
					</button>
					<span className="absolute w-4/5 h-0.5 bg-gray-300 z-0" />
				</div>
				<div className="h-3/5 w-full text-center flex flex-col justify-stat pt-10 text-4xl gap-5 font-bold">
					<p>
						<span className="text-purple-700">
							{timeToDate.year ? date.year : "--"}
						</span>{" "}
						years
					</p>
					<p>
						<span className="text-purple-700">
							{timeToDate.month ? date.month : "--"}
						</span>{" "}
						months
					</p>
					<p>
						<span className="text-purple-700">
							{timeToDate.day ? date.day : "--"}
						</span>{" "}
						days
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
