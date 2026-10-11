# Architecture du Système Protokin 🧭
> **Spécification technique de second ordre, invariants du système et grammaire d'audit (Version développée du README.md)**

---

## 1. Statut, Posture et Immanence (Developer Spec de README §1)

### 1.1 Refus de la Méta-Théorie et du Surplomb
Protokin récuse toute prétention à constituer une **méta-théorie**, une ontologie première ou un discours de surplomb qui prétendrait dicter la structure ultime du réel ou la théorie générale du langage. L'architecture du système n'est pas un étage théorique posé au-dessus des pratiques, mais la **spécification technique et immanente de l'audit de second ordre**.

> *« Protokin n'est pas une théorie du monde, mais la grammaire réflexive et immanente de l'enquête. »*

### 1.2 Articulation entre README.md et Architecture-Systeme.md
L'organisation du corpus repose sur une dualité de rôle fonctionnel :
* **[README-v3.md](fr/README-v3.md) (Version Utilisateur / Orientation)** : Présente la posture, le sens pragmatique et la boussole minimale pour quiconque souhaite engager une enquête.
* **[architecture-systeme.md](fr/architecture-systeme.md) (Version Développeur / Spécification Système)** : Définit la mécanique interne, la séparation des registres d'étanchéité, les règles du *Linter* documentaire et le verrouillage des 15 non-conversions pour l'analyste qui contrôle la rigueur des opérations.

---

## 2. Le Déclencheur Système : Le Problème (Developer Spec de README §2)

L'enquête ne s'amorce jamais à partir d'axiomes dogmatiques ou de catégories posées *a priori*, mais uniquement lorsqu'une pratique descriptive rencontre une **anomalie d'opérativité**.

```
[ Pratique Descriptive Fluide ]
              │
              ▼ (Rupture d'opérativité / Blocage)
     [ PROBLÈME SITUÉ ]
              │
              ▼ (Déclenchement immanent)
  [ AUDIT PROTOKIN (Second Ordre) ]
```

### 2.1 Les 5 Signatures Techniques du Problème
L'analyseur identifie l'urgence d'une enquête lorsque la pratique présente l'une des cinq signatures de dysfonctionnement :
1. **Instabilité distinctionnelle** : Une catégorie ou une frontière conceptuelle ne réussit plus à discriminer les cas concrets sans créer d'ambiguïté.
2. **Incompatibilité de descriptions** : Plusieurs qualifications simultanées s'excluent mutuellement dans l'espace des raisons sans qu'un critère d'arbitrage ne soit disponible.
3. **Mutation fonctionnelle** : Un dispositif ou une expression continue d'être utilisé alors que son rôle dans la pratique a glissé silencieusement vers un autre registre.
4. **Contestation des critères** : Les habilitations et raisons qui permettaient de soutenir une assertion ne font plus autorité au sein de la communauté des praticiens.
5. **Confusion de registres (Conversion induite)** : Deux dimensions irréductibles (ex. une cause physique et une raison normative) sont traitées comme équivalentes, créant une réification ou une réduction.

---

## 3. Anti-Ontologie et Réalisme de Pratique (Developer Spec de README §3)

Protokin substitue à la spéculation ontologique un **réalisme de la pratique et du milieu**. Il s'appuie sur trois axiomes système d'étanchéité :

### Axiome 1 : `Décrire ≠ Constituer`
Déterminer, qualifier ou décrire une configuration (matérielle, biologique, sociale ou représentationnelle) ne signifie pas la fabriquer ou la produire ontologiquement. La description stabilise un *objet descriptif* dans la pratique sans se substituer au *référent*.

### Axiome 2 : `Contexte ≠ Référent`
Le contexte détermine les règles de pertinence, les prémisses collatérales et l'arrière-plan d'habilitation d'une description. Il ne constitue pas la réalité matérielle ou l'entité récalcitrante dont la description parle ([referent.md](fr/referent.md)).

### Axiome 3 : `Cohérence Discursive ⇏ Adéquation au Réel`
Un réseau d'assertions peut être parfaitement cohérent au sein de l'espace des raisons tout en demeurant inadéquat ou mis en échec par les contraintes matérielles du milieu.

---

## 4. Spécification de la Quadripartition de Base (Developer Spec de README §4)

La **quadripartition de base** ([quadripartition-de-base.md](fr/quadripartition-de-base.md)) constitue la boussole système. Elle force l'analyste à interroger simultanément quatre dimensions irréductibles du présent descriptif.

| Dimension Système | Question Directrice | Registre Concerné | Point d'Interception d'Audit |
| :--- | :--- | :--- | :--- |
| **Condition** | *Dans quelles conditions corporelles, matérielles, écologiques et techniques la pratique a-t-elle lieu ?* | Registre Référentiel & Environnemental | Bloquer la conversion des contraintes matérielles en raisons discursives. |
| **Relation** | *Quelles mises en rapport, dépendances ou discriminations sont établies, transformées ou maintenues ?* | Registre Cognitif & Inférentiel | Empêcher la chosification des dépendances et traquer les biais de corrélation. |
| **Fonction** | *Que fait cette configuration et que permet-elle d'accomplir effectivement dans la pratique ?* | Registre Pragmatique & Opératoire | Isoler le rôle effectif des gestes et des termes sans les dissoudre dans leur genèse. |
| **Justification** | *Selon quels critères, raisons, habilitations ou engagements la description peut-elle être défendue ou révisée ?* | Registre Normatif & Déontique | Évaluer le droit de soutenir une affirmation et auditer la tenue de registre (*scorekeeping*). |

### Invariants Système de la Quadripartition
* **Sobriété minimale** : Le chiffre 4 est fonctionnellement suffisant pour bloquer tout glissement réducteur (ex. réduire la justification à la condition matérielle).
* **Indépendance fonctionnelle** : Aucune réponse apportée dans une case ne vaut solution pour les trois autres.
* **Axialité de la Temporalité et de la Réflexivité** : La temporalité et la réflexivité ne sont pas des dimensions additionnelles ; elles traversent dynamiquement chacune des quatre cases.

---

## 5. Le Butoir Matériel & La Tripartition d'Audit (Developer Spec de README §5)

Le traitement du **butoir matériel** prémunit le système contre le *Mythe du Donné* (Sellars) et contre le *cohérentisme immatériel* (Rorty).

```
[ Milieu Réel ] ──► (Résistance brute) ──► [ Pôle Condition ]
                                                │
                                                ▼ (Incompatibilité / Épreuve)
[ Espace des Raisons ] ◄── (Révision Inférentielle) ◄── [ Pôle Justification ]
```

### 5.1 La Mécanique de la Résistance Matérielle
1. **Choc matériel (Pôle Condition)** : Le milieu physique, biologique ou technique oppose une opacité, une friction ou une rupture d'opérativité sans porter par lui-même de sens propositionnel.
2. **Constat d'incompatibilité (Pôle Épreuve)** : La pratique rencontre un échec technique ou une contradiction dans ses prédictions.
3. **Révision normative (Pôle Justification)** : L'analyste ou la communauté réajuste ses engagements inférentiels. Cette révision s'appuie sur des **inférences matérielles non-monotoniques** ([inference-materielle.md](fr/inference-materielle.md)), défaisables lorsque l'environnement change.

### 5.2 La Tripartition d'Audit Canonique
Le système impose de distinguer strictement trois maillons :
$$\text{Résistance Matérielle (Condition / Limitation)} \neq \text{Critère (Justification / Évaluation)} \neq \text{Raison (Justification / Défense)}$$

---

## 6. Architecture du Système vs Architecture Fonctionnelle (Developer Spec de README §6)

Le système distingue soigneusement sa **grammaire de contrôle** (Système) de sa **dynamique de déplacement** (Fonctionnel) :

```
┌────────────────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE DU SYSTÈME                             │
│  (Boussole Quadripartite, Registres d'Étanchéité, 15 Non-Conversions)   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼ (Commandement & Contrôle)
┌────────────────────────────────────────────────────────────────────────┐
│               ARCHITECTURE FONCTIONNELLE DE L'ENQUÊTE                  │
│   • Chaîne Principale (8 Opérations Structurantes de Déplacement)       │
│   • 5 Fonctions Transversales (Temporaliser, Expliquer, Auditer, etc.) │
└────────────────────────────────────────────────────────────────────────┘
```

### Tableau de Spécification Comparative

| Composante | Architecture du Système | Architecture Fonctionnelle de l'Enquête |
| :--- | :--- | :--- |
| **Objectif** | Fixer les invariants, les registres et le *Linter* d'audit. | Guider le parcours d'investigation de l'analyste sur le terrain. |
| **Structure** | Problème + Quadripartition + 3 Registres + 15 Non-Conversions + Règle des 7 questions. | Chaîne principale ($8\text{ étapes}$) + $5\text{ Fonctions transversales}$. |
| **Périmètre** | Statique et régulateur (Contrôle de validité). | Dynamique et opérationnel (Déplacement d'enquête). |
| **Formule** | *« Comment le système garantit-il l'étanchéité des fonctions ? »* | *« Comment l'enquêteur se déplace-t-il de la délimitation à la redélimitation ? »* |

---

## 7. Les 7 Registres Système du Langage et du Jeu des Raisons (Developer Spec de README §7)

Pour éviter de traiter le langage comme un bloc homogène, le système formalise sept couches fonctionnelles étanches :

1. **La Prédication (Attribution locale)** : Application d'un prédicat \\(Y\\) à un sujet \\(X\\) (`X est Y`). Attribution d'une qualification sans hypostasier de propriété intrinsèque ([predication.md](fr/predication.md)).
2. **La Proposition (Contenu inférentiel en bac à sable)** : Unité minimale de contenu pouvant servir de prémisse et de conclusion. Contenu neutralisé réutilisable sous forme d'hypothèse, de question ou de négation ([proposition.md](fr/proposition.md)).
3. **L'Assertion (Prise en charge pragmatique)** : Acte public par lequel un locuteur s'engage sur une proposition, générant de l'**autorité discursive** (pour les auditeurs) et de la **responsabilité justificative** (pour le locuteur) ([assertion.md](fr/assertion.md)).
4. **La Portée et l'Inférence Matérielles** : Réseau de conséquences objectives et d'incompatibilités déclenché par l'assertion. Ce réseau est propulsé par des **inférences matérielles non-monotoniques** ([la-portee-inferentielle.md](fr/la-portee-inferentielle.md), [inference-materielle.md](fr/inference-materielle.md)).
5. **L'Ancrage Référentiel (Objet descriptif vs Référent matériel)** : Distinction entre la différence stabilisée dans la pratique (`objet descriptif`) et la configuration physique récalcitrante (`référent matériel`) ([referent.md](fr/referent.md)).
6. **La Tenue de Registre Déontique (*Scorekeeping*)** : Suivi social de l'écart entre **statuts normatifs** (*engagements* / *habilitations*) et **attitudes pragmatiques** (*assumer* à la 1re personne / *attribuer* à la 3e personne) ([scorekeeping-deontique.md](fr/scorekeeping-deontique.md)).
7. **Les Ascriptions *De Dicto* / *De Re*** : Dualité de perspective entre la restitution des motifs dans le vocabulaire du locuteur (*de dicto*) et la spécification de l'objet réel dans la voix de l'analyseur (*de re*) ([ascriptions-de-dicto-de-re.md](fr/ascriptions-de-dicto-de-re.md)).

---

## 8. Le Verrouillage par les 15 Non-Conversions (Developer Spec de README §8)

Le système interdit formellement toute équivalence entre registres fonctionnels distincts. La formule cardinale du système est :

> **« Continuité des dépendances + discontinuité des fonctions + non-conversion »**

### Matrice des 15 Invariants de Non-Conversion
1. $\text{condition matérielle} \neq \text{critère de justification}$
2. $\text{résistance matérielle (butoir)} \neq \text{raison discursive}$
3. $\text{cause physique/biologique} \neq \text{raison normative}$
4. $\text{genèse historique/empirique} \neq \text{justification de droit}$
5. $\text{relation de dépendance} \neq \text{fonction opératoire}$
6. $\text{fonction opératoire} \neq \text{justification normative}$
7. $\text{trace ou indice matériel} \neq \text{signification conceptuelle}$
8. $\text{capacité comportementale} \neq \text{performance effectuée}$
9. $\text{description pragmatique} \neq \text{objet décrit}$
10. $\text{objet descriptif (stabilisé)} \neq \text{référent matériel (récalcitrant)}$
11. $\text{contexte d'application} \neq \text{référent}$
12. $\text{forme propositionnelle (bac à sable)} \neq \text{acte d'assertion (engagement)}$
13. $\text{statut normatif (engagement/habilitation)} \neq \text{attitude subjective (attribution/reconnaissance)}$
14. $\text{inférence matérielle (contenu)} \neq \text{déduction logique formelle (syntaxe)}$
15. $\text{ascription } de\ dicto \text{ (locuteur)} \neq \text{ascription } de\ re \text{ (analyseur)}$

---

## 9. La Règle des 7 Questions de Construction (Le Linter du Corpus)

Pour qu'une nouvelle fiche canonique soit valide au sein du système Protokin, elle doit répondre aux 7 exigences d'audit documentaire :

1. **Fonction unique** : Quelle fonction spécifique et irremplaçable cette page remplit-elle ?
2. **Inscription opérationnelle** : Quelle étape de la chaîne d'enquête mobilise-t-elle ?
3. **Pôle de la quadripartition** : À quelle question de la quadripartition se rattache-t-elle principalement ?
4. **Dépendances système** : De quelles autres fiches ou fonctions établies dépend-elle directement ?
5. **Conversion évitée** : Quelle réduction ou équivalence trompeuse permet-elle de neutraliser ?
6. **Ouvertures opératoires** : Qu'est-ce que cette page rend visible ou enquêtable par la suite ?
7. **Interdictions d'établissement** : Que s'interdit-elle formellement de théoriser ou de décider *a priori* ?

---

## 10. Cartographie et Indexation Canonique (Developer Spec de README §10)

L'architecture du système s'articule avec l'ensemble des fiches canoniques du dépôt :

* **Guide d'Accueil & Orientation** : [README-v3.md](fr/README-v3.md)
* **Table des Matières Globale** : [tdm-v2.md](fr/tdm-v2.md)
* **Spécification Système** : [architecture-systeme.md](fr/architecture-systeme.md)
* **Boussole d'Orientation** : [quadripartition-de-base.md](fr/quadripartition-de-base.md)
* **Opérations de Déplacement** : [architecture-fonctionnelle-de-l-enquete.md](fr/architecture-fonctionnelle-de-l-enquete.md)
* **Fiches Pragmatiques du Langage** :
  * [predication.md](fr/predication.md) · [proposition.md](fr/proposition.md) · [assertion.md](fr/assertion.md) · [la-portee-inferentielle.md](fr/la-portee-inferentielle.md)
  * [referent.md](fr/referent.md) · [scorekeeping-deontique.md](fr/scorekeeping-deontique.md) · [inference-materielle.md](fr/inference-materielle.md) · [ascriptions-de-dicto-de-re.md](fr/ascriptions-de-dicto-de-re.md)
