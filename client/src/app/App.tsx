import AppRouter from "./Router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "./Theme/ui";
import { Sidebar } from "@/widgets/Sidebar";
import { Input, InputSize, InputTheme } from "@/shared/ui/Input/ui/Input";

const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
        <div>
          <Input
            className="my-input"
            theme={InputTheme.CLEAR}
            size={InputSize.M}
            placeholder="Enter your name"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
