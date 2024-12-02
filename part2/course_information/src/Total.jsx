const Total = ({ course }) => {
    const total = course.parts.reduce((acc, item) => {
		acc += item.exercises;
        return acc;
	}, 0);
	return (
		<div>
			<p>Number of exercises {total}</p> 
		</div>
	)
}
export default Total;