function ProjectDetails({ title, desc, due, isEdit }) {
  return (
    <div className="border-solid border-2">
      {!isEdit && (
        <>
          <p>{title}</p>
          <p>{desc}</p>
          <p>{due}</p>
        </>
      )}

      {isEdit && (
        <div className="m-1 flex-col">
          <p>
            <label>Title</label>
            <input type="text" className="m-1 rounded-sm"></input>
          </p>
          <p>
            <label>Description</label>
            <input type="text" className="m-1 rounded-sm"></input>
          </p>
          <p>
            <label>Date</label>
            <input type="text" className="m-1 rounded-sm"></input>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
