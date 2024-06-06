import React, { useState } from "react";
import axios from "axios";

function UserDetailsForm() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/user/addUser", {
        name,
        summary,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          Comp:
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          ></input>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserDetailsForm;
