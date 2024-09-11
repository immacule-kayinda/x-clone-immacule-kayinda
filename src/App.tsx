import ActionBar from "./components/ActionBar";
import MainSection from "./components/MainSection";

export default function App() {
  return (
    <div className="w-8/12 flex m-auto">
      <ActionBar />
      <MainSection />
      <ActionBar />
    </div>
  );
}


