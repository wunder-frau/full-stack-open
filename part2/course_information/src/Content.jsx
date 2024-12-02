import Part from './Part.jsx'
const Content =({course})=> {
  {console.log("----->: ", course.name)}
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part key={i} course={part} />
      ))}
    </div>
  );
};

export default Content;