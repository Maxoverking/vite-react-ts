import { ToastContainer, Zoom } from "react-toastify";

const MyToastContainer = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ width: "300px" }}
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
        // limit={1}
      />
    </>
  );
};

export default MyToastContainer;
