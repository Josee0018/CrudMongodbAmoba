import PropTypes from "prop-types";

function PrivatePageContainer(props) {
  const { children, customClasses } = props;

  return (
    <div
      className={`${customClasses} flex justify-stretch mt-4 w-full lg:p-8 rounded-lg lg:rounded-2xl`}
    >
      {children}
    </div>
  );
}

PrivatePageContainer.propTypes = {
  children: PropTypes.any.isRequired,
  customClasses: PropTypes.string,
};

PrivatePageContainer.defaultProps = {
  customClasses: "",
};

export default PrivatePageContainer;
