const Part = ({ course }) => {
    return (
      <div>
        <span className="part-name">{course.name}</span>
        <span>{course.exercises}</span>
      </div>
    );
  };
  
export default Part;