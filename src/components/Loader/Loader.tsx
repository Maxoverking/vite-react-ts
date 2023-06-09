import { FC } from "react";
// import { Grid } from "react-loader-spinner";
import { DIV_LOADER } from "./Loader.styled";
import DotLoader from "react-spinners/DotLoader";

const Loader: FC = () => {
  return (
    <DIV_LOADER>
      {/* <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
      <DotLoader color="#36d7b7" size={50} />
    </DIV_LOADER>
  );
};

export default Loader;
