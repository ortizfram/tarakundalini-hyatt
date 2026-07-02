# Park Hyatt Employees Wellness

Landing estática preparada para GitHub Pages y para integrarse con GoHighLevel sin backend.

## Stack

- HTML
- CSS
- JavaScript vanilla
- Assets locales en `./assets/`

## Branch de publicación

Este repositorio publica desde la rama `gh-pages`.

## Cómo activar GitHub Pages

1. Entrá al repositorio en GitHub.
2. Andá a `Settings`.
3. Abrí la sección `Pages`.
4. En `Build and deployment`, elegí:
   - `Source`: `GitHub Actions`
5. Confirmá que el workflow de Pages esté habilitado y que el push a `gh-pages` dispare el deploy.

Si preferís publicar desde una rama en vez de Actions, el contenido ya está listo para funcionar como sitio estático y seguir usando `gh-pages` como branch principal de despliegue.

## Dónde pegar los embeds de GoHighLevel

### Formulario

Pegá el código del formulario en:

`index.html`

Buscá este comentario:

```html
<!-- GOHIGHLEVEL FORM EMBED HERE -->
```

### Calendario

Pegá el calendario en:

`index.html`

Buscá este comentario:

```html
<!-- GOHIGHLEVEL CALENDAR EMBED HERE -->
```

### Tracking y píxeles

Pegá los scripts de tracking en el `<head>` de:

`index.html`

Buscá este comentario:

```html
<!-- GOHIGHLEVEL TRACKING CODE / PIXELS HERE -->
```

### Scripts finales

Pegá cualquier script final antes de cerrar `body` en:

`index.html`

Buscá este comentario:

```html
<!-- GOHIGHLEVEL FOOTER SCRIPTS HERE -->
```

## Rutas

Usar siempre rutas relativas compatibles con GitHub Pages:

- `./styles.css`
- `./app.js`
- `./assets/...`

No usar rutas locales absolutas, `localhost`, ni imports que dependan de servidor.

## Dominio personalizado

Si vas a conectar un dominio propio:

1. Activá GitHub Pages.
2. Cargá el dominio en `Settings > Pages > Custom domain`.
3. Configurá los DNS que GitHub te indique.
4. Esperá la verificación de HTTPS.

No se creó archivo `CNAME` porque el dominio no está confirmado todavía.

## Verificación local

El sitio abre directamente como archivo estático:

`file:///C:/Users/ortiz/Documents/hyatt/index.html`

También debería verse bien en GitHub Pages sin cambios adicionales.
