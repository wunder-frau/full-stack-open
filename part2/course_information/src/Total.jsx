const Total = ({ course }) => {
    const total = course.reduce((acc, item) => {
		acc += item.exercises;
        return acc;
	}, 0);
	return (
		<div>
			<h2>total of {total} exercises</h2> 
		</div>
	)
}
export default Total;