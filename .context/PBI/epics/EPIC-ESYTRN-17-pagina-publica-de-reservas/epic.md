# Página Pública de Reservas (Cliente Final)

**Jira Key:** ESYTRN-17
**Status:** To Do
**Priority:** HIGH
**Phase:** Core Features

---

## Epic Description

This epic covers the creation of a public booking page for each business, where end customers can view services and book appointments. This page will be optimized for mobile devices and easily shareable.

**Business Value:**
Providing a public, mobile-friendly, and shareable booking page directly enables businesses to attract and convert customers. It simplifies the booking process for clients, reduces administrative overhead for business owners, and expands the reach of their services.

---

## User Stories

1. **ESYTRN-18** - Como Ana (cliente final), quiero poder acceder a una página de reservas pública y optimizada para móvil a través de una URL simple, para poder reservar fácilmente desde mi teléfono.
2. **ESYTRN-19** - Como Ana, quiero ver una lista clara de los servicios disponibles con su duración y precio, para poder elegir el que necesito sin dudas.
3. **ESYTRN-20** - Como Laura (dueña de negocio), quiero que mi página de reservas tenga una URL única y fácil de compartir, para poder ponerla en mi biografía de Instagram.

---

## Scope

### In Scope
- Creation of a unique, public, and mobile-optimized booking page for each business.
- Display of business name, logo, and contact information.
- Display of a clear list of services with their duration and price.
- Generation of a simple, shareable URL for the booking page.

### Out of Scope (Future)
- Advanced customization options for the public page (e.g., themes, custom branding beyond logo).
- Integration with social media sharing buttons.
- Customer accounts for booking history.

---

## Acceptance Criteria (Epic Level)

1. ✅ Each business has a unique, publicly accessible URL for their booking page.
2. ✅ The public booking page is fully responsive and optimized for mobile devices.
3. ✅ The public booking page clearly displays the business's services, including name, duration, and price.
4. ✅ The business logo and name are prominently displayed on the public booking page.
5. ✅ The URL for the public booking page is simple and easy to share.

---

## Related Functional Requirements

- **FR-007:** El sistema debe generar una página de reservas pública para cada negocio.
- **FR-008:** La página de reservas debe ser accesible a través de una URL única y compartible.

See: `.context/SRS/functional-specs.md`

---

## Technical Considerations

### Frontend
- Develop a responsive web interface for the public booking page using a modern frontend framework (e.g., React, Next.js).
- Implement dynamic routing to handle unique business URLs (e.g., `easyturn.com/business-slug`).
- Fetch business and service data from backend APIs.

### Backend
- Create API endpoints to retrieve business profile information (name, logo, contact) and a list of services for a given business slug.
- Ensure public access to these read-only endpoints.

### Database Schema
**Tables:**
- `businesses`: (id, user_id, name, slug, contact_info, logo_url)
- `services`: (id, business_id, name, duration_minutes, price)

**IMPORTANTE:** NO hardcodear schema SQL completo. Usar Supabase MCP para schema real.

### Security Requirements
- Public endpoints should be read-only and not expose sensitive business or user data.
- Implement rate limiting to prevent abuse.

---

## Dependencies

### External Dependencies
- Supabase for database and potentially storage for logos.

### Internal Dependencies
- EPIC-ESYTRN-9: Configuración del Negocio y Servicios (for business profile and services data).

### Blocks
- EPIC-ESYTRN-21: Flujo de Reserva y Notificaciones (requires the public page to exist).

---

## Success Metrics

### Functional Metrics
- **Page Load Time:** < 2 seconds on mobile and desktop.
- **Responsiveness Score:** > 90% on Lighthouse (mobile).

### Business Metrics
- **Page Views:** Track number of visits to public booking pages.
- **Conversion Rate:** Percentage of visitors who proceed to book an appointment.

---

## Risks & Mitigations

| Risk                      | Impact | Probability | Mitigation                                                                 |
| ------------------------- | ------ | ----------- | -------------------------------------------------------------------------- |
| Slow page load times      | High   | Medium      | Optimize images, lazy load content, use CDN, implement server-side rendering. |
| SEO/Discoverability issues | Medium | Medium      | Implement proper SEO practices (meta tags, sitemaps), allow indexing.      |
| URL conflicts             | Low    | Low         | Ensure slug generation logic handles uniqueness and conflicts gracefully.  |

---

## Testing Strategy

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/feature-test-plan.md` (se crea en Fase 4)

### Test Coverage Requirements
- **Unit Tests:** Cover UI components and utility functions.
- **Integration Tests:** Test API endpoints for retrieving public business and service data.
- **E2E Tests:** Simulate customer journey accessing the public page and viewing services on different devices.

---

## Implementation Plan

See: `.context/PBI/epics/EPIC-ESYTRN-17-pagina-publica-de-reservas/feature-implementation-plan.md` (se crea en Fase 5)

### Recommended Story Order
1. ESYTRN-18 - Acceder página pública
2. ESYTRN-19 - Ver lista de servicios
3. ESYTRN-20 - URL única y compartible

### Estimated Effort
- **Development:** 2 sprints
- **Testing:** 1 sprint
- **Total:** 2 sprints

---

## Notes

This epic is the public face of the easyTurn platform for customers and is critical for business acquisition.

---

## Related Documentation

- **PRD:** `.context/PRD/executive-summary.md`, `.context/PRD/mvp-scope.md`, `.context/PRD/user-journeys.md`
- **SRS:** `.context/SRS/functional-specs.md` (FR-007, FR-008)
- **Architecture:** `.context/SRS/architecture-specs.md`
- **API Contracts:** `.context/SRS/api-contracts.yaml`