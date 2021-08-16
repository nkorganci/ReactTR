import PropTypes from "prop-types";
import Button from "./Button";

/* const Header = ({title})  */
const Header = ({ title }) => {
  // console.log(props);
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
      
    </header>
  );
};

export default Header;

/* //* NOTE-1: We can assign a default props
Header.defaultProps = {
  title: "Task Tracker default",
};

//* NOTE-2 We can decide type of props by importing PropTypes
Header.propTypes = {
  title: PropTypes.string,
};

//* NOTE-3 CSS in JS
const inlineStyle = {
  color: "red",
  backgroundColor: "pink",
}; */
