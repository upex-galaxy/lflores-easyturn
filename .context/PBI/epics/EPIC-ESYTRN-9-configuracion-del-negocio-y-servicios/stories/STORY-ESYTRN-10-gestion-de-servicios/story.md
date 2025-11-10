# Como Laura, quiero poder añadir y editar los servicios que ofrezco (con nombre, duración y precio), para que mis clientes vean claramente mis ofertas.

**Jira Key:** ESYTRN-10
**Epic:** EPIC-ESYTRN-9 (Configuración del Negocio y Servicios)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Laura
**I want to** poder añadir y editar los servicios que ofrezco (con nombre, duración y precio)
**So that** mis clientes vean claramente mis ofertas

---

## Description

This user story allows a business owner to manage the services they offer, including creating, editing, and deleting them.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully add a new service
- **Given:** I am on the "Services" management page
- **When:** I fill in the service name, duration, and price and click "Save"
- **Then:** The new service is added to my list of services.

### Scenario 2: Successfully edit an existing service
- **Given:** I am on the "Services" management page
- **When:** I edit the details of an existing service and click "Save"
- **Then:** The service details are updated.

### Scenario 3: Attempt to add a service with invalid data
- **Given:** I am on the "Services" management page
- **When:** I try to save a service with a missing name or duration
- **Then:** I see an error message indicating the required fields.

---

## Technical Notes

### Frontend
- Create a "Services" management page with a form to add/edit services.
- Display a list of existing services with options to edit or delete them.
- Call the backend API to perform CRUD operations on services.

### Backend
- Create API endpoints for CRUD operations on services (`/api/services`).
- Validate the request body for creating and updating services.
- Ensure that only the business owner can manage their services.

### Database
- `services` table: (id, business_id, name, duration_minutes, price)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- STORY-ESYTRN: Set up business profile

### Blocks
- EPIC-ESYTRN: Página Pública de Reservas (Cliente Final)

### Related Stories
- STORY-ESYTRN: Set up business profile

---

## UI/UX Considerations

- The service management interface should be intuitive and easy to use.
- Provide clear feedback to the user on success or failure of operations.
- Use a modal or a separate page for adding/editing services.

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

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-10/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-10/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This is a core feature for businesses to be able to use the platform.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-9-configuracion-del-negocio-y-servicios/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-005)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
