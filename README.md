# Portfolio de KORA Gawarou

Site statique React + Vite. Aucune base de données, aucun backend.

## 1. Installer les outils
1. Installe Node.js (version LTS) depuis https://nodejs.org puis vérifie : `node -v` et `npm -v`.
2. Installe Git depuis https://git-scm.com.

## 2. Lancer le site sur ton ordinateur
```bash
cd portfolio
npm install
npm run dev
```
Ouvre l'adresse affichée (souvent http://localhost:5173). Vérifie : menu, mode clair/sombre, boutons de contact, présentation de chaque projet, formulaire.

Test de production : `npm run build` puis `npm run preview`.

## 3. Personnaliser (tout se fait dans `src/data/`)
- `profile.js` : coordonnées, textes, stage (dates), formation (établissement, diplôme, années), niveaux de langues. Un champ vide n'est pas affiché.
- `skills.js` : technologies.
- `projects.js` : par projet, `features`, `tech`, `images`, `demoUrl`, `repoUrl`, `confidential`. Ne remplis que ce qui est confirmé.
- CV : copie ton PDF dans `public/cv/` sous le nom `CV-KORA-Gawarou.pdf`. Le bouton s'active automatiquement.
- Captures : copie les images dans `public/projects/` et référence-les dans `images` (ex. `'/projects/memoires-1.png'`). Compresse-les (idéalement moins de 300 Ko).
- SEO : dans `index.html`, remplace l'URL de `canonical` par ton URL Vercel.

## 4. Formulaire de contact
Sans configuration, le formulaire propose un repli : ouvrir ton application e-mail avec le message pré-rempli. Limite : rien n'est envoyé tant que le visiteur n'envoie pas lui-même l'e-mail, et il lui faut une application de messagerie.

Pour un envoi direct :
1. Crée un compte gratuit sur https://formspree.io et un nouveau formulaire avec ton e-mail.
2. Copie l'identifiant (la fin de l'URL `https://formspree.io/f/xxxxxxxx`).
3. En local : copie `.env.example` en `.env` et renseigne `VITE_FORMSPREE_ID`.
4. Sur Vercel : Settings > Environment Variables, ajoute `VITE_FORMSPREE_ID`, puis redéploie.
Cet identifiant n'est pas un secret : il est conçu pour être public.

## 5. Publier sur GitHub
1. Sur https://github.com/new, crée un dépôt nommé `portfolio` (vide).
2. Dans le dossier du projet :
```bash
git init
git add .
git commit -m "Premier commit"
git branch -M main
git remote add origin https://github.com/GawarouKora/portfolio.git
git push -u origin main
```

## 6. Déployer sur Vercel
1. Va sur https://vercel.com et connecte-toi avec GitHub.
2. « Add New > Project », choisis le dépôt `portfolio`, « Import ».
3. Réglages (détectés automatiquement) : Framework Vite, Build Command `npm run build`, Output Directory `dist`.
4. Ajoute `VITE_FORMSPREE_ID` si tu l'as, puis « Deploy ».
5. Vercel affiche ton URL publique (`https://…vercel.app`). Teste-la sur ton téléphone et sur un autre appareil.
6. Mises à jour automatiques : chaque `git push` sur `main` redéploie le site.
7. Domaine personnalisé (plus tard) : Settings > Domains dans Vercel.
