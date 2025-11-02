### **Requisitos No Funcionales (Non-Functional Specs) - easyTurn MVP**

**Stack Tecnológico de Referencia:**
*   **Framework:** Next.js 15
*   **Backend y Base de Datos:** Supabase (PostgreSQL, Auth, Storage)
*   **Hosting y Despliegue:** Vercel
*   **CI/CD:** GitHub Actions

---

#### **1. Performance**

-   **Page Load Time (LCP):** El Largest Contentful Paint para las páginas públicas de reserva (las más críticas) debe ser **< 2.5 segundos**.
-   **API Response Time:** El 95% (p95) de todas las respuestas de la API deben ser **< 500ms**.
-   **Time to Interactive (TTI):** La página debe ser interactiva en **< 3 segundos**.
-   **Concurrent Users:** El sistema debe soportar **100 usuarios concurrentes** para el MVP, con una arquitectura que permita escalar a **1,000+** en versiones futuras.
-   **Database Query Time:** Las consultas simples a la base de datos (ej. buscar un negocio por slug) deben ejecutarse en **< 100ms**.

---

#### **2. Security**

-   **Authentication:** La autenticación se gestionará con **Supabase Auth**, utilizando **JWT (JSON Web Tokens)**.
-   **Authorization:** Se implementará un sistema de autorización basado en roles simple usando **Row Level Security (RLS) de PostgreSQL** en Supabase. Roles iniciales: `anon` (acceso público a páginas de reserva), `authenticated` (dueño del negocio con acceso a sus propios recursos).
-   **Data Encryption:**
    -   **At Rest:** Cifrado por defecto proporcionado por Supabase para la base de datos y el almacenamiento.
    -   **In Transit:** Todo el tráfico será servido sobre **HTTPS/TLS 1.3**, gestionado automáticamente por Vercel.
-   **Input Validation:** Se realizará validación tanto en el **cliente** (para feedback inmediato al usuario) como en el **servidor** (para proteger la integridad de los datos), utilizando una librería como `zod`.
-   **Password Policy:** La política de contraseñas requerirá un mínimo de **8 caracteres**. Se aplicará en el lado del cliente y del servidor.
-   **Session Management:** Se utilizará el manejo de sesiones por defecto de Supabase Auth, que incluye tokens de corta duración y refresh tokens para mantener la sesión segura.
-   **OWASP Top 10:** Se mitigarán las vulnerabilidades comunes aprovechando las protecciones nativas del stack:
    -   **SQL Injection:** Prevenido por el uso del cliente de Supabase y RLS.
    -   **Cross-Site Scripting (XSS):** Mitigado por el framework Next.js (React).
    -   **Broken Access Control:** Mitigado por el uso de RLS de Supabase.

---

#### **3. Scalability**

-   **Database:** Se utilizará **PostgreSQL** en Supabase, aprovechando **Row Level Security (RLS)** para garantizar la escalabilidad segura de los datos de múltiples tenants.
-   **CDN:** Todo el contenido estático y las páginas renderizadas se distribuirán a través de la **Vercel Edge Network** para una entrega global rápida.
-   **Caching Strategy:**
    -   **Páginas Públicas:** Se utilizará **Incremental Static Regeneration (ISR)** con un tiempo de revalidación de 1 hora para las páginas de reserva, garantizando un rendimiento excelente.
    -   **API:** Se usarán cabeceras `Cache-Control` para cachear respuestas de API que no cambian frecuentemente (ej. lista de servicios).
-   **Horizontal Scaling:** La arquitectura de API con **Next.js API Routes** es stateless y se despliega como serverless functions en Vercel, lo que permite un escalado horizontal automático.
-   **Database Connection Pooling:** Gestionado automáticamente por **Supabase** a través de PgBouncer, asegurando un uso eficiente de las conexiones a la base de datos.

---

#### **4. Accessibility**

-   **WCAG Compliance:** El objetivo es alcanzar el nivel **AA** de las Web Content Accessibility Guidelines (WCAG 2.1).
-   **Keyboard Navigation:** Todas las funcionalidades interactivas (formularios, botones, calendarios) deben ser completamente accesibles y operables usando solo el teclado.
-   **Screen Reader Support:** Se utilizarán etiquetas **ARIA (Accessible Rich Internet Applications)** apropiadas en elementos críticos para asegurar la compatibilidad con lectores de pantalla.
-   **Color Contrast:** El contraste de color entre el texto y el fondo debe ser de al menos **4.5:1** para texto de tamaño normal.
-   **Focus Indicators:** Los indicadores de foco del teclado deben ser claros y visibles en todos los elementos interactivos.

---

#### **5. Browser Support**

-   **Desktop:**
    -   Chrome (últimas 2 versiones)
    -   Firefox (últimas 2 versiones)
    -   Safari (últimas 2 versiones)
    -   Edge (últimas 2 versiones)
-   **Mobile:**
    -   iOS Safari (últimas 2 versiones de iOS)
    -   Android Chrome (últimas 2 versiones de Android)

---

#### **6. Reliability**

-   **Uptime:** El objetivo de disponibilidad del servicio es del **99.9%**.
-   **Error Rate:** La tasa de errores del lado del servidor (5xx) debe ser **< 0.1%**. La tasa de errores del cliente (4xx) debe ser **< 1%**.
-   **Recovery Time Objective (RTO):** En caso de un incidente crítico, el tiempo de recuperación del servicio debe ser **< 15 minutos**.

---

#### **7. Maintainability**

-   **Code Coverage:** Se requerirá una cobertura de código por tests unitarios y de integración de **> 80%**.
-   **Documentation:** El código debe estar documentado. Se mantendrán actualizados el `README.md`, la documentación de la arquitectura y los contratos de API.
-   **Linting & Formatting:** Se configurará **ESLint** y **Prettier** en el proyecto para forzar un estilo de código consistente.
-   **TypeScript:** Se habilitará el modo **`strict`** de TypeScript para maximizar la seguridad de tipos.
