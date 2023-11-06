import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    age: "",
  });

  const [display, setDisplay] = useState(false);

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="">Username:</label>
          <br />
          <input type="text" name="username" onChange={handleFormDataChange} />
        </div>
        <div className="fullname">
          <label htmlFor="">Full Name:</label>
          <br />
          <input type="text" name="fullname" onChange={handleFormDataChange} />
        </div>
        <div className="age">
          <label htmlFor="">Age:</label>
          <br />
          <input type="text" name="age" onChange={handleFormDataChange} />
        </div>
        <button>Submit</button>
      </form>
      {display && (
        <section>
          <h2>
            Solicitud enviada a la base de datos con los siguientes datos:{" "}
          </h2>
          <ul>
            <li>Username: {formData.username}</li>
            <li>Full Name: {formData.fullname}</li>
            <li>Age: {formData.age}</li>
          </ul>
        </section>
      )}
    </>
  );
}

export default App;
