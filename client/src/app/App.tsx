import { useState } from "react";
import AppRouter from "./Router/ui/AppRouter";

const App: React.FC = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
