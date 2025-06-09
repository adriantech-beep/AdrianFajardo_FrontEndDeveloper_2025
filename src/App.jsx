import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ScrollProvider } from "./contexts/ScrollContext";

import Certificate from "./pages/Certificate";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <ScrollProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="certificates" element={<Certificate />} />
        </Routes>
      </HashRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </ScrollProvider>
  );
}

export default App;
