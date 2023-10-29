import AppRouter from "./Router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "./Theme/ui";
import Logo from "@/assets/arrow-small-left-svgrepo-com.svg?react";


const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <Logo />
    </div>
  );
};

export default App;

