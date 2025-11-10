# Como Carlos, quiero recibir una notificación por email cada vez que se crea una nueva reserva, para estar siempre al tanto de mi agenda.

**Jira Key:** ESYTRN-25
**Epic:** EPIC-ESYTRN-21 (Flujo de Reserva y Notificaciones)
**Priority:** High
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos
**I want to** recibir una notificación por email cada vez que se crea una nueva reserva
**So that** estar siempre al tanto de mi agenda

---

## Description

This user story ensures that the business owner (Carlos) receives an immediate email notification whenever a new booking is made for their services. This allows them to stay informed about their schedule in real-time and prepare for upcoming appointments.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully receive a new booking notification email
- **Given:** A customer has successfully confirmed a booking for my business
- **When:** I check my business email inbox
- **Then:** I receive an email from easyTurn with the subject "¡Nueva Reserva para [Nombre del Negocio]!" containing the service name, date, time, and customer contact information.

### Scenario 2: Email content is accurate and complete
- **Given:** I have received a new booking notification email
- **When:** I review the email content
- **Then:** All details (service, date, time, customer name, customer email) are correct and match the new booking.

### Scenario 3: Email is sent instantly
- **Given:** A customer has successfully confirmed a booking
- **When:** I check my business email inbox within a few seconds
- **Then:** The new booking notification email is already in my inbox.

### Scenario 4: No notification email for failed booking
- **Given:** A customer's booking attempt failed
- **When:** I check my business email inbox
- **Then:** I do not receive a new booking notification email for the failed booking.

---

## Technical Notes

### Frontend
- No direct frontend changes for this story.

### Backend
- The booking API endpoint (from STORY-ESYTRN-23) should trigger an email sending function after a successful appointment creation.
- Use a transactional email service API to send the email.
- The email template should be dynamic, populating details like business name, service name, date, time, customer name, and customer email.
- The recipient email address should be the business owner's registered email.
- Implement robust error handling for email sending failures (e.g., logging, retry mechanisms).

### Database
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email) - All necessary data for the email content.
- `businesses` table: (id, user_id, name) - For business name in the email.
- `users` table: (id, email) - To get the business owner's email.

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Transactional email service (e.g., SendGrid, Resend, Postmark).

---

## Dependencies

### Blocked By
- STORY-ESYTRN-23: Confirmar reserva (requires a confirmed booking to trigger the email)

### Blocks
- None

### Related Stories
- STORY-ESYTRN-24: Email de confirmación cliente (shares email sending infrastructure)

---

## UI/UX Considerations

- The email should be clear, concise, and easy to read.
- It should prominently display the most important information (who, what, when).
- Ensure the email is mobile-friendly.

---

## Definition of Done

- [ ] Código implementado y funcionando
- [ ] Tests unitarios (coverage > 80%)
- [ ] Tests de integración (API + DB, email service integration)
- [ ] Tests E2E (Playwright - verify email receipt)
- [ ] Code review aprobado (2 reviewers)
- [ ] Documentación actualizada (README, API docs, email templates)
- [ ] Deployed to staging
- [ ] QA testing passed
- [ ] Acceptance criteria validated
- [ ] No critical/high bugs open

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-25-notificacion-nueva-reserva-dueno/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (email sent and received with correct content)
- Error scenarios (email service failure, business owner email not found)
- Edge cases (multiple bookings in a short period)
- Performance (email sent quickly after booking)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-25-notificacion-nueva-reserva-dueno/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This notification is vital for business owners to manage their operations effectively.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-010)
- **API Contracts:** `.context/SRS/api-contracts.yaml`