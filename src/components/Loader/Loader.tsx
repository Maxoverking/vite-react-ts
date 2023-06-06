import { FC } from "react";
import { Grid } from "react-loader-spinner";
import { DIV_LOADER } from "./Loader.styled";

const Loader: FC = () => {
  return (
    <DIV_LOADER>
      <Grid
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </DIV_LOADER>
  );
};

export default Loader;
