import { useEffect, useState } from "react";
import {
  addProject,
  addClient,
  fetchContacts,
  fetchSubscribers
} from "../services/api";
import "../styles/admin.css";

export default function Admin() {
  // form states
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: ""
  });

  const [client, setClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: ""
  });

  // data states
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  // fetch admin data
  useEffect(() => {
    fetchContacts().then(res => setContacts(res.data));
    fetchSubscribers().then(res => setSubscribers(res.data));
  }, []);

  const handleProjectSubmit = async () => {
    if (!project.name || !project.image) {
      return alert("Fill all project fields");
    }
    await addProject(project);
    alert("Project added");
    setProject({ name: "", description: "", image: "" });
  };

  const handleClientSubmit = async () => {
    if (!client.name || !client.image) {
      return alert("Fill all client fields");
    }
    await addClient(client);
    alert("Client added");
    setClient({ name: "", description: "", designation: "", image: "" });
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>

      {/* ADD PROJECT */}
      <section className="admin-section">
        <h2>Add Project</h2>
        <input
          placeholder="Project Name"
          value={project.name}
          onChange={e => setProject({ ...project, name: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={project.image}
          onChange={e => setProject({ ...project, image: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={project.description}
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <button onClick={handleProjectSubmit}>Add Project</button>
      </section>

      {/* ADD CLIENT */}
      <section className="admin-section">
        <h2>Add Client</h2>
        <input
          placeholder="Client Name"
          value={client.name}
          onChange={e => setClient({ ...client, name: e.target.value })}
        />
        <input
          placeholder="Designation"
          value={client.designation}
          onChange={e =>
            setClient({ ...client, designation: e.target.value })
          }
        />
        <input
          placeholder="Image URL"
          value={client.image}
          onChange={e => setClient({ ...client, image: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={client.description}
          onChange={e =>
            setClient({ ...client, description: e.target.value })
          }
        />
        <button onClick={handleClientSubmit}>Add Client</button>
      </section>

      {/* CONTACT SUBMISSIONS */}
      <section className="admin-section">
        <h2>Contact Form Submissions</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* NEWSLETTER */}
      <section className="admin-section">
        <h2>Newsletter Subscribers</h2>
        <ul>
          {subscribers.map(s => (
            <li key={s._id}>{s.email}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
