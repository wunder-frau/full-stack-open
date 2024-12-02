import Header from './Header.jsx'
const Content = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
        </div>
    );
};
export default Content;

