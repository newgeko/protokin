# Audit du corpus Protokin

## 1. Fonction du document

Ce document définit une méthode pour examiner la fonction des pages de Protokin, leurs relations avec les autres ressources et les conséquences éditoriales de ces relations.

Il complète `patterns.md` sans en reprendre la fonction :

- `patterns.md` définit les repères pour rédiger, réviser et articuler les pages ;
- `pattern-audit.md` permet de diagnostiquer le corpus, d’identifier les difficultés et de justifier les décisions de révision.

L’audit porte sur le contenu effectivement présent dans le dépôt. Il ne vise ni à uniformiser les pages ni à imposer une classification exhaustive. Il doit rendre les constats, les incertitudes et les décisions explicites, vérifiables et révisables.

Son principe directeur est le suivant :

**Ne pas réviser une page avant d’avoir identifié ce qu’elle apporte, ce qu’elle présuppose et ce que sa modification changerait dans le reste du corpus.**

## 2. Principes de l’audit

### 2.1. Partir de l’état réel du dépôt

Toute conclusion d’audit doit s’appuyer sur les fichiers réellement présents dans la branche examinée.

Pour chaque ressource concernée, vérifier :

- son chemin exact ;
- son contenu actuel ;
- sa fonction effective ;
- ses liens entrants et sortants pertinents ;
- les pages dont elle dépend ou qui dépendent d’elle.

Ne pas inférer l’existence d’un fichier à partir d’un lien, d’un ancien extrait ou d’un intitulé mentionné ailleurs.

Si une ressource nécessaire est inaccessible, signaler cette limite. Le constat doit rester proportionné aux éléments effectivement consultés.

### 2.2. Distinguer trois questions

L’audit examine trois dimensions liées, mais distinctes.

**Fonction**

Quel problème la page traite-t-elle et quelle contribution apporte-t-elle ?

**Relations**

Comment cette contribution s’articule-t-elle avec celles des autres pages ? Quelles dépendances, complémentarités, répétitions ou tensions peut-on constater ?

**Décision**

Que convient-il de faire : conserver, corriger, relier, restructurer, fusionner, scinder, déplacer, archiver ou poursuivre l’examen ?

Le type d’une page ne détermine pas sa fonction. Sa fonction ne suffit pas à établir toutes ses relations. Enfin, l’identification d’une difficulté ne détermine pas automatiquement la correction appropriée.

### 2.3. Distinguer constat et interprétation

L’audit doit permettre de reconnaître le statut de ses résultats.

- **Constat vérifié** : élément directement établi par le contenu ou la structure du dépôt.
- **Interprétation** : lecture proposée pour expliquer la fonction ou la relation observée.
- **Tension à examiner** : difficulté réelle ou apparente dont la nature reste à préciser.
- **Décision proposée** : intervention recommandée au regard du constat.
- **Décision validée** : intervention retenue après examen.
- **Modification appliquée** : changement effectivement réalisé et vérifié.

Ces statuts ne sont pas interchangeables. Une hypothèse de recouvrement ne suffit pas à justifier une fusion ; une proposition de suppression ne signifie pas que le fichier a été supprimé.

### 2.4. Préserver les différences fonctionnelles

Deux pages peuvent traiter d’un même sujet sans être redondantes. Elles peuvent remplir des fonctions différentes, s’adresser à des problèmes distincts ou examiner des aspects complémentaires.

Inversement, des titres différents ne garantissent pas que deux pages apportent des contributions distinctes.

L’audit doit donc comparer les problèmes traités, les définitions, les conclusions et les usages effectifs des pages, plutôt que leurs seuls titres ou leur proximité lexicale.

### 2.5. Maintenir la révisabilité

L’audit n’est pas une procédure de confirmation de l’architecture existante.

Une page spécialisée, une comparaison ou une étude de cas peut révéler qu’une distinction est insuffisante, qu’une définition est mal ajustée ou qu’une relation supposée doit être réexaminée.

La cohérence éditoriale facilite l’examen des propositions ; elle ne garantit ni leur vérité ni leur adéquation à ce qu’elles prétendent décrire.

## 3. Catégories d’audit

Les catégories suivantes correspondent aux huit patterns définis dans `patterns.md`. Elles servent à identifier la fonction dominante d’une page, non à enfermer son contenu dans une classe exclusive.

| Pattern | Type de page | Question principale de l’audit |
|---|---|---|
| A | Orientation et cadrage | La page situe-t-elle clairement le projet, son problème ou une partie de son organisation ? |
| B | Opération d’enquête | Définit-elle un examen identifiable et précise-t-elle ses résultats et ses limites ? |
| C | Notion | La notion apporte-t-elle une distinction nécessaire et suffisamment définie ? |
| D | Langage, inférence et justification | Les fonctions langagières, les engagements et les justifications sont-ils distingués ? |
| E | Méthode ou instrument | La procédure permet-elle un examen identifiable sans garantir artificiellement son résultat ? |
| F | Relations entre notions ou régimes descriptifs | Les relations sont-elles explicitées sans confusion entre dépendance, compatibilité et identité ? |
| G | Étude de cas | Le cas met-il effectivement une proposition ou une distinction à l’épreuve ? |
| H | Référence ou navigation | La ressource facilite-t-elle l’accès au corpus sans reproduire inutilement ses développements ? |

Une page peut mobiliser plusieurs patterns. L’audit retient un pattern principal lorsque cela facilite la décision et mentionne les fonctions secondaires seulement lorsqu’elles modifient l’analyse.

Les catégories supplémentaires telles que « architecture du projet », « régime descriptif », « fonction transversale » ou « ressource de conduite » peuvent être conservées comme des **qualifications du contenu**, sans constituer automatiquement de nouveaux patterns éditoriaux.

Par exemple, une page consacrée à la quadripartition peut relever principalement du pattern A, tout en examinant des relations qui intéressent le pattern F. Une page d’audit méthodologique peut relever du pattern E, tandis que `pattern-audit.md` conserve sa fonction documentaire propre : définir une méthode d’examen du corpus.

## 4. Fiche d’audit d’une page

Chaque page examinée doit pouvoir être décrite à l’aide d’une fiche concise. Tous les champs ne nécessitent pas une rubrique dans le document publié.

### 4.1. Identification

- **Chemin exact** : emplacement constaté dans le dépôt.
- **Titre actuel** : titre effectivement utilisé.
- **Version examinée** : branche ou commit.
- **Présence** : fichier existant, absent, renommé ou inaccessible.
- **Pattern principal** : pattern correspondant à la fonction dominante, si elle est identifiable.

Ne pas attribuer une fonction définitive à partir du seul titre.

### 4.2. Fonction et problème

Formuler les éléments suivants :

- **Problème traité** : difficulté qui justifie la page.
- **Fonction propre** : contribution spécifique au corpus.
- **Résultat permis** : ce que la page aide à distinguer, examiner ou établir.
- **Limites** : ce qu’elle ne permet pas d’établir à elle seule.
- **Ressources voisines** : pages dont la comparaison est nécessaire à l’audit.

La fonction doit être formulée assez précisément pour permettre de comparer la page aux ressources voisines.

### 4.3. Définitions et engagements

Examiner les termes et les propositions nécessaires à la fonction de la page.

Questions à poser :

- Les termes centraux sont-ils définis ou leur usage est-il suffisamment explicite ?
- Les définitions correspondent-elles aux usages effectifs du corpus ?
- Plusieurs sens d’un même terme sont-ils distingués lorsqu’ils importent pour l’argument ?
- Des notions sont-elles présupposées sans que cette dépendance soit claire ?
- Les conclusions dépassent-elles les éléments ou les raisons mobilisés ?
- La page introduit-elle un engagement théorique qui n’est pas nécessaire à son propos ?

L’audit ne doit pas exiger une définition de chaque terme. Il doit examiner les termes dont le statut affecte la compréhension, les inférences ou les conclusions de la page.

### 4.4. Épreuves et exemples

Lorsqu’une page mobilise un exemple, un cas ou une procédure, déterminer son rôle.

- L’exemple clarifie-t-il une distinction ou sert-il seulement d’illustration ?
- Une comparaison permettrait-elle de mieux identifier la différence étudiée ?
- Un contre-exemple met-il en difficulté la définition proposée ?
- Les matériaux disponibles soutiennent-ils l’interprétation ?
- Les limites du cas ou de la procédure sont-elles explicites ?

L’absence d’exemple n’est pas automatiquement un défaut. Elle doit être évaluée au regard de la fonction propre de la page.

## 5. Examiner les relations entre les pages

### 5.1. Types de relations

Pour chaque relation importante, identifier sa nature.

| Relation | Critère d’identification | Conséquence possible |
|---|---|---|
| Complémentarité | Les pages traitent des aspects distincts d’un problème commun. | Maintenir les deux pages et préciser leur articulation. |
| Dépendance | Une page présuppose une définition, un résultat ou un cadrage fourni ailleurs. | Expliciter le lien ou compléter le renvoi. |
| Recouvrement fonctionnel | Les pages apportent des contributions largement semblables. | Examiner une correction, une redistribution ou une fusion. |
| Différence de fonction | Les pages partagent un thème mais répondent à des problèmes distincts. | Préserver leur distinction et clarifier leurs fonctions. |
| Tension conceptuelle | Les propositions semblent difficiles à rendre compatibles. | Examiner les termes, les conditions et la portée des propositions. |
| Contradiction | Les propositions ne peuvent être maintenues simultanément dans le même sens et sous les mêmes conditions. | Corriger, circonscrire ou documenter la contradiction. |
| Conversion non justifiée | Une relation est transformée en identité, en succession nécessaire ou en détermination sans argument suffisant. | Réexaminer l’inférence et ses conséquences. |
| Renvoi éditorial | Un lien facilite la navigation sans établir de dépendance conceptuelle. | Maintenir ou corriger le lien selon son utilité. |
| Relation indéterminée | Les éléments disponibles ne permettent pas de caractériser la relation. | Conserver la question ouverte et poursuivre l’examen. |

Ces catégories sont des instruments de diagnostic. Elles ne constituent pas une classification exhaustive et peuvent se combiner.

### 5.2. Examiner les recouvrements

Lorsqu’un recouvrement est constaté :

1. comparer les problèmes traités ;
2. identifier la contribution de chaque page ;
3. repérer les définitions ou développements répétés ;
4. déterminer si les répétitions servent la compréhension locale ;
5. identifier les différences qui justifient le maintien de pages distinctes ;
6. formuler une décision proportionnée.

Ne pas fusionner des pages uniquement parce qu’elles mobilisent les mêmes termes. Ne pas non plus maintenir deux pages autonomes si leur fonction et leur contribution ne peuvent pas être distinguées.

### 5.3. Examiner les tensions et contradictions

Lorsqu’une tension apparaît :

1. identifier les propositions précises concernées ;
2. vérifier le sens des termes dans chaque page ;
3. préciser les conditions dans lesquelles les propositions sont avancées ;
4. distinguer différence de définition, différence de fonction et contradiction ;
5. déterminer si une correction locale suffit ou si plusieurs pages doivent être révisées ;
6. conserver explicitement la difficulté si les éléments disponibles ne permettent pas de la résoudre.

Une contradiction ne doit pas être masquée par une harmonisation de vocabulaire. Inversement, une différence de fonction ne doit pas être traitée comme une contradiction sans examen.

## 6. Contrôles spécifiques à l’architecture de Protokin

Ces contrôles complètent les patterns généraux. Ils portent sur les articulations structurantes du projet et ne remplacent pas l’examen des arguments propres à chaque page.

### 6.1. Opérations de l’enquête

Examiner les pages consacrées à :

**Délimiter → Ancrer → Distinguer → Relier → Configurer → Justifier → Reconstituer → Redélimiter.**

Vérifier que :

- chaque opération possède une fonction identifiable ;
- les conditions de sa mobilisation sont suffisamment claires ;
- les résultats sont distingués des limites de l’opération ;
- les relations entre opérations ne sont pas transformées en succession obligatoire ;
- les reprises, retours et changements de périmètre restent possibles ;
- la présentation de la chaîne n’efface pas les différences entre les opérations.

L’audit doit partir du contenu réel des pages. Il ne doit pas présupposer qu’une page existe pour chaque opération ni inventer un chemin manquant.

### 6.2. Fonctions transversales

Examiner les usages de **Temporaliser, Auditer, Réfléchir et Éprouver** lorsqu’ils sont mobilisés dans le corpus.

Vérifier que leur rôle est intelligible et que leur articulation avec les opérations est explicitée lorsqu’elle importe.

Ne pas les ajouter automatiquement à la chaîne des opérations. Si leur statut varie entre les pages, identifier la divergence et déterminer si elle est justifiée, provisoire ou contradictoire.

### 6.3. Quadripartition

Examiner les usages des quatre orientations :

- **Condition** : conditions dans lesquelles une situation ou une pratique devient possible, contrainte ou transformée ;
- **Relation** : dépendances et mises en rapport à examiner ;
- **Fonction** : contribution ou rôle d’une configuration dans une pratique ;
- **Justification** : raisons, critères et engagements qui soutiennent ou contestent une description.

Vérifier que ces orientations ne sont pas présentées comme des phases obligatoires, des niveaux hiérarchiques ou des classes universelles d’objets.

Examiner également les usages de « relation » et de « fonction » dans leurs contextes respectifs : leur présence dans plusieurs orientations ou pages ne garantit pas qu’ils y remplissent le même rôle.

### 6.4. Non-conversions

Rechercher les passages dans lesquels une distinction ou une dépendance risque d’être transformée en identité, en succession nécessaire ou en réduction.

Les points de vigilance comprennent notamment :

- cause ≠ raison ;
- genèse ≠ justification ;
- condition ≠ critère ;
- trace ≠ signification ;
- description ≠ objet décrit ;
- capacité ≠ performance ≠ validité ;
- fonction ≠ justification ;
- incarnation ≠ réduction biologique.

Ces formules ne sont pas des interdictions de décrire des relations entre les termes. Elles invitent à vérifier ce que la relation établit et quelles conclusions elle autorise.

Pour chaque difficulté constatée, préciser la proposition concernée, le type de conversion suspecté et l’argument nécessaire pour la soutenir ou l’écarter.

### 6.5. Orientation non ontologique

Examiner les passages qui risquent de transformer une distinction descriptive en affirmation ontologique sans justification suffisante.

L’audit doit notamment vérifier que :

- les pratiques descriptives ne sont pas confondues avec les objets qu’elles décrivent ;
- les conditions d’une description ne sont pas automatiquement traitées comme les critères de sa validité ;
- la cohérence n’est pas utilisée comme preuve suffisante d’adéquation ;
- la révisabilité n’est pas assimilée à l’équivalence de toutes les descriptions ;
- les propositions sur le réel, lorsqu’elles sont formulées, sont distinguées des constats portant sur les pratiques descriptives.

Il ne s’agit pas d’exclure toute proposition portant sur le réel, mais d’examiner son statut, ses raisons et sa portée.

## 7. Liens et navigation

L’audit doit contrôler la navigation à partir des chemins réellement présents dans la branche examinée.

Pour chaque lien pertinent :

1. vérifier que la cible existe ;
2. vérifier le chemin exact depuis le fichier concerné ;
3. confirmer que le titre et le texte du lien correspondent à la cible ;
4. déterminer si le renvoi est utile à la fonction de la page ;
5. repérer les dépendances importantes qui ne sont pas signalées.

### Convention des liens vers le corpus français

Conformément à `patterns.md`, les liens internes vers les pages du corpus français doivent employer le préfixe `fr/`, y compris depuis une page déjà située dans le répertoire `fr/`.

Exemple :

[Introduction générale](fr/introduction-generale.md)

Cette convention doit être appliquée aux renvois du corpus français, sous réserve de vérifier le fonctionnement effectif des liens dans le dispositif de publication.

Elle ne doit pas être appliquée mécaniquement aux fichiers situés à la racine du dépôt ou aux autres ressources : leurs chemins doivent correspondre à leur emplacement réel.

L’audit doit distinguer :

- un lien cassé ;
- un chemin non conforme à la convention retenue ;
- un renvoi valide mais peu utile ;
- un renvoi conceptuellement nécessaire qui manque ;
- une relation conceptuelle qui ne nécessite pas de lien de navigation.

La table des matières et la barre latérale servent à orienter le lecteur. Elles n’ont pas à reproduire toutes les relations conceptuelles relevées par l’audit.

## 8. Décisions d’audit

Chaque page examinée reçoit une décision provisoire justifiée par les constats.

| Décision | Critère |
|---|---|
| **Conserver** | La fonction est distincte et le contenu reste cohérent. |
| **Corriger** | La page remplit une fonction utile, mais comporte des imprécisions ou incohérences localisées. |
| **Relier** | La contribution est pertinente, mais ses dépendances ou ses renvois sont insuffisants. |
| **Restructurer** | L’organisation du contenu masque sa fonction ou ses distinctions principales. |
| **Fusionner** | Plusieurs pages remplissent essentiellement la même fonction sans différence justifiant leur autonomie. |
| **Scinder** | Une page remplit plusieurs fonctions autonomes qui gagneraient à être séparées. |
| **Déplacer ou reclasser** | L’emplacement documentaire nuit à la lisibilité de la fonction. |
| **Archiver ou supprimer** | La page n’apporte plus de contribution distincte et son contenu utile est préservé ou repris ailleurs. |
| **À examiner** | Les éléments disponibles ne permettent pas encore de décider de manière fiable. |

La décision doit préciser le problème auquel elle répond et les conséquences attendues. Elle ne doit pas être déduite automatiquement du pattern attribué à la page.

Avant une fusion, une scission, un déplacement ou une suppression, examiner les liens entrants, les renvois croisés et les conséquences sur la navigation. Toute suppression doit préserver le contenu utile et tenir compte des ressources qui dépendent du fichier.

## 9. Conduite de l’audit

L’audit suit un ordre de travail pratique, qui ne constitue pas une nouvelle chaîne théorique de l’enquête.

1. **Inventorier** les fichiers présents dans la branche choisie.
2. **Identifier** la fonction dominante des pages à examiner.
3. **Attribuer provisoirement** un pattern principal lorsque cela facilite le diagnostic.
4. **Examiner** les définitions, les distinctions et les engagements pertinents.
5. **Comparer** les pages liées et caractériser leurs relations.
6. **Contrôler** les liens et la navigation.
7. **Formuler** les décisions possibles et leurs justifications.
8. **Examiner les effets croisés** avant toute modification importante.
9. **Vérifier à nouveau** les relations et les liens après les modifications.

L’ordre de traitement peut être adapté à la question étudiée. Commencer par les pages d’orientation peut faciliter la compréhension du corpus, mais ne dispense pas d’examiner les pages spécialisées et les cas concrets.

L’audit doit distinguer les constats établis, les hypothèses de travail et les questions encore ouvertes. Il ne doit pas transformer une difficulté non résolue en défaut certain.

## 10. Registre des décisions

Le suivi des décisions doit être conservé séparément du contenu ordinaire des pages auditées.

Pour chaque décision importante, consigner :

- le chemin du fichier ;
- la branche ou le commit examiné ;
- le constat précis ;
- le pattern concerné, si pertinent ;
- les relations ou distinctions en jeu ;
- la décision proposée ;
- sa justification ;
- les autres fichiers susceptibles d’être affectés ;
- les vérifications restant à effectuer ;
- le statut de la décision.

Les statuts recommandés sont :

- **Proposé** : une intervention est envisagée ;
- **À valider** : la décision nécessite un examen ou un accord ;
- **Accepté** : la décision a été retenue ;
- **Appliqué** : la modification a été effectuée ;
- **Vérifié** : les effets attendus ont été contrôlés ;
- **À réexaminer** : de nouveaux éléments justifient une nouvelle analyse.

Ces statuts permettent de ne pas confondre une recommandation avec une modification effective.

Le registre n’a pas besoin de reproduire toutes les observations de l’audit. Il doit surtout conserver les décisions dont les conséquences dépassent une correction locale.

## 11. Limites de l’audit

L’audit est un instrument de cohérence éditoriale et conceptuelle. Il ne garantit ni la vérité d’une description ni la validité de toutes les conclusions du corpus.

Une architecture claire peut organiser des propositions inadéquates. Une terminologie stable peut maintenir une distinction mal fondée. Un lien correct peut relier des pages dont les engagements restent incompatibles.

Inversement, une différence de vocabulaire ou une tension apparente ne suffit pas à établir une incohérence. Il faut examiner le problème traité, les fonctions des pages, les conditions des propositions et la portée des conclusions.

L’audit ne décide pas à la place de l’enquête. Il rend les difficultés plus visibles, les décisions plus explicites et les révisions plus faciles à contrôler.

## Synthèse

L’audit du corpus Protokin examine la fonction des pages, les distinctions qu’elles mobilisent, les relations qu’elles entretiennent et les conséquences éditoriales de ces relations.

Il s’articule avec les huit patterns de `patterns.md` sans reproduire leurs consignes de rédaction. Il permet d’identifier les recouvrements, les dépendances implicites, les tensions conceptuelles, les conversions injustifiées et les défauts de navigation.

Sa règle directrice reste :

**Identifier la contribution propre de chaque page, examiner ses relations avec le corpus et justifier toute modification par le problème effectivement constaté.**
