import { useState } from "react";
import AppRouter from "./Router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "./Theme/ui";

const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
