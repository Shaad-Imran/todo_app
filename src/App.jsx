import PageTitle from "./components/PageTitle";
import styles from "../src/styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="container">
      {/* Page title component */}
      <PageTitle>TODO List</PageTitle>

      <div className={styles.app__wrapper}>
        {/* App header component */}
        <AppHeader />

        {/* App content component */}
        <AppContent />
      </div>

      {/* Toast notifications for displaying messages */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </div>
  );
};

export default App;
