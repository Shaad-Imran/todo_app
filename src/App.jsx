import PageTitle from "./components/PageTitle";
import styles from "../src/styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
};

export default App;
