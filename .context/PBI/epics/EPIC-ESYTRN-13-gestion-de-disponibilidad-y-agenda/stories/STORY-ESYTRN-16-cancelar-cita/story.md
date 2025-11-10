# Como Carlos, quiero poder cancelar manualmente una cita desde mi calendario, para poder gestionar imprevistos y liberar ese espacio.

**Jira Key:** ESYTRN-16
**Epic:** EPIC-ESYTRN-13 (Gestión de Disponibilidad y Agenda)
**Priority:** Medium
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos
**I want to** poder cancelar manualmente una cita desde mi calendario
**So that** poder gestionar imprevistos y liberar ese espacio

---

## Description

This user story allows a business owner to manually cancel an appointment from their calendar, to manage unforeseen events and free up that time slot.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully cancel an appointment
- **Given:** I have a confirmed appointment in my calendar
- **When:** I select the appointment and click "Cancel"
- **Then:** The appointment is removed from my calendar and the time slot becomes available.

### Scenario 2: Confirmation before cancellation
- **Given:** I have selected an appointment to cancel
- **When:** I click "Cancel"
- **Then:** I see a confirmation dialog asking "Are you sure you want to cancel this appointment?"

### Scenario 3: (Optional MVP) Notify client of cancellation
- **Given:** I have cancelled an appointment
- **When:** The appointment is successfully cancelled
- **Then:** An email is sent to the client notifying them of the cancellation.

---

## Technical Notes

### Frontend
- Add a "Cancel" button to the appointment details view in the calendar.
- Show a confirmation dialog before cancelling the appointment.
- Call the backend API to cancel the appointment.

### Backend
- Create an API endpoint to cancel an appointment (`/api/appointments/:id/cancel`).
- The endpoint should verify that the authenticated user is the owner of the business to which the appointment belongs.
- Delete the appointment from the `appointments` table.
- (Optional MVP) Trigger an email notification to the client.

### Database
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.
- (Optional MVP) Transactional email service (e.g., SendGrid, Resend) to send cancellation emails.

---

## Dependencies

### Blocked By
- ESYTRN-15: Ver citas en calendario

### Blocks
- None

### Related Stories
- ESYTRN-15: Ver citas en calendario

---

## UI/UX Considerations

- The cancellation process should be simple and clear.
- The confirmation dialog should be explicit about the action being taken.

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

See: `.context/PBI/epics/EPIC-ESYTRN-13/stories/STORY-ESYTRN/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-13/stories/STORY-ESYTRN/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

The client notification is optional for the MVP, but highly desirable.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-13-gestion-de-disponibilidad-y-agenda/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-012)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
