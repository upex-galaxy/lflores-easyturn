# Como Laura, quiero poder ver todas mis citas confirmadas en una vista de calendario simple (diaria/semanal), para tener un panorama claro de mi jornada laboral.

**Jira Key:** ESYTRN-15
**Epic:** EPIC-ESYTRN-13 (Gestión de Disponibilidad y Agenda)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Laura
**I want to** poder ver todas mis citas confirmadas en una vista de calendario simple (diaria/semanal)
**So that** tener un panorama claro de mi jornada laboral

---

## Description

This user story allows a business owner to view all their confirmed appointments in a simple calendar view (daily/weekly), to have a clear overview of their workday.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: View appointments in the calendar
- **Given:** I have some confirmed appointments
- **When:** I go to the "Calendar" page
- **Then:** I see my appointments displayed in a calendar.

### Scenario 2: Switch between daily and weekly views
- **Given:** I am on the "Calendar" page
- **When:** I switch between the daily and weekly views
- **Then:** The calendar updates to show the appointments for the selected view.

### Scenario 3: No appointments to show
- **Given:** I have no confirmed appointments
- **When:** I go to the "Calendar" page
- **Then:** I see an empty calendar with a message "No tienes citas programadas."

---

## Technical Notes

### Frontend
- Create a "Calendar" page to display the appointments.
- Use a library like `react-big-calendar` or `fullcalendar` to display the calendar.
- Fetch the appointments from the backend.

### Backend
- Create an API endpoint to get the appointments for a given date range (`/api/appointments`).
- The endpoint should return the appointments for the authenticated user's business.

### Database
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- EPIC-ESYTRN: Flujo de Reserva y Notificaciones

### Blocks
- None

### Related Stories
- None

---

## UI/UX Considerations

- The calendar should be easy to read and navigate.
- Each appointment in the calendar should display key information (e.g., client name, service).
- Provide a way to easily navigate to the current day.

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

This is a core feature for the business owner to manage their business.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-13-gestion-de-disponibilidad-y-agenda/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-011)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
