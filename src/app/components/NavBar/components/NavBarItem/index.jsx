import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

function NavBarItem(props) {
  const { icon: Icon, redirect, isSeparated, isActive, id } = props;
  const navigate = useNavigate();
  const router = useRouter();
  const handleLogout = async () => {
    const response = await axios.get("/api/users/logout");
    if (response.status === 200) {
      router.push("/login");
    }
  };
  return (
    <div
      className={`${
        isSeparated ? "mt-32" : "mt-0"
      } rounded-full z-20 h-10 hover:cursor-pointer hover:bg-white`}
      onClick={
        id === "logout" ? () => handleLogout() : () => navigate(redirect)
      }
      onKeyUp={
        id === "logout" ? () => handleLogout() : () => navigate(redirect)
      }
      role="button"
      tabIndex={0}
    >
      <div
        className={
          isActive ? "bg-white w-24 h-12  absolute rounded-l-lg -z-10" : ""
        }
      />
      <Icon className="w-16 h-10 p-1" />
    </div>
  );
}

NavBarItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  redirect: PropTypes.string,
  isActive: PropTypes.bool,
  isSeparated: PropTypes.bool,
};

NavBarItem.defaultProps = {
  redirect: "",
  isActive: false,
  isSeparated: false,
};

export default NavBarItem;
