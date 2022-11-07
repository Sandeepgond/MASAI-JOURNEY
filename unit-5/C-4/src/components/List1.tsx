import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
	initialValues: number[];
	label: string;
};
const List1 = ({ initialValues, label }: List1Props) => {
	const { list, appendStart, popEnd, clear, reset } =useNumberList(initialValues);
	const [myNum, setMyNum] = useState<number>(0);
	const handleChange = (number: number) => {
		setMyNum(number);
	};
	return (
		<div data-testid="list1">
			<h3 data-testid="list1-label">
				{label}
			</h3>
			<div style={{ display: "flex", gap: "10px" }}>
				{list.map((e, i) => (
					<div key={i} data-testid="list1-element">{e}</div>
				))}
			</div>

			<input
				data-testid="list1-input"
				value={myNum}
				type="number"
				onChange={(e) => {
					handleChange(+e.currentTarget.value);
				}}
			/>
			<button
				data-testid="list1-btn-append-start"
				onClick={() => {
					appendStart(myNum);
				}}>
				Append Start
			</button>
			<button data-testid="list1-btn-pop-end" onClick={popEnd}>
				Pop End
			</button>
			<button data-testid="list1-btn-clear" onClick={clear}>
				Clear
			</button>
			<button data-testid="list1-btn-reset" onClick={reset}>
				Reset
			</button>
		</div>
	);
};

export default List1;