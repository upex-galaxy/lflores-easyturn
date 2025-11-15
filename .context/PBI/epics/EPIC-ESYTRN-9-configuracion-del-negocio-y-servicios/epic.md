# Configuración del Negocio y Servicios

**Jira Key:** ESYTRN-9
**Status:** ASSIGNED
**Priority:** HIGH
**Phase:** Foundation

---

## Epic Description

This epic allows business owners to set up their business profile and manage the services they offer. This is a crucial step for businesses to present their offerings to customers.

**Business Value:**
A well-defined business profile and service list are essential for attracting and informing customers. This epic enables businesses to customize their public-facing page, which directly impacts their ability to get bookings.

---

## User Stories

1. **ESYTRN-10** - Como Laura, quiero poder añadir y editar los servicios que ofrezco (con nombre, duración y precio), para que mis clientes vean claramente mis ofertas.
2. **ESYTRN-11** - Como Carlos, quiero poder establecer el nombre y la información de contacto de mi negocio, para que mis clientes me identifiquen y confíen en la página.
3. **ESYTRN-12** - Como Laura, quiero poder subir un logo simple para mi negocio, para personalizar mi página de reservas y reforzar mi marca.

**NOTA:** Los IDs serán actualizados cuando se creen las stories en Jira (siguiente paso)

---

## Scope

### In Scope
- Create and edit services with name, duration, and price.
- Set up business name and contact information.
- Upload a business logo.

### Out of Scope (Future)
- Advanced service options (e.g., categories, variations).
- Multiple business locations.
- Staff management.

---

## Acceptance Criteria (Epic Level)

1. ✅ A business owner can create, update, and delete services.
2. ✅ A business owner can set and update their business profile information.
3. ✅ A business owner can upload a logo for their business.
4. ✅ The business profile and service information is reflected on the public booking page.

---

## Related Functional Requirements

- **FR-004:** El sistema debe permitir la creación y actualización del perfil del negocio
- **FR-005:** El sistema debe permitir la gestión de servicios del negocio

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Business Profile
- Create a new table `businesses` to store business information.
- Generate a unique slug for each business for the public URL.

### Services
- Create a new table `services` to store service information.
- The `services` table should have a foreign key to the `businesses` table.

### Database Schema
**Tables:**
- `businesses`: (id, user_id, name, slug, contact_info, logo_url)
- `services`: (id, business_id, name, duration_minutes, price)

**IMPORTANTE:** NO hardcodear schema SQL completo. Usar Supabase MCP para schema real.

### Security Requirements
- Only the authenticated owner of the business can modify the business profile and services.

---

## Dependencies

### External Dependencies
- Supabase for database.

### Internal Dependencies
- EPIC-ESYTRN-5: Onboarding y Autenticación de Negocios

### Blocks
- EPIC-ESYTRN-TBD: Página Pública de Reservas (Cliente Final)

---

## Success Metrics

### Functional Metrics
- **Service Creation Success Rate:** > 99%
- **Profile Update Success Rate:** > 99%

### Business Metrics
- **Adopción:** > 80% of new businesses complete their profile and add at least one service.

---

## Risks & Mitigations

| Risk                      | Impact | Probability | Mitigation                                                                 |
| ------------------------- | ------ | ----------- | -------------------------------------------------------------------------- |
| Image upload issues       | Medium | Medium      | Use a reliable storage solution like Supabase Storage and handle upload errors gracefully. |
| Data validation errors    | Low    | Medium      | Implement robust validation on both the frontend and backend.              |

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-9-configuracion-del-negocio-y-servicios/feature-test-plan.md` (se crea en Fase 4)

### Test Coverage Requirements
- **Unit Tests:** Cover all helper functions and validation logic.
- **Integration Tests:** Test API endpoints for creating and updating business profiles and services.
- **E2E Tests:** Simulate a full user journey of setting up a business profile and adding services.

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-9-configuracion-del-negocio-y-servicios/feature-implementation-plan.md` (se crea en Fase 5)

### Recommended Story Order
1. ESYTRN-11 - Set up business profile
2. ESYTRN-10 - Manage services
3. ESYTRN-12 - Upload business logo

### Estimated Effort
- **Development:** 1 sprint
- **Testing:** 1 sprint
- **Total:** 1 sprint

---

## Notes

This epic is crucial for businesses to get started on the platform.

---

## Related Documentation

- **PRD:** `.context/PRD/executive-summary.md`, `.context/PRD/mvp-scope.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-004, FR-005)
- **Architecture:** `.context/SRS/architecture-specs.md`
- **API Contracts:** `.context/SRS/api-contracts.yaml`
