import { Home, Profile, SignIn, SignUp } from "@/pages";
import Dashboard from "./pages/dashboard";
import StreamlitEmbed from "./StreamlitEmbed";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <StreamlitEmbed />,
  },
  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
];

export default routes;
