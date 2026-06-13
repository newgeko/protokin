# Protokin cOS — Zones à Risques (ZR)
### Système de contrôle des transitions inter-régimes

---

## 0. Statut général

- **Nom :** Zones à Risques (ZR)
- **Nature :** Structure de contrôle inter-régimes
- **Niveau :** Kernel (opératoire invariant)
- **Fonction :** Régulation des passages entre régimes P1–P14
- **Statut ontologique :** Non-régime / dispositif de contrainte
- **Relation au système :** Interface critique CAP ↔ OVM

---

## 1. Définition

Une Zone à Risques (ZR) désigne l’espace structurel situé entre deux régimes de description Protokin, dans lequel une transformation de statut des invariants peut avoir lieu.

Elle constitue un **milieu de transition sous contrainte épistémique**, où les invariants changent potentiellement :

- de causal → normatif  
- de saillance → justification  
- de dynamique → sémantique  
- de local → intersubjectif  

Une ZR n’est ni un régime, ni un niveau du réel, ni une synthèse : elle est une **zone de vulnérabilité à la mauvaise traduction entre régimes**.

---

## 2. Axiome fondamental

> Toute transition inter-régime est structurellement risquée.

Conséquences :

- aucune continuité garantie entre P(A) et P(B)
- aucune conservation automatique des invariants
- aucune équivalence de statut entre descriptions

---

## 3. Fonction architecturale

Les Zones à Risques assurent :

### 3.1 Prévention des collapsus de niveau
Empêche la réduction abusive d’un régime à un autre.

### 3.2 Stabilisation des traductions
Contraint toute transformation à passer par requalification explicite.

### 3.3 Localisation des tensions OVM
Expose les zones d’apparition de :

- T1 — Réduction  
- T3 — Saut d’échelle  
- T4 — Confusion valeur / raison  
- T5 — Rupture de registre  
- T11 — Compression inter-régime  

### 3.4 Activation du CAP
Déclenchement du Cycle d’Audit Protokin lors de saturation.

---

## 4. Structure d’une Zone à Risques

### 4.1 Régimes adjacents
- P{A} (source)
- P{B} (cible)

### 4.2 Invariants en translation
- invariants causaux (P1–P10)
- invariants de saillance (P12)
- invariants normatifs (P11–P14)

### 4.3 Contraintes OVM
- non-réduction
- non-fusion
- requalification obligatoire

---

## 5. Typologie des ZR

### ZR-I — Faible
- continuité fonctionnelle
- transformation minimale
- CAP rare

### ZR-II — Modérée
- changement de registre descriptif
- requalification partielle

### ZR-III — Critique
- rupture de statut invariantiel
- passage causal → normatif ou inverse

### ZR-IV — Bloquante (OVM strict)
- passage interdit sans médiation explicite
- requalification obligatoire

Exemples :
- P2 → P11
- P12 → P13 sans passage P11
- P1 → P14 direct

---

## 6. Invariants en jeu

### (1) Invariants causaux
P1–P10 : dynamiques physiques et biologiques

### (2) Invariants opératoires
P4–P7 : couplage et comportements stabilisés

### (3) Invariants normatifs
P11–P14 : raisons, institutions, méta-validation

---

## 7. Mécanisme de transition contrôlée

1. Détection de saturation (CAP)
2. Identification des tensions OVM
3. Suspension de la continuité descriptive
4. Requalification des invariants
5. Validation ou blocage (OVM)
6. Transition vers régime cible

---

## 8. Règles OVM

### R1 — Non-réduction
Aucun invariant ne conserve son statut lors du passage inter-régime.

### R2 — Non-fusion
Deux régimes ne peuvent être fusionnés sans perte structurelle.

### R3 — Non-contamination normative
Aucun fait causal ne devient raison sans passage P11.

### R4 — Non-rétroprojection
Le normatif ne peut être projeté sur le causal.

---

## 9. Signature des tensions

- T1 — Réduction inter-régime  
- T3 — Saut d’échelle  
- T4 — Confusion valeur / raison  
- T5 — Rupture de registre  
- T11 — Compression inter-régime  

---

## 10. Exemple canonique : ZR P12 ↔ P11

- P12 : gradients de saillance thimique
- P11 : espace des raisons

Risque principal :
- T4 (valence ≠ justification)

Condition de passage :
- requalification explicite en proposition normative
- neutralisation de la valence comme opérateur de vérité

---

## 11. Micro-modèle

```mermaid
graph TD

P[A] --> ZR[Zone à Risques]
ZR --> CAP((CAP))
CAP --> OVM{OVM}

OVM -->|validé| B[P(B)]
OVM -->|bloqué| A[P(A)]

ZR -. T1 .-> R[Réduction]
ZR -. T11 .-> F[Fusion]
ZR -. T4 .-> C[Confusion]
```

---

12. Rôle du Kernel

Les ZR sont supervisées par :

CAP : détection des saturations

OVM : contrôle des violations

Transition : exécution des passages validés



---

13. Résumé opératoire

Une Zone à Risques est :

un espace de transition inter-régimes

une zone de fragilité épistémique contrôlée

un dispositif anti-collapsus

une interface critique du Kernel


Elle garantit que :

> aucun invariant ne change de statut sans requalification explicite.




---

14. Formule synthétique

> Une Zone à Risques est l’espace où un invariant peut changer de régime de validité sans conservation automatique de son statut.




---