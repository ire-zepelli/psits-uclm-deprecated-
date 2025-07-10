import axios from "axios";

export default function Table({ handleOpen, tableData, setError, error }) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/students/${id}`);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}

      <div className="overflow-x-auto mt-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Yr & Section</th>
              <th>Email</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((student) => {
              return (
                <tr key={student["account_id"]}>
                  <th>{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.last_online == null ? "-" : student.last_online}
                  </td>
                  <td className="flex gap-5 w-24">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        handleOpen("edit", student);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-accent"
                      onClick={() => {
                        handleDelete(student["account_id"]);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Yr & Section</th>
              <th>Email</th>
              <th>Last Login</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
