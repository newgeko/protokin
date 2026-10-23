# Pattern d’audit du corpus Protokin

## 1. Fonction du document

Ce document définit une méthode d’audit du corpus Protokin. Il aide à examiner la fonction de chaque page, les catégories qu’elle mobilise, ses relations avec les autres ressources et les éventuelles incohérences éditoriales ou conceptuelles.

Il complète [`patterns.md`](patterns.md), qui définit les repères de rédaction des différents types de pages. Il ne le remplace pas :

- `patterns.md` aide à rédiger ou à réviser une page ;
- `pattern-audit.md` aide à évaluer la place, la fonction et les relations de cette page dans le corpus.

L’audit ne vise ni à uniformiser toutes les pages ni à imposer une classification exhaustive. Il vise à rendre les décisions éditoriales explicites, vérifiables et révisables.

## 2. Principe général

Une page doit être examinée à partir de son contenu actuel et de sa contribution effective au projet, non à partir de ce qu’elle devrait contenir selon une architecture reconstruite d’avance.

L’audit distingue trois questions :

1. **Quel est l’objet principal de la page ?** Opération, notion, méthode, cas, orientation ou autre ressource.
2. **Quelle est sa fonction propre ?** Quel problème traite-t-elle et quelle contribution apporte-t-elle ?
3. **Quelles sont ses relations avec le corpus ?** Quelles pages complète-t-elle, présuppose-t-elle, recoupe-t-elle ou contredit-elle ?

Ces questions sont liées, mais elles ne doivent pas être confondues. Le type d’une page ne détermine pas à lui seul sa fonction, et sa fonction ne suffit pas à déterminer toutes ses relations.

## 3. Catégories de travail

Les catégories suivantes servent de repères provisoires pour l’audit. Elles ne constituent ni une hiérarchie ontologique ni une classification nécessaire de tous les contenus.

| Catégorie | Question d’audit | Point de vigilance |
|---|---|---|
| Page d’orientation ou de cadrage | Situe-t-elle le problème et l’organisation du projet ? | Ne doit pas se substituer aux pages spécialisées. |
| Architecture du projet | Rend-elle intelligibles les fonctions et les relations des ressources documentaires ? | Ne doit pas décrire à la place de l’architecture fonctionnelle le mouvement de l’enquête. |
| Architecture fonctionnelle | Explique-t-elle les opérations, leurs dépendances et leurs reprises possibles ? | Ne doit pas présenter la chaîne comme un protocole linéaire obligatoire. |
| Opération d’enquête | Quel examen identifiable permet-elle de conduire ? | Ne pas la confondre avec une notion générale, une étape obligatoire ou un résultat garanti. |
| Fonction transversale | Quel aspect de l’enquête traverse-t-elle et permet-elle de contrôler ? | Ne pas la transformer en opération supplémentaire si sa fonction est transversale. |
| Orientation d’examen | Quel rapport permet-elle d’examiner dans une configuration ? | Condition, Relation, Fonction et Justification ne sont ni des phases ni des classes d’objets. |
| Notion | Quelle distinction ou quel problème rend-elle opératoire ? | Ne pas présupposer une définition universelle ou la confondre avec les notions voisines. |
| Concept | Quels usages, engagements ou conséquences inférentielles organise-t-il ? | La différence entre « notion » et « concept » doit être vérifiée dans les usages du corpus, non postulée. |
| Langage et inférence | Quels rôles jouent les propositions, assertions, substitutions, anaphores ou inférences ? | Ne pas réduire les engagements à la seule présence d’une assertion. |
| Méthode ou instrument | Comment une description ou une distinction est-elle mise à l’épreuve ? | Un instrument ne garantit pas à lui seul la validité du résultat. |
| Régime descriptif | Quelles règles et fonctions caractérisent une pratique descriptive ? | Ne pas le traiter comme une catégorie ontologique préexistante. |
| Cas ou confrontation | Que permet d’examiner une situation ou une comparaison précise ? | Un exemple illustratif ne constitue pas automatiquement une épreuve suffisante. |
| Ressource de conduite | Comment aide-t-elle à orienter ou poursuivre l’enquête ? | Ne pas la classer automatiquement parmi les opérations. |
| Référence ou navigation | Quelle information de repérage ou d’accès fournit-elle ? | Vérifier l’exactitude et l’utilité des liens. |
| Pattern éditorial | Quelle règle de rédaction ou de contrôle propose-t-il ? | Ne pas le confondre avec une notion ou une opération de l’enquête. |

Une page peut relever d’un type principal et mobiliser plusieurs catégories secondaires. L’audit doit conserver cette possibilité lorsqu’elle correspond au texte.

## 4. Fiche d’audit d’une page

Pour chaque page examinée, renseigner les champs suivants.

### 4.1. Identification

- **Chemin exact :** chemin constaté dans le dépôt.
- **Titre actuel :** titre du fichier.
- **Version examinée :** branche ou commit.
- **Présence :** fichier existant, absent, renommé ou inaccessible.

Ne pas inférer l’existence d’un fichier à partir d’un lien mentionné dans une autre page.

### 4.2. Fonction et problème

- **Type principal :** catégorie éditoriale la plus utile pour comprendre la page.
- **Fonction propre :** contribution spécifique de la page.
- **Problème traité :** difficulté qui justifie son existence.
- **Résultat permis :** ce que la page aide à établir, distinguer ou examiner.
- **Limites :** ce qu’elle ne permet pas d’établir à elle seule.

La fonction doit être formulée de façon suffisamment précise pour distinguer la page des ressources voisines.

### 4.3. Termes et distinctions

- Quels termes sont définis explicitement ?
- Quels termes sont seulement mobilisés ?
- Les termes centraux sont-ils employés de manière stable dans la page ?
- Des sens différents d’un même terme sont-ils distingués ?
- Des distinctions nécessaires sont-elles laissées implicites ?
- La page présuppose-t-elle une notion qui n’est définie nulle part, ou dont le statut reste incertain ?

Ne pas ajouter une définition à chaque terme rencontré. Définir ce qui est nécessaire à la fonction propre de la page et renvoyer vers les ressources appropriées pour le reste.

### 4.4. Relations avec le corpus

Pour chaque relation importante, préciser sa nature :

- **Complémentarité :** les pages traitent des aspects distincts d’un problème commun.
- **Dépendance :** la compréhension d’une page requiert un résultat, une distinction ou un cadrage provenant d’une autre.
- **Recouvrement :** plusieurs pages remplissent des fonctions partiellement semblables.
- **Tension :** les pages formulent des propositions difficiles à rendre compatibles.
- **Contradiction :** les propositions ne peuvent pas être maintenues ensemble dans le même sens et sous les mêmes conditions.
- **Renvoi éditorial :** un lien aide à poursuivre la lecture sans établir une dépendance conceptuelle.
- **Relation à vérifier :** le contenu disponible ne permet pas encore de décider.

Ne pas traiter tout recouvrement comme une répétition inutile : deux pages peuvent parler du même objet en remplissant des fonctions différentes.

### 4.5. Épreuves et exemples

- L’exemple est-il nécessaire à la compréhension de la distinction ?
- Permet-il de mettre à l’épreuve la proposition ou sert-il seulement à l’illustrer ?
- Les limites de l’exemple sont-elles explicites ?
- Une comparaison, une substitution, un contre-exemple ou une reprise serait-il plus pertinent ?

L’audit ne doit pas exiger artificiellement un exemple de même forme pour toutes les pages.

## 5. Vérifier les articulations structurantes

### 5.1. Les opérations

Vérifier que les pages consacrées à Délimiter, Ancrer, Distinguer, Relier, Configurer, Justifier, Reconstituer et Redélimiter définissent des examens distincts.

Examiner notamment :

- si leur fonction est formulée en termes opératoires ;
- si leurs conditions de mobilisation sont compréhensibles ;
- si leurs résultats sont distingués de leurs limites ;
- si leurs relations sont décrites comme des dépendances possibles plutôt que comme une succession obligatoire ;
- si les reprises et les changements de périmètre sont possibles.

### 5.2. Les fonctions transversales

Vérifier le statut et les usages de Temporaliser, Auditer, Réfléchir et Éprouver.

Ces fonctions doivent être articulées au mouvement de l’enquête sans être automatiquement ajoutées à la chaîne des opérations. Si le corpus donne à l’une d’elles un statut différent, consigner cette divergence avant de la corriger.

### 5.3. La quadripartition

Vérifier la distinction entre les quatre orientations :

- **Condition :** dans quelles conditions la situation ou la pratique est-elle possible, contrainte ou transformée ?
- **Relation :** quelles dépendances et quelles mises en rapport faut-il examiner ?
- **Fonction :** que fait la configuration dans la pratique examinée ?
- **Justification :** quelles raisons, quels critères et quels engagements soutiennent ou contestent la description ?

Ne pas présenter ces orientations comme des composantes universelles du réel, des niveaux hiérarchiques ou des phases successives. Vérifier également que les usages du mot « fonction » et du mot « relation » sont suffisamment différenciés selon le contexte.

### 5.4. Les non-conversions

Rechercher les passages qui risquent de confondre des registres distincts, notamment :

- cause ≠ raison ;
- genèse ≠ justification ;
- condition ≠ critère ;
- trace ≠ signification ;
- description ≠ objet décrit ;
- capacité ≠ performance ≠ validité ;
- fonction ≠ justification ;
- incarnation ≠ réduction biologique.

Ces formules sont des alertes d’audit, non des interdictions de décrire des relations entre les termes. Toute relation proposée doit préciser ce qu’elle établit et ce qu’elle ne permet pas d’inférer.

## 6. Liens et navigation

Vérifier les liens à partir des chemins réellement présents dans la branche auditée.

Pour chaque lien :

1. confirmer que la cible existe ;
2. confirmer que le chemin est correct depuis le fichier source ;
3. vérifier que le titre et le texte du lien correspondent à la fonction de la cible ;
4. distinguer un lien cassé d’un renvoi conceptuellement inutile ;
5. rechercher les pages existantes qui devraient être reliées mais ne le sont pas.

La table des matières et la barre latérale ont une fonction de navigation. Elles ne doivent pas nécessairement reproduire toutes les relations conceptuelles identifiées par l’audit.

## 7. Décisions d’audit

Chaque page reçoit une décision provisoire, accompagnée d’une justification.

| Décision | Quand l’utiliser |
|---|---|
| **Conserver** | La fonction est distincte et le contenu reste cohérent. |
| **Corriger** | La page remplit une fonction utile, mais comporte des imprécisions ou des incohérences localisées. |
| **Relier** | Le contenu est pertinent, mais ses dépendances ou ses renvois sont insuffisants. |
| **Délimiter davantage** | La page mélange plusieurs fonctions qu’il faut distinguer avant toute réécriture. |
| **Fusionner** | Deux pages remplissent effectivement la même fonction et leur séparation n’apporte pas de différence utile. |
| **Déplacer ou reclasser** | La fonction reste pertinente, mais le classement documentaire ne la rend pas lisible. |
| **Scinder** | Une page remplit plusieurs fonctions autonomes qui gagnent à être séparées. |
| **Supprimer** | La page n’apporte plus de contribution distincte et son contenu est repris ailleurs de manière adéquate. |
| **À examiner** | Les éléments disponibles ne suffisent pas à prendre une décision fiable. |

Aucune suppression, fusion ou réécriture importante ne doit être décidée sur la seule base du titre, de la place dans la table des matières ou d’une ressemblance lexicale.

## 8. Ordre de conduite de l’audit

L’audit suit un ordre de travail pratique, qui ne constitue pas une nouvelle chaîne théorique de l’enquête.

1. **Inventorier** les fichiers réellement présents dans la branche choisie.
2. **Classer provisoirement** les pages selon leur type principal.
3. **Examiner** leur fonction et le problème qu’elles traitent.
4. **Comparer** les définitions, distinctions et engagements des pages liées.
5. **Cartographier** les dépendances, recouvrements, tensions et contradictions.
6. **Vérifier** les renvois et les chemins.
7. **Formuler** les décisions de révision et leur justification.
8. **Réviser** les pages seulement après avoir identifié les effets attendus sur le reste du corpus.
9. **Contrôler à nouveau** les liens et les cohérences après les modifications.

Commencer par les documents d’orientation et les pages qui organisent le corpus permet d’établir des repères communs. Cela ne dispense pas de vérifier ensuite les pages spécialisées et les cas.

## 9. Registre des décisions

Conserver un registre séparé du texte des pages auditées. Pour chaque décision, noter :

- chemin du fichier ;
- branche ou commit examiné ;
- constat précis ;
- catégorie ou relation concernée ;
- décision proposée ;
- justification ;
- autres fichiers susceptibles d’être affectés ;
- vérifications restant à effectuer ;
- statut : proposé, accepté, appliqué ou à réexaminer.

Ce registre permet de distinguer un constat vérifié d’une hypothèse de travail et une proposition de révision d’une modification effectivement réalisée.

## 10. Limites de l’audit

L’audit est un instrument de cohérence éditoriale et conceptuelle. Il ne garantit ni la vérité d’une description ni la validité de toutes les conclusions du corpus.

Une architecture claire peut organiser des propositions inadéquates. Une terminologie stable peut maintenir une distinction mal fondée. Un lien correct peut relier des pages dont les engagements restent incompatibles.

Les résultats de l’audit doivent donc rester discutables et révisables. La matrice sert à rendre les décisions explicites ; elle ne décide pas à la place de l’enquête.

## Synthèse

L’audit du corpus Protokin examine conjointement la fonction des pages, les catégories qu’elles mobilisent, les relations qu’elles entretiennent et les conséquences éditoriales de ces relations. Il vise à prévenir les doublons, les glissements de sens, les dépendances implicites et les incohérences de navigation sans transformer le corpus en système fermé.

**Règle directrice : ne pas réviser une page avant d’avoir identifié ce qu’elle apporte, ce qu’elle présuppose et ce que sa modification changerait dans le reste du corpus.**