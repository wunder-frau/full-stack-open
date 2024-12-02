import Part from './Part.jsx'
const Content =({course})=> {
  return (
    <div>
      {course.parts.map((part, i) => (
        <Part key={i} course={part} />
      ))}
    </div>
  );
};

export default Content;