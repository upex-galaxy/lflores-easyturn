# Onboarding y Autenticación de Negocios

**Jira Key:** ESYTRN-5
**Status:** ASSIGNED
**Priority:** HIGH
**Phase:** Foundation

---

## Epic Description

This epic covers the fundamental functionality for a new business owner to create an account, log in, and manage their access to the easyTurn platform. It's the first touchpoint for our primary users and crucial for adoption.

**Business Value:**
Enabling self-service registration and login is the primary entry point for acquiring new business customers. A smooth onboarding process is critical to converting interested users into active ones, directly impacting the platform's growth and scalability.

---

## User Stories

1. **ESYTRN-6** - As a Laura (nueva dueña de negocio), I want to poder registrarme en la plataforma usando mi email y una contraseña, para poder crear mi cuenta y acceder a las funcionalidades
2. **ESYTRN-7** - As a Carlos (dueño de negocio recurrente), I want to poder iniciar sesión de forma segura, para acceder a mi panel de control y gestionar mi agenda.
3. **ESYTRN-8** - As a Carlos, I want to poder recuperar mi contraseña si la olvido, para no perder el acceso a mi cuenta.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira (siguiente paso)

---

## Scope

### In Scope
- User registration with email and password.
- Secure user login.
- Password recovery mechanism.

### Out of Scope (Future)
- Social login (Google, Facebook, etc.).
- Two-factor authentication (2FA).
- Magic link login.

---

## Acceptance Criteria (Epic Level)

1. ✅ A new user can successfully register and is automatically logged in.
2. ✅ An existing user can successfully log in and access their dashboard.
3. ✅ A user who forgot their password can successfully reset it via an email link.
4. ✅ All authentication flows are secure and protect user credentials.

---

## Related Functional Requirements

- **FR-001:** El sistema debe permitir el registro de un nuevo dueño de negocio
- **FR-002:** El sistema debe permitir la autenticación de un dueño de negocio
- **FR-003:** El sistema debe permitir la recuperación de contraseña

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Authentication
- Use Supabase Auth for user management.
- Passwords must be securely hashed using bcrypt.
- JWTs will be used for session management.

### Database Schema
**Tables:**
- `users`: (id, email, encrypted_password, created_at, updated_at)
- `profiles`: (id, user_id, full_name, avatar_url)

**IMPORTANTE:** NO hardcodear schema SQL completo. Usar Supabase MCP para schema real.

### Security Requirements
- Implement rate limiting on login and password reset endpoints to prevent brute-force attacks.
- Ensure all communication is over HTTPS.

---

## Dependencies

### External Dependencies
- Supabase for authentication and database.
- A transactional email service (e.g., SendGrid, Resend) for sending password reset emails.

### Internal Dependencies
- None. This is a foundational epic.

### Blocks
- All other epics are blocked by this one, as they require an authenticated user.

---

## Success Metrics

### Functional Metrics
- **Registration Success Rate:** > 98%
- **Login Success Rate:** > 99%
- **Password Reset Request Rate:** < 5% of logins

### Business Metrics
- **Adopción:** `> 50` nuevos negocios han completado el onboarding en el primer mes.

---

## Risks & Mitigations

| Risk                      | Impact | Probability | Mitigation                                                                 |
| ------------------------- | ------ | ----------- | -------------------------------------------------------------------------- |
| Email delivery issues     | High   | Medium      | Use a reliable transactional email provider and monitor deliverability rates. |
| Security vulnerabilities  | High   | Low         | Follow security best practices, conduct security audits, and use Supabase Auth features. |
| Scalability issues        | Medium | Low         | Supabase is expected to handle the initial load, but monitor performance.     |

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-5-onboarding-y-autenticacion-de-negocios/feature-test-plan.md` (se crea en Fase 4)

### Test Coverage Requirements
- **Unit Tests:** Cover all helper functions and validation logic.
- **Integration Tests:** Test API endpoints for registration, login, and password reset.
- **E2E Tests:** Simulate a full user journey from registration to login.

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-5-onboarding-y-autenticacion-de-negocios/feature-implementation-plan.md` (se crea en Fase 5)

### Recommended Story Order
1. ESYTRN-6 - User Registration
2. ESYTRN-7 - User Login
3. ESYTRN-8 - Password Recovery

### Estimated Effort
- **Development:** 1 sprint
- **Testing:** 1 sprint
- **Total:** 1 sprint

---

## Notes

This is a critical epic that must be implemented correctly and securely.

---

## Related Documentation

- **PRD:** `.context/PRD/executive-summary.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-001 to FR-003)
- **Architecture:** `.context/SRS/architecture-specs.md`
- **API Contracts:** `.context/SRS/api-contracts.yaml`
