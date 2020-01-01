import React, { useState, useEffect } from 'react'

export default function Location() {
  const [location, setLocation] = useState({})

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, [])

  return (
    <>
      Latitude:
      {location.latitude}
      <br />
      Longitude:
      {location.longitude}
    </>
  )
}
