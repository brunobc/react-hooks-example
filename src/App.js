import React, { useState } from "react";
import Effect from "./Effect";
import Location from "./Location";

export default function App() {
  const [skills, setSkills] = useState([
    { id: 1, name: "proactive" },
    { id: 2, name: "feedback" },
    { id: 3, name: "focus" }
  ]);

  function handleAddSkill() {
    setSkills([
      ...skills,
      {
        id: Math.random(),
        name: `New skill`
      }
    ]);
  }
  return (
    <>
      <Location />
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <button onClick={handleAddSkill}>Add</button>

      <Effect />
    </>
  );
}
