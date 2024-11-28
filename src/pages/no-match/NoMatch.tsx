import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Typography from "../../components/typography/Typography";

const NoMatch = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <section className="bg-background-color-primary light:bg-background-color-primary-dark dark:bg-background-color-primary-dark m-auto">
      <div className="flex flex-col items-center max-w-sm  text-center">
        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </p>
        <Typography htmlTagName="h2" textStyle="largeTitle" className="mt-3 ">
          Page not found
        </Typography>
        <Typography className="mt-4">
          The page you are looking for doesn't exist.
        </Typography>

        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <Button onClick={goToHomePage}>Take me home</Button>
        </div>
      </div>
    </section>
  );
};

export default NoMatch;
