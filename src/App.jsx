import Project from "./components/Project";
import ProjectLists from "./components/ProjectLists";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-700">
        <ProjectLists />
      </div>
      <div className="fixed top-0 right-0 w-3/4">
        {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
        <Project /> */}
        <Project />
      </div>
    </>
  );
}

export default App;
