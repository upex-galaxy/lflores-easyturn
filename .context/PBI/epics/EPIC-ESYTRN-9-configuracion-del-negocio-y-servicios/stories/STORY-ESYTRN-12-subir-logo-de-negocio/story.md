# Como Laura, quiero poder subir un logo simple para mi negocio, para personalizar mi página de reservas y reforzar mi marca.

**Jira Key:** ESYTRN-12
**Epic:** EPIC-ESYTRN-9 (Configuración del Negocio y Servicios)
**Priority:** Medium
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Laura
**I want to** poder subir un logo simple para mi negocio
**So that** personalizar mi página de reservas y reforzar mi marca

---

## Description

This user story allows a business owner to upload a logo for their business, which will be displayed on their public booking page.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully upload a logo
- **Given:** I am on the "Business Profile" page
- **When:** I select a valid image file and click "Upload"
- **Then:** The logo is uploaded and displayed on my profile page.

### Scenario 2: Attempt to upload an invalid file type
- **Given:** I am on the "Business Profile" page
- **When:** I try to upload a file that is not an image (e.g., a PDF)
- **Then:** I see an error message "Tipo de archivo no válido. Por favor, sube una imagen."

### Scenario 3: The uploaded logo is displayed on the public booking page
- **Given:** I have uploaded a logo for my business
- **When:** A customer visits my public booking page
- **Then:** They see my business logo.

---

## Technical Notes

### Frontend
- Add a file input to the "Business Profile" page to select the logo.
- Use a library like `react-dropzone` for a better user experience.
- Call the backend API to upload the image.

### Backend
- Create an API endpoint for uploading the logo (`/api/business/logo`).
- Use a service like Supabase Storage to store the uploaded image.
- Update the `logo_url` in the `businesses` table with the URL of the uploaded image.

### Database
- `businesses` table: (id, user_id, name, slug, contact_info, logo_url)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase Storage for image hosting.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-11: Establecer perfil de negocio

### Blocks
- EPIC-ESYTRN: Página Pública de Reservas (Cliente Final)

### Related Stories
- STORY-ESYTRN-11: Establecer perfil de negocio

---

## UI/UX Considerations

- Provide a preview of the uploaded logo.
- Allow the user to crop or resize the logo before uploading.
- Show a progress bar during the upload process.

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

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-12/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-9/stories/STORY-ESYTRN-12/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This story enhances the personalization of the public booking page.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-9-configuracion-del-negocio-y-servicios/epic.md`
- **PRD:** `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-004)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
