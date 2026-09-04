import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
})

describe('Gestión de Turnos', () => {
  it('permite seleccionar un turno', async () => {
    const user = userEvent.setup()

    render(<App />)

    const turno = screen.getByRole('button', {
      name: 'Lunes 10:00 - Dra. García',
    })

    await user.click(turno)

    const seleccion = screen.getByText(/Turno seleccionado:/)

    expect(seleccion).toHaveTextContent('Lunes 10:00 - Dra. García')
  })
})
  it('permite reservar un turno completando el formulario', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Lunes 10:00 - Dra. García',
      })
    )

    await user.type(screen.getByLabelText('Nombre:'), 'Malena')
    await user.type(screen.getByLabelText('Email:'), 'malena@email.com')

    await user.click(
      screen.getByRole('button', {
        name: 'Reservar turno',
      })
    )

    expect(
      screen.getByText('Turno reservado correctamente.')
    ).toBeInTheDocument()
  })
  it('muestra un mensaje de error si faltan datos', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Reservar turno',
      })
    )

    expect(
      screen.getByText('Por favor, completá todos los datos.')
    ).toBeInTheDocument()
  })