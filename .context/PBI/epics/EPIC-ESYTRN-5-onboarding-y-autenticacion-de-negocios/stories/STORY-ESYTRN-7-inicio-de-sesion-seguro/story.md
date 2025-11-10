# Como Carlos (dueño de negocio recurrente), quiero poder iniciar sesión de forma segura, para acceder a mi panel de control y gestionar mi agenda.

**Jira Key:** ESYTRN-7
**Epic:** EPIC-ESYTRN-5 (Onboarding y Autenticación de Negocios)
**Priority:** High
**Story Points:** 2
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos (dueño de negocio recurrente)
**I want to** poder iniciar sesión de forma segura
**So that** acceder a mi panel de control y gestionar mi agenda

---

## Description

This user story allows a returning business owner to securely log in to the easyTurn platform to manage their business.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successful login
- **Given:** I am a registered user
- **When:** I enter my correct email and password
- **Then:** I am logged in and redirected to my dashboard

### Scenario 2: Attempt to login with incorrect credentials
- **Given:** I am a registered user
- **When:** I enter my correct email and an incorrect password
- **Then:** I see an error message "Email o contraseña incorrectos."

### Scenario 3: Attempt to login with an unregistered email
- **Given:** I am not a registered user
- **When:** I enter an email that is not registered
- **Then:** I see an error message "Email o contraseña incorrectos."

---

## Technical Notes

### Frontend
- Create a login form with email and password fields.
- Call the backend API on form submission.
- Store the JWT in a secure way (e.g., HttpOnly cookie).

### Backend
- Create a new API endpoint `/api/auth/login`.
- Validate the request body (email and password).
- Find the user by email in the database.
- Compare the provided password with the stored hash.
- If the credentials are correct, generate a JWT and return it to the client.

### Database
- `users` table: (id, email, encrypted_password, created_at, updated_at)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase Auth for user management.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-6: User Registration

### Blocks
- All other stories that require an authenticated user.

### Related Stories
- STORY-ESYTRN-6: User Registration
- STORY-ESYTRN: Password Recovery

---

## UI/UX Considerations

- The login form should be simple and easy to use.
- Provide clear feedback to the user on success or failure.
- The password field should have a show/hide option.
- Include a "Forgot password?" link.

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

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-7/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-7/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This is a critical story for the MVP.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-5-onboarding-y-autenticacion-de-negocios/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-002)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
