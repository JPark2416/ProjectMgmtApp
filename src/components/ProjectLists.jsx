function ProjectLists() {
  return (
    <div className="bg-red-400 px-2 py-8 m-2 rounded-lg">
      <h2>ProjectLists</h2>
      <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
        +Add Project
      </button>

      <div>
        <p>project 1</p>
        <p>project 2</p>
        <p>project 3</p>
        <p>project 4</p>
        <p>project 5</p>
        <p>project 6</p>
      </div>
    </div>
  );
}

export default ProjectLists;
