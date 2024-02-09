import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import Tasks from "./Tasks";

function Project({ project, updateProject }) {
  const [editingProject, setEditingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(project);

  function handleEditMode() {
    setEditingProject(!editingProject);
  }

  // const

  return (
    <div className="bg-red-400 px-2 py-8 m-2 rounded-lg">
      <div>
        <p>Project Name</p>
        <button onClick={handleEditMode}>
          {editingProject ? "Apply" : "Edit"}
        </button>
        <ProjectDetails
          isEdit={editingProject}
          title="titleTest"
          desc="descTest"
          due="dueTest"
        />
        <Tasks />
      </div>
    </div>
  );
}

export default Project;
