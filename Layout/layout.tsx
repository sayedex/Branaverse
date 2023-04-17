import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { Header } from "../components/Header/Header";
import { userMe } from "../Reduxhelper/usercall";
import { useRouter } from "next/router";
import { Dashboardheader } from "../components/Header/Dashboardheader";
import {getSkill} from "../Reduxhelper/siteinfo"

const Layout = (props: any) => {
  const { active, user, isauthenticateuser } = useAppSelector(
    (state) => state.userSlice
  );
  const dispath = useAppdispatch();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    dispath(userMe());
    setTheme("light");
  }, [isauthenticateuser]);

  const path = props.pathname;
  // const isAccountPage = path === '/me';
  const hideHeader = path.startsWith("/me");
  console.log(hideHeader);

  useEffect(() => {
    dispath(getSkill())
    if (isauthenticateuser) {
      router.push("/me");
    }
  }, []);

  return (
    <div className="	">
      {hideHeader ? <Dashboardheader /> : <Header />}
      {props.children}
    </div>
  );
};

export default Layout;
