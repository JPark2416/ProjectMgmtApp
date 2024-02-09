import { useState } from "react";
import Project from "./components/Project";
import ProjectLists from "./components/ProjectLists";

const DETAIL = [
  {
    title: "Title 1",
    desc: "Description goes here",
    date: "Date goes here",
    tasks: ["task1", "task2"],
  },
  {
    title: "Title 2",
    desc: "Description goes here",
    date: "Date goes here",
    tasks: ["task1", "task2"],
  },
];

function App() {
  const [projectDetails, setProjectDetails] = useState(DETAIL);
  console.log(projectDetails);
  // projectDetails.map((detail, key) => console.log({detail.title, key}));

  function handleAddProject() {
    console.log("App.js ");
  }
  function editProject() {}
  function removeProject() {}

  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-700">
        <ProjectLists
          projects={projectDetails.map((item, index) => ({
            key: index,
            title: item.title,
          }))}
        />
      </div>
      <div className="fixed top-0 right-0 w-3/4 h-screen bg-indigo-500">
        <Project onAddProject={handleAddProject} />
      </div>
    </>
  );
}

export default App;
