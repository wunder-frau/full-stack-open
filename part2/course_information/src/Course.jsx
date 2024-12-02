import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from './Total.jsx';

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
            {console.log("looook: ", course.id)}
          <Header course={course.name} />
          {console.log("lo: ", course.parts)}
          <Content course={course} />
          <Total course={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;