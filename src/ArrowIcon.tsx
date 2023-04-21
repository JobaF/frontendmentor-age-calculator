import { FC } from "react"

interface ArrowIconProps {
	style: string
	stroke: string
}

const ArrowIcon: FC<ArrowIconProps> = ({ style, stroke }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke={stroke}
			className={style}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
			/>
		</svg>
	)
}

export default ArrowIcon
