# Deployment-Anleitung

## Build ist fertig ✅

Der Build wurde erfolgreich erstellt. Alle Dateien befinden sich im `dist/` Ordner.

## Wichtige Deployment-Einstellungen

### Für Netlify:
1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Base Directory:** (leer lassen)

### Für Vercel:
1. **Framework Preset:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`

### Für andere Hosting-Anbieter:
- **Deploy den `dist/` Ordner** (NICHT das Root-Verzeichnis!)
- Die `_redirects` Datei ist bereits im `dist/` für SPA-Routing enthalten
- Node Version: 18 oder höher

## Wichtig: Was deployed werden muss

✅ **Korrekt:** Deployen Sie den **`dist/`** Ordner
- dist/index.html
- dist/assets/
- dist/_redirects
- dist/robots.txt
- dist/sitemap.xml
- dist/fonts/
- Alle anderen Dateien in dist/

❌ **Falsch:** Root-Verzeichnis deployen
- Wenn Sie das Root-Verzeichnis deployen, sehen Benutzer nur eine weiße Seite
- Der Source Code (src/) darf NICHT deployed werden

## Umgebungsvariablen (optional)

Falls Sie Supabase nutzen möchten, setzen Sie diese Variablen:
```
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Prüfen nach dem Deployment

1. Öffnen Sie die Website
2. Überprüfen Sie die Browser-Konsole (F12) auf Fehler
3. Testen Sie die Navigation zwischen Seiten
4. Prüfen Sie, ob das SPA-Routing funktioniert (Seiten-Reload auf Unterseiten)

## Problem: "Weiße Seite"

Falls Sie eine weiße Seite sehen:
1. ✅ Stellen Sie sicher, dass `dist/` als Publish Directory eingestellt ist
2. ✅ Führen Sie `npm run build` lokal aus und deployen Sie den `dist/` Ordner neu
3. ✅ Überprüfen Sie Browser-Konsole auf JavaScript-Fehler
4. ✅ Prüfen Sie, ob der Build-Prozess auf dem Server erfolgreich war

## Lokaler Test vor Deployment

```bash
# Build erstellen
npm run build

# Build lokal testen
npm run preview
```

Öffnen Sie http://localhost:4173 um den Build zu testen.
