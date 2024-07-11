import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/woovi-logo.svg";

const HeaderLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <img src={Logo} alt="" />
      <
      <Outlet />
    </>
  );
};

export default HeaderLayout;
