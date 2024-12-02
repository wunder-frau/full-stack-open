const Total = ({ course }) => {
	let total = 0;
	course.parts.map((item) => {
		total += item.exercises;
	});
	return (
		<div>
			<p>Number of exercises {total}</p> 
		</div>
	)
}
export default Total;