# Audit du corpus Protokin

## 1. Fonction et portée

Ce document consigne les résultats de l'examen critique du corpus Protokin.

Il permet de suivre l'état du dépôt, d'identifier les difficultés conceptuelles, fonctionnelles, éditoriales et documentaires, de conserver les décisions prises et de déterminer les interventions qui restent nécessaires.

Il s'inscrit dans une organisation documentaire à trois niveaux :

- `patterns.md` définit les principes éditoriaux et les patterns de rédaction des pages.
- `pattern-audit.md` définit la méthode d'examen éditorial et fonctionnel du corpus.
- `audit-corpus.md` consigne les résultats de cet examen, les décisions et les interventions.

Ces documents ont des fonctions distinctes. Le présent audit ne reproduit ni les règles générales de rédaction ni les modalités détaillées de l'examen.

Il ne constitue pas davantage une composante de l'architecture fonctionnelle de l'enquête.

L'audit porte sur le corpus lui-même, y compris sur ses documents de référence et ses propres instruments d'organisation.

Aucune ressource ne doit être soustraite à l'examen en raison de sa place dans l'architecture actuelle.

## 2. État de référence du dépôt

### 2.1. Version examinée

| Élément | État |
|---|---|
| Dépôt | `newgeko/protokin` |
| Branche | `main` |
| Commit | `32c0e2e83dfabb3bb9ae64e4403ef64d23dc2025` |
| Date du commit | 14 novembre 2026 |
| Dernière modification identifiée | `patterns.md` |
| Fichiers présents | 173 |
| Fichiers Markdown | 165 |
| Fichiers HTML | 3 |

La référence de cet audit est le contenu effectivement présent dans cette version de la branche `main`.

Toute révision ultérieure doit préciser le nouveau commit examiné.

### 2.2. Périmètre examiné

L'examen a porté en priorité sur les documents qui déterminent l'organisation intellectuelle, fonctionnelle et documentaire du projet :

**Documents de référence**

- `README.md`
- `patterns.md`
- `pattern-audit.md`
- `pattern-tdm.md`
- `pattern-html.md`
- `audit-corpus.md`

**Architecture et organisation documentaire**

- `fr/architecture-projet.md`
- `fr/architecture-fonctionnelle-de-l-enquete.md`
- `fr/tdm.md`
- `_sidebar.md`

**Organisation et conduite de l'enquête**

- `fr/la-chaine-principale-de-l-enquete.md`
- `fr/orientation-de-l-examen.md`
- `fr/conduire-une-enquete.md`
- `fr/modes-d-intervention-de-l-enquete.md`
- `fr/objets-de-l-examen.md`
- `fr/orientation-et-chemin-de-l-enquete.md`
- `fr/plateau-d-enquete.md`
- `fr/temporaliser.md`

**Notions et développements connexes**

- `fr/configuration.md`
- `fr/explication.md`
- `fr/auditeur.md`
- `fr/enquete-et-organisation-des-notions.md`
- `fr/introduction-generale.md`
- `fr/fecondite-et-revisabilite-de-protokin.md`
- `fr/une-premiere-cartographie-des-regimes-descriptifs.md`

**Études de cas**

- `fr/botaniste-bucheron.md`
- `fr/pont-saint-benezet.md`
- `fr/conscience-ia-chiang-bentham.md`

La structure complète du dépôt a également été consultée pour vérifier la présence des ressources et identifier les fichiers HTML.

Ce périmètre permet d'établir plusieurs constats transversaux. Il ne constitue pas encore une validation individuelle de toutes les pages du corpus.

### 2.3. Fichiers absents, accessibles et non vérifiés

Les situations suivantes doivent être distinguées.

| Fichier ou ressource | État |
|---|---|
| `pattern-audit.md` | Présent et consulté |
| `patterns.md` | Présent et consulté |
| `audit-corpus.md` | Présent ; version antérieure à remplacer |
| `fr/temporaliser.md` | Présent et consulté |
| `fr/quadripartition-de-l-orientation.md` | Absent de la branche examinée |
| `html/architecture-fonctionnelle-de-l-enquete.html` | Présent et consulté |
| `html/conduire-une-enquete.html` | Présent, contenu non vérifié dans cet examen |

Aucune page absente ne doit être reconstituée à partir de son ancien intitulé ou de références indirectes.

Le contrôle exhaustif des contenus des autres pages, des liens entrants et sortants et des éventuelles ressources publiées reste à effectuer.

## 3. État général du projet

### 3.1. Positionnement de Protokin

**Constat vérifié**

Le README présente Protokin comme :

> Une démarche d'enquête pragmatiste, inférentialiste et réflexive, méthodologiquement non ontologique.

Il distingue les pratiques descriptives de leur examen et maintient une distinction entre existence, identification et détermination descriptive.

Il affirme également :

> La cohérence d'une description ne suffit pas à établir son adéquation à ce qu'elle prétend décrire.

La présentation insiste sur le caractère situé et révisable des ressources.

**Interprétation**

Le positionnement général est suffisamment identifiable. Il ne nécessite pas, à ce stade, une nouvelle reformulation générale.

La question importante n'est plus principalement celle de la définition du projet, mais celle de sa capacité à organiser des enquêtes qui produisent un gain analytique identifiable.

**Décision proposée**

Conserver le positionnement actuel du README comme référence de présentation.

Éviter de multiplier les reformulations générales dans les pages spécialisées.

### 3.2. Révision réciproque des descriptions et des ressources d'examen

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue :

- les ressources descriptives de premier ordre ;
- les ressources d'examen mobilisées pour étudier ces pratiques.

Le document précise que l'examen peut conduire à modifier les ressources utilisées dans les descriptions et que les difficultés rencontrées dans les descriptions peuvent conduire à réviser les ressources de l'enquête.

`fr/enquete-et-organisation-des-notions.md` développe également la possibilité de mobiliser une notion, puis de prendre cette même notion comme objet d'examen.

**Interprétation**

Cette révision réciproque constitue un principe important de l'organisation de Protokin.

L'enquête ne se contente pas d'examiner des descriptions produites par des pratiques extérieures. Ses résultats peuvent conduire à modifier ces descriptions.

Inversement, les difficultés rencontrées dans les descriptions peuvent conduire à modifier les ressources conceptuelles et fonctionnelles utilisées pour les examiner.

Il ne s'agit donc pas d'une séparation étanche entre un premier ordre descriptif et un second ordre d'examen.

**Décision proposée**

Préserver cette distinction et cette relation de révision réciproque dans les documents de référence.

Examiner progressivement les études de cas pour déterminer si cette relation est effectivement mise en œuvre.

## 4. Architecture fonctionnelle de l'enquête

### 4.1. Organisation actuelle

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` présente quatre ensembles fonctionnels :

1. Les opérations.
2. Les orientations.
3. Les aspects transversaux.
4. Les instruments d'épreuve.

Les catégories ont un statut différent : elles regroupent certaines opérations pour faciliter leur repérage.

Le document distingue également :

- les modalités d'examen, notamment l'explication et l'audit ;
- l'épreuve, comme exigence générale de confrontation ;
- la reprise, comme modalité de réexamen.

**Interprétation**

Cette organisation est plus différenciée que les présentations antérieures.

Elle évite de placer au même niveau des ressources qui ne remplissent pas les mêmes fonctions.

Elle constitue actuellement une organisation de référence cohérente, mais sa pertinence ne peut être tenue pour acquise.

**Décision validée**

Maintenir provisoirement cette organisation comme référence documentaire.

Cette décision ne signifie pas que les quatre ensembles constituent une classification exhaustive ou définitive.

### 4.2. Statut des opérations

**Constat vérifié**

La chaîne principale présente huit opérations :

- Délimiter ;
- Ancrer ;
- Distinguer ;
- Relier ;
- Configurer ;
- Justifier ;
- Reconstituer ;
- Redélimiter.

`fr/architecture-fonctionnelle-de-l-enquete.md` les définit comme des travaux d'examen de second ordre.

`fr/la-chaine-principale-de-l-enquete.md` présente leur fonction et leurs articulations possibles.

`fr/conduire-une-enquete.md` les mobilise comme des ressources susceptibles d'être reprises selon les difficultés rencontrées.

Cependant, certaines formulations du README et de `pattern-audit.md` les présentent encore comme des activités descriptives.

**Tension conceptuelle**

Il faut maintenir une distinction suffisamment nette entre :

- les activités descriptives des pratiques étudiées ;
- les opérations par lesquelles l'enquête examine ces activités.

Mesurer, observer, classer, interpréter ou produire une assertion peuvent être des activités de premier ordre.

Délimiter, ancrer, distinguer, relier, configurer, justifier, reconstituer et redélimiter désignent les travaux d'examen organisés par Protokin.

**Décision proposée**

Reprendre les formulations du README et de `pattern-audit.md` pour les aligner sur cette distinction.

Ne pas modifier les huit opérations avant d'avoir examiné leur contribution effective dans plusieurs enquêtes.

### 4.3. Statut des orientations

**Constat vérifié**

`fr/orientation-de-l-examen.md` distingue quatre orientations :

- Condition ;
- Relation ;
- Fonction ;
- Justification.

Une orientation précise le rapport sous lequel une situation, une pratique, une description ou un résultat est examiné.

Elle ne prescrit pas l'opération à effectuer.

La page précise également que les quatre orientations ne correspondent pas à quatre dimensions naturelles de toute situation et qu'elles ne constituent pas une grille obligatoire.

**Décision validée**

Conserver ces quatre orientations comme repères de questionnement actuellement disponibles.

L'ancienne page `fr/quadripartition-de-l-orientation.md` est absente de la branche examinée.

La migration documentaire est donc engagée, mais l'absence de l'ancien fichier ne suffit pas à établir que toutes les références historiques ont été éliminées.

**Intervention restante**

Vérifier les références résiduelles à l'ancienne organisation dans les documents et ressources publiés.

Ne pas supprimer les mentions historiques lorsqu'elles permettent de documenter l'évolution du projet.

### 4.4. Aspects transversaux

**Constat vérifié**

L'architecture fonctionnelle distingue actuellement deux aspects transversaux :

- Temporalité ;
- Réflexivité.

`fr/temporaliser.md` développe le premier.

La réflexivité concerne la possibilité pour l'enquête d'examiner ses propres conditions, ses choix, ses ressources, ses limites et ses effets.

**Interprétation**

Les deux aspects n'ont pas le même objet, mais partagent une propriété fonctionnelle : ils peuvent intervenir dans plusieurs opérations et orientations sans constituer des travaux supplémentaires.

Leur mobilisation dépend de la difficulté examinée.

**Décision validée**

Ne pas réintroduire Explication, Audit et Épreuve dans cette famille par simple commodité de classement.

Leur statut doit être examiné séparément.

### 4.5. Explication, Audit et Épreuve

**Constat vérifié**

L'architecture fonctionnelle distingue :

- **Explication** : activité descriptive possible, réponse à une question ou objet d'examen.
- **Audit** : fonction d'examen critique susceptible de mobiliser plusieurs opérations.
- **Épreuve** : exigence générale de confrontation des descriptions et des conclusions.

Ces trois termes ne désignent pas des ressources de même nature.

L'explication possède notamment une fonction dans les pratiques descriptives de premier ordre.

L'audit peut examiner une description, un dispositif ou l'enquête elle-même.

L'épreuve indique une exigence à laquelle les descriptions doivent pouvoir être confrontées.

**Interprétation**

Leur présence dans le corpus ne justifie pas de leur attribuer une catégorie commune.

Leur statut dépend de la fonction effectivement exercée dans la situation considérée.

**Décision validée**

Ne pas constituer actuellement une famille commune regroupant Explication, Audit et Épreuve.

Conserver leurs développements propres et examiner leurs articulations dans les pages spécialisées.

### 4.6. Instruments d'épreuve et Reprise

**Constat vérifié**

L'architecture fonctionnelle distingue trois instruments :

- Substitution ;
- Cas ;
- Comparaison.

La Reprise est définie comme une modalité générale de réexamen.

Elle peut mobiliser un ou plusieurs instruments, ou ne nécessiter aucun instrument particulier.

`fr/plateau-d-enquete.md` respecte cette distinction.

`fr/conduire-une-enquete.md` utilise également la reprise pour désigner le réexamen d'un travail antérieur.

**Décision validée**

Maintenir la distinction entre instruments et modalité de reprise.

Ne pas présenter la Reprise comme un quatrième instrument.

**Intervention restante**

Corriger `pattern-tdm.md`, qui conserve une présentation de la reprise parmi les moyens ou instruments de confrontation.

Contrôler les autres ressources qui pourraient reproduire cette ancienne classification.

## 5. Organisation documentaire et cohérence éditoriale

### 5.1. Documents de référence

**Constat vérifié**

`patterns.md` précise désormais explicitement la répartition des fonctions :

- rédaction et révision des pages ;
- examen méthodologique du corpus ;
- consignation des résultats de l'examen.

`pattern-audit.md` définit les dimensions et les modalités de l'examen.

**Décision validée**

Conserver cette répartition.

Ne pas reproduire dans `audit-corpus.md` les procédures, critères et règles détaillées qui appartiennent à `pattern-audit.md`.

Le présent document doit rester un registre des résultats et des décisions.

### 5.2. Divergences entre les documents de référence

**Constat vérifié**

Plusieurs ressources ne sont pas encore alignées sur l'organisation actuelle.

| Document | Difficulté constatée |
|---|---|
| `pattern-audit.md` | Présente encore les opérations comme des activités descriptives précises, alors que l'architecture les définit comme des travaux d'examen de second ordre. |
| `pattern-tdm.md` | Conserve une présentation trop large des fonctions transversales et inclut la reprise parmi les instruments de confrontation. |
| `README.md` | Certaines formulations présentent les opérations comme des activités descriptives plutôt que comme des travaux d'examen. |
| `html/architecture-fonctionnelle-de-l-enquete.html` | Conserve une organisation antérieure des composantes et des instruments. |
| `_sidebar.md` | Ne référence pas `fr/temporaliser.md`. |

**Interprétation**

La migration conceptuelle est plus avancée que sa transposition dans toutes les ressources documentaires.

Les divergences ne nécessitent pas de reconstruire l'architecture. Elles appellent d'abord un alignement des documents qui la présentent.

**Interventions proposées**

- Corriger les définitions des opérations dans `pattern-audit.md`.
- Actualiser les formulations de `pattern-tdm.md`.
- Vérifier la formulation des opérations dans le README.
- Actualiser ou régénérer les versions HTML.
- Ajouter `fr/temporaliser.md` dans `_sidebar.md`.

### 5.3. Table des matières

**Constat vérifié**

La version actuelle de `fr/tdm.md` présente les quatre ensembles fonctionnels et distingue le statut des catégories.

Elle distingue également les aspects transversaux, les modalités d'examen et les instruments de confrontation.

Elle présente les trois instruments actuellement retenus sans classer la Reprise parmi eux.

**Interprétation**

La TDM est désormais mieux alignée sur l'architecture fonctionnelle que ne le laisse entendre l'ancienne version de cet audit.

Les anciens constats demandant de corriger son inventaire des composantes et son classement de la Reprise ne doivent plus être repris.

**Décision validée**

Conserver l'organisation actuelle de la TDM comme référence de navigation.

La soumettre néanmoins à un contrôle ultérieur de ses liens et de ses correspondances avec la barre latérale.

### 5.4. Navigation et ressources manquantes de la barre latérale

**Constat vérifié**

`fr/tdm.md` référence `temporaliser.md`.

`_sidebar.md` ne comporte pas cette ressource.

**Interprétation**

La table des matières et la navigation rapide ne donnent pas encore accès aux mêmes ressources importantes.

Cette divergence ne remet pas en cause la fonction propre de la TDM, mais réduit la visibilité d'une page importante de l'architecture.

**Intervention proposée**

Ajouter Temporaliser dans la rubrique appropriée de `_sidebar.md`.

### 5.5. Versions HTML

**Constat vérifié**

Le dépôt contient notamment :

- `html/architecture-fonctionnelle-de-l-enquete.html` ;
- `html/conduire-une-enquete.html` ;
- `index.html`.

La version consultée de l'architecture fonctionnelle conserve une organisation antérieure :

- cinq composantes présentées au même niveau ;
- cinq fonctions transversales ;
- quatre instruments, dont la Reprise ;
- une articulation qui ne correspond plus à la distinction actuelle des ressources.

**Interprétation**

Cette version HTML ne constitue pas une transposition fidèle de la source Markdown actuelle.

Elle risque de maintenir accessible une représentation dépassée du projet.

**Interventions proposées**

1. Déterminer le statut de ces fichiers HTML dans le dispositif de publication.
2. Vérifier s'ils sont générés automatiquement ou maintenus séparément.
3. Actualiser ou régénérer l'architecture fonctionnelle HTML.
4. Examiner la version HTML de Conduire une enquête.
5. Vérifier la correspondance des autres ressources publiées lorsqu'elles existent.

Ne pas supprimer les fichiers HTML avant d'avoir établi leur fonction.

### 5.6. Liens et références documentaires

**Constat vérifié**

La structure du dépôt a été inventoriée et plusieurs liens et renvois des documents centraux ont été consultés.

La vérification exhaustive de tous les liens internes n'a pas été réalisée.

**Intervention restante**

Effectuer un contrôle systématique :

- des liens Markdown ;
- des références vers les fichiers déplacés ou absents ;
- des liens entrants vers les anciennes pages ;
- des chemins relatifs dans les fichiers du répertoire `fr/` ;
- des liens entre les sources Markdown et les versions HTML.

Aucun lien ne doit être déclaré valide sans vérification de sa destination effective.

## 6. Conduite de l'enquête et temporalité

### 6.1. Conception non linéaire de l'enquête

**Constat vérifié**

`fr/la-chaine-principale-de-l-enquete.md` présente les huit opérations comme un répertoire de référence.

`fr/conduire-une-enquete.md` précise que l'examen procède par mobilisations et reprises d'opérations.

`fr/plateau-d-enquete.md` distingue les opérations effectivement réalisées des relations qui deviennent intelligibles au cours de l'examen ou sont reconstruites rétrospectivement.

**Interprétation**

La conception actuelle ne repose plus sur une chaîne nécessaire d'étapes.

Il faut distinguer :

- le déroulement effectif de l'enquête ;
- les possibilités qui étaient ouvertes à un moment donné ;
- les relations qui deviennent intelligibles depuis une situation ultérieure.

La reconstruction rétrospective ne démontre pas que le résultat était prévisible ou nécessaire.

**Décision validée**

Conserver cette distinction comme principe de présentation de l'enquête.

### 6.2. Temporaliser

**Constat vérifié**

`fr/temporaliser.md` distingue :

- temporalité effective ;
- temporalité prospective ;
- temporalité rétrospective.

La page examine notamment les effets de nécessité rétrospective et le rapport entre reconstruction et contingence.

Elle mobilise le rapprochement avec Hegel et Brandom pour préciser la portée de la reconstruction rationnelle.

**Interprétation**

Cette page apporte une contribution propre à l'architecture : elle ne décrit pas simplement le déroulement de l'enquête, mais examine les conditions temporelles dans lesquelles ses transformations deviennent intelligibles.

**Décision proposée**

Préserver cette fonction propre.

Éviter de reproduire son développement théorique intégral dans `fr/conduire-une-enquete.md` ou `fr/plateau-d-enquete.md`.

### 6.3. Le plateau d'enquête

**Constat vérifié**

`fr/plateau-d-enquete.md` présente le plateau comme un dispositif graphique facultatif.

Les opérations sont représentées par leurs occurrences particulières.

Le fil rouge représente des relations établies ou reconstruites entre les opérations, les éléments examinés et les configurations concernées.

La page précise que le fil rouge ne représente pas un chemin unique nécessairement parcouru.

**Interprétation**

Le plateau est désormais mieux différencié d'une procédure de conduite de l'enquête.

Il permet de représenter une organisation reconstruite des travaux sans confondre celle-ci avec leur succession effective.

**Décision validée**

Conserver le plateau comme instrument facultatif de représentation.

Ne pas le transformer en composante supplémentaire de l'architecture fonctionnelle.

### 6.4. Articulation des ressources de conduite

**Constat vérifié**

Plusieurs pages interviennent dans la conduite et la représentation de l'enquête :

- `fr/conduire-une-enquete.md` ;
- `fr/modes-d-intervention-de-l-enquete.md` ;
- `fr/orientation-et-chemin-de-l-enquete.md` ;
- `fr/plateau-d-enquete.md` ;
- `fr/resultats-de-l-enquete.md`.

Leurs fonctions ne sont pas nécessairement identiques.

**Tension à examiner**

Le vocabulaire du chemin et du parcours demeure présent dans certaines dénominations, notamment `fr/orientation-et-chemin-de-l-enquete.md`.

Son emploi n'est pas automatiquement problématique. Il faut toutefois vérifier qu'il ne réintroduit pas une conception linéaire que les autres ressources cherchent précisément à éviter.

**Intervention proposée**

Examiner les fonctions propres de ces pages et leurs relations effectives avant d'envisager une fusion ou une suppression.

Vérifier en particulier la contribution de `fr/orientation-et-chemin-de-l-enquete.md` par rapport à la chaîne principale et à Conduire une enquête.

## 7. Frontières conceptuelles à examiner

Les distinctions suivantes constituent des axes de vigilance. Elles ne sont pas considérées comme des difficultés établies du seul fait qu'elles apparaissent dans plusieurs pages.

### 7.1. Régimes descriptifs et registres

**Constat vérifié**

Le corpus possède des ressources consacrées aux régimes descriptifs, aux registres, aux catégories et à leur cartographie.

**Interprétation**

Ces notions remplissent des fonctions différentes, mais leurs frontières doivent rester suffisamment précises pour éviter des classifications concurrentes.

**Intervention proposée**

Examiner notamment :

- `fr/regime-descriptif.md` ;
- `fr/registres.md` ;
- `fr/ecologie-des-regimes-descriptifs.md` ;
- `fr/identifier-un-regime.md` ;
- `fr/une-premiere-cartographie-des-regimes-descriptifs.md`.

Ne pas fusionner ces pages sur la seule base de leur proximité thématique.

### 7.2. Description, objet et référent

**Interprétation**

Le projet doit maintenir une distinction entre les pratiques descriptives, les objets identifiés et ce à quoi les descriptions se rapportent.

Cette distinction ne doit conduire ni à réduire l'objet à sa description ni à considérer que l'identification est indépendante de toute pratique.

**Intervention proposée**

Poursuivre l'examen des relations entre :

- description ;
- objet descriptif ;
- référent ;
- occurrence ;
- stabilisation ;
- trace ;
- identification.

Évaluer ces distinctions à partir de leurs usages et des difficultés qu'elles permettent de traiter.

### 7.3. Inférence et justification

**Interprétation**

La cohérence des inférences, la pertinence des raisons et la justification des conclusions restent des dimensions centrales.

Il convient de préserver les différences entre cause, raison, condition, critère, engagement et justification.

**Intervention proposée**

Examiner les relations entre les pages concernées à partir de problèmes concrets, plutôt que multiplier les définitions générales.

### 7.4. Explication et justification

**Constat vérifié**

`fr/explication.md` distingue plusieurs questions explicatives et précise que l'explication de la production d'une affirmation ne suffit pas à justifier son contenu.

**Interprétation**

Cette distinction est cohérente avec le principe général de non-conversion automatique.

**Décision proposée**

Préserver cette différenciation et vérifier que les autres pages ne réintroduisent pas une assimilation entre explication, cause et justification.

### 7.5. Temporalité et transformation

**Interprétation**

Les notions de trajectoire, transition, transformation, stabilisation et sédimentation peuvent se recouvrir lorsqu'elles sont employées sans précision.

Leur maintien doit dépendre des problèmes distincts qu'elles permettent de traiter.

**Intervention proposée**

Poursuivre l'examen de ces pages sans présupposer qu'une simplification terminologique ou une fusion serait nécessaire.

## 8. Épreuve de l'architecture par les études de cas

### 8.1. Principe

**Constat méthodologique**

Le corpus comporte plusieurs études de cas susceptibles de confronter les ressources de Protokin à des situations déterminées.

La présence d'exemples ne suffit cependant pas à établir la fécondité de l'architecture.

**Interprétation**

Une étude de cas ne doit pas simplement retrouver les catégories et les distinctions déjà présentes dans le projet.

Elle doit permettre de déterminer si les ressources disponibles contribuent effectivement à examiner une difficulté, y compris lorsque celle-ci résiste à leur organisation initiale.

### 8.2. Cas à examiner prioritairement

| Étude de cas | Problème principal à examiner |
|---|---|
| `fr/botaniste-bucheron.md` | Différences entre pratiques descriptives, fonctions et critères mobilisés à propos d'une même situation. |
| `fr/pont-saint-benezet.md` | Relations entre contraintes matérielles, décisions, justifications et reconstructions historiques. |
| `fr/conscience-ia-chiang-bentham.md` | Relations entre indices, capacités, performances, hypothèses et conclusions. |
| `fr/changement-climatique.md` | Articulation de descriptions scientifiques, institutionnelles et pratiques. |
| `fr/urgence-hospitaliere.md` | Relations entre contraintes, décisions, critères et justifications dans une situation d'urgence. |

Cette sélection indique des possibilités d'examen, non un classement de la qualité des études de cas.

### 8.3. Interventions proposées

Reprendre les études de cas à partir de leurs problèmes propres.

Pour chacune, déterminer :

- les matériaux effectivement disponibles ;
- les pratiques descriptives étudiées ;
- les différences entre les descriptions ;
- les opérations mobilisées ;
- les orientations pertinentes ;
- les aspects transversaux éventuellement nécessaires ;
- les instruments effectivement employés ;
- les reprises et les transformations intervenues ;
- les résultats établis ;
- les incertitudes restantes ;
- les difficultés que les ressources de Protokin ne permettent pas encore de traiter.

Ne pas imposer systématiquement les huit opérations ou les quatre orientations à chaque étude.

### 8.4. Résultat attendu

L'examen des cas doit permettre d'apprécier :

1. Si les ressources de Protokin permettent de formuler des problèmes qui n'étaient pas suffisamment identifiés.
2. Si elles permettent de distinguer des fonctions et des engagements qui étaient confondus.
3. Si elles rendent possibles des relations descriptives plus précises.
4. Si elles contribuent à mieux justifier ou contester certaines conclusions.
5. Si elles révèlent des insuffisances dans l'architecture elle-même.

Les résultats négatifs ou les difficultés non résolues doivent être consignés au même titre que les résultats positifs.

## 9. Registre des interventions

Le tableau suivant constitue le registre de suivi de l'audit.

Les statuts indiquent l'état des interventions dans le dépôt, et non leur degré d'importance conceptuelle.

| Intervention | Fichier concerné | État |
|---|---|---|
| Référentiel méthodologique de l'audit | `pattern-audit.md` | Appliqué |
| Répartition des fonctions entre patterns et audit | `patterns.md` | Appliqué |
| Présentation des quatre ensembles fonctionnels | `fr/architecture-fonctionnelle-de-l-enquete.md` | Présent |
| Présentation des opérations de référence | `fr/la-chaine-principale-de-l-enquete.md` | Présent |
| Développement des orientations | `fr/orientation-de-l-examen.md` | Présent |
| Temporalité effective, prospective et rétrospective | `fr/temporaliser.md` | Présent |
| Distinction entre instruments et reprise | Architecture fonctionnelle | Présent |
| Révision de la conduite de l'enquête | `fr/conduire-une-enquete.md` | Présent, contrôle éditorial restant |
| Représentation des relations entre opérations | `fr/plateau-d-enquete.md` | Présent |
| Alignement de la TDM sur les quatre ensembles | `fr/tdm.md` | Présent |
| Définition des opérations comme travaux de second ordre | `README.md`, `pattern-audit.md` | À corriger |
| Statut des fonctions transversales | `pattern-tdm.md` | À corriger |
| Statut de la Reprise dans les instruments | `pattern-tdm.md` | À corriger |
| Synchronisation HTML de l'architecture | `html/architecture-fonctionnelle-de-l-enquete.html` | À corriger |
| Contrôle de la version HTML de la conduite | `html/conduire-une-enquete.html` | À vérifier |
| Présence de Temporaliser dans la navigation rapide | `_sidebar.md` | À corriger |
| Contrôle des liens internes | Ensemble du dépôt | À effectuer |
| Examen des frontières entre régimes et registres | Pages concernées | À examiner |
| Examen des fonctions respectives des ressources de conduite | Pages concernées | À examiner |
| Mise à l'épreuve approfondie par les études de cas | Études de cas | À poursuivre |

Les interventions précédemment appliquées sont distinguées des corrections proposées par le présent examen.

Aucune modification du dépôt n'est réputée effectuée par la seule rédaction de cet audit.

## 10. Priorités de traitement

### Priorité 1 — Alignement des documents de référence

- Corriger la définition des opérations dans `pattern-audit.md`.
- Vérifier les formulations du README.
- Corriger les distinctions obsolètes dans `pattern-tdm.md`.
- Maintenir la cohérence entre les quatre ensembles fonctionnels et les ressources qui ne relèvent pas de ces ensembles.

**Résultat attendu :** les documents de référence présentent une organisation fonctionnelle cohérente.

### Priorité 2 — Synchronisation documentaire et technique

- Actualiser la version HTML de l'architecture fonctionnelle.
- Contrôler l'autre version HTML.
- Ajouter Temporaliser dans la barre latérale.
- Vérifier les liens internes et les références historiques.
- Contrôler la cohérence entre TDM, sidebar et README.

**Résultat attendu :** les différentes ressources de consultation correspondent aux documents de référence actuels.

### Priorité 3 — Fonction propre des ressources de conduite

- Examiner `fr/modes-d-intervention-de-l-enquete.md`.
- Examiner `fr/orientation-et-chemin-de-l-enquete.md`.
- Vérifier les articulations avec `fr/conduire-une-enquete.md`.
- Préserver la fonction facultative du plateau.
- Vérifier la distinction entre déroulement et reconstruction.

**Résultat attendu :** chaque page apporte une contribution propre à la conduite ou à la représentation de l'enquête.

### Priorité 4 — Frontières conceptuelles

- Régimes et registres.
- Description, objet et référent.
- Inférence et justification.
- Explication et justification.
- Temporalité et transformation.
- Fonction des notions et fonction des opérations.

**Résultat attendu :** les distinctions conservées correspondent à des différences analytiques identifiables.

### Priorité 5 — Épreuve de l'architecture

- Reprendre les études de cas.
- Examiner les ressources réellement mobilisées.
- Identifier les difficultés persistantes.
- Évaluer les gains analytiques.
- Réviser les ressources lorsque les cas font apparaître leurs limites.

**Résultat attendu :** l'organisation de Protokin est confrontée à des difficultés qui ne sont pas définies uniquement à partir de ses propres catégories.

## 11. Questions ouvertes

Les questions suivantes ne sont pas considérées comme résolues.

### Architecture fonctionnelle

1. Les quatre ensembles fonctionnels actuels suffisent-ils à organiser les ressources effectivement mobilisées dans les enquêtes ?
2. Les catégories regroupant les opérations apportent-elles un gain réel de repérage sans introduire une hiérarchie implicite ?
3. Les huit opérations possèdent-elles toutes une fonction suffisamment distincte dans les enquêtes concrètes ?
4. Les quatre orientations permettent-elles de traiter les principales différences entre les questions d'examen, ou certaines difficultés nécessitent-elles d'autres repères ?
5. La distinction entre aspects transversaux, modalités d'examen et instruments d'épreuve reste-t-elle adéquate dans les situations effectivement étudiées ?

### Explication, audit et épreuve

6. Dans quelles conditions l'explication relève-t-elle d'une production descriptive de premier ordre, d'un objet d'examen ou d'un travail mobilisant plusieurs opérations ?
7. La fonction transversale Auditer possède-t-elle une contribution suffisamment distincte de la réflexivité ?
8. L'épreuve doit-elle rester une exigence générale de confrontation, ou certaines de ses modalités demandent-elles un traitement fonctionnel supplémentaire ?
9. La distinction entre instruments d'épreuve et reprise permet-elle de rendre compte de tous les réexamens effectivement conduits ?

### Organisation documentaire

10. Les pages consacrées à la conduite de l'enquête présentent-elles des fonctions suffisamment distinctes ?
11. Les versions HTML ont-elles toutes un statut éditorial clairement établi ?
12. La navigation actuelle donne-t-elle un accès satisfaisant aux ressources importantes ?
13. Les études de cas disposent-elles d'une fonction suffisamment différenciée par rapport aux pages conceptuelles et aux pages de méthode ?

### Fécondité de Protokin

14. Les ressources permettent-elles d'examiner des difficultés qui ne sont pas déjà organisées par leurs propres distinctions ?
15. Les enquêtes peuvent-elles conduire à abandonner une opération, à modifier une orientation ou à réorganiser l'architecture ?
16. Quels résultats permettent de distinguer un véritable gain analytique d'une simple reformulation des descriptions initiales ?
17. Quelles limites doivent être reconnues lorsque les éléments disponibles ne permettent pas de départager plusieurs descriptions ?

Ces questions restent ouvertes jusqu'à ce que des examens suffisamment précis permettent d'y répondre.

## 12. Conditions de révision de l'audit

Le présent document doit être actualisé lorsque :

- un document de référence est modifié ;
- une distinction structurante est introduite, révisée ou abandonnée ;
- une nouvelle page modifie les relations entre les ressources ;
- une difficulté apparaît dans une étude de cas ;
- une divergence documentaire est corrigée ;
- une question ouverte reçoit un traitement suffisamment étayé.

Toute actualisation doit distinguer les constats antérieurs des constats nouveaux.

Une difficulté corrigée ne doit pas continuer à être présentée comme une divergence actuelle.

Une décision validée ne doit pas être confondue avec une modification appliquée.

Une modification appliquée ne doit pas être déclarée vérifiée sans contrôle de ses conséquences.

Le présent audit n'est pas un historique exhaustif de toutes les modifications du dépôt. Il conserve les décisions et les difficultés dont la connaissance demeure utile à l'organisation du corpus.

## 13. Principe directeur

L'audit ne vise pas à protéger l'organisation actuelle de Protokin contre sa propre révision.

Il vise à déterminer si les ressources documentaires et fonctionnelles permettent effectivement d'examiner les difficultés auxquelles le projet entend répondre.

La cohérence du corpus est une condition de lisibilité, non une preuve de sa fécondité.

Les catégories, les opérations, les orientations, les aspects transversaux, les instruments et les notions doivent pouvoir être contestés à partir de leurs usages effectifs.

**L'organisation de Protokin doit rester révisable à partir des difficultés que les enquêtes font apparaître, y compris lorsque ces difficultés mettent en question ses propres distinctions.**