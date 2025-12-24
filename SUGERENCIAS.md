# Sugerencias para Mejorar la Web de Xavier Arpa

## Basado en investigación del perfil en línea

Este documento contiene sugerencias para mejorar las páginas web de [xavierarpa.github.io](https://xavierarpa.github.io) basándose en el análisis de:
- El perfil de GitHub de Xavier Arpa
- Los repositorios públicos y proyectos
- El contenido actual del sitio web
- Las habilidades y experiencia demostradas

---

## 🎯 Resumen del Perfil de Xavier Arpa

**Xavier Arpa** es un **Game Designer & Unity Developer** con:
- Máster en Game Design y Game Development de EVAD
- Co-fundador de dos estudios de juegos: **Bee Games** y **Boogysoft**
- Experiencia en desarrollo de juegos móviles (Hospital Empire con +5M descargas)
- Creador de **UniFlux** (80+ estrellas en GitHub) - biblioteca de eventos para Unity
- Participación en múltiples Game Jams (Ludum Dare, Global Game Jam, Málaga Jam)
- Tecnologías: Unity, C#, .NET, Firebase, GitHub Actions, JavaScript, TypeScript, Angular

---

## 📋 Sugerencias de Mejora

### 1. 🚀 Destacar UniFlux de Forma Prominente

**Problema actual:** UniFlux es tu proyecto más exitoso (80+ estrellas, disponible en Asset Store) pero no aparece en tu página "About Me".

**Sugerencia:**
- Añadir una sección dedicada a "Open Source" o "Herramientas" en la página principal
- Incluir badge con número de estrellas y descargas
- Enlace directo a la Asset Store: https://assetstore.unity.com/packages/slug/250332

```html
<!-- Ejemplo de sección a añadir -->
<li class="timeline-fill">
  <p class="timeline-title">🛠️ UniFlux - Open Source</p>
  <p class="timeline-description">2023 - Present - Event-Driven System for Unity</p>
  <p><a target="_blank" href="https://github.com/xavierarpa/UniFlux">(GitHub - 80+ ⭐)</a></p>
  <p><a target="_blank" href="https://assetstore.unity.com/packages/slug/250332">(Asset Store)</a></p>
</li>
```

---

### 2. 🌐 Añadir Sección de Skills/Tecnologías

**Problema actual:** Las habilidades técnicas no están claramente visibles en el sitio web, aunque tu perfil de GitHub las muestra.

**Sugerencia:**
- Añadir una sección visual con iconos de tecnologías
- Usar algo similar a lo que tienes en tu README de GitHub con skillicons.dev

```html
<!-- Ejemplo -->
<section class="skills">
  <h3>Tecnologías</h3>
  <img src="https://skillicons.dev/icons?i=unity,cs,dotnet,firebase,js,ts,angular" alt="Skills">
</section>
```

---

### 3. 📊 Mostrar Métricas de Éxito

**Problema actual:** No se destacan logros cuantitativos importantes.

**Sugerencia:**
Añadir métricas visibles como:
- **Hospital Empire:** +5M descargas en Google Play
- **UniFlux:** 80+ estrellas en GitHub
- **Finalista Protos 2020:** Verkami | DAU Barcelona

---

### 4. 🎮 Mejorar la Página de Proyectos

**Problema actual:** La sección de proyectos está dentro del timeline de "About Me", lo cual dificulta encontrar juegos específicos.

**Sugerencia:**
- Crear una página dedicada `/pages/projects/` con todos los juegos
- Categorizar por tipo: Mobile Games, Game Jams, Personal Projects
- Añadir imágenes/capturas de cada juego
- Incluir filtros por año o tipo de juego

---

### 5. 🖼️ Añadir Imágenes y Capturas de Pantalla

**Problema actual:** Los juegos solo tienen enlaces de texto, sin preview visual.

**Sugerencia:**
- Añadir thumbnails o capturas de cada juego
- Crear un portfolio visual tipo galería
- Usar las imágenes que ya existen en itch.io y YouTube

---

### 6. 📝 Crear un Blog o Sección de Artículos

**Problema actual:** Tienes código y gists interesantes que no están destacados.

**Sugerencia:**
Destacar tus contribuciones técnicas:
- [Export C# code in .tgz packages](https://gist.github.com/xavierarpa/8f529162292add65cf1db347ee690caa)
- [Make C# code in UML Diagrams](https://gist.github.com/xavierarpa/031bffac8fbb4f2d64594310f3165b91)
- [Switch between Task and IEnumerator](https://gist.github.com/xavierarpa/5117a811ec590e678b160be35c405cbf)

---

### 7. 🔗 Mejorar SEO y Meta Tags

**Problema actual:** 
- La imagen de Open Graph muestra `undefined/about/cover.png`
- Falta descripción meta más descriptiva

**Sugerencia:**
```html
<!-- Corregir en pages/about/index.html -->
<!-- Nota: Verificar que la imagen existe en /assets/img/me.jpeg antes de usar -->
<meta property="og:image" content="https://xavierarpa.github.io/assets/img/me.jpeg" />
<meta name="description" content="Xavier Arpa - Game Designer & Unity Developer. Creator of UniFlux. Co-founder of Bee Games and Boogysoft.">
```

---

### 8. 📱 Añadir LinkedIn

**Problema actual:** No hay enlace a LinkedIn en la página.

**Sugerencia:**
- Añadir enlace a LinkedIn para facilitar contacto profesional
- Conectar con más reclutadores y profesionales de la industria

---

### 9. 🎨 Mejorar el Diseño Visual

**Problema actual:** El diseño es funcional pero básico.

**Sugerencia:**
- Añadir animaciones sutiles (ya tienes fade-in, expandir a más elementos)
- Considerar añadir modo claro/oscuro toggle (veo que tienes código para esto comentado)
- Mejorar la responsividad en móviles
- Añadir iconos más visuales para cada sección

---

### 10. 🎬 Integrar Videos Directamente

**Problema actual:** Los videos solo son enlaces externos.

**Sugerencia:**
- Embedir previews de YouTube directamente en la página
- Añadir un video de presentación personal

```html
<!-- Ejemplo de embed (HTML5 con accesibilidad) -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/5Lro2sgINpM" 
  style="border: 0;"
  title="Hospital Empire - Idle Tycoon Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

---

### 11. 📄 Crear Presskit Profesional

**Problema actual:** Veo que tienes un ejemplo de presskit (`presskitexample.html`) pero no está personalizado para ti.

**Sugerencia:**
- Crear un presskit propio siguiendo el formato de [dopresskit()](http://dopresskit.com/)
- Incluir assets descargables para prensa
- Biografía corta y larga
- Screenshots de alta calidad

---

### 12. 🔍 Añadir Testimonios o Referencias

**Problema actual:** No hay testimonios de colaboradores o clientes.

**Sugerencia:**
- Añadir citas de compañeros de trabajo
- Incluir referencias de game jams
- Mostrar reviews de tus juegos

---

## ✅ Prioridades Recomendadas

### Alta Prioridad (Impacto Inmediato)
1. ⚡ Corregir el error de Open Graph image
2. ⚡ Añadir UniFlux al timeline
3. ⚡ Añadir métricas de éxito

### Media Prioridad (Mejora Visual)
4. 📸 Añadir imágenes de proyectos
5. 🎨 Crear página de proyectos dedicada
6. 📱 Añadir LinkedIn

### Baja Prioridad (Mejoras Futuras)
7. 📝 Crear blog/artículos
8. 🎬 Embeber videos
9. 📄 Presskit personalizado

---

## 📚 Recursos Útiles

- [GitHub Profile](https://github.com/xavierarpa)
- [Itch.io Profile](https://xavierarpa.itch.io)
- [UniFlux en Asset Store](https://assetstore.unity.com/packages/slug/250332)
- [Twitter/X](https://twitter.com/xavier_arpa)

---

*Documento generado basándose en investigación del perfil público de Xavier Arpa en diciembre 2024.*
