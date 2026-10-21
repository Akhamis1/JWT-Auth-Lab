import { useState } from "react";
import { useNavigate } from "react-router";
import { createNewEntry } from "../services/entryService";

function CreateEntryPage() {
  const [formData, setFormData] = useState({
    title: "",
    entryBody: "",
    isPublic: true,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, type, value, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createNewEntry(formData);
      navigate("/my-entries");
    } catch {
      setError("Unable to create entry. Please try again.");
    }
  }

  return (
    <div>
      <h1>Create Entry</h1>
      <p className="error">{error}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="entryBody">Entry Body:</label>
        <input
          type="text"
          name="entryBody"
          id="entryBody"
          value={formData.entryBody}
          onChange={handleChange}
        />

        <label htmlFor="isPublic">Public:</label>
        <input
          type="checkbox"
          name="isPublic"
          id="isPublic"
          checked={formData.isPublic}
          onChange={handleChange}
        />
        <button>Create Entry</button>
      </form>
    </div>
  );
}

export default CreateEntryPage;
