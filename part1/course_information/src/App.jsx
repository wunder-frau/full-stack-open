import './App.css'

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Name = ({ name, exercises }) => {
	return (
		<div>
			<p>{name} {exercises}</p>
		</div>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map((item, index) => (
				<Name key={index} name={item.name} exercises={item.exercises} />
			))}
		</div>
	)
}

const Total = ({ parts }) => {
	let total = 0;

	parts.forEach(item => {
		total += item.exercises;
	});
	return (
		<div>
			<p>Number of exercises {total}</p> 
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
}

export default App