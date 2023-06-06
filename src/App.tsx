import { FC, Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthSelector } from "./redux/auth/authSelector";
import { useAppDispatch } from "./types/hooks";
import { refreshUser } from "./redux/auth/authOperation";

const Loader = lazy(() => import("./components/Loader/Loader"));
const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const RegisterForm = lazy(
  () => import("./components/RegisterForm/RegisterForm")
);
const LoginPage = lazy(() => import("./components/LoginForm/LoginForm"));
const ContactPage = lazy(
  () => import("./components/pages/ContactPage/ContactPage")
);
const MyToastContainer = lazy(
  () => import("./components/ToastContainer/ToastContainer")
);
const PrivateRoute = lazy(() => import("./Routes/PrivateRoute"));
const PublicRoute = lazy(() => import("./Routes/PublicRoute"));

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuthSelector();
  const { isLoginAlready } = useAuthSelector();

  console.log("🚀  user:", user);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoginAlready ? (
    <Loader />
  ) : (
    <Suspense fallback={null}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="register"
            element={
              <PrivateRoute redirectTo="/contacts" component={RegisterForm} />
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PublicRoute redirectTo="/login" component={ContactPage} />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <MyToastContainer />
    </Suspense>
  );
};

export default App;
