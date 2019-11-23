import React, { useState, useEffect } from "react";

export default function Effect() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/brunobc/repos");
      const data = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `${filtered.length} favorites`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo =>
      repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    );
    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
      ))}
    </ul>
  );
}
