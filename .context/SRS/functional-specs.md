### **Especificaciones Funcionales (Functional Specifications) - easyTurn MVP**

Este documento detalla los requisitos funcionales para el MVP de easyTurn. Cada requisito (FR) se deriva directamente de las User Stories definidas en el documento `mvp-scope.md`.

---

**FR-001: El sistema debe permitir el registro de un nuevo dueño de negocio**
- **Relacionado a:** EPIC-EASY-01 (Onboarding y Autenticación), US 1.1
- **Input:**
    - `email` (string, formato RFC 5322, max 254 chars)
    - `password` (string, min 8 chars)
- **Processing:**
    - Validar que el formato del `email` sea correcto.
    - Validar que el `password` cumpla con la longitud mínima.
    - Verificar que el `email` no exista previamente en la tabla `users`.
    - Hashear el `password` (ej. con bcrypt).
    - Crear un nuevo registro en la tabla `users` con el email y el password hasheado.
    - Iniciar sesión automáticamente para el nuevo usuario.
- **Output:**
    - **Success:** Objeto de sesión (Session Object) que incluye un JSON Web Token (JWT). Redirección al wizard de onboarding.
    - **Error:** Objeto de error con código y mensaje (ej. `{"error": "EMAIL_EXISTS", "message": "Este email ya está registrado."}`).
- **Validations:**
    - El campo `email` es obligatorio y debe ser único en el sistema.
    - El campo `password` es obligatorio y debe tener al menos 8 caracteres.

---

**FR-002: El sistema debe permitir la autenticación de un dueño de negocio**
- **Relacionado a:** EPIC-EASY-01 (Onboarding y Autenticación), US 1.2
- **Input:**
    - `email` (string)
    - `password` (string)
- **Processing:**
    - Buscar al usuario en la tabla `users` por su `email`.
    - Si el usuario existe, comparar el `password` proporcionado con el hash almacenado.
    - Si la comparación es exitosa, generar una nueva sesión (JWT).
- **Output:**
    - **Success:** Objeto de sesión (JWT). Redirección al dashboard.
    - **Error:** Objeto de error con código y mensaje (ej. `{"error": "INVALID_CREDENTIALS", "message": "Email o contraseña incorrectos."}`).
- **Validations:**
    - Ambos campos, `email` y `password`, son obligatorios.

---

**FR-003: El sistema debe permitir la recuperación de contraseña**
- **Relacionado a:** EPIC-EASY-01 (Onboarding y Autenticación), US 1.3
- **Input:**
    - `email` (string)
- **Processing:**
    - Verificar que el usuario con ese `email` exista.
    - Generar un token de reseteo de contraseña único y con tiempo de expiración (ej. 1 hora).
    - Enviar un email al usuario con un enlace que contenga dicho token.
- **Output:**
    - **Success:** Mensaje en pantalla: "Si tu email está en nuestro sistema, recibirás un enlace para recuperar tu contraseña." (Respuesta genérica para no confirmar si un email existe o no).
- **Validations:**
    - El `email` debe tener un formato válido.

---

**FR-004: El sistema debe permitir la creación y actualización del perfil del negocio**
- **Relacionado a:** EPIC-EASY-02 (Configuración del Negocio), US 2.2, US 2.3
- **Input:**
    - `business_name` (string, 3-50 chars)
    - `contact_info` (string, opcional)
    - `logo_url` (string, URL, opcional)
    - `user_id` (foreign key, del usuario autenticado)
- **Processing:**
    - Durante el onboarding, crear un nuevo registro en la tabla `businesses` asociado al `user_id`.
    - Generar un `slug` único para la URL a partir del `business_name` (ej. "Barbería Carlos" -> "barberia-carlos").
    - Guardar el resto de la información.
- **Output:**
    - **Success:** Objeto del negocio (`Business Object`) con todos sus datos.
    - **Error:** Objeto de error si las validaciones fallan.
- **Validations:**
    - `business_name` es obligatorio.
    - El `slug` generado debe ser único en la tabla `businesses`.

---

**FR-005: El sistema debe permitir la gestión de servicios del negocio**
- **Relacionado a:** EPIC-EASY-02 (Configuración del Negocio), US 2.1
- **Input:**
    - `service_name` (string, 3-100 chars)
    - `duration_minutes` (integer, > 0)
    - `price` (decimal, >= 0)
    - `business_id` (foreign key)
- **Processing:**
    - Crear/actualizar un registro en la tabla `services` asociado al `business_id`.
- **Output:**
    - **Success:** Objeto del servicio (`Service Object`) creado o actualizado.
- **Validations:**
    - `service_name` y `duration_minutes` son obligatorios.
    - `duration_minutes` debe ser un múltiplo de un intervalo base (ej. 15 minutos).

---

**FR-006: El sistema debe permitir la gestión del horario de disponibilidad**
- **Relacionado a:** EPIC-EASY-03 (Gestión de Disponibilidad), US 3.1
- **Input:**
    - `day_of_week` (integer, 0-6)
    - `start_time` (time, HH:MM)
    - `end_time` (time, HH:MM)
    - `business_id` (foreign key)
- **Processing:**
    - Crear o actualizar registros en la tabla `schedules` para cada día de la semana que el negocio esté abierto.
- **Output:**
    - **Success:** Array de objetos de horario (`Schedule Objects`).
- **Validations:**
    - `end_time` debe ser posterior a `start_time`.

---

**FR-007: El sistema debe generar y mostrar una página pública de reservas**
- **Relacionado a:** EPIC-EASY-04 (Página Pública), US 4.1, US 4.3
- **Input:**
    - `slug` del negocio (desde la URL, ej. `/easyturn.app/[slug]`)
- **Processing:**
    - Buscar el negocio en la tabla `businesses` usando el `slug`.
    - Si se encuentra, obtener los datos del perfil (nombre, logo) y la lista de servicios asociados.
    - Renderizar una página del lado del servidor (SSR) con esta información.
- **Output:**
    - **Success:** Página HTML renderizada con la información del negocio.
    - **Error:** Si el `slug` no existe, mostrar una página de error 404 "Negocio no encontrado".
- **Validations:**
    - La página debe ser responsive y tener un buen rendimiento en móviles.

---

**FR-008: El sistema debe calcular y mostrar los horarios disponibles**
- **Relacionado a:** EPIC-EASY-04 (Página Pública), US 5.1
- **Input:**
    - `business_id`
    - `service_id` (para obtener la duración)
    - `date` (date, YYYY-MM-DD)
- **Processing:**
    - Obtener el horario de trabajo para el `day_of_week` correspondiente a la `date` desde la tabla `schedules`.
    - Obtener todas las reservas (`appointments`) para esa `date`.
    - Obtener la `duration_minutes` del servicio seleccionado.
    - Generar una lista de todos los posibles slots de inicio (ej. cada 15 min) dentro del horario laboral.
    - Filtrar la lista, eliminando los slots que se solapen con las reservas existentes.
- **Output:**
    - **Success:** Array de strings con los horarios disponibles (ej. `["09:00", "10:30", "11:15"]`).
- **Validations:**
    - No se deben mostrar horarios en el pasado.
    - No se deben mostrar horarios si no hay suficiente tiempo para completar el servicio antes de la hora de cierre o de la siguiente cita.

---

**FR-009: El sistema debe permitir la creación de una nueva reserva**
- **Relacionado a:** EPIC-EASY-05 (Flujo de Reserva), US 5.2
- **Input:**
    - `business_id`
    - `service_id`
    - `start_time` (datetime, ISO 8601)
    - `client_name` (string)
    - `client_email` (string, formato email)
- **Processing:**
    - **Verificación de concurrencia:** Volver a validar que el slot solicitado sigue disponible en el momento de la transacción.
    - Calcular `end_time` sumando la `duration_minutes` del servicio al `start_time`.
    - Crear un nuevo registro en la tabla `appointments`.
    - Disparar el evento de notificación por email.
- **Output:**
    - **Success:** Objeto de la reserva (`Appointment Object`).
    - **Error:** Objeto de error si el slot ya no está disponible ("SLOT_UNAVAILABLE").
- **Validations:**
    - `client_name` y `client_email` son obligatorios.
    - `start_time` no puede ser en el pasado.

---

**FR-010: El sistema debe enviar notificaciones de reserva por email**
- **Relacionado a:** EPIC-EASY-05 (Flujo de Reserva), US 5.3, US 5.4
- **Input:**
    - `Appointment Object` (del FR-009)
- **Processing:**
    - **Email para el cliente:** Componer un email con los detalles de la reserva (negocio, servicio, fecha, hora).
    - **Email para el dueño del negocio:** Componer un email notificando que se ha realizado una nueva reserva, con los datos del cliente y del servicio.
    - Enviar ambos emails a través de un servicio de correo transaccional.
- **Output:** N/A (proceso asíncrono).
- **Validations:** N/A.

---

**FR-011: El sistema debe mostrar las reservas en el calendario del negocio**
- **Relacionado a:** EPIC-EASY-03 (Gestión de Disponibilidad), US 3.2
- **Input:**
    - `business_id`
    - `start_date` (date)
    - `end_date` (date)
- **Processing:**
    - Consultar la tabla `appointments` para obtener todas las reservas del `business_id` que se encuentren entre `start_date` y `end_date`.
- **Output:**
    - **Success:** Array de `Appointment Objects`.
- **Validations:** N/A.

---

**FR-012: El sistema debe permitir la cancelación de una reserva**
- **Relacionado a:** EPIC-EASY-03 (Gestión de Disponibilidad), US 3.3
- **Input:**
    - `appointment_id`
    - `user_id` (del dueño del negocio autenticado)
- **Processing:**
    - Verificar que la reserva (`appointment_id`) pertenece al negocio del `user_id`.
    - Eliminar el registro de la tabla `appointments`.
    - (Opcional MVP) Disparar un email de cancelación al cliente.
- **Output:**
    - **Success:** Mensaje de confirmación (`{"status": "CANCELLED"}`).
    - **Error:** Error de permisos si el usuario no es el dueño de la reserva.
- **Validations:**
    - El usuario debe ser el propietario del negocio al que pertenece la cita.
