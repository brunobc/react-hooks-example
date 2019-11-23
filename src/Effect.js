import React, { useState, useEffect } from "react";

export default function Effect() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/brunobc/repos"
      );
      const data = await response.json();
      console.log(data);

      setRepositories(data);
    }
    fetchData();
  }, []);
  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
