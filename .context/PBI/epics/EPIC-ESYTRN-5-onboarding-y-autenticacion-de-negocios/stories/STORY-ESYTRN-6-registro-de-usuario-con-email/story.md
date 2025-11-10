# Como Laura (nueva dueña de negocio), quiero poder registrarme en la plataforma usando mi email y una contraseña, para poder crear mi cuenta y acceder a las funcionalidades.

**Jira Key:** ESYTRN-6
**Epic:** EPIC-ESYTRN-5 (Onboarding y Autenticación de Negocios)
**Priority:** High
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Laura (nueva dueña de negocio)
**I want to** poder registrarme en la plataforma usando mi email y una contraseña
**So that** poder crear mi cuenta y acceder a las funcionalidades

---

## Description

This user story enables a new business owner to sign up for the easyTurn platform using their email and a password. This is the first step in the user journey and is critical for user acquisition.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successful registration
- **Given:** I am on the registration page
- **When:** I enter a valid email and a password with at least 8 characters
- **Then:** My account is created and I am redirected to the onboarding wizard

### Scenario 2: Attempt to register with an existing email
- **Given:** I am on the registration page
- **When:** I enter an email that is already registered
- **Then:** I see an error message "Este email ya está registrado."

### Scenario 3: Attempt to register with an invalid password
- **Given:** I am on the registration page
- **When:** I enter a valid email and a password with less than 8 characters
- **Then:** I see an error message "La contraseña debe tener al menos 8 caracteres."

---

## Technical Notes

### Frontend
- Create a registration form with email and password fields.
- Use a form library like React Hook Form for validation.
- Call the backend API on form submission.

### Backend
- Create a new API endpoint `/api/auth/register`.
- Validate the request body (email and password).
- Check if the email already exists in the database.
- Hash the password using bcrypt.
- Create a new user in the `users` table.
- Generate a JWT and return it to the client.

### Database
- `users` table: (id, email, encrypted_password, created_at, updated_at)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase Auth for user management.

---

## Dependencies

### Blocked By
- None

### Blocks
- All other stories that require an authenticated user.

### Related Stories
- STORY-ESYTRN: User Login

---

## UI/UX Considerations

- The registration form should be simple and easy to use.
- Provide clear feedback to the user on success or failure.
- The password field should have a show/hide option.

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

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-6/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-6/implementation-plan.md` (se crea en Fase 5)

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
- **SRS:** `.context/SRS/functional-specs.md` (FR-001)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
