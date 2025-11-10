# Epic Tree - easyTurn MVP

Este documento desglosa la estructura de Épicas y User Stories para el MVP de easyTurn. Los IDs son placeholders y serán reemplazados por los IDs reales de Jira.

---

## Overview

Total Epics: 5
Total User Stories: 16
Project Code: ESYTRN
Jira Project: [URL del proyecto en Jira]

---

## Epic Hierarchy

### EPIC-ESYTRN: Onboarding y Autenticación de Negocios

**Jira Key:** ESYTRN-5
**Status:** ASSIGNED
**Priority:** HIGH
**Description:** This epic covers the fundamental functionality for a new business owner to create an account, log in, and manage their access to the easyTurn platform. It's the first touchpoint for our primary users and crucial for adoption.

**User Stories (3):**
1. ESYTRN-6 - Como Laura (nueva dueña de negocio), quiero poder registrarme en la plataforma usando mi email y una contraseña, para poder crear mi cuenta y acceder a las funcionalidades.
2. ESYTRN-7 - Como Carlos (dueño de negocio recurrente), quiero poder iniciar sesión de forma segura, para acceder a mi panel de control y gestionar mi agenda.
3. ESYTRN-8 - Como Carlos, quiero poder recuperar mi contraseña si la olvido, para no perder el acceso a mi cuenta.

**Related Functional Requirements:** FR-001, FR-002, FR-003

---

### EPIC-ESYTRN: Configuración del Negocio y Servicios

**Jira Key:** ESYTRN-9
**Status:** ASSIGNED
**Priority:** HIGH
**Description:** This epic allows business owners to set up their business profile and manage the services they offer. This is a crucial step for businesses to present their offerings to customers.

**User Stories (3):**
1. ESYTRN-10 - Como Laura, quiero poder añadir y editar los servicios que ofrezco (con nombre, duración y precio), para que mis clientes vean claramente mis ofertas.
2. ESYTRN-11 - Como Carlos, quiero poder establecer el nombre y la información de contacto de mi negocio, para que mis clientes me identifiquen y confíen en la página.
3. ESYTRN-12 - Como Laura, quiero poder subir un logo simple para mi negocio, para personalizar mi página de reservas y reforzar mi marca.

**Related Functional Requirements:** FR-004, FR-005

---

### EPIC-ESYTRN: Gestión de Disponibilidad y Agenda

**Jira Key:** ESYTRN-13
**Status:** ASSIGNED
**Priority:** HIGH
**Description:** This epic enables business owners to manage their availability and view their appointments in a calendar. This is a core feature for the booking system to work.

**User Stories (3):**
1. ESYTRN-14 - Como Carlos, quiero poder definir mi horario de trabajo semanal recurrente (ej. L-V de 9 a 18h), para que los clientes solo puedan reservar en mis horas disponibles.
2. ESYTRN-15 - Como Laura, quiero poder ver todas mis citas confirmadas en una vista de calendario simple (diaria/semanal), para tener un panorama claro de mi jornada laboral.
3. ESYTRN-16 - Como Carlos, quiero poder cancelar manualmente una cita desde mi calendario, para poder gestionar imprevistos y liberar ese espacio.

**Related Functional Requirements:** FR-006, FR-011, FR-012

---

### EPIC-ESYTRN: Página Pública de Reservas (Cliente Final)

**Jira Key:** ESYTRN-17
**Status:** ASSIGNED
**Priority:** HIGH
**Description:** This epic covers the creation of a public booking page for each business, where end customers can view services and book appointments.

**User Stories (3):**
1. ESYTRN-18 - Como Ana (cliente final), quiero poder acceder a una página de reservas pública y optimizada para móvil a través de una URL simple, para poder reservar fácilmente desde mi teléfono.
2. ESYTRN-19 - Como Ana, quiero ver una lista clara de los servicios disponibles con su duración y precio, para poder elegir el que necesito sin dudas.
3. ESYTRN-20 - Como Laura (dueña de negocio), quiero que mi página de reservas tenga una URL única y fácil de compartir, para poder ponerla en mi biografía de Instagram.

**Related Functional Requirements:** FR-007, FR-008

---

### EPIC-ESYTRN: Flujo de Reserva y Notificaciones

**Jira Key:** ESYTRN-21
**Status:** ASSIGNED
**Priority:** HIGH
**Description:** This epic covers the entire booking flow, from the customer selecting a service and time slot to confirming the appointment and receiving a notification. It also includes the notification sent to the business owner.

**User Stories (4):**
1. ESYTRN-22 - Como Ana, quiero poder seleccionar una fecha y hora disponibles en un calendario interactivo, para poder agendar mi cita sin necesidad de comunicarme por chat o teléfono.
2. ESYTRN-23 - Como Ana, quiero poder confirmar mi reserva proporcionando únicamente mi nombre y mi email, para no tener que crear otra cuenta de usuario.
3. ESYTRN-24 - Como Ana, quiero recibir un email de confirmación instantáneo con los detalles de mi cita, para tener la tranquilidad de que mi reserva está asegurada.
4. ESYTRN-25 - Como Carlos, quiero recibir una notificación por email cada vez que se crea una nueva reserva, para estar siempre al tanto de mi agenda.

**Related Functional Requirements:** FR-008, FR-009, FR-010

---

## Epic Prioritization

### Phase 1: Foundation (Sprint 1-2)
1. EPIC-ESYTRN: Onboarding y Autenticación de Negocios
2. EPIC-ESYTRN: Configuración del Negocio y Servicios

### Phase 2: Core Booking Experience (Sprint 3-4)
1. EPIC-ESYTRN: Gestión de Disponibilidad y Agenda
2. EPIC-ESYTRN: Página Pública de Reservas (Cliente Final)
3. EPIC-ESYTRN: Flujo de Reserva y Notificaciones

---

## Next Steps

For each epic, the following documentation will be created in .context/PBI/epics/:

    epic.md - Full epic description, scope, and acceptance criteria (FASE 2)
    feature-test-plan.md - High-level test strategy for the epic (FASE 4)
    feature-implementation-plan.md - Technical approach and architecture decisions (FASE 5)
    stories/ folder - Individual story documentation with test cases and implementation plans

Status: All epics and stories detailed ✅ Next Phase: Generate detailed test plans and implementation plans.
