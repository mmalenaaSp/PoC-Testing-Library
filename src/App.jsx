import { useState } from 'react'
import './App.css'

function App() {
  const [turnoSeleccionado, setTurnoSeleccionado] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const turnos = [
    'Lunes 10:00 - Dra. García',
    'Lunes 11:00 - Dra. García',
    'Martes 15:00 - Dr. López',
  ]

  const reservarTurno = (event) => {
    event.preventDefault()

    if (!turnoSeleccionado || !nombre || !email) {
      setMensaje('Por favor, completá todos los datos.')
      return
    }

    setMensaje('Turno reservado correctamente.')
  }

  return (
    <div>
      <h1>Gestión de Turnos</h1>

      <h2>Turnos disponibles</h2>

      <div>
        {turnos.map((turno) => (
          <button
            key={turno}
            type="button"
            onClick={() => setTurnoSeleccionado(turno)}
          >
            {turno}
          </button>
        ))}
      </div>

      {turnoSeleccionado && (
        <p>
          Turno seleccionado: <strong>{turnoSeleccionado}</strong>
        </p>
      )}

      <h2>Datos del paciente</h2>

      <form onSubmit={reservarTurno}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <button type="submit">Reservar turno</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}

export default App