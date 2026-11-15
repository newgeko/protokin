# Audit du corpus Protokin

## 1. Fonction et portée

Ce document consigne les résultats de l'examen critique du corpus Protokin.

Il permet de suivre l'état du dépôt, d'identifier les difficultés conceptuelles, fonctionnelles, éditoriales et documentaires, de conserver les décisions prises et de déterminer les interventions qui restent nécessaires.

Il s'inscrit dans une organisation documentaire à trois niveaux :

- `patterns.md` définit les principes éditoriaux et les patterns de rédaction des pages.
- `pattern-audit.md` définit le référentiel méthodologique de l'examen du corpus.
- `audit-corpus.md` consigne les constats, les interprétations, les décisions et les interventions concernant l'état effectif du corpus.

Ces documents remplissent des fonctions distinctes. Le présent audit ne reproduit ni les règles générales de rédaction ni les modalités détaillées de l'examen.

Il ne constitue pas davantage une composante de l'architecture fonctionnelle de l'enquête.

L'audit porte sur le corpus lui-même, y compris sur ses documents de référence, ses ressources spécialisées et ses propres instruments d'organisation.

Aucune ressource ne doit être soustraite à l'examen en raison de sa place dans l'organisation actuelle.

L'architecture existante constitue un état de référence provisoire, et non un cadre dont la validité serait présupposée.

## 2. État de référence du dépôt

### 2.1. Version examinée

| Élément | État |
|---|---|
| Dépôt | `newgeko/protokin` |
| Branche | `main` |
| Commit examiné | `76abf8ee22186883f52ba0ed0a3dbcbc56cc9e68` |
| Date du commit | 14 novembre 2026 |
| Dernier changement identifié | Correction de `pattern-audit.md` |
| Fichier d'audit à actualiser | `audit-corpus.md` |

Commit de référence :

https://github.com/newgeko/protokin/commit/76abf8ee22186883f52ba0ed0a3dbcbc56cc9e68

La référence de cet examen est le contenu effectivement consulté sur la branche `main`, au commit indiqué.

Le dernier commit identifié modifie `pattern-audit.md`. Il supprime une définition antérieure qui présentait les opérations comme des activités descriptives précises et conserve leur définition comme travaux d'examen de second ordre.

Cette correction est importante pour l'examen des autres documents.

Toute révision ultérieure de cet audit devra identifier le nouveau commit et distinguer les modifications effectivement intervenues des constats conservés.

### 2.2. Périmètre effectivement examiné

L'examen a porté en priorité sur les documents structurants et sur plusieurs ressources spécialisées permettant de vérifier les distinctions centrales.

**Documents éditoriaux et méthodologiques**

- `README.md`
- `patterns.md`
- `pattern-audit.md`
- `pattern-tdm.md`
- `audit-corpus.md`

**Architecture et organisation documentaire**

- `fr/architecture-projet.md`
- `fr/architecture-fonctionnelle-de-l-enquete.md`
- `fr/tdm.md`
- `_sidebar.md`

**Organisation et conduite de l'enquête**

- `fr/la-chaine-principale-de-l-enquete.md`
- `fr/orientation-de-l-examen.md`
- `fr/orientation-et-chemin-de-l-enquete.md`
- `fr/conduire-une-enquete.md`
- `fr/modes-d-intervention-de-l-enquete.md`
- `fr/objets-de-l-examen.md`
- `fr/resultats-de-l-enquete.md`
- `fr/plateau-d-enquete.md`
- `fr/temporaliser.md`

**Notions et développements connexes**

- `fr/configuration.md`
- `fr/explication.md`
- `fr/critere.md`
- `fr/auditeur.md`
- `fr/enquete-et-organisation-des-notions.md`
- `fr/introduction-generale.md`
- `fr/fecondite-et-revisabilite-de-protokin.md`
- `fr/une-premiere-cartographie-des-regimes-descriptifs.md`

**Références philosophiques**

- `fr/wilfrid-sellars.md`
- `fr/joseph-rouse.md`

**Études de cas**

Les ressources suivantes appartiennent au périmètre de l'examen antérieur et sont conservées comme objets de contrôle ultérieur :

- `fr/botaniste-bucheron.md`
- `fr/pont-saint-benezet.md`
- `fr/conscience-ia-chiang-bentham.md`

**Versions HTML**

- `html/architecture-fonctionnelle-de-l-enquete.html`
- `html/conduire-une-enquete.html`

Ce périmètre permet d'établir plusieurs constats transversaux et de vérifier certaines corrections intervenues depuis le précédent état de l'audit.

Il ne constitue pas une validation individuelle de toutes les pages du corpus.

### 2.3. Fichiers absents, accessibles et non vérifiés

Il convient de distinguer l'absence d'un fichier, son inaccessibilité et l'absence de vérification de son contenu.

| Fichier ou ressource | État vérifié |
|---|---|
| `patterns.md` | Présent et consulté |
| `pattern-audit.md` | Présent et consulté |
| `audit-corpus.md` | Présent ; ancienne version à remplacer |
| `pattern-tdm.md` | Présent et consulté |
| `README.md` | Présent et consulté |
| `fr/architecture-projet.md` | Présent et consulté |
| `fr/architecture-fonctionnelle-de-l-enquete.md` | Présent et consulté |
| `fr/tdm.md` | Présent et consulté |
| `fr/conduire-une-enquete.md` | Présent et consulté |
| `fr/orientation-et-chemin-de-l-enquete.md` | Présent et consulté |
| `fr/temporaliser.md` | Présent et consulté |
| `fr/plateau-d-enquete.md` | Présent et consulté |
| `fr/quadripartition-de-l-orientation.md` | Absent de la branche examinée |
| `html/architecture-fonctionnelle-de-l-enquete.html` | Présent et contenu examiné |
| `html/conduire-une-enquete.html` | Présent ; contrôle de cohérence intégral restant |

Aucun des fichiers centraux consultés n'a été inaccessible.

En revanche, les contenus de l'ensemble des ressources spécialisées n'ont pas été intégralement vérifiés.

Les nombres de fichiers et les statistiques indiqués dans la version précédente de l'audit ne sont pas reconduits comme des données actuelles : ils n'ont pas fait l'objet d'un nouvel inventaire exhaustif.

Les références à des fichiers absents doivent être contrôlées individuellement avant toute conclusion sur leur validité.

Aucune page absente ne doit être reconstituée à partir de son ancien intitulé ou de références indirectes.

## 3. État général du projet

### 3.1. Positionnement de Protokin

**Constat vérifié**

Le README présente Protokin comme une démarche d'enquête pragmatiste, inférentialiste et réflexive, méthodologiquement non ontologique.

Il distingue notamment :

- l'existence ;
- l'identification ;
- la détermination descriptive.

Il précise que les pratiques descriptives sont susceptibles d'être examinées à partir de leurs conditions, de leurs opérations, de leurs engagements et de leurs justifications.

Il maintient également le principe suivant :

> La cohérence d'une description ne suffit pas à établir son adéquation à ce qu'elle prétend décrire.

Le README insiste sur le caractère situé et révisable des ressources de Protokin.

Il indique que l'architecture doit pouvoir être mise à l'épreuve par les enquêtes auxquelles elle contribue.

**Interprétation**

Le positionnement général est identifiable et suffisamment différencié.

Le problème principal n'est plus celui d'une absence de présentation générale du projet.

Il concerne désormais la capacité du corpus à transformer ce positionnement en ressources effectivement mobilisables dans des enquêtes déterminées.

La cohérence de la présentation ne démontre cependant pas que les distinctions proposées permettent de traiter les difficultés rencontrées.

**Décision proposée**

Conserver le positionnement actuel du README comme référence de présentation.

Éviter de multiplier les reformulations générales dans les pages spécialisées.

Concentrer l'examen sur la contribution effective des ressources et sur les difficultés qu'elles permettent de traiter.

### 3.2. Révision réciproque des descriptions et des ressources d'examen

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue les ressources descriptives de premier ordre et les ressources d'examen.

Il précise que l'examen d'une description peut conduire à modifier les ressources qui ont servi à la construire.

Inversement, une difficulté rencontrée dans l'examen peut conduire à réviser les opérations, les orientations ou les instruments mobilisés.

`fr/enquete-et-organisation-des-notions.md` développe également la possibilité de mobiliser une notion avant de prendre cette même notion comme objet d'examen.

**Interprétation**

La révision réciproque constitue un principe important de Protokin.

Elle évite de concevoir l'examen comme une activité extérieure qui ne pourrait jamais affecter les pratiques examinées.

Elle permet également de reconnaître que les ressources d'examen ne sont pas soustraites à leur propre examen.

Cependant, ce principe reste à éprouver dans les études de cas.

Il faut pouvoir identifier des situations dans lesquelles une difficulté rencontrée conduit effectivement à réviser une distinction, une opération ou une organisation du corpus.

**Décision validée**

Préserver la possibilité de révision réciproque entre descriptions et ressources d'examen.

Ne pas transformer cette relation en principe abstrait répété dans toutes les pages.

**Intervention restante**

Identifier, dans les études de cas, les situations où une ressource de Protokin se révèle insuffisante et les conséquences de cette insuffisance sur l'organisation de l'enquête.

### 3.3. Portée de la démarche non ontologique

**Constat vérifié**

Le README précise que la position méthodologique de Protokin ne signifie pas que les pratiques produisent intégralement ce qu'elles décrivent.

Il reconnaît que les situations examinées peuvent opposer des contraintes aux descriptions qui prétendent les caractériser.

**Interprétation**

Cette précision est importante.

Elle permet de maintenir une distinction entre la manière dont un objet est identifié et décrit, et les conditions dans lesquelles les affirmations portant sur cet objet peuvent être soutenues.

La démarche ne doit donc pas être comprise comme une relativisation générale des descriptions.

**Décision validée**

Maintenir la distinction entre existence, identification et détermination descriptive.

Veiller à ce que les pages spécialisées ne transforment pas la médiation descriptive en dépendance ontologique systématique.

## 4. Architecture fonctionnelle de l'enquête

### 4.1. Organisation actuelle

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue quatre ensembles fonctionnels :

1. Les opérations.
2. Les orientations.
3. Les aspects transversaux.
4. Les instruments d'épreuve.

Les catégories regroupent certaines opérations afin de faciliter leur repérage. Elles ne constituent pas un ensemble supplémentaire.

L'architecture distingue également des modalités d'examen dont le statut doit être précisé selon les fonctions concernées.

Les objets de l'examen et les modes d'intervention ne sont pas présentés comme des composantes supplémentaires de cette architecture.

**Interprétation**

Cette organisation permet de différencier des ressources qui interviennent dans un même examen sans remplir la même fonction.

Elle constitue un état de référence documentaire suffisamment précis pour poursuivre le travail.

Sa cohérence interne ne suffit cependant pas à établir qu'elle est adéquate à toutes les situations.

**Décision validée**

Maintenir provisoirement cette organisation comme référence de travail.

Ne pas considérer les quatre ensembles comme une classification exhaustive ou définitive.

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

`fr/architecture-fonctionnelle-de-l-enquete.md` les définit comme des travaux d'examen de second ordre portant sur les pratiques descriptives.

`fr/la-chaine-principale-de-l-enquete.md` précise leurs fonctions respectives.

`fr/conduire-une-enquete.md` les présente comme des ressources susceptibles d'être mobilisées, combinées et reprises selon les difficultés rencontrées.

Le dernier commit de `pattern-audit.md` corrige explicitement la définition antérieure qui assimilait les opérations à des activités descriptives précises.

Le README présente également les opérations comme des travaux d'examen.

**Interprétation**

La distinction entre activités de premier ordre et opérations de second ordre est désormais plus clairement établie dans les documents de référence consultés.

Il faut néanmoins vérifier son maintien dans les pages spécialisées.

Mesurer, observer, classer, interpréter, décider ou produire une assertion peuvent être des activités des pratiques étudiées.

Délimiter, ancrer, distinguer, relier, configurer, justifier, reconstituer et redélimiter désignent les travaux d'examen organisés par Protokin.

Cette différence ne signifie pas que les opérations seraient indépendantes des activités qu'elles examinent.

**Décision validée**

Conserver les huit opérations comme répertoire de référence provisoire.

Maintenir leur définition comme travaux d'examen de second ordre.

Ne pas introduire une nouvelle opération sur la seule base de l'apparition d'une activité descriptive supplémentaire.

**Intervention restante**

Vérifier les définitions et les usages de chaque opération dans les pages spécialisées.

Examiner notamment si les développements consacrés à Configurer et à Configuration maintiennent correctement la distinction entre l'opération et la notion.

### 4.3. Statut des orientations

**Constat vérifié**

`fr/orientation-de-l-examen.md` distingue quatre orientations :

- Condition ;
- Relation ;
- Fonction ;
- Justification.

Une orientation précise le rapport sous lequel une situation, une pratique, une description ou un résultat est examiné.

Elle ne prescrit pas le travail nécessaire pour répondre à la question posée.

La page précise que ces orientations ne correspondent pas à quatre dimensions naturelles de toute situation et qu'elles ne constituent pas une grille obligatoire.

L'ancienne page `fr/quadripartition-de-l-orientation.md` est absente de la branche examinée.

**Interprétation**

La suppression de l'ancienne page et le maintien des quatre orientations actuelles témoignent d'une évolution de l'organisation du projet.

La nouvelle organisation doit être évaluée à partir de ses fonctions effectives, et non considérée comme adéquate par simple opposition à l'organisation antérieure.

L'orientation Fonction doit notamment conserver une contribution identifiable par rapport aux orientations Condition et Relation.

**Décision validée**

Conserver provisoirement les quatre orientations actuelles.

Ne pas réintroduire l'ancienne quadripartition.

**Intervention restante**

Vérifier les références historiques résiduelles et les éventuelles formulations qui présenteraient encore l'ancienne organisation comme actuelle.

Ne pas supprimer les mentions historiques lorsqu'elles permettent de documenter l'évolution du projet.

### 4.4. Aspects transversaux

**Constat vérifié**

L'architecture fonctionnelle distingue actuellement deux aspects transversaux :

- Temporalité ;
- Réflexivité.

`fr/temporaliser.md` développe le premier.

La réflexivité concerne la possibilité pour l'enquête d'examiner ses propres conditions, ses choix, ses ressources, ses limites et ses effets.

**Interprétation**

Ces dimensions peuvent intervenir dans plusieurs opérations et sous différentes orientations.

Elles ne constituent ni des opérations supplémentaires ni des étapes particulières de l'enquête.

Il faut toutefois vérifier que les autres fonctions critiques ne sont pas assimilées automatiquement à des aspects transversaux.

En particulier, Auditer ne doit pas être classé comme une opération ou une fonction transversale supplémentaire sans justification de son statut.

**Décision validée**

Maintenir la distinction entre aspects transversaux, modalités d'examen et instruments d'épreuve.

Ne pas réintroduire Explication, Audit et Épreuve dans la famille des aspects transversaux par simple commodité de classement.

### 4.5. Explication, Audit et Épreuve

**Constat vérifié**

Les documents consultés distinguent plusieurs fonctions :

- **Explication** : activité descriptive possible, réponse à une question ou objet d'examen.
- **Audit** : fonction d'examen critique susceptible de mobiliser plusieurs opérations.
- **Épreuve** : exigence générale de confrontation des descriptions, des distinctions et des conclusions.

`fr/explication.md` développe le statut de l'explication et ses rapports avec la description, la cause et la justification.

`fr/auditeur.md` présente la position de l'auditeur.

**Interprétation**

Ces termes ne désignent pas des ressources de même nature.

L'explication peut appartenir aux pratiques descriptives de premier ordre, devenir un objet d'examen ou être étudiée à partir de plusieurs opérations.

Auditer désigne une fonction critique qui ne doit pas être confondue avec une procédure autonome.

L'épreuve désigne une exigence générale qui peut être mise en œuvre au moyen d'instruments déterminés.

**Décision validée**

Ne pas constituer une famille commune regroupant Explication, Audit et Épreuve.

Conserver leurs développements propres.

**Questions à approfondir**

- Dans quelles conditions une explication devient-elle un objet d'examen ?
- Auditer possède-t-il une contribution suffisamment distincte de la réflexivité ?
- La position de l'auditeur implique-t-elle des exigences particulières de responsabilité ?
- Comment distinguer l'exigence générale d'épreuve des opérations et instruments qui permettent de la satisfaire ?

### 4.6. Instruments d'épreuve et Reprise

**Constat vérifié**

L'architecture fonctionnelle distingue trois instruments :

- Substitution ;
- Cas ;
- Comparaison.

La Reprise est présentée comme une modalité générale de réexamen.

`fr/comparaison.md` définit la comparaison comme instrument de confrontation.

`fr/conduire-une-enquete.md` présente la reprise comme possibilité de réexaminer un travail antérieur.

`pattern-tdm.md` précise que la Reprise ne constitue pas un quatrième instrument.

**Interprétation**

La distinction entre instruments et reprise est fonctionnellement justifiée.

Un instrument fournit un moyen déterminé de confrontation.

La reprise désigne une modalité de réexamen qui peut mobiliser un instrument ou plusieurs, mais qui peut aussi intervenir sans instrument particulier.

Une difficulté éditoriale subsiste dans `pattern-tdm.md` : la section 3.4 mentionne les « méthodes de comparaison, de substitution et de reprise », alors que la section 2.5 distingue explicitement la Reprise des instruments.

Cette formulation risque de réintroduire une assimilation que le même document cherche à éviter.

**Décision validée**

Maintenir les trois instruments actuels.

Ne pas présenter la Reprise comme un quatrième instrument.

**Intervention proposée**

Reformuler la section 3.4 de `pattern-tdm.md` pour distinguer :

- les instruments de confrontation ;
- les modalités de réexamen ;
- les fonctions critiques susceptibles de mobiliser plusieurs opérations.

## 5. Organisation documentaire et cohérence éditoriale

### 5.1. Documents de référence

**Constat vérifié**

`patterns.md` précise la répartition des fonctions entre les documents éditoriaux et méthodologiques.

Il distingue :

- les principes de rédaction et les patterns ;
- le référentiel méthodologique de l'audit ;
- le registre des résultats de l'audit.

`pattern-audit.md` définit les dimensions et les modalités de l'examen.

`audit-corpus.md` doit conserver les résultats de cet examen.

**Interprétation**

La séparation des fonctions est suffisamment explicite.

Le risque principal serait de transformer l'audit en reproduction des principes éditoriaux ou en description générale de l'architecture.

**Décision validée**

Conserver la répartition actuelle.

Le présent document doit rester un registre des constats, décisions et interventions, et non devenir un second référentiel méthodologique.

### 5.2. Alignement des documents de référence

**Constat vérifié**

Le README et `pattern-audit.md` présentent actuellement les opérations comme des travaux d'examen de second ordre.

L'architecture fonctionnelle distingue les quatre ensembles de ressources.

`fr/architecture-projet.md` distingue l'organisation documentaire de l'organisation fonctionnelle de l'enquête.

`fr/tdm.md` présente les ressources selon une organisation documentaire et non comme une hiérarchie conceptuelle.

**Interprétation**

L'alignement des documents de référence est plus avancé que ne le laissait entendre l'ancien audit.

Les anciennes recommandations portant sur la définition des opérations dans le README et `pattern-audit.md` sont devenues sans objet.

Il reste néanmoins nécessaire de vérifier la stabilité de ces distinctions dans les pages spécialisées.

**Décision validée**

Ne pas reconduire les anciennes demandes de correction comme si elles étaient encore en attente.

Conserver les documents actuels comme références provisoires.

### 5.3. Table des matières

**Constat vérifié**

`fr/tdm.md` organise le corpus en différentes entrées thématiques et fonctionnelles.

Elle présente notamment :

- les ressources de compréhension du projet ;
- les ressources de conduite de l'enquête ;
- les orientations ;
- les opérations ;
- les configurations et les régimes descriptifs ;
- les normes, la validité et la responsabilité ;
- les diagnostics, les instruments et les études de cas ;
- les références philosophiques ;
- les documents éditoriaux.

Elle précise que son classement constitue un mode d'accès au corpus et non un ordre obligatoire de lecture.

Elle distingue également les instruments d'épreuve de l'exigence générale d'épreuve.

**Interprétation**

La TDM remplit une fonction de navigation relativement autonome par rapport aux deux architectures.

Elle ne doit pas devenir une reproduction exhaustive des définitions de chaque ressource.

La pertinence de son organisation dépend de la facilité avec laquelle un lecteur peut trouver une ressource à partir d'un problème déterminé.

**Décision validée**

Conserver l'organisation générale de la TDM.

**Intervention restante**

Vérifier systématiquement les chemins de fichiers, les renvois et la correspondance avec `_sidebar.md`.

### 5.4. Navigation et barre latérale

**Constat vérifié**

`_sidebar.md` référence actuellement :

- `fr/architecture-projet.md` ;
- `fr/architecture-fonctionnelle-de-l-enquete.md` ;
- `fr/orientation-de-l-examen.md` ;
- `fr/conduire-une-enquete.md` ;
- `fr/plateau-d-enquete.md` ;
- `fr/orientation-et-chemin-de-l-enquete.md` ;
- les opérations de référence.

La page `fr/temporaliser.md` est également référencée.

**Interprétation**

L'ancien constat selon lequel Temporaliser serait absent de la barre latérale n'est plus valable.

La navigation présente cependant plusieurs ressources de conduite dont les relations doivent être comprises sans leur imposer une hiérarchie artificielle.

**Décision validée**

Ne pas reconduire la demande d'ajout de Temporaliser.

**Intervention restante**

Contrôler l'ensemble des liens de la barre latérale et leur correspondance avec les fichiers réellement présents.

### 5.5. Versions HTML

**Constat vérifié**

Le dépôt contient notamment :

- `html/architecture-fonctionnelle-de-l-enquete.html` ;
- `html/conduire-une-enquete.html` ;
- `index.html`.

La version HTML de l'architecture fonctionnelle conserve une présentation ancienne qui ne correspond pas à la distinction actuelle des quatre ensembles.

Le contenu consulté comporte notamment des éléments d'une organisation antérieure des composantes, des aspects transversaux et des instruments.

La version Markdown actuelle présente une organisation différente.

La version HTML de Conduire une enquête existe également, mais son alignement intégral avec la source Markdown n'a pas été vérifié.

**Interprétation**

La version HTML de l'architecture fonctionnelle constitue une divergence documentaire établie.

Elle risque de maintenir accessible une représentation dépassée du projet.

La présence de deux versions différentes d'un même document ne permet pas de déterminer laquelle est effectivement utilisée dans le dispositif de publication.

**Décision proposée**

Actualiser ou régénérer la version HTML de l'architecture fonctionnelle à partir de sa source Markdown.

Avant toute intervention, établir le statut technique des fichiers HTML :

- fichiers publiés ;
- fichiers générés ;
- fichiers maintenus manuellement ;
- documents devenus obsolètes.

**Interventions restantes**

1. Déterminer le statut de chaque fichier HTML.
2. Actualiser la version HTML de l'architecture fonctionnelle.
3. Vérifier la version HTML de Conduire une enquête.
4. Contrôler la correspondance des liens et des titres.
5. Vérifier que les versions publiées ne conservent pas d'anciennes définitions.

Ne pas supprimer les fichiers HTML avant d'avoir établi leur fonction.

### 5.6. Liens et références documentaires

**Constat vérifié**

Les documents centraux consultés comportent des références vers les autres ressources du dépôt.

La vérification exhaustive de tous les liens internes n'a pas été réalisée.

**Interprétation**

La cohérence des contenus ne suffit pas à établir l'intégrité de la navigation.

Une page correctement rédigée peut devenir inaccessible à partir de la TDM ou de la barre latérale si son chemin est incorrect.

**Intervention proposée**

Effectuer un contrôle systématique :

- des liens Markdown ;
- des références vers les fichiers déplacés ou absents ;
- des liens entrants vers les anciennes pages ;
- des chemins relatifs dans les fichiers du répertoire `fr/` ;
- des références croisées entre les documents éditoriaux ;
- des liens entre les sources Markdown et les versions HTML.

Aucun lien ne doit être déclaré valide sans vérification de sa destination effective.

## 6. Conduite de l'enquête et temporalité

### 6.1. Conception non linéaire de l'enquête

**Constat vérifié**

`fr/la-chaine-principale-de-l-enquete.md` présente les huit opérations comme un répertoire de référence.

`fr/conduire-une-enquete.md` précise que l'examen procède par mobilisations et reprises d'opérations.

La page distingue le travail effectivement réalisé de la reconstruction ultérieure des relations entre les différents examens.

`fr/plateau-d-enquete.md` présente un dispositif graphique facultatif permettant de représenter les opérations mobilisées et les relations établies ou reconstruites entre elles.

**Interprétation**

Ces ressources développent des fonctions complémentaires :

- la chaîne principale présente les opérations et leurs différences ;
- Conduire une enquête fournit des repères pratiques pour mobiliser les ressources ;
- le plateau permet de représenter certaines relations entre les travaux ;
- Temporaliser examine les rapports entre déroulement, anticipation et reconstruction.

Leur complémentarité ne suffit cependant pas à établir qu'elles ne comportent aucun recouvrement.

Il faut préserver leurs fonctions respectives et éviter de reproduire les mêmes développements dans chacune d'elles.

**Décision validée**

Maintenir la conception non linéaire de l'enquête.

Ne pas présenter la chaîne principale comme une succession nécessaire.

### 6.2. Temporaliser

**Constat vérifié**

`fr/temporaliser.md` développe la temporalité comme fonction transversale.

La page examine les rapports entre :

- le déroulement effectif ;
- les possibilités anticipées ;
- les transformations ;
- la reconstruction rétrospective.

Elle traite notamment de l'effet de nécessité rétrospective, qui peut conduire à attribuer aux événements antérieurs une orientation qu'ils ne possédaient pas nécessairement au moment où ils se produisaient.

Elle mobilise également des rapprochements avec Hegel et Brandom.

**Interprétation**

La contribution propre de cette page ne consiste pas à décrire le déroulement d'une enquête.

Elle consiste à examiner les conditions dans lesquelles une trajectoire devient intelligible depuis une situation ultérieure, sans transformer cette intelligibilité en nécessité antérieure.

La distinction entre déroulement effectif, possibilités prospectives et reconstruction rétrospective doit rester centrale.

**Décision validée**

Préserver la fonction propre de Temporaliser.

Éviter de reproduire son développement théorique intégral dans Conduire une enquête et dans le Plateau d'enquête.

**Intervention restante**

Contrôler les usages du vocabulaire temporel dans les pages consacrées à la transformation, à la stabilisation, à la trajectoire et à la reconstruction.

### 6.3. Le plateau d'enquête

**Constat vérifié**

`fr/plateau-d-enquete.md` présente le plateau comme un dispositif graphique facultatif.

Il permet de représenter les opérations mobilisées, les éléments examinés et les relations qui peuvent être établies ou reconstruites entre eux.

Le dispositif distingue les opérations effectivement réalisées des relations qui deviennent intelligibles au cours de l'examen ou depuis une situation ultérieure.

**Interprétation**

Le plateau ne doit pas être compris comme une représentation d'un chemin unique.

Il sert à conserver des repères concernant des travaux particuliers et à rendre visibles certaines relations entre eux.

Sa valeur dépend de sa capacité à améliorer la compréhension d'une enquête déterminée.

**Décision validée**

Conserver le plateau comme dispositif facultatif de représentation.

Ne pas en faire une composante supplémentaire de l'architecture fonctionnelle.

**Intervention restante**

Évaluer son utilité à partir d'enquêtes concrètes.

### 6.4. Articulation des ressources de conduite

**Constat vérifié**

Les ressources suivantes existent :

- `fr/conduire-une-enquete.md` ;
- `fr/modes-d-intervention-de-l-enquete.md` ;
- `fr/orientation-et-chemin-de-l-enquete.md` ;
- `fr/plateau-d-enquete.md` ;
- `fr/resultats-de-l-enquete.md`.

`fr/orientation-et-chemin-de-l-enquete.md` porte actuellement le titre « Articulation des orientations et des opérations ».

Sa fonction déclarée est d'examiner la relation entre les orientations et les opérations, sans redéfinir ces deux ensembles.

`fr/modes-d-intervention-de-l-enquete.md` examine la manière dont les ressources sont mobilisées, articulées et reprises.

`fr/resultats-de-l-enquete.md` examine le statut des résultats et leur portée.

**Interprétation**

Les fonctions annoncées permettent de distinguer plusieurs problèmes :

- comment conduire un examen ;
- comment articuler les orientations et les opérations ;
- comment mobiliser les ressources ;
- comment représenter les relations entre les travaux ;
- comment caractériser les résultats obtenus.

Ces différences justifient provisoirement le maintien de plusieurs pages.

Elles ne démontrent pas encore que les contenus sont parfaitement complémentaires.

**Décision proposée**

Conserver provisoirement ces ressources séparées.

Ne pas envisager leur fusion sur la seule base de leur proximité thématique.

**Intervention restante**

Examiner leurs contenus complets et leurs renvois respectifs pour identifier les répétitions fonctionnelles éventuelles.

## 7. Frontières conceptuelles à examiner

Les distinctions suivantes constituent des axes de vigilance.

Elles ne doivent pas être considérées comme des incohérences établies du seul fait que les notions concernées apparaissent dans plusieurs pages.

### 7.1. Régimes descriptifs et registres

**Constat vérifié**

Le corpus possède des ressources consacrées aux régimes descriptifs, aux registres, aux catégories et à leur cartographie.

`fr/une-premiere-cartographie-des-regimes-descriptifs.md` est présent dans le périmètre consulté.

**Interprétation**

Les notions de régime, de registre, de catégorie et de pratique ne doivent pas devenir des classifications concurrentes.

Leur maintien doit dépendre des différences analytiques qu'elles permettent effectivement de traiter.

**Intervention proposée**

Examiner les relations entre :

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

Examiner les relations entre :

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

Il convient de préserver les différences entre :

- cause ;
- raison ;
- condition ;
- critère ;
- engagement ;
- justification.

Une relation entre ces notions ne suffit pas à établir leur identité.

**Intervention proposée**

Examiner les relations entre les pages concernées à partir de problèmes concrets, plutôt que multiplier les définitions générales.

### 7.4. Explication et justification

**Constat vérifié**

`fr/explication.md` distingue l'explication de la description, de l'identification d'une cause, de l'examen d'une fonction et de la justification d'une conclusion.

La page précise que la portée d'une explication dépend de la question posée et des exigences auxquelles elle doit satisfaire.

**Interprétation**

Cette distinction est cohérente avec l'exigence de non-conversion automatique.

Une explication causale ne constitue pas, par elle-même, une justification.

Inversement, une justification ne dispense pas nécessairement d'examiner les conditions de production d'une situation.

**Décision proposée**

Préserver cette différenciation.

Vérifier que les autres pages ne réintroduisent pas une assimilation entre explication, cause et justification.

### 7.5. Temporalité et transformation

**Interprétation**

Les notions de trajectoire, transition, transformation, stabilisation et sédimentation peuvent se recouvrir lorsqu'elles sont employées sans précision.

Leur maintien doit dépendre des problèmes distincts qu'elles permettent de traiter.

**Intervention proposée**

Examiner les usages de ces notions dans les pages concernées.

Ne pas engager de simplification terminologique ou de fusion sans avoir établi les conséquences analytiques de ces distinctions.

### 7.6. Configuration et opération Configurer

**Constat vérifié**

`fr/configuration.md` définit la configuration comme une organisation déterminée d'éléments, de relations et de dépendances au regard d'un problème.

La page distingue explicitement la notion de configuration de l'opération Configurer.

**Interprétation**

Cette distinction est importante pour éviter de confondre :

- ce qui est organisé ou reconstruit dans une configuration ;
- le travail d'examen par lequel l'enquête organise les éléments et les relations pertinents.

La distinction doit être maintenue dans les pages qui utilisent ces notions.

**Décision proposée**

Conserver les deux ressources.

**Intervention restante**

Examiner les pages consacrées à la configuration descriptive, à la configuration rencontrée et à la configuration sémiotique pour vérifier leurs rapports avec la définition générale.

### 7.7. Critère, norme et justification

**Constat vérifié**

`fr/critere.md` définit le critère comme un repère ou une exigence au regard duquel une attribution, une description ou une conclusion peut être évaluée dans une pratique déterminée.

La page précise qu'elle ne développe pas à nouveau la théorie des raisons et de la justification.

**Interprétation**

Cette délimitation contribue à préserver la fonction propre de la page.

Il reste nécessaire de vérifier que les notions de critère, de norme, de règle et de raison ne sont pas utilisées comme des synonymes.

**Décision proposée**

Maintenir la définition du critère comme ressource d'évaluation.

**Intervention restante**

Examiner ses relations avec les pages consacrées à la norme descriptive, à la validité, à la recevabilité et à la justification.

### 7.8. Références philosophiques et engagements de Protokin

**Constat vérifié**

Le corpus contient notamment des développements consacrés à Wilfrid Sellars et Joseph Rouse.

Les pages consultées présentent leurs contributions comme des ressources philosophiques pour examiner les pratiques descriptives et scientifiques.

Elles ne les présentent pas comme des fondements qui garantiraient les conclusions de Protokin.

**Interprétation**

La fonction de ces pages doit rester celle de ressources théoriques situées.

Une référence philosophique ne doit pas être mobilisée comme une autorité qui dispenserait de justifier une proposition.

Les rapprochements doivent être suffisamment précis pour éviter de transformer une proximité conceptuelle en identité doctrinale.

**Décision validée**

Conserver les pages consacrées aux auteurs sans les fusionner du seul fait de leurs proximités théoriques.

**Intervention restante**

Poursuivre l'examen des contributions respectives de Sellars, Brandom, Rouse, Dewey et Peirce en fonction des problèmes auxquels elles apportent effectivement des ressources.

## 8. Épreuve de l'architecture par les études de cas

### 8.1. Principe

**Constat méthodologique**

Le corpus comporte plusieurs études de cas susceptibles de confronter les ressources de Protokin à des situations déterminées.

La présence d'exemples ne suffit cependant pas à établir la fécondité de l'architecture.

Une étude de cas peut simplement reprendre les distinctions déjà disponibles sans examiner leur pertinence.

**Interprétation**

Une étude de cas doit permettre de déterminer ce que les ressources de Protokin rendent effectivement examinable et ce qu'elles ne permettent pas encore de traiter.

Elle doit également laisser ouverte la possibilité que les distinctions initiales soient insuffisantes ou inadéquates.

### 8.2. Cas à examiner prioritairement

Les cas suivants constituent des points d'appui possibles.

**Le botaniste et le bûcheron**

Ce cas permet d'examiner plusieurs descriptions d'une même situation forestière.

Il peut notamment mettre en regard :

- les catégories de gestion sylvicole ;
- les catégories écologiques ;
- les descriptions fondées sur les usages ;
- les critères de décision ;
- les relations entre les différents acteurs.

La question n'est pas de déterminer quelle description est globalement supérieure, mais d'examiner leurs fonctions, leurs engagements, leurs différences et les conditions de leur coordination.

**Pont Saint-Bénezet**

Ce cas permet d'examiner les relations entre dégradation d'un ouvrage, entretien, continuité du franchissement et décisions d'abandon.

Il peut notamment confronter les descriptions techniques, historiques, administratives et politiques.

**Conscience artificielle — Chiang et Bentham**

Ce cas permet d'examiner les rapports entre comportement observable, fonctionnement computationnel et attribution d'une expérience subjective.

Il peut notamment mettre à l'épreuve les passages entre critères comportementaux, descriptions fonctionnelles et conclusions concernant la conscience.

### 8.3. Interventions proposées

Pour chacun des cas retenus :

1. Décrire les éléments effectivement disponibles.
2. Identifier les descriptions produites et leurs auteurs ou pratiques d'origine.
3. Examiner les catégories et les critères mobilisés.
4. Distinguer les conclusions soutenues des interprétations proposées.
5. Repérer les relations et les passages qui nécessitent une justification.
6. Déterminer quelles opérations ont effectivement contribué à l'examen.
7. Identifier les orientations utiles.
8. Examiner les limites des instruments mobilisés.
9. Déterminer si une ressource de Protokin s'est révélée insuffisante.
10. Consigner les éventuelles révisions de l'organisation initiale.

Cette liste constitue un repère pour l'analyse des cas, non une procédure obligatoire.

### 8.4. Résultat attendu

Les études de cas doivent permettre de distinguer :

- les ressources simplement mobilisées ;
- les ressources qui ont effectivement contribué à résoudre une difficulté ;
- les ressources qui se sont révélées insuffisantes ;
- les distinctions dont la portée a dû être modifiée ;
- les problèmes qui restent ouverts.

**Principe de contrôle**

Une enquête ne démontre pas la fécondité de Protokin simplement parce qu'elle peut être décrite dans le vocabulaire du projet.

Elle doit permettre d'identifier un gain analytique et de rendre visibles les limites des ressources mobilisées.

## 9. Registre des interventions

Le tableau suivant distingue les interventions effectivement constatées, les décisions maintenues et les travaux restant à effectuer.

| Intervention ou état | Fichier concerné | Statut |
|---|---|---|
| Définition des opérations comme travaux de second ordre | `pattern-audit.md` | Modification appliquée |
| Présentation des opérations dans le README | `README.md` | Conforme au constat vérifié |
| Présentation des quatre ensembles fonctionnels | `fr/architecture-fonctionnelle-de-l-enquete.md` | Présent |
| Présentation des opérations de référence | `fr/la-chaine-principale-de-l-enquete.md` | Présent |
| Développement des orientations | `fr/orientation-de-l-examen.md` | Présent |
| Suppression de l'ancienne quadripartition | `fr/quadripartition-de-l-orientation.md` | Fichier absent |
| Articulation des orientations et opérations | `fr/orientation-et-chemin-de-l-enquete.md` | Présent |
| Révision des repères de conduite | `fr/conduire-une-enquete.md` | Présent |
| Développement de la temporalité | `fr/temporaliser.md` | Présent |
| Représentation des relations entre opérations | `fr/plateau-d-enquete.md` | Présent |
| Distinction entre instruments et reprise | `pattern-tdm.md` | Présente ; formulation à clarifier en section 3.4 |
| Organisation de la TDM | `fr/tdm.md` | Présente |
| Présence de Temporaliser dans la navigation | `_sidebar.md` | Vérifiée |
| Synchronisation de l'architecture HTML | `html/architecture-fonctionnelle-de-l-enquete.html` | À corriger |
| Contrôle de la version HTML de la conduite | `html/conduire-une-enquete.html` | À vérifier |
| Vérification des liens internes | Ensemble du dépôt | À effectuer |
| Examen des frontières entre régimes et registres | Pages concernées | À approfondir |
| Examen des fonctions respectives des ressources de conduite | Pages concernées | À approfondir |
| Épreuve approfondie par les études de cas | Études de cas | À poursuivre |

Les statuts sont employés dans leur sens strict :

- **Présent** signifie que le fichier ou le contenu annoncé a été constaté.
- **Modification appliquée** signifie que le changement est déjà observable dans le dépôt.
- **À corriger** signifie qu'une intervention est justifiée par un écart constaté.
- **À vérifier** signifie que les éléments disponibles ne permettent pas encore de conclure.
- **À approfondir** signifie que le problème est identifié mais que ses conséquences ne sont pas encore suffisamment établies.

La rédaction du présent audit ne constitue pas une modification du dépôt.

Aucune intervention ne doit être déclarée effectuée sans vérification de son résultat.

## 10. Priorités de traitement

Les priorités suivantes tiennent compte des corrections déjà réalisées. Elles ne reconduisent pas automatiquement les demandes de l'ancien audit.

### Priorité 1 — Synchronisation des documents de référence et des versions publiées

- Corriger la version HTML de l'architecture fonctionnelle.
- Vérifier la version HTML de Conduire une enquête.
- Contrôler la formulation de la Reprise dans `pattern-tdm.md`.
- Vérifier les correspondances entre README, architecture du projet, architecture fonctionnelle et TDM.

**Résultat attendu :** les différentes ressources de consultation présentent une organisation cohérente et actuelle.

### Priorité 2 — Contrôle des ressources de conduite

- Examiner les fonctions respectives de `fr/conduire-une-enquete.md` et `fr/modes-d-intervention-de-l-enquete.md`.
- Examiner la contribution propre de `fr/orientation-et-chemin-de-l-enquete.md`.
- Vérifier les relations avec `fr/plateau-d-enquete.md`.
- Contrôler les renvois vers `fr/resultats-de-l-enquete.md`.
- Préserver la distinction entre déroulement effectif et reconstruction rétrospective.

**Résultat attendu :** chaque page contribue à un problème identifiable sans reproduire les développements des autres ressources.

### Priorité 3 — Vérification des distinctions structurantes

- Statut des opérations.
- Différence entre orientation et opération.
- Différence entre configuration et Configurer.
- Statut des aspects transversaux.
- Différence entre instruments d'épreuve et reprise.
- Statut de l'explication et de l'audit.
- Distinction entre critère, norme et justification.

**Résultat attendu :** les distinctions conservées correspondent à des différences analytiques effectives.

### Priorité 4 — Frontières conceptuelles et éditoriales

- Régimes et registres.
- Description, objet et référent.
- Inférence et justification.
- Explication et justification.
- Temporalité et transformation.
- Fonction des notions et fonction des opérations.
- Relations entre les références philosophiques et les engagements propres de Protokin.

**Résultat attendu :** les notions et les pages spécialisées conservent une fonction propre et suffisamment déterminée.

### Priorité 5 — Épreuve de l'architecture

- Reprendre les études de cas.
- Examiner les ressources réellement mobilisées.
- Identifier les difficultés persistantes.
- Évaluer les gains analytiques.
- Réviser les ressources lorsque les cas font apparaître leurs limites.

**Résultat attendu :** l'organisation de Protokin est confrontée à des difficultés qui ne sont pas définies uniquement à partir de ses propres catégories.

### Priorité 6 — Contrôle documentaire exhaustif

- Vérifier l'ensemble des fichiers référencés.
- Contrôler les liens internes.
- Identifier les références obsolètes.
- Vérifier les ressources HTML.
- Comparer la navigation et la TDM.
- Identifier les éventuelles pages non référencées.
- Établir un état vérifié des ressources présentes et absentes.

**Résultat attendu :** l'intégrité documentaire du dépôt peut être établie sur une base vérifiable.

## 11. Questions ouvertes

Les questions suivantes ne sont pas considérées comme résolues.

### Architecture fonctionnelle

1. Les quatre ensembles fonctionnels actuels suffisent-ils à organiser les ressources effectivement mobilisées dans les enquêtes ?
2. Les catégories regroupant les opérations apportent-elles un gain réel de repérage sans introduire une hiérarchie implicite ?
3. Les huit opérations possèdent-elles toutes une fonction suffisamment distincte dans les enquêtes concrètes ?
4. Les quatre orientations permettent-elles de traiter les principales différences entre les questions d'examen ?
5. La distinction entre aspects transversaux, modalités d'examen et instruments d'épreuve reste-t-elle adéquate dans les situations effectivement étudiées ?
6. Certaines opérations ou orientations doivent-elles être révisées, abandonnées ou remplacées à la lumière des cas examinés ?

### Explication, audit et épreuve

7. Dans quelles conditions l'explication relève-t-elle d'une production descriptive de premier ordre, d'un objet d'examen ou d'un travail mobilisant plusieurs opérations ?
8. Auditer possède-t-il une contribution suffisamment distincte de la réflexivité ?
9. La position de l'auditeur implique-t-elle des exigences spécifiques de responsabilité ?
10. L'épreuve doit-elle rester une exigence générale de confrontation ou certaines de ses modalités demandent-elles un traitement fonctionnel supplémentaire ?
11. La distinction entre instruments d'épreuve et reprise permet-elle de rendre compte des différents réexamens effectivement conduits ?

### Organisation documentaire

12. Les pages consacrées à la conduite de l'enquête présentent-elles des fonctions suffisamment distinctes ?
13. Les versions HTML ont-elles toutes un statut éditorial et technique clairement établi ?
14. La navigation actuelle donne-t-elle un accès satisfaisant aux ressources importantes ?
15. Les études de cas disposent-elles d'une fonction suffisamment différenciée par rapport aux pages conceptuelles et aux pages de méthode ?
16. Certaines pages présentent-elles des recouvrements fonctionnels qui justifieraient une révision, un déplacement ou une fusion ?

### Frontières conceptuelles

17. Les distinctions entre régimes descriptifs et registres sont-elles suffisamment opératoires ?
18. La distinction entre objet, référent et description permet-elle de traiter les difficultés d'identification sans présupposer une ontologie particulière ?
19. Les relations entre critère, norme, raison et justification sont-elles suffisamment explicites ?
20. Les notions de transformation, de stabilisation et de trajectoire remplissent-elles des fonctions distinctes ?
21. Les références philosophiques contribuent-elles effectivement à l'examen des problèmes ou conduisent-elles parfois à multiplier les rapprochements théoriques sans gain analytique identifiable ?

### Fécondité de Protokin

22. Les ressources permettent-elles d'examiner des difficultés qui ne sont pas déjà organisées par leurs propres distinctions ?
23. Les enquêtes peuvent-elles conduire à abandonner une opération, à modifier une orientation ou à réorganiser l'architecture ?
24. Quels résultats permettent de distinguer un véritable gain analytique d'une simple reformulation des descriptions initiales ?
25. Quelles limites doivent être reconnues lorsque les éléments disponibles ne permettent pas de départager plusieurs descriptions ?
26. Dans quelles conditions une enquête doit-elle conclure que les ressources disponibles sont insuffisantes pour produire une détermination satisfaisante ?

Ces questions restent ouvertes jusqu'à ce que des examens suffisamment précis permettent d'y répondre.

## 12. Conditions de révision de l'audit

Le présent document doit être actualisé lorsque :

- un document de référence est modifié ;
- une distinction structurante est introduite, révisée ou abandonnée ;
- une nouvelle page modifie les relations entre les ressources ;
- une difficulté apparaît dans une étude de cas ;
- une divergence documentaire est corrigée ;
- une question ouverte reçoit un traitement suffisamment étayé ;
- une ressource précédemment inaccessible devient consultable ;
- un contrôle documentaire permet d'établir de nouveaux constats.

Toute actualisation doit :

1. Identifier la branche et le commit examinés.
2. Préciser le périmètre effectivement consulté.
3. Distinguer les constats nouveaux des constats antérieurs.
4. Ne pas reconduire comme actuelles les difficultés déjà corrigées.
5. Distinguer les décisions proposées des décisions validées.
6. Distinguer les modifications appliquées des modifications vérifiées.
7. Conserver les questions qui restent ouvertes.
8. Signaler explicitement les fichiers absents, inaccessibles ou non vérifiés.

Le présent audit n'est pas un historique exhaustif de toutes les modifications du dépôt.

Il conserve les décisions et les difficultés dont la connaissance demeure utile à l'organisation du corpus.

Une difficulté corrigée ne doit pas continuer à être présentée comme une divergence actuelle.

Une décision validée ne doit pas être confondue avec une modification appliquée.

Une modification appliquée ne doit pas être déclarée vérifiée sans contrôle de ses conséquences.

Une question ouverte ne doit pas être transformée en recommandation de modification sans justification supplémentaire.

## 13. Principe directeur

L'audit ne vise pas à protéger l'organisation actuelle de Protokin contre sa propre révision.

Il vise à déterminer si les ressources documentaires et fonctionnelles permettent effectivement d'examiner les difficultés auxquelles le projet entend répondre.

La cohérence du corpus est une condition de lisibilité, non une preuve de sa fécondité.

Les catégories, les opérations, les orientations, les aspects transversaux, les instruments et les notions doivent pouvoir être contestés à partir de leurs usages effectifs.

L'organisation documentaire doit également rester révisable : une page peut être déplacée, redéfinie, scindée ou supprimée lorsque sa fonction n'est plus suffisamment justifiée.

**L'organisation de Protokin doit rester révisable à partir des difficultés que les enquêtes font apparaître, y compris lorsque ces difficultés mettent en question ses propres distinctions.**
