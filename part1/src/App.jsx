import './App.css'

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
}

const Part = ({ part, exercises }) => {
	return (
		<div>
			<p>{part} {exercises}</p>
		</div>
	)
}

const Content = ({ info }) => {
	return (
		<div>
			{info.map((item, index) => (
				<Part key={index} part={item.part} exercises={item.exercises} />
			))}
		</div>
	)
}

const Total = ({ info }) => {
	let total = 0;

	info.forEach(item => {
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
  const info = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 }
  ];

	return (
		<div>
			<Header course={course} />
			<Content info={info} />
			<Total info={info} />
		</div>
	)
}

export default App

// import './App.css'

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// }

// const Part = ({ part, exercises }) => {
// 	return (
// 		<div>
// 			<p>{part} {exercises}</p>
// 		</div>
// 	)
// }

// const Content = (props) => {
// 	return (
// 		<div>
// 			<Part part={props.part1} exercises={props.exercises1} />
// 			<Part part={props.part2} exercises={props.exercises2} />
// 			<Part part={props.part3} exercises={props.exercises3} />
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p> 
// 		</div>
// 	)
// }

// const App = () => {
// 	const course = 'Half Stack application development'
// 	const part1 = 'Fundamentals of React'
// 	const exercises1 = 10
// 	const part2 = 'Using props to pass data'
// 	const exercises2 = 7
// 	const part3 = 'State of a component'
// 	const exercises3 = 14

// 	return (
// 		<div>
// 			<Header course={course}/>
// 			<Content
// 				part1 = {part1} exercises1 = {exercises1}
// 				part2 = {part2} exercises2 = {exercises2}
// 				part3 = {part3} exercises3 = {exercises3}
// 			/>
// 			<Total
// 				exercises1 = {exercises1}
// 				exercises2 = {exercises2}
// 				exercises3 = {exercises3}
// 			/>
// 		</div>
// 	)
// }

// export default App