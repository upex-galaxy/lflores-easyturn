# Gestión de Disponibilidad y Agenda

**Jira Key:** ESYTRN-13
**Status:** ASSIGNED
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

This epic enables business owners to manage their availability and view their appointments in a calendar. This is a core feature for the booking system to work.

**Business Value:**
Effective calendar management is crucial for service-based businesses. This epic allows business owners to control their schedule, avoid double bookings, and have a clear overview of their workday, which directly impacts their efficiency and customer satisfaction.

---

## User Stories

1. **ESYTRN-TBD** - Como Carlos, quiero poder definir mi horario de trabajo semanal recurrente (ej. L-V de 9 a 18h), para que los clientes solo puedan reservar en mis horas disponibles.
2. **ESYTRN-TBD** - Como Laura, quiero poder ver todas mis citas confirmadas en una vista de calendario simple (diaria/semanal), para tener un panorama claro de mi jornada laboral.
3. **ESYTRN-TBD** - Como Carlos, quiero poder cancelar manualmente una cita desde mi calendario, para poder gestionar imprevistos y liberar ese espacio.

---

## Scope

### In Scope
- Define weekly recurring work hours.
- View confirmed appointments in a daily/weekly calendar.
- Manually cancel an appointment.

### Out of Scope (Future)
- Block specific time slots.
- Integration with external calendars (Google Calendar, Outlook).
- Support for multiple staff members' calendars.

---

## Acceptance Criteria (Epic Level)

1. ✅ A business owner can set and update their weekly work schedule.
2. ✅ The system correctly displays available time slots based on the defined schedule and existing appointments.
3. ✅ A business owner can view all their appointments in a calendar view.
4. ✅ A business owner can cancel an appointment, and the time slot becomes available again.

---

## Related Functional Requirements

- **FR-006:** El sistema debe permitir la gestión del horario de disponibilidad
- **FR-011:** El sistema debe mostrar las reservas en el calendario del negocio
- **FR-012:** El sistema debe permitir la cancelación de una reserva

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Availability
- Create a new table `schedules` to store the weekly recurring work hours.
- The `schedules` table should have a foreign key to the `businesses` table.

### Calendar
- Use a library like `react-big-calendar` or `fullcalendar` to display the calendar.
- The calendar should fetch appointments from the backend.

### Database Schema
**Tables:**
- `schedules`: (id, business_id, day_of_week, start_time, end_time)
- `appointments`: (id, business_id, service_id, start_time, end_time, client_name, client_email)

**IMPORTANTE:** NO hardcodear schema SQL completo. Usar Supabase MCP para schema real.

### Security Requirements
- Only the authenticated owner of the business can manage their schedule and appointments.

---

## Dependencies

### External Dependencies
- Supabase for database.

### Internal Dependencies
- EPIC-ESYTRN-5: Onboarding y Autenticación de Negocios
- EPIC-ESYTRN-9: Configuración del Negocio y Servicios

### Blocks
- EPIC-ESYTRN-TBD: Flujo de Reserva y Notificaciones

---

## Success Metrics

### Functional Metrics
- **Schedule Update Success Rate:** > 99%
- **Calendar Load Time:** < 2 seconds

### Business Metrics
- **Adopción:** > 90% of businesses set up their work schedule.

---

## Risks & Mitigations

| Risk                      | Impact | Probability | Mitigation                                                                 |
| ------------------------- | ------ | ----------- | -------------------------------------------------------------------------- |
| Timezone issues           | High   | Medium      | Store all times in UTC and convert them to the user's timezone on the frontend. |
| Performance issues with many appointments | Medium | Low         | Implement pagination or lazy loading for the calendar.                     |

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-13-gestion-de-disponibilidad-y-agenda/feature-test-plan.md` (se crea en Fase 4)

### Test Coverage Requirements
- **Unit Tests:** Cover all logic for calculating available time slots.
- **Integration Tests:** Test API endpoints for managing schedules and appointments.
- **E2E Tests:** Simulate a full user journey of setting a schedule, booking an appointment, and viewing it on the calendar.

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-13-gestion-de-disponibilidad-y-agenda/feature-implementation-plan.md` (se crea en Fase 5)

### Recommended Story Order
1. [ESYTRN-TBD] - Define work schedule
2. [ESYTRN-TBD] - View appointments in calendar
3. [ESYTRN-TBD] - Cancel appointment

### Estimated Effort
- **Development:** 2 sprints
- **Testing:** 1 sprint
- **Total:** 2 sprints

---

## Notes

This is a core epic for the platform's functionality.

---

## Related Documentation

- **PRD:** `.context/PRD/executive-summary.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-006, FR-011, FR-012)
- **Architecture:** `.context/SRS/architecture-specs.md`
- **API Contracts:** `.context/SRS/api-contracts.yaml`
