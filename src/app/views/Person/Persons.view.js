import PropTypes from "prop-types";

function PersonsView(props) {
  const { Persons } = props;
  console.log(Persons);
  return <div>gola</div>;
}

PersonsView.propTypes = {
  Persons: PropTypes.object,
};

PersonsView.defaultProps = {
  Persons: [],
};

export default PersonsView;
