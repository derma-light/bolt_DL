# Derma Light - Laser Haarentfernung Hamburg

## Deployment Anleitung

**KRITISCH: Deployen Sie den `dist/` Ordner, NICHT das Root-Verzeichnis!**

### Build Einstellungen

```
Build Command: npm run build
Publish Directory: dist
Node Version: 18+
```

### Deployment-Konfiguration

- **Netlify**: `netlify.toml` automatisch erkannt
- **Vercel**: `vercel.json` automatisch erkannt
- **Bolt**: `.bolt/config.json` konfiguriert
- **Andere Plattformen**: Setzen Sie output directory auf `dist`

### Lokaler Build & Test

```bash
# Abhängigkeiten installieren
npm install

# Production Build erstellen
npm run build

# Build lokal testen
npm run preview
# Öffnet http://localhost:4173
```

### Fehlerbehebung

**Problem: Weiße Seite nach Deployment**

Lösung:
1. ✅ Publish Directory MUSS `dist` sein
2. ✅ Build Command MUSS `npm run build` sein
3. ❌ NICHT das Root-Verzeichnis deployen
4. ❌ NICHT den `src/` Ordner deployen

**Build prüfen:**
```bash
npm run build
ls -lh dist/  # Sollte index.html und assets/ zeigen
```

### Projektstruktur

```
project/
├── dist/                  ← DIES DEPLOYEN!
│   ├── index.html
│   ├── assets/
│   ├── _redirects
│   └── ...
├── src/                   ← Source Code (nicht deployen)
├── public/                ← Statische Assets
├── netlify.toml          ← Netlify Config
├── vercel.json           ← Vercel Config
└── package.json
```
