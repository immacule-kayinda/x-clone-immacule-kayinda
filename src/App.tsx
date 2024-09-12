import ActionBar from "./components/ActionBar";
import MainSection from "./components/MainSection";

export default function App() {
  return (
    <div className="md:w-10/12 w-full flex flex-row md:flex-col m-auto">
      {/* <ActionBar /> */}
      <MainSection />
      <ActionBar />
    </div>
  );
}


