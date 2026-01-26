## Valoración y testing

A continuación se detalla la documentación requerida:

### Tabla de Pruebas

| Funcionalidad | Descripción de la Prueba | Resultado Esperado | Estado |
| :--- | :--- | :--- | :---: |
| **Modo Oscuro** | Clic en botón de tema y recargar página | El fondo cambia, el texto del botón se actualiza y el tema persiste tras recargar (LocalStorage) | ok |
| **Botón Limpiar** | Rellenar campos y pulsar "Borrar formulario" | Los campos se vacían y aparece un Toast informativo de Bootstrap | ok |
| **Notificación Toast** | Enviar formulario o borrar campos | Aparecen notificaciones no intrusivas (Toast) en la esquina inferior | ok |
| **Validaciones** | Intentar enviar con nombre erróneo, sin intereses o fecha fuera de rango | El formulario no se envía y muestra un Toast con los errores específicos | ok |
| **Envío Correcto** | Cumplir todas las validaciones y pulsar "Suscribirse" | Se muestra un Toast de éxito (4s) y los datos aparecen en la consola (`console.table`) | ok |

### Documentación y Capturas

#### 1. Funcionamiento General
La web permite una interacción fluida. El modo oscuro se activa desde la barra de navegación y se guarda en el navegador. La tabla de "Ranking Dinámico" se genera automáticamente al cargar la página.

#### 2. Depuración (Breakpoint)
Se ha colocado un punto de interrupción en el archivo `js/parte1.js`, específicamente en el evento `submit` del formulario.
> **Explicación**: El breakpoint permite detener la ejecución justo antes de procesar los datos, permitiendo inspeccionar las variables `errors` y `formData` para asegurar que la lógica de validación y recolección de datos funciona como se espera.

**Captura del Breakpoint:**
![Breakpoint DevTools](./img/breakpoint.png)

#### 3. Interactividad (Parte 3)
- **Reloj Digital**: Ubicado en el menú superior.
- **Buscador**: Permite filtrar la tabla en tiempo real.
- **Selector de Color**: Cambia el color de la cabecera de la tabla.
- **Zoom Carrusel**: Botón dedicado para ampliar la imagen activa.
- **Extras**: Barra de scroll superior y saludo horario en el footer.

**Captura de la Web (Modo Oscuro):**
![Web Modo Oscuro](./img/web_oscuro.png)

**Captura del Toast de Éxito:**
![Toast Éxito](./img/web_claro.png)
