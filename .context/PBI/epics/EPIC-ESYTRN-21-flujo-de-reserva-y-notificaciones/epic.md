# Flujo de Reserva y Notificaciones

**Jira Key:** ESYTRN-21
**Status:** To Do
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

This epic covers the entire booking flow, from the customer selecting a service and time slot to confirming the appointment and receiving a notification. It also includes the notification sent to the business owner. This is the core functionality that allows customers to book services and businesses to manage their appointments.

**Business Value:**
A seamless booking and notification flow is critical for both customer satisfaction and business efficiency. It ensures customers can easily secure appointments, and business owners are immediately informed, reducing manual coordination and potential missed bookings. This directly drives revenue and operational smoothness.

---

## User Stories

1. **ESYTRN-22** - Como Ana, quiero poder seleccionar una fecha y hora disponibles en un calendario interactivo, para poder agendar mi cita sin necesidad de comunicarme por chat o teléfono.
2. **ESYTRN-23** - Como Ana, quiero poder confirmar mi reserva proporcionando únicamente mi nombre y mi email, para no tener que crear otra cuenta de usuario.
3. **ESYTRN-24** - Como Ana, quiero recibir un email de confirmación instantáneo con los detalles de mi cita, para tener la tranquilidad de que mi reserva está asegurada.
4. **ESYTRN-25** - Como Carlos, quiero recibir una notificación por email cada vez que se crea una nueva reserva, para estar siempre al tanto de mi agenda.

---

## Scope

### In Scope
- Interactive calendar for customers to select available dates and times.
- Customer booking confirmation with name and email (no account creation required).
- Instant email confirmation sent to the customer.
- Instant email notification sent to the business owner for new bookings.
- Creation of a new appointment record in the database.

### Out of Scope (Future)
- Customer accounts for managing their own bookings.
- SMS notifications for customers or business owners.
- Payment processing for bookings.
- Rescheduling or cancellation by the customer.

---

## Acceptance Criteria (Epic Level)

1. ✅ Customers can view available time slots and select a desired date and time for a service.
2. ✅ Customers can confirm a booking by providing their name and email without needing to register.
3. ✅ Upon successful booking, both the customer and the business owner receive appropriate email notifications.
4. ✅ The system accurately records the new appointment and updates availability.

---

## Related Functional Requirements

- **FR-008:** La página de reservas debe permitir la selección de fecha y hora.
- **FR-009:** El sistema debe permitir la confirmación de una reserva por parte del cliente.
- **FR-010:** El sistema debe enviar notificaciones por email al cliente y al negocio sobre las reservas.

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Frontend
- Implement an interactive calendar component for date and time selection.
- Create a booking form for customer details (name, email).
- Display clear confirmation messages to the user.

### Backend
- Create API endpoints for:
    - Retrieving available time slots for a given service and date.
    - Creating a new appointment.
- Implement logic to check for time slot conflicts and update availability.
- Integrate with an email service for sending notifications.
- Validate customer input and ensure data integrity.

### Database Schema
**Tables:**
- `appointments`: (id, business_id, service_id, start_time, end_time, client_name, client_email, status, created_at)
- `schedules`: (id, business_id, day_of_week, start_time, end_time) - Used to determine base availability.
- `services`: (id, business_id, name, duration_minutes, price)

**IMPORTANTE:** NO hardcodear schema SQL completo. Usar Supabase MCP para schema real.

### Security Requirements
- Protect API endpoints from abuse (e.g., rate limiting on booking attempts).
- Ensure email addresses are handled securely and not exposed.
- Validate all incoming data to prevent injection attacks.

---

## Dependencies

### External Dependencies
- Supabase for database.
- Transactional email service (e.g., SendGrid, Resend) for sending notifications.

### Internal Dependencies
- EPIC-ESYTRN-13: Gestión de Disponibilidad y Agenda (for business schedules and calendar logic).
- EPIC-ESYTRN-17: Página Pública de Reservas (Cliente Final) (provides the interface for booking).

### Blocks
- None (This epic is a core feature, other features might depend on it).

---

## Success Metrics

### Functional Metrics
- **Booking Success Rate:** > 95% of initiated bookings are completed successfully.
- **Notification Delivery Rate:** > 98% of emails are successfully sent.
- **Availability Calculation Accuracy:** 100% accurate time slot display.

### Business Metrics
- **Number of Bookings:** Total appointments made through the platform.
- **Customer Satisfaction:** Feedback on the ease of booking.

---

## Risks & Mitigations

| Risk                      | Impact | Probability | Mitigation                                                                 |
| ------------------------- | ------ | ----------- | -------------------------------------------------------------------------- |
| Double bookings           | High   | Medium      | Implement robust transactional logic and database constraints to prevent conflicts. |
| Email delivery failures   | High   | Medium      | Use a reliable email service, implement retry mechanisms, and monitor delivery logs. |
| Timezone complexities     | Medium | Medium      | Store all times in UTC and handle conversions consistently on frontend/backend. |

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/feature-test-plan.md` (se crea en Fase 4)

### Test Coverage Requirements
- **Unit Tests:** Cover all logic for time slot calculation, booking validation, and email generation.
- **Integration Tests:** Test API endpoints for booking creation and notification triggers.
- **E2E Tests:** Simulate a full customer booking journey, including email receipt.

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/feature-implementation-plan.md` (se crea en Fase 5)

### Recommended Story Order
1. ESYTRN-22 - Seleccionar fecha y hora
2. ESYTRN-23 - Confirmar reserva
3. ESYTRN-24 - Email de confirmación cliente
4. ESYTRN-25 - Notificación nueva reserva dueño

### Estimated Effort
- **Development:** 3 sprints
- **Testing:** 1 sprint
- **Total:** 3 sprints

---

## Notes

This epic is the heart of the easyTurn platform. Careful attention to detail, error handling, and user experience is paramount.

---

## Related Documentation

- **PRD:** `.context/PRD/executive-summary.md`, `.context/PRD/mvp-scope.md`, `.context/PRD/user-journeys.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-008, FR-009, FR-010)
- **Architecture:** `.context/SRS/architecture-specs.md`
- **API Contracts:** `.context/SRS/api-contracts.yaml`