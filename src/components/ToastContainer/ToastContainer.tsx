import { ToastContainer, Zoom } from "react-toastify";

const MyToastContainer = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
