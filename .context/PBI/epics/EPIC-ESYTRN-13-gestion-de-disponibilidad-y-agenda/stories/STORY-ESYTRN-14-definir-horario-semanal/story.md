# Como Carlos, quiero poder definir mi horario de trabajo semanal recurrente (ej. L-V de 9 a 18h), para que los clientes solo puedan reservar en mis horas disponibles.

**Jira Key:** ESYTRN-14
**Epic:** EPIC-ESYTRN-13 (Gestión de Disponibilidad y Agenda)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos
**I want to** poder definir mi horario de trabajo semanal recurrente (ej. L-V de 9 a 18h)
**So that** los clientes solo puedan reservar en mis horas disponibles

---

## Description

This user story allows a business owner to define their weekly recurring work hours, so that customers can only book appointments during their available time.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully define work schedule
- **Given:** I am on the "Availability" management page
- **When:** I set my work hours for each day of the week and click "Save"
- **Then:** My work schedule is saved and the available time slots are updated accordingly.

### Scenario 2: Attempt to set an invalid time range
- **Given:** I am on the "Availability" management page
- **When:** I try to set a start time that is after the end time for a specific day
- **Then:** I see an error message "La hora de inicio debe ser anterior a la hora de fin."

### Scenario 3: The defined schedule is reflected on the public booking page
- **Given:** I have defined my work schedule
- **When:** A customer visits my public booking page
- **Then:** They only see available time slots within my defined work hours.

---

## Technical Notes

### Frontend
- Create an "Availability" management page with a form to set the work hours for each day of the week.
- Call the backend API to save the schedule.

### Backend
- Create an API endpoint for creating/updating the schedule (`/api/schedule`).
- Validate the request body.
- Save the schedule to the `schedules` table.

### Database
- `schedules` table: (id, business_id, day_of_week, start_time, end_time)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- EPIC-ESYTRN-9: Configuración del Negocio y Servicios

### Blocks
- EPIC-ESYTRN: Flujo de Reserva y Notificaciones

### Related Stories
- None

---

## UI/UX Considerations

- The availability management interface should be intuitive and easy to use.
- Provide clear feedback to the user on success or failure of operations.

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

This is a core feature for the booking system to work.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-13-gestion-de-disponibilidad-y-agenda/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-006)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
