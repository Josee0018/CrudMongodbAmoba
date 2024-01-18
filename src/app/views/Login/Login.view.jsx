"use client";
import PropTypes from "prop-types";

const LoginView = () => {
  window.location.assign("home");
  return (
    <div className="m-auto w-20 h-20 animate-pulse">
      <div className="pt-6 shadow bg-sky-700 rounded-xl animate-pulse mx-auto w-20 h-20 text-center">
        loading
      </div>
    </div>
  );
};

LoginView.propTypes = {
  message: PropTypes.string,
};

LoginView.defaultProps = {
  message: "",
};

export default LoginView;
