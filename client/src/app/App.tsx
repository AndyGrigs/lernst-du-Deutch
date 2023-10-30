import AppRouter from "./Router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "./Theme/ui";
import { Sidebar } from "@/widgets/Sidebar";



const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <Sidebar />
    </div>
  );
};

export default App;

