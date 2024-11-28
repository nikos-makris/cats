import { Outlet } from "react-router";
import Typography from "../components/typography/Typography";
import ColorSchemeToggleButton from "../components/color-scheme-toggle-button/ColorSchemeToggleButton";

const Layout = () => {
  return (
    <div className="w-full h-full bg-background-color-primary light:bg-background-color-primary-dark dark:bg-background-color-primary-dark min-h-screen	flex flex-col	gap-y-9">
      <div className="sticky top-0 z-10 bg-background-color-primary light:bg-background-color-primary-dark dark:bg-background-color-primary-dark border-b border-separator light:border-separator-light dark:border-separator-dark">
        <div className="w-full max-w-screen-xl mx-auto p-6 flex justify-between items-center">
          <Typography htmlTagName="h1" textStyle="largeTitle">
            The Cat API
          </Typography>
          <ColorSchemeToggleButton />
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-6 grow flex">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
