# TASKS — tarte-flambee

> **ARCHIVE DE MIGRATION** — aucune tâche active n’est pilotée ici. Source unique : Kanban général `/home/seb/.hermes/kanban.db`.

> Suivi de reprise. Statuts : `TODO` `IN_PROGRESS` `DONE` `BLOCKED`.

## Backlog

| ID | Tâche | Statut | Notes |
|---|---|---|---|
| SEO-001 | Corriger canonicales, titres et performance mesurée de l’accueil sans changer le tracking de conversion | DONE | Pas de commit ni déploiement. — 2026-07-30 22:45: Canonicales, titres et hero optimisés ; build et canary local OK |
| PERF-002 | Réduire les derniers freins PageSpeed sans altérer le suivi des devis | DONE | Cibler uniquement les gains mesurables et réversibles. — 2026-07-30 23:04: Images de sections adaptées à leur vraie taille ; build et rendu local OK |
| ANALYTICS-003 | Compter les contacts du formulaire hors Google Ads dans GA4 | MIGRATED | Diagnostic vérifié le 2026-08-13 : (1) le navigateur écrit dans `reservations`, mais les règles Firestore exigent un utilisateur connecté ; création anonyme reproduite en HTTP 403 `PERMISSION_DENIED`, et l’erreur est ignorée ; (2) après succès email, `form_contact_submit` déclenche seulement la conversion Google Ads dans le GTM publié, pas un événement GA4 ; (3) la source est codée en dur à `contact`, sans UTM/gclid/source-médium. Conséquence : les emails peuvent arriver, mais ni la base ni GA4 ne permettent de compter ou d’attribuer les contacts hors Ads. — Migrée vers le Kanban général : t_a8df657c. |
| ANALYTICS-004 | Fiabiliser le suivi des contacts sans modifier la conversion Google Ads existante | DONE | Déployé et vérifié en production le 2026-08-13 : API contact `200 success`, fiche Firestore créée avec attribution `direct` + campagne test puis supprimée (404 confirmé), GTM v7 publié avec 1 tag GA4 `generate_lead` isolé. Tags Ads 7/8/9 et stratégie d’enchères inchangés. Routes publiques 200, aucun log d’erreur sur le déploiement final. |
