import { useState } from "react";

function App() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [cname, setCname] = useState();
  const [showfname, setShowfname] = useState(false);

  const handleSubmit = () => {
    setCname(`${fname} ${lname}`);
    setShowfname(true);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <p>
        First name:{" "}
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </p>
      <p>
        Last name:{" "}
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>

      {showfname && <p>Full Name:{cname}</p>}
    </>
  );
}

export default App;
