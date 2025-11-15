# Como Carlos, quiero poder recuperar mi contraseña si la olvido, para no perder el acceso a mi cuenta.

**Jira Key:** ESYTRN-8
**Epic:** EPIC-ESYTRN-5 (Onboarding y Autenticación de Negocios)
**Priority:** Medium
**Story Points:** 3
**Status:** To Do
**Assignee:** null

---

## User Story

**As a** Carlos
**I want to** poder recuperar mi contraseña si la olvido
**So that** no perder el acceso a mi cuenta

---

## Description

This user story allows a user who has forgotten their password to reset it via a secure email link.

---

## Acceptance Criteria (Gherkin format)

### Scenario 1: Successful password recovery request
- **Given:** I am a registered user and I am on the "Forgot Password" page
- **When:** I enter my registered email address
- **Then:** I see a confirmation message "Si tu email está en nuestro sistema, recibirás un enlace para recuperar tu contraseña."

### Scenario 2: Attempt to recover password with an unregistered email
- **Given:** I am on the "Forgot Password" page
- **When:** I enter an email address that is not registered
- **Then:** I see a confirmation message "Si tu email está en nuestro sistema, recibirás un enlace para recuperar tu contraseña."

### Scenario 3: Successfully resetting the password
- **Given:** I have received a password reset email with a valid link
- **When:** I click the link and enter a new valid password
- **Then:** My password is updated and I can log in with the new password.

---

## Technical Notes

### Frontend
- Create a "Forgot Password" page with an email input.
- Create a "Reset Password" page with a password and password confirmation input.
- Call the backend API to request the password reset link.
- Call the backend API to reset the password.

### Backend
- Create an API endpoint `/api/auth/forgot-password` to send the reset link.
- Generate a unique and short-lived token for password reset.
- Send an email to the user with the reset link.
- Create an API endpoint `/api/auth/reset-password` to update the password.
- Validate the reset token and the new password.
- Update the user's password in the database.

### Database
- `users` table: (id, email, encrypted_password, reset_token, reset_token_expires_at)

**IMPORTANTE:** NO hardcodear SQL. Usar Supabase MCP.

### External Services
- Supabase Auth for user management.
- Transactional email service (e.g., SendGrid, Resend) to send the password reset email.

---

## Dependencies

### Blocked By
- STORY-ESYTRN-6: User Registration

### Blocks
- None

### Related Stories
- STORY-ESYTRN-6: User Registration
- STORY-ESYTRN-7: User Login

---

## UI/UX Considerations

- The "Forgot Password" and "Reset Password" pages should be simple and easy to use.
- Provide clear instructions to the user throughout the process.
- The password reset link should expire after a reasonable amount of time (e.g., 1 hour).

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

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-8/test-cases.md` (se crea en Fase 4)

**Test Cases Expected:** 6+ detailed test cases covering:
- Happy path
- Error scenarios
- Edge cases
- Security validations

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-5/stories/STORY-ESYTRN-8/implementation-plan.md` (se crea en Fase 5)

**Implementation Steps Expected:**
- Step-by-step technical plan
- File structure
- Function signatures
- API endpoints
- Database operations

---

## Notes

This is an important story for user experience and account management.

---

## Related Documentation

- **Epic:** `.context/PBI/epics/EPIC-ESYTRN-5-onboarding-y-autenticacion-de-negocios/epic.md`
- **PRD:** `.context/PRD/user-journeys.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-003)
- **API Contracts:** `.context/SRS/api-contracts.yaml`
