import { useEffect, useState } from "react";
import Card from "./component/Card";

function App() {
  const [userName, setUserName] = useState("anandkr651");
  const [userData, setUserdata] = useState(null);

  async function githubUserData() {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (data) {
      setUserdata(data);
      setUserName("");
    }
    console.log(data);
  }

  function handleSubmit() {
    githubUserData();
  }

  useEffect(() => {
    githubUserData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          name="github-profile"
          placeholder="search github username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <Card user={userData} />
    </div>
  );
}

export default App;
