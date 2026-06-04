Protokin — Protocole d’usage des prompts

1. Principe général

Le système Protokin repose sur deux types de prompts distincts, correspondant à deux opérations fondamentales :

- la production de descriptions
- l’analyse de descriptions

Ces deux opérations ne doivent pas être fusionnées sauf indication explicite.

---

2. Les deux modules fondamentaux

2.1 Module de génération (Writing Mode)

Nom : Cahier des charges rédactionnel Protokin

Fonction : produire des textes conformes à l’architecture Protokin

Usage :

- rédaction de pages
- construction de manifestes
- structuration de concepts
- production de contenus pour site ou documentation

Contrôle principal :

- style
- vocabulaire
- interdits conceptuels
- structure des documents

Principe :
Tout texte doit rester dans un cadre descriptif impersonnel et éviter toute téléologie ou ontologisation des concepts.

---

2.2 Module de reconstruction (Audit Mode)

Nom : Prompt de reconstruction Protokin

Fonction : analyser un texte comme produit de régimes descriptifs

Usage :

- analyse de documents
- traitement de sources
- lecture via NotebookLM
- audit conceptuel

Contrôle principal :

- identification des régimes
- extraction des invariants
- analyse des stabilisations
- cartographie des tensions
- détection des transitions

Principe :
Tout texte est traité comme une stabilisation locale produite par un ou plusieurs régimes descriptifs.

---

3. Règle de séparation stricte

Les deux modules doivent être utilisés séparément.

Il est interdit de :

- mélanger production et analyse dans une même opération
- appliquer une analyse pendant une phase de génération
- produire un texte tout en le reconstruisant simultanément

---

4. Conditions d’utilisation

Cas 1 — Production de contenu

➡ Activer uniquement le Writing Mode

Exemple :

- “Rédige une page sur les tensions inter-régimes”

---

Cas 2 — Analyse de contenu

➡ Activer uniquement le Audit Mode

Exemple :

- “Analyse ce texte selon Protokin”

---

Cas 3 — Système complet (usage avancé)

Un méta-prompt peut être utilisé pour router automatiquement les demandes :

- Si la demande implique une production → Writing Mode
- Si la demande implique une analyse → Audit Mode
- Si ambigu → demander clarification

---

5. Architecture conceptuelle

Le système Protokin fonctionne comme un double dispositif :

- un moteur de génération contrôlée
- un moteur d’audit des régimes descriptifs

Ces deux moteurs ne sont pas hiérarchiques mais complémentaires.

---

6. Résumé opératoire

- Writing Mode = produire des descriptions stabilisées
- Audit Mode = reconstruire les régimes sous-jacents
- séparation stricte = condition de cohérence du système