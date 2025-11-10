# Como Ana (cliente final), quiero poder acceder a una página de reservas pública y optimizada para móvil a través de una URL simple, para poder reservar fácilmente desde mi teléfono.

**Jira Key:** ESYTRN-18
**Epic:** EPIC-ESYTRN-17 (Página Pública de Reservas (Cliente Final))
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Ana (cliente final)
**I want to** poder acceder a una página de reservas pública y optimizada para móvil a través de una URL simple
**So that** poder reservar fácilmente desde mi teléfono

---

## Description

This user story focuses on the ability of a final customer (Ana) to access a business's public booking page. The page must be easily reachable via a simple URL and be fully optimized for mobile devices, ensuring a smooth and intuitive booking experience on smartphones.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successfully access the public booking page on mobile
- **Given:** I have received a simple, shareable URL for a business's booking page (e.g., `easyturn.com/mi-negocio`)
- **When:** I open the URL on my smartphone's browser
- **Then:** I see the business's public booking page, which is fully responsive and easy to navigate on a small screen.

### Scenario 2: Access the public booking page on desktop
- **Given:** I have received a simple, shareable URL for a business's booking page
- **When:** I open the URL on my desktop computer's browser
- **Then:** I see the business's public booking page, which is well-formatted and easy to navigate on a large screen.

### Scenario 3: Attempt to access a non-existent business page
- **Given:** I have a URL for a business that does not exist (e.g., `easyturn.com/negocio-inexistente`)
- **When:** I try to access this URL
- **Then:** I see a "Page Not Found" or a generic error message, and I am not able to proceed with booking.

---

## Technical Notes

### Frontend
- Implement responsive design principles using CSS frameworks (e.g., Tailwind CSS, Bootstrap) or CSS-in-JS solutions.
- Ensure all interactive elements (buttons, forms) are touch-friendly and appropriately sized for mobile.
- Use a client-side routing solution (e.g., React Router, Next.js routing) to handle dynamic business URLs.
- Fetch business data (name, logo, services) from the backend based on the URL slug.

### Backend
- Implement a mechanism to resolve business slugs to actual business IDs.
- Create a public API endpoint (e.g., `/api/public/business/:slug`) that returns essential business information and services for the public page.
- Ensure this endpoint is highly performant and cached where appropriate.

### Database
- `businesses` table: (id, user_id, name, slug, contact_info, logo_url) - The `slug` field will be crucial for URL access.

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase for database.
- CDN for serving static assets (e.g., business logos) to improve load times.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-11: Establecer perfil de negocio (to ensure business profile and slug exist)
- STORY-ESYTRN-12: Subir logo de negocio (for displaying the business logo)

### Blocks
- STORY-ESYTRN-19: Ver lista de servicios (requires the page to be accessible)
- STORY-ESYTRN-20: URL única y compartible (requires the page to be accessible via a URL)

### Related Stories
- None

---

## UI/UX Considerations

- The page layout should adapt seamlessly to different screen sizes (mobile, tablet, desktop).
- Navigation should be intuitive, with clear calls to action.
- Loading states should be handled gracefully to provide a good user experience.
- Typography and spacing should be optimized for readability on all devices.

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

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-18-acceder-pagina-publica/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path (mobile and desktop access)
- Error scenarios (non-existent business, network errors)
- Edge cases (very long business names, special characters in slug)
- Security validations (no sensitive data exposed)

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/stories/STORY-ESYTRN-18-acceder-pagina-publica/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This story is foundational for the public booking experience. Performance and responsiveness are key.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-007, FR-008)
- **API Contracts:** `.context/SRS/api-contracts.yaml`