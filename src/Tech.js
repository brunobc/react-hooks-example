import React, { useState, useEffect, useMemo } from 'react'

export default function Tech() {
  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')
  const techSize = useMemo(() => tech.length, [tech])

  function handleAdd() {
    setTech([...tech, newTech])
    setNewTech('')
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech')

    if (storageTech) {
      setTech(JSON.parse(storageTech))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>
        Você tem {techSize} tecnologias
      </strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  )
}
