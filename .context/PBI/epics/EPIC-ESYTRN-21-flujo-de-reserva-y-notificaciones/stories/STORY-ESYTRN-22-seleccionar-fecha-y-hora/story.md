# Como Ana, quiero poder seleccionar una fecha y hora disponibles en un calendario interactivo, para poder agendar mi cita sin necesidad de comunicarme por chat o teléfono.

**Jira Key:** ESYTRN-22
**Epic:** EPIC-ESYTRN-21 (Flujo de Reserva y Notificaciones)
**Priority:** High
**Story Points:** 5
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Ana
**I want to** poder seleccionar una fecha y hora disponibles en un calendario interactivo
**So that** poder agendar mi cita sin necesidad de comunicarme por chat o teléfono

---

## Description

This user story enables a final customer (Ana) to interact with a calendar on the public booking page to choose a desired date and time for a service. The calendar should only display available slots, taking into account the business's defined schedule and existing appointments, thus streamlining the booking process and eliminating the need for direct communication.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully select an available date and time
- **Given:** I am on the public booking page for a business and have selected a service
- **When:** I interact with the calendar and choose a date and time slot that is marked as available
- **Then:** The selected date and time are highlighted, and I can proceed to the next step of the booking process.

### Scenario 2: Unavailable dates and times are not selectable
- **Given:** I am on the public booking page for a business and have selected a service
- **When:** I view the calendar
- **Then:** Dates and time slots that are outside the business's working hours or are already booked are clearly marked as unavailable and cannot be selected.

### Scenario 3: Calendar updates based on service duration
- **Given:** I am on the public booking page and switch between services with different durations (e.g., 30 min vs 60 min)
- **When:** I view the available time slots in the calendar
- **Then:** The available time slots adjust dynamically to accommodate the selected service's duration, ensuring only valid booking windows are shown.

### Scenario 4: Navigate through months/weeks
- **Given:** I am viewing the interactive calendar
- **When:** I click on the navigation controls (e.g., "next month", "previous week")
- **Then:** The calendar view updates to show available slots for the selected period.

---

## Technical Notes

### Frontend
- Implement an interactive calendar component (e.g., using a React date picker library like `react-datepicker` or a custom solution).
- The calendar should fetch available time slots from the backend based on the selected service and displayed date range.
- Visually distinguish between available and unavailable slots.
- Handle user selection and pass the chosen date/time to the next booking step.

### Backend
- Create an API endpoint (e.g., `/api/public/business/:slug/available-slots`) that, given a business slug, service ID, and a date range, calculates and returns all available time slots.
- This calculation must consider:
    - The business's weekly recurring schedule (from `schedules` table).
    - Existing appointments (from `appointments` table).
    - The duration of the selected service (from `services` table).
- Ensure the endpoint is performant, especially for businesses with many appointments.

### Database
- `schedules` table: (id, business_id, day_of_week, start_time, end_time)
- `appointments` table: (id, business_id, service_id, start_time, end_time, client_name, client_email)
- `services` table: (id, business_id, name, duration_minutes, price)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- EPIC-ESYTRN-13: Gestión de Disponibilidad y Agenda (for business schedules)
- EPIC-ESYTRN-17: Página Pública de Reservas (Cliente Final) (provides the public page context)
- STORY-ESYTRN-19: Ver lista de servicios (customer needs to select a service first)

### Blocks
- STORY-ESYTRN-23: Confirmar reserva (requires a selected date and time)

### Related Stories
- None

---

## UI/UX Considerations

- The calendar should be intuitive and easy to use, even for non-tech-savvy users.
- Clear visual cues for available, selected, and unavailable slots.
- Fast loading times for calendar data to avoid frustration.
- Mobile-first design for the calendar interface.

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

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-22-seleccionar-fecha-y-hora/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (selecting various available slots)
- Error scenarios (attempting to select unavailable slots, network errors)
- Edge cases (booking at the very beginning/end of working hours, overlapping appointments)
- Performance under heavy load (many appointments)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/stories/STORY-ESYTRN-22-seleccionar-fecha-y-hora/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

Accurate and performant availability calculation is crucial for the core functionality of the platform.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-21-flujo-de-reserva-y-notificaciones/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-008)
- **API Contracts:** `.context/SRS/api-contracts.yaml`