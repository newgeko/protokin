# État et suivi du corpus Protokin

## 1. Fonction et portée

Ce document consigne l'état du corpus Protokin, les difficultés identifiées dans son organisation et les décisions prises pour les traiter.

Il remplit une fonction documentaire : conserver la trace des constats, des tensions, des modifications et des vérifications qui concernent le corpus. Il ne constitue ni une composante de l'architecture fonctionnelle de l'enquête ni une procédure que toute enquête devrait appliquer.

Il se distingue des autres documents éditoriaux :

- `patterns.md` définit les repères de rédaction et de révision des pages ;
- `pattern-audit.md` présente les modalités d'examen de la fonction des pages et de leurs relations ;
- `audit-corpus.md` consigne les résultats de cet examen et l'état des interventions ;
- `fr/architecture-projet.md` présente l'organisation documentaire du projet ;
- `fr/architecture-fonctionnelle-de-l-enquete.md` présente les ressources mobilisables dans l'examen des pratiques descriptives ;
- `fr/tdm.md` organise l'accès aux ressources du corpus.

Ces documents sont complémentaires. Aucun ne doit reprendre intégralement la fonction des autres.

Le terme « audit » conservé dans le nom du fichier relève de son intitulé documentaire. Il ne désigne pas une catégorie supplémentaire de l'architecture fonctionnelle. Il faut notamment distinguer ce document de la fonction **Auditer**, qui peut être mobilisée transversalement dans l'examen des pratiques descriptives.

L'objectif de ce suivi n'est pas d'uniformiser le corpus, de réduire systématiquement le nombre de pages ou de stabiliser définitivement son architecture. Il consiste à rendre visibles :

- les ressources effectivement disponibles ;
- les fonctions qu'elles remplissent ;
- les relations et les tensions entre elles ;
- les décisions éditoriales retenues ;
- les modifications réalisées ;
- les vérifications encore nécessaires.

## 2. État de référence et statut des informations

### 2.1. Version examinée

Le présent état a été établi à partir des fichiers consultés dans la branche par défaut du dépôt `newgeko/protokin`.

Dernier commit identifié lors de cet examen : `b92c146797b1e7ec80ee0e3fd963d8b7e02ca396` — mise à jour de `patterns.md`.

Les constats ci-dessous concernent les fichiers effectivement consultés. Ils ne valent pas certification exhaustive de l'ensemble du dépôt, de ses ressources générées ou de toutes ses références croisées.

Toute actualisation importante doit préciser la version du dépôt examinée.

### 2.2. Statuts des constats

Les informations consignées dans ce document doivent être qualifiées.

| Statut | Signification |
|---|---|
| **Constat vérifié** | Élément directement observable dans un fichier ou dans la structure du dépôt consulté. |
| **Interprétation** | Lecture proposée pour caractériser la fonction d'une ressource ou la nature d'une relation. |
| **Tension à examiner** | Difficulté d'articulation dont la nature ou les conséquences restent à préciser. |
| **Contradiction établie** | Incompatibilité entre des propositions portant sur le même objet, dans le même sens et sous les mêmes conditions. |
| **Décision proposée** | Intervention recommandée, qui n'est pas encore retenue. |
| **Décision validée** | Orientation explicitement retenue après examen. |
| **Modification appliquée** | Changement effectivement réalisé dans le dépôt. |
| **Modification vérifiée** | Changement dont les conséquences ont été contrôlées. |
| **Point à contrôler** | Élément signalé dont l'état actuel n'a pas encore été vérifié. |

Ces statuts ne sont pas interchangeables.

Une difficulté identifiée ne constitue pas automatiquement une contradiction. Une décision validée ne signifie pas qu'elle a été appliquée. Une modification appliquée ne peut être considérée comme vérifiée sans contrôle de ses conséquences.

### 2.3. Règles de consignation

Chaque constat important doit préciser, dans la mesure du possible :

1. les fichiers concernés ;
2. les passages ou éléments observés ;
3. la nature de la difficulté ;
4. les ressources dépendantes ;
5. la décision éventuellement retenue ;
6. les modifications effectuées ;
7. les vérifications restantes.

Les constats anciens doivent être actualisés lorsqu'ils ne correspondent plus à l'état du dépôt. Ils ne doivent pas être conservés comme des problèmes actuels au seul motif qu'ils figurent dans une version antérieure de ce document.

Lorsqu'un contrôle n'a pas été effectué, le signaler plutôt que de présenter une hypothèse comme un résultat établi.

## 3. État actuel de l'organisation fonctionnelle

Cette section donne les repères nécessaires à la lecture des constats documentaires. Elle ne remplace pas la présentation développée dans `fr/architecture-fonctionnelle-de-l-enquete.md`.

### 3.1. Les opérations

Les huit opérations actuellement distinguées sont :

**Délimiter · Ancrer · Distinguer · Relier · Configurer · Justifier · Reconstituer · Redélimiter.**

Elles désignent des travaux d'examen mobilisables pour traiter une difficulté descriptive.

Elles ne constituent pas les étapes obligatoires d'une procédure. Elles peuvent être mobilisées séparément, conjointement ou reprises selon les difficultés rencontrées.

### 3.2. Les orientations

Les quatre orientations actuellement développées sont :

**Condition · Relation · Fonction · Justification.**

Elles précisent sous quel rapport une situation, une pratique, une opération ou un résultat est examiné.

Elles ne constituent ni des opérations supplémentaires, ni une classification exhaustive des questions possibles, ni une grille obligatoire.

### 3.3. Les aspects transversaux

Deux aspects transversaux sont actuellement distingués :

- **Temporalité** : examiner les rapports entre déroulement effectif, anticipation et reconstruction rétrospective.
- **Réflexivité** : examiner les conditions, les choix, les limites et les effets de l'activité descriptive et de l'enquête elle-même.

Ils peuvent intervenir dans plusieurs opérations et sous différentes orientations. Ils ne constituent ni des étapes ni des opérations supplémentaires.

### 3.4. Explication, Audit et Épreuve

Ces trois termes ne doivent pas être réunis dans une même famille au seul motif qu'ils interviennent dans l'examen.

Leur statut est différent.

**Explication**

L'explication peut désigner une activité descriptive de premier ordre : une pratique produit une réponse à une question portant sur un phénomène, une conduite ou une transformation.

Elle peut également devenir un objet d'examen de second ordre. L'enquête interroge alors les éléments invoqués, les relations établies, les raisons avancées et les limites de l'explication.

Elle ne constitue pas automatiquement une opération supplémentaire. Son statut dépend de la question examinée et de l'usage qui en est fait.

**Audit**

Auditer désigne une fonction d'examen critique susceptible d'intervenir transversalement. Elle peut porter sur une description, un dispositif, les engagements associés à une affirmation ou les ressources mobilisées dans l'enquête.

L'audit ne doit pas être assimilé à une opération particulière ni à un moment terminal de l'examen.

Il doit être distingué de la Réflexivité : celle-ci porte sur les conditions et les ressources de l'enquête elle-même ; Auditer désigne un travail critique susceptible de porter sur une description, un dispositif ou l'enquête.

**Épreuve**

L'épreuve désigne une exigence générale de confrontation des descriptions, des distinctions et des conclusions à des éléments susceptibles de les soutenir, de les limiter ou de les contester.

Elle ne constitue ni une opération supplémentaire ni un instrument particulier.

Elle ne garantit pas qu'un résultat définitif puisse être obtenu.

### 3.5. Les instruments d'épreuve

Trois instruments sont actuellement distingués :

- **Substitution** : examiner les conséquences du remplacement d'un terme, d'une catégorie ou d'un élément descriptif.
- **Cas** : confronter une proposition à une situation déterminée.
- **Comparaison** : examiner les différences et les relations entre plusieurs descriptions ou situations.

La **Reprise** désigne une modalité générale de réexamen. Elle peut mobiliser un instrument, plusieurs instruments ou aucun instrument supplémentaire. Elle ne constitue pas un quatrième instrument.

### 3.6. Les catégories

Les catégories regroupent certaines opérations selon leurs proximités fonctionnelles et facilitent leur repérage.

Elles ne constituent pas un ensemble supplémentaire de ressources mobilisables dans l'enquête. Elles ne doivent donc pas être présentées au même niveau que les opérations, les orientations, les aspects transversaux et les instruments.

### 3.7. Caractère révisable de cette organisation

L'organisation présentée ici correspond à l'état actuel des documents de référence. Elle ne constitue pas une classification exhaustive ou définitive.

Une ressource nouvelle, une distinction supplémentaire ou une modification de statut ne doit être retenue que si elle répond à une difficulté identifiable et apporte un gain fonctionnel.

## 4. Constats vérifiés

Les constats suivants reposent sur les fichiers consultés lors de la présente révision.

### 4.1. Positionnement général

<badge color="success">Cohérence constatée</badge>

Le `README.md` présente Protokin comme une démarche d'enquête pragmatiste, inférentialiste et réflexive, méthodologiquement non ontologique, consacrée aux pratiques descriptives.

Il distingue le travail de second ordre de Protokin des pratiques descriptives qu'il examine et maintient la différence entre existence, identification et détermination descriptive.

Il conserve également le principe suivant :

**La cohérence d'une description ne suffit pas à établir son adéquation à ce qu'elle prétend décrire.**

**Appréciation :** le positionnement général est suffisamment explicite dans le document de présentation. Il n'appelle pas une nouvelle reformulation générale à ce stade.

**Point de vigilance :** ne pas transformer la non-conversion en principe de refus de toute relation. Les passages entre différentes fonctions restent possibles, mais doivent être explicités et justifiés.

### 4.2. Architecture fonctionnelle

<badge color="success">Distinction clarifiée dans les documents de référence</badge>

Le `README.md` et `fr/architecture-fonctionnelle-de-l-enquete.md` distinguent désormais :

- les opérations ;
- les orientations ;
- les aspects transversaux ;
- les instruments d'épreuve.

Les catégories ont un statut distinct : elles regroupent certaines opérations et ne constituent pas un ensemble supplémentaire.

L'architecture distingue également les questions relatives à l'explication et à l'audit, sans les réunir dans une famille autonome. L'épreuve est présentée comme une exigence générale de confrontation.

**Appréciation :** la présentation actuelle est plus précise que l'ancienne organisation en cinq composantes.

**Intervention restante :** vérifier que les documents de navigation, les pages spécialisées et les versions HTML ont été alignés sur cette organisation.

### 4.3. Temporalité et réflexivité

<badge color="success">Distinction clarifiée dans les documents de référence consultés</badge>

Le `README.md` présente Temporalité et Réflexivité comme deux aspects transversaux.

`fr/temporaliser.md` précise la distinction entre temporalité effective, prospective et rétrospective. Il rappelle qu'une reconstruction rétrospective peut rendre un parcours intelligible sans démontrer que son résultat était nécessaire dès son commencement.

Cette distinction est cohérente avec :

- `fr/conduire-une-enquete.md`, qui présente l'enquête comme une activité faite de mobilisations et de reprises ;
- `fr/plateau-d-enquete.md`, qui distingue les travaux effectivement réalisés et les relations établies ou reconstruites ultérieurement.

**Appréciation :** la distinction entre déroulement effectif et reconstruction rétrospective est désormais suffisamment explicite dans ces ressources.

**Point de vigilance :** vérifier que les autres documents de présentation ne réintroduisent pas une représentation linéaire ou téléologique de l'enquête.

### 4.4. Reprise et instruments d'épreuve

<badge color="success">Distinction clarifiée dans l'architecture de référence</badge>

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue trois instruments — Substitution, Cas et Comparaison — de la Reprise, définie comme une modalité générale de réexamen.

La Reprise peut mobiliser un instrument sans se confondre avec lui. Elle ne constitue pas un quatrième instrument.

**Appréciation :** cette distinction doit être conservée dans les autres ressources du corpus.

### 4.5. Patterns éditoriaux

<badge color="success">Document actualisé</badge>

La version actuelle de `patterns.md` définit les patterns comme des repères éditoriaux révisables, et non comme une classification théorique des ressources ou une architecture supplémentaire de l'enquête.

Elle distingue notamment :

- les principes éditoriaux ;
- les fonctions des pages ;
- les huit patterns ;
- les procédures de rédaction et de révision ;
- les décisions éditoriales ;
- le contrôle avant publication.

Elle précise également que les patterns ne doivent pas imposer la mobilisation systématique des ressources fonctionnelles de l'enquête.

**Appréciation :** cette orientation permet de maintenir la distinction entre organisation éditoriale et architecture fonctionnelle.

**Point de vigilance :** les autres documents éditoriaux doivent reprendre cette distinction sans réintroduire une grille uniforme de classement.

## 5. Divergences documentaires encore présentes

### 5.1. Table des matières

<badge color="warning">Correction nécessaire</badge>

Dans `fr/tdm.md`, la présentation de l'architecture fonctionnelle indique encore :

> Distinguer les catégories, les opérations, les orientations, les fonctions transversales et les instruments d'épreuve.

Cette formulation place les catégories au même niveau que les quatre ensembles de ressources.

Elle ne correspond plus à la présentation du `README.md` et de `fr/architecture-fonctionnelle-de-l-enquete.md`.

La TDM conserve également des intitulés et des formulations issus de l'organisation antérieure, notamment « Orientations et chemin de l'enquête ».

**Intervention nécessaire :**

- présenter les quatre ensembles fonctionnels sans placer les catégories à leur niveau ;
- expliquer séparément la fonction des catégories comme regroupements d'opérations ;
- vérifier les intitulés et les renvois qui conservent un vocabulaire de parcours linéaire ;
- contrôler les liens concernés après modification.

### 5.2. Plateau d'enquête

<badge color="warning">Correction nécessaire</badge>

`fr/plateau-d-enquete.md` présente correctement le fil rouge comme un moyen de rendre visibles des relations entre des opérations, leurs occurrences et les configurations concernées.

Il distingue également le déroulement effectif de l'examen et sa reconstruction rétrospective.

Cependant, sa section consacrée aux fonctions transversales énumère encore :

- Temporaliser ;
- Expliquer ;
- Auditer ;
- Réfléchir ;
- Éprouver.

Cette liste ne correspond plus à l'organisation présentée dans le README et l'architecture fonctionnelle.

**Intervention nécessaire :**

- distinguer les aspects transversaux Temporalité et Réflexivité ;
- ne pas présenter Explication, Audit et Épreuve comme trois fonctions transversales de même statut ;
- préciser, si leur présence sur le plateau est utile, sous quelle forme et pour quelle raison ils sont indiqués ;
- vérifier que la représentation graphique ne transforme pas ces ressources en catégories supplémentaires.

Le plateau doit représenter les travaux et les relations effectivement examinés. Il ne doit pas devenir une visualisation exhaustive de toutes les ressources théoriques du projet.

### 5.3. Version HTML de l'architecture fonctionnelle

<badge color="danger">Divergence importante</badge>

La version consultée de `html/architecture-fonctionnelle-de-l-enquete.html` conserve une organisation antérieure.

Elle présente notamment :

- cinq composantes, en plaçant les catégories au même niveau que les quatre ensembles fonctionnels ;
- cinq fonctions transversales, dont Expliquer, Auditer et Éprouver ;
- quatre instruments, en incluant la Reprise ;
- une présentation du cheminement de l'enquête qui n'est pas entièrement alignée sur les documents Markdown actuels.

Cette version HTML ne correspond donc pas à l'architecture de référence actuellement présentée dans `fr/architecture-fonctionnelle-de-l-enquete.md`.

**Intervention nécessaire :**

1. déterminer si cette page HTML est générée automatiquement ou maintenue séparément ;
2. identifier sa place dans le dispositif de publication ;
3. la régénérer ou la corriger à partir du Markdown actuel ;
4. vérifier les liens, le sommaire, les représentations graphiques et les contenus ;
5. contrôler les autres versions HTML susceptibles de présenter les mêmes divergences.

Il ne faut pas supprimer cette version sans avoir déterminé son statut dans le dispositif de publication.

### 5.4. Statut documentaire de l'audit

<badge color="warning">Clarification à poursuivre</badge>

`patterns.md` distingue trois fonctions documentaires :

- les repères éditoriaux ;
- les modalités d'examen des pages et de leurs relations ;
- la consignation des constats et des décisions.

Le fichier `pattern-audit.md` présente actuellement une méthode d'examen éditorial du corpus. `audit-corpus.md` enregistre les constats et les décisions correspondantes.

Cette fonction documentaire doit rester distincte de la fonction transversale **Auditer** dans l'architecture de l'enquête.

Le fait qu'un document examine le corpus ne signifie pas qu'il constitue une opération ou une catégorie de l'enquête. De même, le fait qu'un fichier porte le mot « audit » dans son nom ne suffit pas à lui attribuer un statut fonctionnel.

**Intervention proposée :**

- maintenir la distinction entre examen éditorial du corpus et fonction transversale Auditer ;
- éviter de présenter le présent document comme une procédure générale applicable à toute enquête ;
- examiner ultérieurement si le contenu de `pattern-audit.md` et son intitulé sont suffisamment compatibles avec cette distinction.

Cette question ne justifie pas, à elle seule, de renommer immédiatement les fichiers.

## 6. Questions conceptuelles encore ouvertes

Les points suivants ne constituent pas des erreurs établies. Ils désignent des questions dont la résolution demande un examen supplémentaire.

### 6.1. Statut de l'explication

L'explication peut être une activité descriptive de premier ordre ou un objet d'examen de second ordre.

Il reste à déterminer si certaines dimensions de l'explication nécessitent une présentation particulière dans l'architecture, ou si leur examen peut être entièrement décrit à partir des opérations existantes.

La création d'une opération supplémentaire ne doit pas être présupposée.

### 6.2. Statut de l'audit

Auditer désigne une fonction d'examen critique susceptible d'intervenir transversalement.

Il faut maintenir sa distinction avec :

- les opérations particulières qu'il peut mobiliser ;
- la Réflexivité, qui porte sur les conditions et les ressources de l'enquête elle-même ;
- les instruments qui peuvent contribuer à l'examen ;
- l'examen éditorial du corpus consigné dans les documents de suivi.

La question n'est pas de créer une catégorie autonome pour l'audit, mais de préciser ses conditions d'intervention et ses relations avec les autres ressources.

### 6.3. Statut de l'épreuve

L'épreuve désigne une exigence générale de confrontation.

Elle ne doit être confondue ni avec les instruments particuliers qui permettent de conduire certaines confrontations, ni avec une opération supplémentaire.

Il reste à préciser dans les différentes pages comment cette exigence se traduit concrètement dans les examens, sans la transformer en procédure uniforme.

### 6.4. Relations entre les ressources

L'architecture doit permettre de décrire les relations effectives entre opérations, orientations, aspects transversaux et instruments.

Il ne faut pas supposer une correspondance terme à terme entre ces ensembles.

Une opération peut être conduite sous plusieurs orientations, prendre en compte plusieurs aspects transversaux et mobiliser différents instruments. Ces possibilités ne sont pas des associations obligatoires.

Les études de cas doivent contribuer à déterminer si ces distinctions apportent un gain réel dans l'examen des situations.

### 6.5. Régimes descriptifs et registres

Le corpus comporte des ressources consacrées aux régimes descriptifs, aux registres et à leurs relations.

Leur proximité thématique ne suffit pas à établir un recouvrement fonctionnel.

L'examen doit déterminer :

- ce que chaque notion permet de distinguer ;
- les problèmes auxquels elle répond ;
- les relations qu'elle entretient avec les autres ;
- les situations dans lesquelles ses limites apparaissent.

Les pages doivent être conservées tant que leur fonction propre reste identifiable. Une fusion ne serait justifiée qu'après établissement d'un recouvrement fonctionnel réel.

### 6.6. Études de cas et fécondité de l'architecture

La présence d'études de cas ne suffit pas à démontrer la fécondité de l'architecture.

Les cas doivent être examinés à partir de leurs difficultés propres, sans leur imposer une grille uniforme.

Trois cas offrent des possibilités complémentaires :

- **Pont Saint-Bénezet** : examiner les relations entre contraintes matérielles, décisions, justifications et reconstruction historique.
- **Botaniste et bûcheron** : examiner les différences de fonction entre pratiques descriptives et les conditions de leur coordination.
- **Conscience artificielle** : examiner les rapports entre indices, capacités, performances, hypothèses et conclusions.

Leur examen doit permettre d'identifier les ressources effectivement mobilisées, les reprises réalisées, les résultats obtenus et les difficultés que l'architecture ne permet pas encore de traiter.

L'enjeu est de déterminer si les ressources de Protokin produisent un gain analytique dans des situations déterminées, et non de retrouver systématiquement dans chaque cas les distinctions déjà présentes dans l'architecture.

## 7. Registre des interventions

Les interventions suivantes découlent des constats précédents.

| Priorité | Ressource | Intervention | Statut |
|---|---|---|---|
| 1 | `fr/tdm.md` | Distinguer les quatre ensembles des catégories de regroupement. | À effectuer |
| 1 | `fr/plateau-d-enquete.md` | Reprendre l'ancienne liste des cinq fonctions transversales et l'aligner sur l'architecture actuelle. | À effectuer |
| 1 | `html/architecture-fonctionnelle-de-l-enquete.html` | Déterminer le mode de publication puis corriger ou régénérer la version HTML. | À examiner |
| 2 | `pattern-audit.md` | Examiner la compatibilité entre sa fonction documentaire et le statut transversal d'Auditer. | À examiner |
| 2 | `fr/tdm.md` | Vérifier les intitulés et les formulations qui conservent un vocabulaire de cheminement linéaire. | À effectuer |
| 2 | Versions HTML | Rechercher d'autres divergences avec les sources Markdown actuelles. | À effectuer |
| 3 | Pages consacrées à l'explication | Examiner le statut de l'explication selon ses usages. | À examiner |
| 3 | Pages consacrées à l'audit | Vérifier la distinction entre fonction transversale, réflexivité et examen éditorial. | À examiner |
| 3 | Pages consacrées à l'épreuve | Vérifier la distinction entre exigence générale et instruments particuliers. | À examiner |
| 4 | Études de cas | Examiner les ressources effectivement mobilisées et les résultats obtenus. | À poursuivre |
| 4 | Régimes et registres | Examiner les frontières conceptuelles à partir des usages effectifs. | À poursuivre |

Le statut « à effectuer » indique qu'une intervention est retenue mais non réalisée. Il ne doit pas être remplacé par « appliqué » avant modification effective du dépôt.

Une intervention ne peut être déclarée vérifiée qu'après contrôle des ressources dépendantes.

## 8. Conditions de clôture d'une intervention

Une intervention peut être considérée comme traitée lorsque :

1. les fichiers concernés ont été consultés dans leur version actuelle ;
2. le problème a été formulé précisément ;
3. la décision a été explicitée ;
4. la modification a été appliquée lorsqu'elle était nécessaire ;
5. les liens et les références concernés ont été contrôlés ;
6. les ressources dépendantes ont été examinées ;
7. les versions publiées ont été vérifiées lorsqu'elles existent ;
8. les limites du contrôle restant sont signalées.

La clôture d'une intervention ne signifie pas que la notion ou la distinction concernée est définitivement stabilisée.

Elle signifie que le problème identifié a reçu un traitement explicite au regard des éléments disponibles.

## 9. Limites du présent document

Ce document ne constitue pas une validation philosophique générale de Protokin.

Il ne démontre ni la vérité de ses propositions, ni l'universalité de ses distinctions, ni la fécondité de toutes ses ressources.

Il consigne un état documentaire et les résultats d'examens déterminés. Sa portée dépend des fichiers consultés, de la version du dépôt et de l'étendue des vérifications réalisées.

Il ne doit pas conduire à considérer que toute difficulté nécessite une nouvelle catégorie, une nouvelle opération ou une nouvelle page.

Une distinction peut être maintenue, précisée, modifiée ou abandonnée. Une absence de développement peut être préférable à une formalisation inutile.

De même, la cohérence documentaire ne garantit pas la fécondité méthodologique. Un corpus peut être bien organisé sans que ses ressources permettent encore de traiter de manière satisfaisante les situations examinées.

Cette différence doit rester visible dans les constats et les conclusions.

## 10. Principe de révision

Le corpus Protokin est un ensemble de ressources révisables.

Son organisation ne doit pas être protégée contre l'examen auquel elle soumet les pratiques descriptives.

Les catégories, les opérations, les orientations, les aspects transversaux, les instruments et les notions doivent pouvoir être réexaminés à partir de leurs usages effectifs.

Les documents qui organisent le corpus sont eux-mêmes concernés. Le présent document ne constitue pas une position extérieure ou définitive à partir de laquelle le projet serait évalué.

Il doit être actualisé lorsque :

- une distinction structurante est modifiée ;
- une page de référence est réécrite ;
- une divergence documentaire est corrigée ;
- une intervention importante est appliquée ;
- une étude de cas conduit à réviser les ressources existantes ;
- un constat antérieur n'est plus valable.

**L'objectif de ce suivi n'est pas d'achever l'organisation du corpus, mais de rendre visibles les raisons de ses choix, les difficultés qu'il rencontre et les modifications qui permettent de maintenir ses ressources ouvertes à l'examen.**
