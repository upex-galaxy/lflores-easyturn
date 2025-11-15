# Como Ana, quiero ver una lista clara de los servicios disponibles con su duración y precio, para poder elegir el que necesito sin dudas.

**Jira Key:** ESYTRN-19
**Epic:** EPIC-ESYTRN-17 (Página Pública de Reservas (Cliente Final))
**Priority:** High
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Ana
**I want to** ver una lista clara de los servicios disponibles con su duración y precio
**So that** poder elegir el que necesito sin dudas

---

## Description

This user story enables a final customer (Ana) to view a clear and comprehensive list of services offered by a business on its public booking page. Each service should display its name, duration, and price, allowing Ana to make an informed decision about which service to book.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully view a list of services
- **Given:** I am on a business's public booking page that offers services
- **When:** I scroll down the page
- **Then:** I see a clearly formatted list of services, each showing its name, duration, and price.

### Scenario 2: No services are configured for the business
- **Given:** I am on a business's public booking page that has no services configured
- **When:** I look for the services list
- **Then:** I see a message indicating that no services are available, or the section is hidden.

### Scenario 3: Service details are accurate
- **Given:** I am viewing the list of services on a public booking page
- **When:** I compare the displayed service name, duration, and price with the business's configured services
- **Then:** The information displayed for each service is accurate and matches the configured details.

---

## Technical Notes

### Frontend
- Implement a component to display the list of services.
- Each service item should clearly show the `name`, `duration_minutes`, and `price`.
- Handle cases where no services are returned from the API (display a friendly message).
- Ensure the service list is responsive and looks good on various screen sizes.

### Backend
- The public API endpoint (e.g., `/api/public/business/:slug`) should include the list of services associated with the business.
- Ensure the service data returned is consistent with what the business owner configured.

### Database
- `services` table: (id, business_id, name, duration_minutes, price)
- `businesses` table: (id, user_id, name, slug, contact_info, logo_url)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-10: Gestion de servicios (to ensure services can be created and managed)
- STORY-ESYTRN-18: Acceder página pública (requires the public page to be accessible)

### Blocks
- STORY-ESYTRN-22: Seleccionar fecha y hora (requires service selection before booking)

### Related Stories
- None

---

## UI/UX Considerations

- The service list should be visually appealing and easy to scan.
- Use clear labels for duration and price (e.g., "30 min", "$50").
- Consider grouping or categorizing services if the list becomes long (future enhancement).
- Ensure accessibility for users with disabilities.

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

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-19-ver-lista-de-servicios/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (multiple services, single service)
- Error scenarios (no services, malformed service data)
- Edge cases (very long service names, zero price services)
- Security validations (no sensitive data exposed)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-19-ver-lista-de-servicios/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This story is crucial for customers to understand what services are offered before proceeding to book.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-007)
- **API Contracts:** `.context/SRS/api-contracts.yaml`