### **User Journeys - easyTurn MVP**

#### **Journey 1: Onboarding del Nuevo Negocio (Happy Path)**

*   **Journey Title:** De Cero a la Primera Página de Reservas
*   **Persona:** Laura Gómez (La Solopreneur Digital)
*   **Scenario:** Laura ha visto un anuncio de easyTurn en Instagram que promete una "página de reservas gratis en 5 minutos". Intrigada, hace clic y llega a la landing page del producto.

*   **Steps:**

    **Step 1: Iniciar el Registro**
    *   **User Action:** En la landing page, hace clic en el botón principal "Crear mi página gratis".
    *   **System Response:** Muestra una página de registro simple con solo tres campos: Nombre, Email y Contraseña.
    *   **Potential Pain Point:** El formulario pide demasiada información (ej. teléfono, nombre de la empresa), o no es claro el beneficio.

    **Step 2: Crear la Cuenta**
    *   **User Action:** Completa los campos y pulsa "Registrarme".
    *   **System Response:** El sistema crea la cuenta, la autentica inmediatamente y la redirige al primer paso del Wizard de Configuración. No se requiere verificación de email para minimizar la fricción inicial.
    *   **Potential Pain Point:** Un paso de verificación de email obligatorio podría hacer que abandone el proceso.

    **Step 3: Configurar Perfil (Wizard 1/3)**
    *   **User Action:** Introduce el nombre de su negocio ("Laura Gómez Estilista").
    *   **System Response:** Guarda el nombre y avanza automáticamente al siguiente paso.
    *   **Potential Pain Point:** No entender qué nombre poner (personal o del negocio).

    **Step 4: Añadir Servicios (Wizard 2/3)**
    *   **User Action:** Hace clic en "Añadir servicio". Introduce "Corte y Color", selecciona una duración de "90 minutos" y un precio de "70€". Guarda el servicio.
    *   **System Response:** El servicio aparece en una lista. El botón para continuar se activa.
    *   **Potential Pain Point:** El selector de tiempo es poco intuitivo (ej. un campo de texto en lugar de un dropdown).

    **Step 5: Definir Horario (Wizard 3/3)**
    *   **User Action:** Marca los días que trabaja (Martes a Sábado) y selecciona su horario (ej. 10:00 a 19:00) en un selector visual.
    *   **System Response:** Guarda el horario. El wizard finaliza.
    *   **Potential Pain Point:** Configurar horarios partidos (mañana/tarde) es complicado o no es posible.

    **Step 6: Descubrir el Dashboard**
    *   **User Action:** Es redirigida al panel principal de la aplicación.
    *   **System Response:** El sistema muestra un mensaje de bienvenida, su calendario (aún vacío) y, de forma muy prominente, su nueva URL pública (`easyturn.app/laura-gomez-estilista`) con un botón para "Copiar".
    *   **Potential Pain Point:** El dashboard es confuso y no encuentra la URL para compartir, que es su objetivo principal inmediato.

*   **Expected Outcome:** Laura se siente empoderada. En menos de 5 minutos, tiene una página de reservas profesional y funcional, y ya ha copiado el enlace para añadirlo a su biografía de Instagram.

*   **Alternative Paths / Edge Cases:**
    *   **Abandono del Wizard:** Si Laura cierra la pestaña a mitad del wizard, la próxima vez que inicie sesión, el sistema debe mostrarle un banner: "Parece que no terminaste la configuración. ¿Quieres continuar?".
    *   **Error de Validación:** Si en el paso 2 introduce un email inválido, el sistema debe mostrar un mensaje de error claro ("Por favor, introduce un email válido") junto al campo, sin borrar los datos ya introducidos.

---

#### **Journey 2: Reserva del Cliente Final (Happy Path)**

*   **Journey Title:** Reserva en Menos de un Minuto
*   **Persona:** Ana Torres (La Cliente Final Exigente)
*   **Scenario:** Ana sigue a Laura en Instagram. Ve en una historia el nuevo enlace para reservar y decide probarlo para pedir cita.

*   **Steps:**

    **Step 1: Acceder a la Página de Reservas**
    *   **User Action:** Hace clic en el enlace `easyturn.app/laura-gomez-estilista` en la bio de Instagram de Laura.
    *   **System Response:** La página de reservas de Laura carga en menos de 2 segundos en su móvil, mostrando el nombre del negocio y la lista de servicios.
    *   **Potential Pain Point:** La página tarda en cargar o no se ve bien en su teléfono (no es responsive).

    **Step 2: Seleccionar Servicio**
    *   **User Action:** Se desplaza por la lista y pulsa sobre "Corte y Color".
    *   **System Response:** La página avanza a una vista de calendario que muestra los días y horas disponibles, teniendo en cuenta la duración del servicio (90 min).
    *   **Potential Pain Point:** No hay horas disponibles en las próximas 3 semanas, lo que genera frustración. El sistema no muestra claramente qué días no tienen huecos.

    **Step 3: Elegir Fecha y Hora**
    *   **User Action:** Selecciona el próximo martes a las 16:00.
    *   **System Response:** Avanza al paso final, mostrando un resumen claro: "Servicio: Corte y Color. Fecha: Martes, 5 de Noviembre. Hora: 16:00. Precio: 70€".
    *   **Potential Pain Point:** El resumen es incorrecto o confuso.

    **Step 4: Confirmar la Reserva**
    *   **User Action:** Introduce su nombre ("Ana") y su email en los dos únicos campos del formulario y pulsa "Confirmar Reserva".
    *   **System Response:** El sistema procesa la reserva, la guarda en la base de datos y muestra un mensaje de éxito grande y claro: "¡Tu reserva está confirmada, Ana!". Simultáneamente, envía un email de confirmación a Ana y una notificación de nueva reserva a Laura.
    *   **Potential Pain Point:** El botón de confirmar no funciona o se queda "pensando" indefinidamente por un error de la API.

*   **Expected Outcome:** Ana ha reservado su cita en menos de un minuto, sin fricción y sin salir de su móvil. Tiene un email que lo confirma y está impresionada por la eficiencia del proceso.

*   **Alternative Paths / Edge Cases:**
    *   **Conflicto de Reserva (Race Condition):** Ana selecciona un horario, pero otro cliente lo reserva milisegundos antes. Al pulsar "Confirmar", el sistema debe mostrar un mensaje amigable: "¡Vaya! Justo ese horario fue reservado. Por favor, selecciona otro." y devolverla al calendario.
    *   **Intento de Reserva en Horario no Disponible:** Si un usuario malicioso intenta manipular la API para reservar en un horario no válido, el backend debe rechazar la petición con un error 400 (Bad Request).
