import { ChangeEvent, useState } from "react"
import ArrowIcon from "./ArrowIcon"
import intervalToDuration from "date-fns/intervalToDuration"

interface DateState {
	day: number | null
	month: number | null
	year: number | null
}

interface InvalidInputFieldState {
	dayInvalid: boolean
	monthInvalid: boolean
	yearInvalid: boolean
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

	const [invalidInputFields, setInvalidInputFields] =
		useState<InvalidInputFieldState>({
			dayInvalid: false,
			monthInvalid: false,
			yearInvalid: false,
		})

	const handleButtonClick = (): void => {
		// validate whole date
		if (
			!invalidInputFields.dayInvalid &&
			!invalidInputFields.monthInvalid &&
			!invalidInputFields.yearInvalid
		) {
			const tryDate = new Date(
				`${date.year?.toString().padStart(4, "0")}-${date.month
					?.toString()
					.padStart(2, "0")}-${date.day?.toString().padStart(2, "0")}`
			)

			if (!isNaN(tryDate.getTime())) {
				// valid date

				// if date is after todays date in this year
				if (tryDate.getTime() - Date.now() > 0) {
					setTimeToDate({
						day: null,
						month: null,
						year: null,
					})
					const buttonElement = document.getElementById("calcButton")
					if (buttonElement) {
						buttonElement?.classList.add("bg-red-500")
						buttonElement?.classList.add("animate-wiggle")
						setTimeout(function () {
							buttonElement?.classList.remove("bg-red-500")
							buttonElement?.classList.remove("animate-wiggle")
						}, 1000)
					}
				}
				// all is correct
				else {
					const durationBetweenDates = intervalToDuration({
						start: tryDate,
						end: Date.now(),
					})

					setTimeToDate({
						day: durationBetweenDates.days || 0,
						month: durationBetweenDates.months || 0,
						year: durationBetweenDates.years || 0,
					})
				}
			} else {
				const buttonElement = document.getElementById("calcButton")
				if (buttonElement) {
					buttonElement?.classList.add("bg-red-500")
					buttonElement?.classList.add("animate-wiggle")
					setTimeout(function () {
						buttonElement?.classList.remove("bg-red-500")
						buttonElement?.classList.remove("animate-wiggle")
					}, 1000)
				}
			}
		}
	}

	function handleDayChange(event: ChangeEvent<HTMLInputElement>): void {
		const targetValue = parseInt(event.target.value)
		setTimeToDate({
			day: null,
			month: null,
			year: null,
		})
		if (isNaN(targetValue) || targetValue < 1 || targetValue > 31) {
			setInvalidInputFields((prev) => ({ ...prev, dayInvalid: true }))

			setDate((prev) => ({ ...prev, day: null }))
		} else {
			setDate((prev) => ({ ...prev, day: targetValue }))
			setInvalidInputFields((prev) => ({ ...prev, dayInvalid: false }))
		}
	}

	function handleMonthChange(event: ChangeEvent<HTMLInputElement>): void {
		const targetValue = parseInt(event.target.value)
		setTimeToDate({
			day: null,
			month: null,
			year: null,
		})
		if (isNaN(targetValue) || targetValue < 1 || targetValue > 12) {
			setInvalidInputFields((prev) => ({ ...prev, monthInvalid: true }))

			setDate((prev) => ({ ...prev, month: null }))
		} else {
			setDate((prev) => ({ ...prev, month: targetValue }))
			setInvalidInputFields((prev) => ({ ...prev, monthInvalid: false }))
		}
	}

	function handleYearChange(event: ChangeEvent<HTMLInputElement>): void {
		const targetValue = parseInt(event.target.value)
		setTimeToDate({
			day: null,
			month: null,
			year: null,
		})
		if (isNaN(targetValue) || targetValue > 2023) {
			setInvalidInputFields((prev) => ({ ...prev, yearInvalid: true }))
			setDate((prev) => ({ ...prev, year: null }))
		} else {
			setDate((prev) => ({ ...prev, year: targetValue }))
			setInvalidInputFields((prev) => ({ ...prev, yearInvalid: false }))
		}
	}

	return (
		<div className="h-screen bg-slate-100 flex items-center justify-center">
			<div className="font-poppins h-1/2 w-4/5 bg-gray-200  pt-10 rounded-md font-light flex flex-col items-center shadow-lg">
				<div className="flex justify-center gap-3 items-start h-1/3 w-full ">
					<div className="flex flex-col relative h-full w-20 items-center">
						<label
							className={invalidInputFields.dayInvalid ? "text-red-600" : ""}
							htmlFor="day"
						>
							DAY
						</label>
						<input
							className={`w-16 h-10 rounded-md border-gray-300 border text-center text-lg font-bold shadow-lg focus:outline-none focus:ring-purple-700 focus:ring-2 ${
								invalidInputFields.dayInvalid ? "border-red-600" : ""
							}`}
							type="text"
							id="day"
							name="day"
							placeholder="DD"
							maxLength={2}
							onChange={handleDayChange}
						/>
						{invalidInputFields.dayInvalid && (
							<p className="text-xs bottom-0 text-red-600 mt-2 ">
								Must be a <br /> valid day
							</p>
						)}
					</div>
					<div className="flex flex-col h-full w-20 items-center">
						<label
							className={invalidInputFields.monthInvalid ? "text-red-600" : ""}
							htmlFor="month"
						>
							MONTH
						</label>
						<input
							className={`w-16 h-10 rounded-md border-gray-300 border text-center text-lg font-bold shadow-lg focus:outline-none focus:ring-purple-700 focus:ring-2 ${
								invalidInputFields.monthInvalid ? "border-red-600" : ""
							}`}
							type="text"
							id="month"
							name="month"
							placeholder="MM"
							maxLength={2}
							onChange={handleMonthChange}
						/>
						{invalidInputFields.monthInvalid && (
							<p className="text-xs bottom-0 text-red-600 mt-2">
								Must be a <br />
								valid month
							</p>
						)}
					</div>
					<div className="flex flex-col h-full w-20 items-center">
						<label
							className={invalidInputFields.yearInvalid ? "text-red-600" : ""}
							htmlFor="year"
						>
							YEAR
						</label>
						<input
							className={`w-16 h-10 rounded-md border-gray-300 border text-center text-lg font-bold shadow-lg focus:outline-none focus:ring-purple-700 focus:ring-2 ${
								invalidInputFields.yearInvalid ? "border-red-600" : ""
							}`}
							type="text"
							id="year"
							name="year"
							placeholder="YYYY"
							maxLength={4}
							onChange={handleYearChange}
						/>
						{invalidInputFields.yearInvalid && (
							<p className="text-xs bottom-0 text-red-600 mt-2">
								Must be in <br />
								the past
							</p>
						)}
					</div>
				</div>
				<div className="relative h-1/5 w-full flex flex-col items-center justify-center">
					<button
						id="calcButton"
						type="button"
						className={`bg-black rounded-full p-4 z-10 ${
							timeToDate.day && timeToDate.month && timeToDate.year
								? "bg-purple-700"
								: ""
						}`}
						onClick={handleButtonClick}
					>
						<ArrowIcon style={"w-6 h-6"} stroke="white" />
					</button>
					<span className="absolute w-4/5 h-0.5 bg-gray-300 z-0" />
				</div>
				<div className="h-3/5 w-full text-center flex flex-col justify-stat pt-5 text-2xl gap-5 font-bold">
					<p>
						<span className="text-purple-700">
							{timeToDate.year && timeToDate.year}
						</span>{" "}
						years
					</p>
					<p>
						<span className="text-purple-700">
							{timeToDate.month && timeToDate.month}
						</span>{" "}
						months
					</p>
					<p>
						<span className="text-purple-700">
							{timeToDate.day && timeToDate.day}
						</span>{" "}
						days
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
