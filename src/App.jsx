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
  const [selectedProject, setSelectedProject] = useState(null);
  console.log(selectedProject);
  console.log(projectDetails);
  // projectDetails.map((detail, key) => console.log({detail.title, key}));

  function handleProjectSelect(key) {
    setSelectedProject(key);
  }
  function handleAddProject() {
    setProjectDetails((prevUserInput) => {
      return [
        ...prevUserInput,
        {
          title: "New Project",
          desc: "desc",
          date: "date",
          tasks: [],
        },
      ];
    });
  }
  function editProject() {}
  function removeProject() {}

  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-700">
        <ProjectLists
          projects={projectDetails}
          onAddProject={handleAddProject}
          onSelectProject={handleProjectSelect}
        />
      </div>
      <div className="fixed top-0 right-0 w-3/4 h-screen bg-indigo-500">
        {selectedProject !== null && (
          <Project project={projectDetails[selectedProject]} />
        )}
      </div>
    </>
  );
}

export default App;
