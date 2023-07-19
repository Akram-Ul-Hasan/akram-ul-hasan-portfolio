
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingSpinner = () => {
  

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <ClimbingBoxLoader
        color={"#36d7b7"}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
