# Como Carlos, quiero poder establecer el nombre y la información de contacto de mi negocio, para que mis clientes me identifiquen y confíen en la página.

**Jira Key:** ESYTRN-11
**Epic:** EPIC-ESYTRN-9 (Configuración del Negocio y Servicios)
**Priority:** High
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos
**I want to** poder establecer el nombre y la información de contacto de mi negocio
**So that** mis clientes me identifiquen y confíen en la página

---

## Description

This user story allows a business owner to set up their business profile, including the business name and contact information.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully set up business profile
- **Given:** I am a registered user and I am on the "Business Profile" page
- **When:** I enter my business name and contact information and click "Save"
- **Then:** My business profile is saved and I see a confirmation message.

### Scenario 2: Attempt to save profile with a missing business name
- **Given:** I am on the "Business Profile" page
- **When:** I try to save my profile without entering a business name
- **Then:** I see an error message "El nombre del negocio es obligatorio."

### Scenario 3: The business name is used to generate a unique slug
- **Given:** I am on the "Business Profile" page
- **When:** I enter a business name "Mi Negocio" and click "Save"
- **Then:** A unique slug "mi-negocio" is generated for my public booking page.

---

## Technical Notes

### Frontend
- Create a "Business Profile" page with a form to enter business name and contact information.
- Call the backend API to save the business profile.

### Backend
- Create an API endpoint for creating/updating the business profile (`/api/business`).
- Validate the request body.
- Generate a unique slug from the business name.
- Save the business profile to the `businesses` table.

### Database
- `businesses` table: (id, user_id, name, slug, contact_info, logo_url)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- EPIC-ESYTRN-5: Onboarding y Autenticación de Negocios

### Blocks
- STORY-ESYTRN-10: Gestion de servicios
- STORY-ESYTRN: Upload business logo
- EPIC-ESYTRN: Página Pública de Reservas (Cliente Final)

### Related Stories
- None

---

## UI/UX Considerations

- The business profile page should be simple and easy to use.
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

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-11/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-11/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This is a foundational story for setting up a business on the platform.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-9-configuracion-del-negocio-y-servicios/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-004)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
