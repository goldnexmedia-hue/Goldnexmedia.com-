@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-fraunces: "Fraunces", serif;
  --font-inter: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0E0E10;
  color: #F5F1E8;
}

::selection {
  background: #C9A227;
  color: #0E0E10;
}

/* Focus visibility for accessibility */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #C9A227;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

.container-page {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #C9A227;
}

.hairline {
  border-top: 1px solid #2A2A2D;
}

@keyframes nexus-pulse {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}

@keyframes nexus-draw {
  from { stroke-dashoffset: 240; }
  to { stroke-dashoffset: 0; }
}

.nexus-line {
  stroke-dasharray: 240;
  animation: nexus-draw 1.8s ease-out forwards;
}

.nexus-core {
  animation: nexus-pulse 3.2s ease-in-out infinite;
}

.field-input {
  width: 100%;
  background-color: #17171A;
  border: 1px solid #2A2A2D;
  color: #F5F1E8;
  padding: 0.85rem 1rem;
  border-radius: 2px;
  font-size: 0.9rem;
}

.field-input:focus {
  border-color: #C9A227;
  outline: none;
}
