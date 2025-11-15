# Como Ana, quiero poder confirmar mi reserva proporcionando únicamente mi nombre y mi email, para no tener que crear otra cuenta de usuario.

**Jira Key:** ESYTRN-23
**Epic:** EPIC-ESYTRN-21 (Flujo de Reserva y Notificaciones)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Ana
**I want to** poder confirmar mi reserva proporcionando únicamente mi nombre y mi email
**So that** no tener que crear otra cuenta de usuario

---

## Description

This user story allows a final customer (Ana) to finalize their booking by providing minimal personal information: their name and email address. The goal is to make the booking process as frictionless as possible by removing the requirement for account creation, thereby increasing conversion rates.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully confirm a booking with valid details
- **Given:** I have selected a service, date, and time slot on the public booking page
- **When:** I enter my valid name and email address in the booking form and click "Confirm Booking"
- **Then:** My booking is successfully confirmed, and I see a confirmation message on the screen.

### Scenario 2: Attempt to confirm a booking with missing information
- **Given:** I have selected a service, date, and time slot on the public booking page
- **When:** I try to confirm the booking without providing my name or email address
- **Then:** I see an error message indicating that the required fields are missing.

### Scenario 3: Attempt to confirm a booking with an invalid email format
- **Given:** I have selected a service, date, and time slot on the public booking page
- **When:** I enter an invalid email format (e.g., "ana@example") and click "Confirm Booking"
- **Then:** I see an error message indicating that the email format is invalid.

### Scenario 4: Time slot becomes unavailable during booking process
- **Given:** I have selected a service, date, and time slot, but another customer books it before I confirm
- **When:** I click "Confirm Booking"
- **Then:** I receive a message indicating that the selected time slot is no longer available, and I am prompted to choose another.

---

## Technical Notes

### Frontend
- Create a simple form for name and email input on the booking confirmation step.
- Implement client-side validation for email format and required fields.
- Display success or error messages based on the backend response.
- Handle the scenario where a time slot becomes unavailable during the booking process.

### Backend
- Create an API endpoint (e.g., `/api/public/book`) to receive booking requests.
- This endpoint should:
    - Validate the incoming data (name, email, service ID, start/end times).
    - Perform a final check for time slot availability to prevent double bookings.
    - Create a new record in the `appointments` table.
    - Trigger the customer confirmation email (STORY-ESYTRN-24) and business owner notification email (STORY-ESYTRN-25).
    - Return a success or failure response.

### Database
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email, status, created_at)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.
- Transactional email service (e.g., SendGrid, Resend) for sending emails.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-22: Seleccionar fecha y hora (requires a selected date and time)

### Blocks
- STORY-ESYTRN-24: Email de confirmación cliente
- STORY-ESYTRN-25: Notificación nueva reserva dueño

### Related Stories
- None

---

## UI/UX Considerations

- The booking form should be clear, concise, and easy to fill out.
- Provide clear feedback on validation errors.
- The confirmation message should be prominent and reassuring.
- Consider a progress indicator if the booking process takes a few seconds.

---

## Definition of Done

- [ ] Código implementado y funcionando
- [ ] Tests unitarios (coverage > 80%)
- [ ] Tests de integración (API + DB)
- [ ] Tests E2E (Playwright)
- [ ] Code review aprobado (2 reviewers)
- [ ] Documentación actualizada (README, API docs)
- [ ] Deployed to staging
- [ ] QA testing passed
- [ ] Acceptance criteria validated
- [ ] No critical/high bugs open

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-23-confirmar-reserva/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (successful booking)
- Error scenarios (missing fields, invalid email, time slot conflict)
- Edge cases (concurrent bookings, very short notice bookings)
- Security validations (input sanitization, rate limiting)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-23-confirmar-reserva/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This story is the core transaction of the platform. Robust validation and error handling are paramount.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-009)
- **API Contracts:** `.context/SRS/api-contracts.yaml`