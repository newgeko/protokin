# P5 — Minimisation de la Surprise (FEP / Friston)

## 0. Identification

- **Numéro :** P5  
- **Nom :** Minimisation de la Surprise (Free Energy Principle / Friston)  
- **Famille :** cognitif  
- **Type :** Régime de couplage  
- **Statut :** irréductible / localement valide  

---

## 1. Définition

Ce régime formalise la stabilisation des systèmes adaptatifs par réduction des écarts entre états attendus et états effectivement rencontrés. La cohérence du système est décrite comme minimisation d’une quantité de surprise ou d’incertitude, non comme atteinte d’un équilibre statique. Les agents sont compris comme systèmes inférentiels produisant des modèles internes continuellement ajustés par l’erreur de prédiction. La perception et l’action sont intégrées dans un même processus de réduction de l’incertitude. Aucun accès direct au réel n’est supposé en dehors de ces dynamiques d’inférence.

👉 Cette section doit :
- décrire le régime sans le réduire à un autre
- éviter toute hiérarchie implicite
- ne pas introduire de causalité globale

---

## 2. Invariants opératoires

Liste des stabilités capturées par ce régime :

- Réduction de l’erreur de prédiction  
- Cohérence dynamique modèle–environnement  
- Ajustement inférentiel continu  
- Stabilisation probabiliste des états attendus  

👉 Un invariant = une stabilité relationnelle produite dans ce régime.

---

## 3. Mode de couplage observateur–système

Ce pilier définit un mode spécifique de :

- perception  
- découpage du réel  
- sélection d’invariants  
- stabilisation des distinctions  

### Caractéristiques :
- Le réel est accessible via inférence probabiliste  
- La perception est une hypothèse active sur l’état du monde  
- L’action sert à réduire l’incertitude sensorielle  

### Angle mort structurel :
Ce régime ne peut pas stabiliser des phénomènes qui ne sont pas traduisibles en termes d’erreur, de probabilité ou de modèle inférentiel.

---

## 4. Domaine de validité

Ce pilier est valide lorsque :

- Le système possède une capacité de modélisation interne  
- Les interactions peuvent être formulées en termes probabilistes  
- La dynamique du système est orientée vers la stabilisation prédictive  

### Limites :
- Régimes purement physiques sans inférence  
- Régimes normatifs irréductibles à la prédiction  

👉 Toute extension hors de ce domaine produit une instabilité descriptive.

---

## 5. Point de rupture

Ce pilier devient insuffisant lorsque :

- Les écarts ne sont plus quantifiables comme erreurs de prédiction  
- Les modèles internes deviennent inopérants ou indéfinis  
- L’environnement ne peut plus être inféré de manière stable  

### Type de transition déclenchée :
- ☑ Réinterprétation  
- ☑ Émergence  
- ☐ Rupture normative  

---

## 6. Relations avec les autres piliers

### Compatibilités partielles :
- P4 — Compétence topographique (ancrage action-perception des modèles)  
- P6 — Récursion prospective (extension temporelle des modèles inférentiels)  

### Tensions :
- P2 — Dissipation structurée (réduction thermodynamique vs interprétation informationnelle)  
- P3 — Ajustement allostatique (continuité biologique vs reformulation inférentielle)  

### Incompatibilités structurelles :
- P11 — Rupture épistémologique (passage au domaine normatif irréductible à la minimisation d’erreur)  

---

## 7. Traductions (lecture depuis d’autres régimes)

### Vu depuis P4 :
La minimisation de la surprise est reconstituée comme stabilisation de régularités comportementales.

### Vu depuis P8 :
Les erreurs de prédiction deviennent des ajustements d’attention partagée et d’intentionnalité commune.

👉 Important : il ne s’agit pas d’équivalences, mais de relectures partielles.

---

## 8. Micro-graphe local

```mermaid
graph LR

P5[Minimisation de la surprise]

P5 --> P4
P5 --> P6
P4 --> P5
P5 -. tension .-> P2
P3 --> P5


---

9. Résumé opératoire

Ce pilier capture : la stabilisation des systèmes par réduction de l’incertitude inférentielle

Il observe via : erreurs de prédiction, modèles internes et ajustements probabilistes

Il ignore structurellement : les phénomènes non modélisables en termes d’inférence

Il devient instable lorsque : la prédiction ne permet plus de stabiliser les interactions avec l’environnement


---

10. Notes épistémologiques (optionnel)

Statut ontologique : non requis
Statut épistémique : local et relatif au régime
Statut relationnel : défini par couplage observateur–système


---

11. Métadonnées (GitHub / navigation)

Fichier : P5_minimisation_surprise_fep_friston.md

Connexions principales : P4, P6, P2, P3, P8, P11

Niveau de transition : critique