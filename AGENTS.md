
## Enchaînement des tâches

- Utiliser le `TASKS.md` du workspace comme source d’état dès qu’une tâche est multi-étape ou reprenable.
- Si `TASKS.md` n’existe pas encore pour ce projet et que le travail est long, le créer avec le runner global.
- Quand Sébastien dit `continue`, `enchaîne`, `prends la prochaine tâche` ou équivalent, exécuter :
  `python3 /home/seb/.hermes/workspace/scripts/hermes_next_task.py next --root <workspace-du-projet>`
- Traiter une tâche courte à la fois, vérifier réellement, puis marquer `DONE` ou `BLOCKED` avec le même runner.
- Si Sébastien demande explicitement d’enchaîner, passer automatiquement à la tâche suivante tant que les vérifications passent.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
