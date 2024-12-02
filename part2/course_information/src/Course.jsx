import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const Course = ({course}) => {
    {console.log(course.parts[0].exercises)}
    return (
        <div>
            <Header course={course.name} />
            <Content course={course}/>
            <Total course={course}/>
        </div>
        );
};
export default Course;

