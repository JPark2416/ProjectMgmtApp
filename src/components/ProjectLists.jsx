function ProjectLists({ projects, onAddProject, onSelectProject }) {
  return (
    <div className="bg-red-400 px-2 py-8 m-2 rounded-lg">
      <h2>ProjectLists</h2>
      <button
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={onAddProject}
      >
        +Add Project
      </button>

      <div>
        {projects.map((project, key) => (
          <p key={key}>
            <button onClick={() => onSelectProject(key)}>
              {project.title}
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectLists;
