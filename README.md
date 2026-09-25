# PoC: Testing Library

Prueba de Concepto (PoC) desarrollada para la materia Desarrollo de Software de la Universidad Tecnológica Nacional (UTN). Su objetivo es investigar y evaluar la conveniencia de utilizar Testing Library para realizar pruebas automatizadas sobre aplicaciones frontend.

## Objetivo
El propósito de este proyecto es analizar cómo Testing Library permite verificar el comportamiento de una interfaz gráfica desde la perspectiva del usuario real, interactuando con los elementos de manera similar a como lo haría una persona. Esto se logra evitando depender de los detalles internos de implementación de los componentes.

## Tecnologías y Herramientas Utilizadas
* **React:** Utilizado para la construcción de la interfaz de usuario de la aplicación.
* **Vite:** Herramienta de desarrollo utilizada para crear y ejecutar el proyecto.
* **Vitest:** Test runner encargado de ejecutar las pruebas automatizadas y mostrar los resultados.
* **React Testing Library (`@testing-library/react`):** Adaptación utilizada para renderizar los componentes React y buscar elementos en la interfaz.
* **User Event (`@testing-library/user-event`):** Utilizado para simular interacciones de usuario de manera realista (como hacer clic o escribir).
* **jsdom:** Entorno utilizado para simular un documento HTML y el DOM del navegador durante la ejecución de las pruebas.
* **jest-dom (`@testing-library/jest-dom`):** Proporciona matchers adicionales (como `toBeInTheDocument()`) para realizar verificaciones sobre los elementos del DOM.

## Aplicación de Demostración
Para probar estas herramientas, se desarrolló una aplicación frontend a pequeña escala orientada a la gestión de turnos de psicólogos.

## Casos de Prueba Implementados
Para garantizar que el DOM se limpie correctamente, se utilizó la función `cleanup()` después de cada prueba. Los escenarios evaluados son:

* `✓` **Permite seleccionar un turno:** Simula un clic sobre uno de los turnos disponibles y verifica que la interfaz refleje la selección.
* `✓` **Permite reservar un turno completando el formulario:** Simula el flujo completo de un usuario real (seleccionar turno, completar nombre, completar email y hacer clic en reservar), comprobando que aparezca el mensaje de éxito.
* `✓` **Muestra un mensaje de error si faltan datos:** Simula un clic directo en reservar sin completar la información para verificar la aparición del mensaje de alerta.

