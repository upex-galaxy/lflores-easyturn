### **MVP Scope & Prioritization - easyTurn**

#### **1. In Scope (Must-Have for MVP)**

Estas son las funcionalidades críticas que se incluirán en la primera versión para resolver el problema principal de nuestros usuarios.

**EPIC-EASY-01: Onboarding y Autenticación de Negocios**
*   **Epic Title:** Business Account & Onboarding
*   **User Stories:**
    *   **US 1.1:** Como Laura (nueva dueña de negocio), quiero poder registrarme en la plataforma usando mi email y una contraseña, para poder crear mi cuenta y acceder a las funcionalidades.
    *   **US 1.2:** Como Carlos (dueño de negocio recurrente), quiero poder iniciar sesión de forma segura, para acceder a mi panel de control y gestionar mi agenda.
    *   **US 1.3:** Como Carlos, quiero poder recuperar mi contraseña si la olvido, para no perder el acceso a mi cuenta.

**EPIC-EASY-02: Configuración del Negocio y Servicios**
*   **Epic Title:** Business Profile & Service Management
*   **User Stories:**
    *   **US 2.1:** Como Laura, quiero poder añadir y editar los servicios que ofrezco (con nombre, duración y precio), para que mis clientes vean claramente mis ofertas.
    *   **US 2.2:** Como Carlos, quiero poder establecer el nombre y la información de contacto de mi negocio, para que mis clientes me identifiquen y confíen en la página.
    *   **US 2.3:** Como Laura, quiero poder subir un logo simple para mi negocio, para personalizar mi página de reservas y reforzar mi marca.

**EPIC-EASY-03: Gestión de Disponibilidad y Agenda**
*   **Epic Title:** Availability & Calendar Management
*   **User Stories:**
    *   **US 3.1:** Como Carlos, quiero poder definir mi horario de trabajo semanal recurrente (ej. L-V de 9 a 18h), para que los clientes solo puedan reservar en mis horas disponibles.
    *   **US 3.2:** Como Laura, quiero poder ver todas mis citas confirmadas en una vista de calendario simple (diaria/semanal), para tener un panorama claro de mi jornada laboral.
    *   **US 3.3:** Como Carlos, quiero poder cancelar manualmente una cita desde mi calendario, para poder gestionar imprevistos y liberar ese espacio.

**EPIC-EASY-04: Página Pública de Reservas (Cliente Final)**
*   **Epic Title:** Public Booking Page
*   **User Stories:**
    *   **US 4.1:** Como Ana (cliente final), quiero poder acceder a una página de reservas pública y optimizada para móvil a través de una URL simple, para poder reservar fácilmente desde mi teléfono.
    *   **US 4.2:** Como Ana, quiero ver una lista clara de los servicios disponibles con su duración y precio, para poder elegir el que necesito sin dudas.
    *   **US 4.3:** Como Laura (dueña de negocio), quiero que mi página de reservas tenga una URL única y fácil de compartir, para poder ponerla en mi biografía de Instagram.

**EPIC-EASY-05: Flujo de Reserva y Notificaciones**
*   **Epic Title:** Booking Flow & Notifications
*   **User Stories:**
    *   **US 5.1:** Como Ana, quiero poder seleccionar una fecha y hora disponibles en un calendario interactivo, para poder agendar mi cita sin necesidad de comunicarme por chat o teléfono.
    *   **US 5.2:** Como Ana, quiero poder confirmar mi reserva proporcionando únicamente mi nombre y mi email, para no tener que crear otra cuenta de usuario.
    *   **US 5.3:** Como Ana, quiero recibir un email de confirmación instantáneo con los detalles de mi cita, para tener la tranquilidad de que mi reserva está asegurada.
    *   **US 5.4:** Como Carlos, quiero recibir una notificación por email cada vez que se crea una nueva reserva, para estar siempre al tanto de mi agenda.

---

#### **2. Out of Scope (Nice-to-Have for v2+)**

Para acelerar el lanzamiento, las siguientes funcionalidades se considerarán para futuras versiones.

*   **Gestión de Múltiples Empleados:** Soporte para varios calendarios y asignación de servicios a personal específico.
*   **Recordatorios Automáticos por WhatsApp/SMS:** Una de las funcionalidades clave para el plan Pro.
*   **Procesamiento de Pagos:** Integración con Stripe/Mercado Pago para aceptar depósitos o pagos completos.
*   **Cuentas de Cliente:** Login para que los clientes finales puedan ver su historial de citas o reprogramar.
*   **Analíticas y Reportes:** Dashboard con métricas de negocio para el propietario.
*   **Personalización Avanzada:** Opciones para cambiar colores, fuentes o eliminar la marca "Powered by easyTurn".
*   **Integración con Calendarios Externos:** Sincronización con Google Calendar, Outlook, etc.

---

#### **3. Success Criteria (Criterios de Éxito del MVP)**

*   **Criterios de Aceptación Funcional:**
    *   Todas las User Stories definidas en la sección "In Scope" están implementadas, probadas (end-to-end) y funcionan correctamente en los navegadores modernos y dispositivos móviles.
    *   La aplicación está desplegada en Vercel y la base de datos en Supabase está operativa.
    *   El flujo completo de reserva ha sido probado con éxito por al menos 5 usuarios no técnicos.

*   **Métricas Mínimas a Alcanzar (Primer mes post-lanzamiento):**
    *   **Adopción:** `> 50` nuevos negocios han completado el onboarding.
    *   **Engagement:** `> 200` reservas totales creadas a través de la plataforma.
    *   **Estabilidad:** `> 99%` de uptime del servicio.

*   **Condiciones para el Lanzamiento (Go-Live):**
    *   La plataforma es segura (HTTPS, protección de datos de usuario).
    *   Se han publicado una Política de Privacidad y unos Términos de Servicio básicos.
    *   Existe un canal de soporte (ej. un email `soporte@easyturn.app`) monitorizado para atender incidencias.
