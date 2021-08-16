import PropTypes from "prop-types";

/* const Header = ({title})  */
const Header = (props) => {
  // console.log(props);
  return (
    <header>
      <h1 style={inlineStyle}>{props.title}</h1>
    </header>
  );
};

//* NOTE-1: We can assign a default props
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
};

export default Header;
