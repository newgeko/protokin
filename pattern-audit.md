# Audit du corpus Protokin

## 1. Fonction et portée

Ce document définit une méthode pour examiner la fonction des pages de Protokin, leurs relations avec les autres ressources et les conséquences éditoriales de ces relations.

Il complète [les patterns éditoriaux](patterns.md) sans en reprendre la fonction :

- `patterns.md` définit les repères de rédaction, les patterns et les principes de révision des pages ;
- `pattern-audit.md` permet d’examiner le corpus, de diagnostiquer les difficultés et de justifier les interventions proposées.

L’audit porte sur le contenu effectivement présent dans le dépôt. Il vise à déterminer si chaque page apporte une contribution identifiable, si ses relations avec les autres ressources sont suffisamment explicites et si les modifications envisagées respectent les distinctions du projet.

Il ne cherche ni à uniformiser les pages ni à imposer une classification exhaustive. Il doit rendre les constats, les interprétations, les incertitudes et les décisions explicites, vérifiables et révisables.

Son principe directeur est le suivant :

**Ne pas réviser une page avant d’avoir identifié ce qu’elle apporte, ce qu’elle présuppose et ce que sa modification changerait dans le reste du corpus.**

## 2. Conditions de fiabilité de l’audit

### 2.1. Partir de l’état réel du dépôt

Toute conclusion doit s’appuyer sur les fichiers effectivement présents dans la branche examinée.

Pour chaque ressource concernée, vérifier :

- son chemin exact ;
- son contenu actuel ;
- sa fonction effective ;
- ses liens entrants et sortants pertinents ;
- les pages dont elle dépend ou qui dépendent d’elle ;
- la branche ou le commit sur lequel porte l’examen.

Ne pas inférer l’existence d’un fichier à partir d’un lien, d’un ancien extrait ou d’un intitulé mentionné ailleurs.

Si une ressource nécessaire est inaccessible, signaler cette limite. Le constat doit rester proportionné aux éléments effectivement consultés. Le contenu d'un fichier inaccessible ne doit pas être reconstitué à partir de souvenirs ou de suppositions.

### 2.2. Distinguer les statuts des résultats

L’audit doit permettre de reconnaître le statut de ses résultats.

- **Constat vérifié** : élément directement établi par le contenu ou la structure du dépôt.
- **Interprétation** : lecture proposée pour expliquer la fonction ou la relation observée.
- **Tension à examiner** : difficulté réelle ou apparente dont la nature reste à préciser.
- **Contradiction établie** : propositions incompatibles dans le même sens et sous les mêmes conditions.
- **Décision proposée** : intervention recommandée au regard des constats.
- **Décision validée** : intervention retenue après examen.
- **Modification appliquée** : changement effectivement réalisé.
- **Modification vérifiée** : contrôle des effets du changement après son application.

Ces statuts ne sont pas interchangeables. Une hypothèse de recouvrement ne suffit pas à justifier une fusion ; une proposition de suppression ne signifie pas que le fichier a été supprimé ; une modification appliquée n'est pas nécessairement une modification vérifiée.

## 3. Examiner la fonction d’une page

### 3.1. Identifier sa contribution

L’examen d’une page commence par la formulation de quatre éléments :

- **Problème traité** : difficulté qui justifie l’existence de la page.
- **Fonction propre** : contribution spécifique qu’elle apporte au corpus.
- **Résultat permis** : ce qu’elle aide à distinguer, examiner ou établir.
- **Limites** : ce qu’elle ne permet pas d’établir à elle seule.

La fonction doit être formulée assez précisément pour permettre une comparaison avec les ressources voisines.

Le titre, la longueur, l’emplacement dans le dépôt ou le vocabulaire employé ne suffisent pas à établir cette fonction.

### 3.2. Identifier le pattern principal

Le pattern principal permet de caractériser la fonction éditoriale dominante de la page. Il doit être choisi à partir de son contenu effectif, conformément aux définitions de `patterns.md`.

Une page peut remplir plusieurs fonctions. Il n'est pas nécessaire de lui attribuer plusieurs patterns si une fonction principale permet de comprendre son rôle et si les autres dimensions ne modifient pas le diagnostic.

L'attribution d'un pattern reste un repère de travail. Elle ne détermine ni la valeur du contenu ni la décision éditoriale à prendre.

### 3.3. Examiner les définitions et les engagements

L'audit porte sur les termes et les propositions qui affectent la fonction de la page.

Il convient notamment de vérifier :

- si les termes centraux sont définis ou suffisamment explicités ;
- si leurs usages correspondent à ceux des pages de référence ;
- si plusieurs sens d'un même terme sont distingués lorsque cela importe pour l'argument ;
- si des notions sont présupposées sans que cette dépendance soit claire ;
- si les conclusions dépassent les éléments ou les raisons mobilisés ;
- si la page introduit un engagement théorique qui n'est pas nécessaire à son propos.

L'audit ne doit pas exiger une définition de chaque terme. Il doit examiner ceux dont le statut affecte la compréhension, les inférences ou les conclusions de la page.

### 3.4. Examiner les exemples et les épreuves

Lorsqu'une page mobilise un exemple, un cas, une comparaison ou une procédure, déterminer son rôle.

- L'exemple clarifie-t-il une distinction ou sert-il seulement d'illustration ?
- Une comparaison permet-elle d'identifier une différence pertinente ?
- Un contre-exemple met-il en difficulté la définition proposée ?
- Les matériaux disponibles soutiennent-ils l'interprétation ?
- Les limites du cas ou de la procédure sont-elles explicites ?

L'absence d'exemple n'est pas automatiquement un défaut. Elle doit être évaluée au regard de la fonction propre de la page.

## 4. Examiner les relations entre les pages

### 4.1. Identifier la nature des relations

Deux pages peuvent traiter d'un même sujet sans être redondantes. Elles peuvent remplir des fonctions différentes, répondre à des problèmes distincts ou examiner des aspects complémentaires.

Inversement, des titres différents ne garantissent pas que deux pages apportent des contributions distinctes.

Pour chaque relation importante, identifier sa nature.

| Relation | Critère d'identification | Conséquence possible |
|---|---|---|
| Complémentarité | Les pages traitent d'aspects distincts d'un problème commun. | Maintenir les pages et préciser leur articulation. |
| Dépendance | Une page présuppose une définition, un résultat ou un cadrage fourni ailleurs. | Expliciter la dépendance ou compléter le renvoi. |
| Recouvrement fonctionnel | Les pages apportent des contributions largement semblables. | Examiner une redistribution, une restructuration ou une fusion. |
| Différence de fonction | Les pages partagent un thème, mais répondent à des problèmes distincts. | Préserver leur distinction et clarifier leur fonction. |
| Tension conceptuelle | Les propositions semblent difficiles à rendre compatibles. | Examiner les termes, les conditions et la portée des propositions. |
| Contradiction | Les propositions ne peuvent être maintenues simultanément dans le même sens et sous les mêmes conditions. | Corriger, circonscrire ou documenter la contradiction. |
| Conversion non justifiée | Une relation est transformée en identité, en succession nécessaire ou en détermination sans argument suffisant. | Réexaminer l'inférence et ses conséquences. |
| Renvoi éditorial | Un lien facilite la navigation sans établir une dépendance conceptuelle. | Maintenir ou corriger le lien selon son utilité. |
| Relation indéterminée | Les éléments disponibles ne permettent pas de caractériser la relation. | Conserver la question ouverte et poursuivre l'examen. |

Ces catégories sont des instruments de diagnostic. Elles ne constituent pas une classification exhaustive et peuvent se combiner.

### 4.2. Examiner les recouvrements

Lorsqu'un recouvrement est constaté :

1. comparer les problèmes traités ;
2. identifier la contribution propre de chaque page ;
3. repérer les définitions et les développements répétés ;
4. déterminer si les répétitions facilitent la compréhension locale ;
5. identifier les différences qui justifient le maintien de pages distinctes ;
6. formuler une intervention proportionnée.

Il faut distinguer le recouvrement thématique du recouvrement fonctionnel.

Une répétition peut être utile lorsqu'elle facilite la compréhension, rappelle une dépendance ou permet d'examiner une notion dans un contexte différent. Elle devient problématique lorsqu'elle reproduit un développement sans apport supplémentaire ou entretient plusieurs formulations concurrentes.

Ne pas fusionner des pages uniquement parce qu'elles mobilisent les mêmes termes. Ne pas maintenir non plus deux pages autonomes si leur fonction et leur contribution ne peuvent pas être distinguées.

### 4.3. Examiner les tensions et les contradictions

Lorsqu'une tension apparaît :

1. identifier les propositions précises concernées ;
2. vérifier le sens des termes dans chaque page ;
3. préciser les conditions dans lesquelles les propositions sont avancées ;
4. distinguer une différence de définition, une différence de fonction et une contradiction ;
5. déterminer si une correction locale suffit ou si plusieurs pages sont concernées ;
6. conserver explicitement la difficulté si les éléments disponibles ne permettent pas de la résoudre.

Une contradiction ne doit pas être masquée par une harmonisation de vocabulaire. Inversement, une différence de fonction ne doit pas être traitée comme une contradiction sans examen.

## 5. Contrôles propres à l'organisation de Protokin

Ces contrôles portent sur les distinctions et les articulations structurantes du projet. Ils complètent l'examen des pages sans reprendre le développement des ressources de référence.

### 5.1. Distinguer les ensembles de ressources et les regroupements documentaires

L'architecture fonctionnelle de l'enquête distingue quatre ensembles de ressources :

- **Opérations** : travaux de second ordre par lesquels Protokin examine les pratiques descriptives, leurs conditions, leurs fonctions, leurs relations et leurs justifications. Elles ne se confondent pas avec les activités de ces pratiques — mesurer, classer, interpréter ou produire une assertion — mais portent sur leurs conditions, leurs fonctions, leurs relations et leurs justifications.
- **Orientations** : rapports sous lesquels une situation, une pratique, une opération ou un résultat est examiné.
- **Fonctions transversales** : dimensions de l'examen susceptibles d'intervenir dans plusieurs opérations.
- **Instruments d'épreuve** : moyens concrets permettant de confronter des descriptions, des distinctions ou des conclusions à un examen déterminé.

Les **catégories** ont un statut différent. Elles regroupent certaines opérations afin d'en faciliter le repérage et la lecture. Ces regroupements signalent des proximités fonctionnelles ; ils ne constituent ni un ensemble supplémentaire de ressources à mobiliser dans l'enquête, ni une composante de même niveau que les quatre ensembles précédents. Ils ne déterminent pas non plus l'appartenance exclusive des opérations ou leur ordre de mobilisation.

L'audit doit vérifier que cette différence de statut est respectée.

En particulier :

- les catégories servent à organiser documentairement le répertoire des opérations ; elles ne désignent pas des travaux d'examen supplémentaires ;
- les regroupements ne doivent pas être interprétés comme une classification exhaustive ou comme une hiérarchie des opérations ;
- une orientation ne désigne pas le travail effectué pour répondre à une question ;
- une fonction transversale ne constitue pas nécessairement une opération ;
- un instrument ne garantit pas, par sa seule application, la validité d'un résultat.

Pour la définition des quatre ensembles de ressources et le statut des regroupements d'opérations, voir [Architecture fonctionnelle de l'enquête](fr/architecture-fonctionnelle-de-l-enquete.md).

### 5.2. Examiner les opérations de l'enquête

Les opérations actuellement identifiées sont :

**Délimiter → Ancrer → Distinguer → Relier → Configurer → Justifier → Reconstituer → Redélimiter.**

Vérifier que :

- chaque opération possède une fonction identifiable ;
- ses conditions de mobilisation sont suffisamment claires ;
- ses résultats sont distingués de ses limites ;
- ses relations avec les autres opérations ne sont pas transformées en succession obligatoire ;
- les reprises et les changements de périmètre restent possibles ;
- la présentation de la chaîne n'efface pas les différences entre les opérations.

La chaîne constitue un ordre de présentation et un repère d'orientation. Elle ne prescrit ni l'exécution de toutes les opérations ni un parcours temporel nécessaire.

L'audit doit partir du contenu réel des pages. Il ne doit pas présupposer qu'une page existe pour chaque opération ni inventer un chemin manquant.

### 5.3. Examiner les orientations de l'examen

Une orientation indique sous quel rapport une situation, une pratique, une opération ou un résultat est examiné. Elle permet de préciser les questions posées sans déterminer à elle seule le travail descriptif à effectuer.

Protokin mobilise actuellement quatre orientations de référence :

- **Condition** ;
- **Relation** ;
- **Fonction** ;
- **Justification**.

Vérifier que :

- elles sont présentées comme des ressources de référence et non comme une classification exhaustive ;
- elles ne sont pas transformées en composantes universelles des objets, en niveaux hiérarchiques ou en phases obligatoires ;
- leur mobilisation dépend du problème examiné ;
- elles restent distinctes des opérations ;
- aucune correspondance fixe n'est établie entre une orientation et une opération ;
- les termes employés dans plusieurs orientations sont examinés selon leur rôle dans chaque contexte.

Une même opération peut contribuer à plusieurs orientations ; une orientation peut nécessiter plusieurs opérations. Une enquête n'a pas à mobiliser systématiquement les quatre orientations.

L'audit doit rester attentif à l'apparition de rapports qui ne seraient pas suffisamment pris en compte par les orientations existantes. Une orientation supplémentaire ne doit toutefois pas être introduite sur la seule base d'un thème ou d'un aspect nouveau. Il faut établir qu'elle permet d'examiner un rapport distinct et qu'elle apporte un gain identifiable.

Pour la définition des orientations et les conditions de leur révision, voir [Orientation de l'examen](fr/orientation-de-l-examen.md).

### 5.4. Examiner les fonctions transversales

Les fonctions transversales actuellement distinguées dans l'architecture fonctionnelle sont :

- **Temporaliser** ;
- **Expliquer** ;
- **Auditer** ;
- **Réfléchir** ;
- **Éprouver**.

Vérifier que leur rôle est intelligible et que leur articulation avec les opérations est explicitée lorsqu'elle importe.

Elles ne forment pas une seconde chaîne et ne doivent pas être ajoutées automatiquement à la liste des opérations. Si leur statut varie entre les pages, identifier la divergence et déterminer si elle est justifiée, provisoire ou contradictoire.

Il convient notamment de ne pas confondre :

- **Auditer**, comme fonction transversale susceptible d'examiner les distinctions, les dépendances, les inférences et les engagements d'une enquête ;
- **l'audit du corpus**, qui examine les fonctions et les relations entre les pages du dépôt.

Ces deux activités peuvent se soutenir, mais elles ne portent pas sur le même objet.

### 5.5. Examiner les instruments d'épreuve

Les trois instruments actuellement identifiés sont :

- **Substitution** ;
- **Cas** ;
- **Comparaison**.

Vérifier que leur emploi est suffisamment précisé, que leurs limites sont explicites et qu'ils ne sont pas confondus avec des opérations ou des orientations.

Un instrument peut être mobilisé dans plusieurs opérations et sous différentes orientations. Son application ne produit pas mécaniquement un verdict et ne garantit pas la validité d'une conclusion.

La **Reprise** ne constitue pas un quatrième instrument. Elle désigne une modalité générale de réexamen : une opération, une description, une distinction ou une conclusion peut être reprise à la lumière d'une difficulté, d'une objection ou d'un nouvel élément. Cette reprise peut notamment mobiliser une substitution, un cas ou une comparaison, sans se confondre avec aucun de ces instruments.

L'audit doit donc vérifier que les pages du corpus maintiennent cette différence entre les moyens d'épreuve et la modalité générale de réexamen.

Pour la définition des instruments et la distinction avec la Reprise, voir [Architecture fonctionnelle de l'enquête](fr/architecture-fonctionnelle-de-l-enquete.md).

### 5.6. Rechercher les conversions non justifiées

L'audit doit rechercher les passages dans lesquels une distinction ou une dépendance risque d'être transformée en identité, en succession nécessaire ou en réduction.

Les points de vigilance comprennent notamment :

- cause ≠ raison ;
- genèse ≠ justification ;
- condition ≠ critère ;
- trace ≠ signification ;
- description ≠ objet décrit ;
- capacité ≠ performance ≠ validité ;
- fonction ≠ justification ;
- incarnation ≠ réduction biologique.

Ces distinctions n'interdisent pas d'établir des relations entre les termes. Elles invitent à examiner ce que la relation permet effectivement d'établir et quelles conclusions elle autorise.

Pour chaque difficulté constatée, préciser la proposition concernée, le type de conversion suspecté et l'argument nécessaire pour la soutenir ou l'écarter.

### 5.7. Examiner le statut des propositions

L'audit doit vérifier que les pages distinguent les propositions portant sur les pratiques descriptives des affirmations portant sur les objets ou les situations décrits.

Il convient notamment d'examiner si :

- les conditions d'une description sont automatiquement traitées comme les critères de sa validité ;
- la cohérence d'une description est utilisée comme preuve suffisante de son adéquation ;
- la révisabilité est assimilée à l'équivalence de toutes les descriptions ;
- une pratique descriptive est confondue avec l'objet auquel elle se rapporte ;
- une proposition portant sur le réel est avancée sans que son statut, ses raisons et sa portée soient explicités.

L'orientation non ontologique de Protokin ne signifie pas que toute proposition portant sur le réel serait exclue. Elle demande que ces propositions soient examinées et que les conclusions ne dépassent pas ce que les éléments et les raisons mobilisés permettent de soutenir.

### 5.8. Examiner les usages de la notion de régime descriptif

Lorsqu'une page mobilise la notion de régime descriptif, vérifier qu'elle ne la confond pas avec :

- une discipline ou un domaine de recherche ;
- une opération descriptive particulière ;
- l'objet auquel une description se rapporte ;
- une justification ou un critère pris isolément.

Un régime peut mobiliser plusieurs opérations ; une opération peut intervenir dans plusieurs régimes. Les régimes ne doivent pas être présupposés fermés, indépendants ou mutuellement exclusifs.

Leur identification et leurs relations doivent être établies à partir des pratiques examinées. Une différence entre régimes ne suffit pas à établir une incompatibilité ; une proximité ne suffit pas à établir leur identité.

Pour les premières distinctions et leur mise à l'épreuve, voir [Une première cartographie des régimes descriptifs](fr/une-premiere-cartographie-des-regimes-descriptifs.md).

## 6. Vérifier les liens et la navigation

L'audit doit contrôler les liens à partir des chemins réellement présents dans la branche examinée.

Pour chaque lien pertinent :

1. vérifier que la cible existe ;
2. vérifier le chemin exact ;
3. confirmer que le titre et le texte du lien correspondent à la cible ;
4. déterminer si le renvoi est utile à la fonction de la page ;
5. repérer les dépendances importantes qui ne sont pas signalées.

Conformément à `patterns.md`, les liens vers les pages du corpus français doivent employer le préfixe `fr/`, y compris depuis une page située dans le répertoire `fr/`.

Exemple :

[Introduction générale](fr/introduction-generale.md)

Pour les fichiers situés à la racine du dépôt ou dans d'autres répertoires, employer un chemin correspondant à leur emplacement réel.

L'audit doit distinguer :

- un lien cassé ;
- un chemin non conforme à la convention retenue ;
- un renvoi valide mais peu utile ;
- un renvoi conceptuellement nécessaire qui manque ;
- une relation conceptuelle qui ne nécessite pas de lien de navigation.

La table des matières et la barre latérale servent à orienter le lecteur. Elles n'ont pas à reproduire toutes les relations conceptuelles relevées par l'audit.

Les règles générales de rédaction des liens et de vérification des chemins sont précisées dans `patterns.md`.

## 7. Conduire un audit du corpus

L'audit suit un ordre de travail pratique. Cet ordre sert à organiser le diagnostic ; il ne constitue pas une nouvelle chaîne théorique de l'enquête ni une procédure obligatoire pour toutes les situations.

1. **Délimiter l'audit.** Préciser les pages, le problème éditorial et la branche concernés.
2. **Vérifier les ressources.** Récupérer les fichiers actuels, contrôler leur présence et signaler les éventuelles limites d'accès.
3. **Identifier les fonctions.** Formuler la contribution propre des pages examinées et leur pattern principal lorsque cela facilite le diagnostic.
4. **Examiner les relations.** Comparer les pages liées et caractériser les complémentarités, dépendances, recouvrements ou tensions.
5. **Contrôler les distinctions.** Examiner les définitions, les engagements, les non-conversions et les éventuelles confusions entre les ressources de l'enquête.
6. **Vérifier la navigation.** Contrôler les liens, les chemins, les titres et les renvois manquants.
7. **Formuler les décisions.** Proposer une intervention proportionnée et identifier les autres fichiers susceptibles d'être affectés.
8. **Contrôler les effets.** Après une modification, vérifier les pages concernées, les relations et les liens.

L'audit peut commencer par une page spécialisée, une contradiction supposée ou un problème de navigation. Il n'est pas nécessaire de parcourir le corpus dans un ordre fixe.

Les décisions possibles — conserver, corriger, relier, restructurer, fusionner, scinder, déplacer, archiver ou supprimer — sont définies dans `patterns.md`. Elles ne doivent pas être déduites automatiquement du pattern attribué à une page.

Avant une fusion, une scission, un déplacement ou une suppression, examiner les liens entrants, les renvois croisés et les conséquences sur la navigation. Toute suppression doit préserver le contenu utile ou préciser où celui-ci est repris.

## 8. Conserver la trace des décisions

Le suivi des décisions importantes doit être conservé séparément du contenu ordinaire des pages auditées.

Pour chaque décision dont les conséquences dépassent une correction locale, consigner :

- le chemin du fichier ;
- la branche ou le commit examiné ;
- le constat précis ;
- le pattern concerné, si pertinent ;
- les relations ou distinctions en jeu ;
- la décision proposée ;
- sa justification ;
- les autres fichiers susceptibles d'être affectés ;
- les vérifications restant à effectuer ;
- le statut de la décision.

Les statuts recommandés sont :

- **Proposé** : une intervention est envisagée ;
- **À valider** : la décision nécessite un examen ou un accord ;
- **Accepté** : la décision a été retenue ;
- **Appliqué** : la modification a été effectuée ;
- **Vérifié** : les effets attendus ont été contrôlés ;
- **À réexaminer** : de nouveaux éléments justifient une nouvelle analyse.

Le registre n'a pas besoin de reproduire toutes les observations de l'audit. Il doit surtout conserver les décisions dont les conséquences dépassent une correction locale.

## 9. Limites de l'audit

L'audit est un instrument de cohérence éditoriale et conceptuelle. Il ne garantit ni la vérité d'une description ni la validité de toutes les conclusions du corpus.

Une architecture claire peut organiser des propositions inadéquates. Une terminologie stable peut maintenir une distinction mal fondée. Un lien correct peut relier des pages dont les engagements restent incompatibles.

Inversement, une différence de vocabulaire ou une tension apparente ne suffit pas à établir une incohérence. Il faut examiner le problème traité, les fonctions des pages, les conditions des propositions et la portée des conclusions.

L'audit ne décide pas à la place de l'enquête. Il rend les difficultés plus visibles, les décisions plus explicites et les révisions plus faciles à contrôler.

## Synthèse

L'audit du corpus Protokin examine la fonction des pages, les distinctions qu'elles mobilisent, les relations qu'elles entretiennent et les conséquences éditoriales de ces relations.

Il s'appuie sur les patterns de `patterns.md` sans reproduire leurs consignes de rédaction. Il permet d'identifier les recouvrements fonctionnels, les dépendances implicites, les tensions conceptuelles, les conversions injustifiées et les défauts de navigation.

Sa règle directrice reste :

**Identifier la contribution propre de chaque page, examiner ses relations avec le corpus et justifier toute modification par le problème effectivement constaté.**
