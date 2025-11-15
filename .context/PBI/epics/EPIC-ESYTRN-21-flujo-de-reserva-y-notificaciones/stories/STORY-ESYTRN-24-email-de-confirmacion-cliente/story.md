# Como Ana, quiero recibir un email de confirmación instantáneo con los detalles de mi cita, para tener la tranquilidad de que mi reserva está asegurada.

**Jira Key:** ESYTRN-24
**Epic:** EPIC-ESYTRN-21 (Flujo de Reserva y Notificaciones)
**Priority:** High
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Ana
**I want to** recibir un email de confirmación instantáneo con los detalles de mi cita
**So that** tener la tranquilidad de que mi reserva está asegurada

---

## Description

This user story ensures that after successfully booking an appointment, the customer (Ana) receives an immediate email confirmation. This email should contain all relevant details of the appointment, providing reassurance and a record of their booking.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully receive a confirmation email
- **Given:** I have successfully confirmed a booking
- **When:** I check my email inbox
- **Then:** I receive an email from easyTurn with the subject "Confirmación de tu cita en [Nombre del Negocio]" containing the service name, date, time, and business contact information.

### Scenario 2: Email content is accurate and complete
- **Given:** I have received a confirmation email
- **When:** I review the email content
- **Then:** All details (service, date, time, business name, business contact info) are correct and match my booking.

### Scenario 3: Email is sent instantly
- **Given:** I have successfully confirmed a booking
- **When:** I check my email inbox within a few seconds
- **Then:** The confirmation email is already in my inbox (or spam/junk folder if not configured correctly).

### Scenario 4: No confirmation email for failed booking
- **Given:** My booking attempt failed (e.g., time slot became unavailable)
- **When:** I check my email inbox
- **Then:** I do not receive a confirmation email for the failed booking.

---

## Technical Notes

### Frontend
- No direct frontend changes for this story, but the frontend should display a success message that implies an email has been sent.

### Backend
- The booking API endpoint (from STORY-ESYTRN-23) should trigger an email sending function after a successful appointment creation.
- Use a transactional email service API to send the email.
- The email template should be dynamic, populating details like business name, service name, date, time, and customer name.
- Implement robust error handling for email sending failures (e.g., logging, retry mechanisms).

### Database
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email) - All necessary data for the email content.
- `businesses` table: (id, name, contact_info) - For business details in the email.

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
- STORY-ESYTRN-25: Notificación nueva reserva dueño (shares email sending infrastructure)

---

## UI/UX Considerations

- The email should be well-formatted, easy to read, and branded with the easyTurn logo (and potentially the business logo).
- Clear call to action if any (e.g., "Add to calendar").
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

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-24-email-de-confirmacion-cliente/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (email sent and received with correct content)
- Error scenarios (email service failure, invalid recipient email)
- Edge cases (special characters in names, very long service names)
- Performance (email sent quickly after booking)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-24-email-de-confirmacion-cliente/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This email is a critical touchpoint for customer trust and satisfaction.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-010)
- **API Contracts:** `.context/SRS/api-contracts.yaml`