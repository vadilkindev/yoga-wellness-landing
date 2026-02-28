# Zentonina Yoga & Wellness Landing Page

Una landing page profesional, escalable y mantenible para una marca personal de Yoga & Wellness, construida con Astro, Vite y TypeScript.

## 🚀 Arquitectura y Tecnologías (Stack)

- **Astro**: Para el renderizado rápido de hipertexto (static-first), ofreciendo máxima velocidad y SEO.
- **Vite**: Motor de construcción interno ultra-rápido.
- **TypeScript**: Para garantizar una capa de seguridad y consistencia en datos y props.
- **CSS Modular + CSS Variables**: Un sistema de diseño centralizado sin herramientas externas para máxima mantenibilidad y mínimo bundle.
- **Arquitectura Basada en Componentes**:
  - `layout/`: Componentes estructurales (BaseLayout, Navbar, Footer, Contenedores).
  - `ui/`: Componentes interactivos y visuales aislados e independientes (Buttons, Cards, Inputs).
  - `sections/`: Ensamblajes lógicos y semánticos (Hero, Services, Contact), lo cual permite modificar el diseño de una sección sin romper los estándares UI de otra.

Esta separación (`layout`, `ui`, `sections`) sigue la metodología *Atomic Design* y las mejores prácticas de modularidad. Separa lo global y estructural (`layout`), las primitivas reusables (`ui`), y el flujo narrativo/comercial (`sections`), mejorando sustancialmente el DX y facilitando las pruebas.

## 🛠️ Instalación y Desarrollo Local

Asegúrate de tener Node.js instalado (v18+ recomendado).

1. Abre una terminal y navega al directorio del proyecto:
   ```bash
   cd yoga-wellness-landing
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL indicada (generalmente `http://localhost:4321/`).

Para crear un build de producción, usa:
```bash
npm run build
```

## 📁 Estructura del Proyecto

```text
src/
 ├── assets/        # Imágenes, iconos, svgs (vacío por defecto, listo para assets estáticos)
 ├── components/    # Componentes de Astro
 │    ├── layout/   # Elementos estructurales y de envoltura p.ej.(Navbar, Footer, SectionWrapper)
 │    ├── ui/       # Componentes atómicos reusables p.ej.(Button, Card, Input)
 │    ├── sections/ # Componentes de bloque completo de la landing p.ej.(HeroSection, AboutSection)
 ├── constants/     # Data estática y mock data p.ej.(index.ts con SERVICES, FEATURES)
 ├── layouts/       # Opcionalmente se usó components/layout/BaseLayout en su lugar (siguiendo Astro patterns)
 ├── pages/         # Páginas principales
 │    └── index.astro # Landing Principal
 ├── styles/        # CSS Core del Proyecto
 │    ├── variables.css # Sistema de Diseño Completo
 │    ├── globals.css   # Reset y utilidades básicas compartidas
 ├── types/         # Definiciones TypeScript de datos e interfaces
```

## 🎨 Sistema de Diseño

### Paleta de Colores

- **--color-primary**: `#a89fdf` (Soft Lavender / Púrpura suave - Botones, Acentos)
- **--color-primary-dark**: `#9c83de` (Variación para texto sobre fondos blancos u oscuros)
- **--color-secondary**: `#fdfaf6` (Sand/Cream Background)
- **--color-accent**: `#d8c3a5` (Acentos cálidos, de uso reservado)
- **--color-bg**: `#ffffff` (Blanco puro base)
- **--color-border**: `#e6e4f0` (Bordes en tarjetas e inputs)
- **--color-text-primary**: `#2c2b30` (Texto principal, casi negro)
- **--color-text-secondary**: `#6e6b7b` (Subtítulos, párrafos grises o púrpuras tenues)

### Tipografía

- **--font-display**: `Playfair Display`, serif. Elegancia clásica para Hero y Títulos de Sección.
- **--font-body**: `Outfit`, sans-serif. Limpieza moderna y excelente lectura para párrafos y UI (Botones, Navegación).

### Espaciado y Sombras

Se usa una escala predecible de espacios (`--space-xs` a `--space-3xl`) que va de `0.5rem` a `6rem`, facilitando mantener la proporción áurea a lo largo de secciones.

Se declararon tres niveles de sombreado (`sm, md, lg`) con transparencias de *primary color* para ofrecer reflejos sutiles que aportan personalidad a la marca (Ej: Hover effects en las Cards de Servicios).

## 💆‍♀️ Servicios Definidos

1. **Yoga Class**: Práctica suave enfocada en conexión con el cuerpo (🧘‍♀️).
2. **Yoga Retreat**: Sesiones inmersivas que combinan meditación y retiro de bienestar (🌴).
3. **Meditation Session**: Enfoque de mindfulness y reducción del estrés (🧘‍♂️).
4. **Personal Coaching**: Sesiones cara a cara, enfocadas en objetivos específicos de vida (🎯).

## 🔮 Mejoras Futuras y Escalabilidad

1. **Astro Content Collections**: Transformar el blog (`BlogPreviewSection.astro`) hacia un listado autogenerado usando `src/content/blog/` en formato `.mdx` o `.md`.
2. **Animaciones Avanzadas (ViewTransitions)**: Añadir directivas de ViewTransitions nativas de Astro para un viaje de página a página completamente fluido al añadir páginas internas como `/services` y `/about`.
3. **Optimización de Assets Acoplados**: Configurar `astro:assets` `<Image />` una vez se posean las fotografías de la clienta/instructora en `src/assets`.
4. **Intersección de Scroll (IntersectionObserver)**: Mejorar la animación `fadeIn` introducida en el hero y aplicarla a través de componentes en CSS genérico.

## 📝 Convenciones de Código (Buenas Prácticas Aplicadas)

- Estilos modulares al 100%: `<style>` en Astro enjaula (`scopes`) el css directamente al componente.
- **Responsive Mobile First**: Uso proactivo de `min-width` medias queries, por defecto los estilos están destinados a dispositivos móviles, reduciendo la carga de rendering.
- Sin librerías infladas (Cero Tailwind, CSS en crudo mantenitble y semántico alineado de por vida con los estándares W3).
- **TypeScript Estricto**: Todo recurso estructurado dentro de `src/constants/` obedece estrictamente a sus interfaces de `src/types/`. No hay tipos "any" forzados.
