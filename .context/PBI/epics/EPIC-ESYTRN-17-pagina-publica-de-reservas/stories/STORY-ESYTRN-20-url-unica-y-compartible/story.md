# Como Laura (dueña de negocio), quiero que mi página de reservas tenga una URL única y fácil de compartir, para poder ponerla en mi biografía de Instagram.

**Jira Key:** ESYTRN-20
**Epic:** EPIC-ESYTRN-17 (Página Pública de Reservas (Cliente Final))
**Priority:** Medium
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Laura (dueña de negocio)
**I want to** que mi página de reservas tenga una URL única y fácil de compartir
**So that** poder ponerla en mi biografía de Instagram

---

## Description

This user story enables business owners (Laura) to have a unique and easily shareable URL for their public booking page. This URL should be simple enough to be used in social media bios, business cards, or other marketing materials, facilitating customer access to their booking services.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Unique and readable URL is generated
- **Given:** I have successfully set up my business profile with a business name (e.g., "Mi Negocio de Belleza")
- **When:** My public booking page is created
- **Then:** A unique and readable URL is generated for my page (e.g., `easyturn.com/mi-negocio-de-belleza`).

### Scenario 2: URL is easily accessible for sharing
- **Given:** I am logged in as a business owner
- **When:** I navigate to my business profile or public page settings
- **Then:** I can easily find and copy the unique URL for my public booking page.

### Scenario 3: URL remains stable
- **Given:** My business has a public booking page with a unique URL
- **When:** I update my business name or other profile details (that do not affect the slug)
- **Then:** The unique URL for my public booking page remains the same.

---

## Technical Notes

### Frontend
- Display the generated unique URL prominently in the business owner's dashboard or settings.
- Provide a "copy to clipboard" functionality for easy sharing.

### Backend
- The business slug, generated during business profile creation (STORY-ESYTRN-11), will form the unique part of the URL.
- Ensure the slug generation logic handles special characters and potential conflicts to maintain uniqueness.
- The URL structure should be consistent (e.g., `[BASE_URL]/[BUSINESS_SLUG]`).

### Database
- `businesses` table: (id, user_id, name, slug, contact_info, logo_url) - The `slug` field is critical for this story.

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-11: Establecer perfil de negocio (for business name and slug generation)
- STORY-ESYTRN-18: Acceder página pública (requires the page to be accessible via a URL)

### Blocks
- None

### Related Stories
- None

---

## UI/UX Considerations

- The URL should be displayed in a clear, non-editable text field.
- The "copy to clipboard" button should provide visual feedback upon success.
- Instructions on how to use the URL (e.g., "Add this link to your Instagram bio") could be helpful.

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

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-20-url-unica-y-compartible/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (URL generation and copying)
- Error scenarios (business name changes affecting slug, but URL remains stable)
- Edge cases (very long business names, special characters in business names)
- Security validations (URL does not expose sensitive IDs)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-20-url-unica-y-compartible/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This story enhances the marketing and discoverability of businesses on the platform.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-008)
- **API Contracts:** `.context/SRS/api-contracts.yaml`