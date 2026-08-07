# Prompt de contrôle qualité — Audit d'une page Protokin

## Rôle

Tu réalises un audit conceptuel et architectural d'une page de documentation Protokin.

Tu n'es pas chargé de réécrire la page immédiatement.

Ton objectif est d'examiner si la page respecte les principes de construction de l'architecture Protokin.

L'audit doit appliquer à la documentation elle-même les exigences réflexives de Protokin :

> Une description doit pouvoir être examinée selon les conditions qui permettent sa propre production, sa stabilisation et sa justification.

---

# Objet de l'audit

La page analysée est :

[Titre de la page]

Fichier :

[nom-du-fichier.md]

Section :

[00 à 12]

---

# Documents de référence

L'audit doit utiliser :

1. `prompt-gabarit-universel.md`

→ Règles générales de rédaction des pages Protokin.

2. `prompt-[section].md`

→ Contraintes spécifiques de la section architecturale.

3. `table-des-matieres-protokin.md`

→ Fonction de la page dans l'ensemble.

4. `lexique-protokin.md`

→ Stabilité terminologique.

5. Les pages voisines si disponibles :

- pages précédentes ;
- pages suivantes ;
- pages conceptuellement proches.

---

# Principe général d'évaluation

Une page Protokin n'est pas évaluée selon sa longueur, sa richesse ou son style.

Elle est évaluée selon sa fonction architecturale.

La question centrale est :

> Cette page établit-elle exactement ce qu'elle doit établir, sans absorber ce qui appartient à d'autres pages ?

---

# 1. Audit de fonction architecturale

Identifier :

## Fonction annoncée

Quelle fonction la page prétend-elle remplir ?

## Fonction réellement réalisée

Que fait effectivement la page ?

Évaluer :

- correspondance entre fonction annoncée et contenu ;
- présence d'un objet conceptuel unique ;
- absence de dispersion thématique.

Verdict :

- Conforme
- Partiellement conforme
- Non conforme

Justification :

---

# 2. Audit du problème conceptuel

Vérifier :

La page part-elle d'un problème conceptuel nécessaire ?

Questions :

- Quel problème cette page résout-elle ?
- Ce problème est-il clairement formulé ?
- La définition découle-t-elle d'une nécessité théorique ?

Identifier :

- problème clairement établi ;
- problème implicite ;
- absence de problème conceptuel.

---

# 3. Audit de l'objet propre

Vérifier que la page possède un objet unique.

Questions :

La page répond-elle clairement à :

> De quoi cette page parle-t-elle exactement ?

Identifier les éventuels débordements :

- concepts voisins absorbés ;
- développements appartenant à d'autres pages ;
- répétitions architecturales.

---

# 4. Audit des frontières conceptuelles

Examiner les distinctions avec les concepts proches.

Pour chaque concept voisin :

| Concept voisin | Risque de confusion | Séparation correcte ? |
|---|---|---|

Vérifier notamment :

- description / représentation ;
- configuration descriptive / objet descriptif ;
- stabilisation / validité ;
- régime descriptif / théorie ;
- support descriptif / contenu descriptif ;
- espace des causes / espace des raisons.

---

# 5. Audit des dépendances fonctionnelles

Vérifier :

## Ce que la page suppose

Les concepts antérieurs sont-ils correctement mobilisés ?

Identifier :

- concepts manquants ;
- concepts introduits trop tôt ;
- dépendances inversées.

## Ce que la page rend possible

Les ouvertures futures sont-elles cohérentes ?

Identifier :

- concepts préparés correctement ;
- anticipations abusives.

---

# 6. Audit de la position théorique

Vérifier la conformité avec le statut de Protokin.

La page respecte-t-elle les principes :

- pragmatisme ;
- post-pragmatisme ;
- inférentialisme ;
- fonctionnalité ;
- non-ontologie ?

Détecter :

## Dérives ontologiques

Exemples :

- transformer une description en essence ;
- présenter une catégorie comme naturelle en soi ;
- supposer un accès direct au réel.

## Dérives représentationnalistes

Exemples :

- description comme copie du monde ;
- langage comme miroir passif.

## Dérives relativistes

Exemples :

- descriptions réduites à des conventions arbitraires ;
- absence de contraintes pratiques ou normatives.

---

# 7. Audit de la distinction PROTO / KIN

Vérifier que la page distingue correctement :

## PROTO

Espace des causes :

- organisme ;
- milieu ;
- contraintes matérielles ;
- dynamiques biologiques ;
- processus physiques.

## KIN

Espace des raisons :

- normes ;
- justifications ;
- engagements ;
- évaluations ;
- pratiques discursives.

Identifier :

- confusion des niveaux ;
- réduction du KIN au PROTO ;
- oubli des conditions matérielles.

---

# 8. Audit terminologique

Contrôler la stabilité du vocabulaire.

Vérifier :

- définition stable des termes ;
- absence de synonymes trompeurs ;
- cohérence avec le lexique.

Signaler :

| Terme utilisé | Problème éventuel | Correction proposée |
|---|---|---|

---

# 9. Audit de structure rédactionnelle

Vérifier la progression :

Fonction ↓ Problème conceptuel ↓ Nécessité du concept ↓ Définition fonctionnelle ↓ Distinctions ↓ Articulation architecturale ↓ Limites ↓ Synthèse

Évaluer :

- progression logique ;
- présence des sections nécessaires ;
- équilibre entre explication et articulation.

---

# 10. Audit des exemples

Vérifier que les exemples :

- illustrent une structure ;
- ne remplacent pas l'analyse ;
- ne deviennent pas des preuves.

Identifier :

- exemples pertinents ;
- exemples trop développés ;
- exemples hors fonction.

---

# 11. Audit réflexif

Appliquer à la page le principe d'auto-application.

Question :

> La page elle-même respecte-t-elle les conditions descriptives qu'elle analyse ?

Examiner :

- position du locuteur ;
- choix des catégories ;
- dépendances implicites ;
- conditions de justification.

---

# 12. Diagnostic final

Produire une synthèse :

## Forces de la page

- ...
- ...

## Faiblesses architecturales

- ...
- ...

## Concepts à déplacer

- ...

## Concepts à approfondir

- ...

## Risques théoriques

- ...

---

# Verdict global

Attribuer un niveau :

## Niveau A — Conforme

La page remplit sa fonction et peut intégrer la documentation.

## Niveau B — Conforme avec corrections

La page est architecturée correctement mais nécessite des ajustements.

## Niveau C — Révision nécessaire

La page mélange plusieurs fonctions ou présente des dérives conceptuelles.

## Niveau D — Reconstruction nécessaire

La page ne respecte pas son rôle architectural.

---

# Règle finale

Ne jamais juger une page selon sa quantité d'informations.

Une page Protokin réussie est une page qui :

- établit une fonction précise ;
- respecte les frontières conceptuelles ;
- maintient la cohérence du système ;
- prépare les développements futurs ;
- peut être elle-même auditée.