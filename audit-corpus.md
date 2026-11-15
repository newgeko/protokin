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

L'audit porte sur le corpus lui-même, y compris sur ses documents de référence, ses ressources spécialisées, ses instruments d'organisation et ses propres principes éditoriaux.

Aucune ressource ne doit être soustraite à l'examen en raison de sa place dans l'organisation actuelle.

L'architecture existante constitue un état de référence provisoire, et non un cadre dont la validité serait présupposée.

La cohérence documentaire est une condition de lisibilité du projet. Elle ne constitue pas une preuve de la pertinence de ses distinctions ni de la fécondité de ses ressources.

## 2. État de référence du dépôt

### 2.1. Version examinée

| Élément | État |
|---|---|
| Dépôt | `newgeko/protokin` |
| Branche | `main` |
| Branche par défaut | `main` |
| Commit de référence identifié | `3147edefcb8c261df6ad8bb521dfde0f334aa7b3` |
| Date du commit | 15 novembre 2026 |
| Dernière modification identifiée | `pratiques-stabilisations-et-revisions.md` |
| Fichier d'audit actualisé | `audit-corpus.md` |

Commit de référence :

https://github.com/newgeko/protokin/commit/3147edefcb8c261df6ad8bb521dfde0f334aa7b3

Le dernier commit identifié modifie `pratiques-stabilisations-et-revisions.md`.

La présente révision prend pour référence le contenu effectivement consulté sur la branche `main`, au commit indiqué.

La version antérieure de l'audit faisait référence au commit :

`76abf8ee22186883f52ba0ed0a3dbcbc56cc9e68`

Elle ne constitue donc plus un état de référence suffisant.

Les constats antérieurs sont conservés lorsqu'ils demeurent pertinents, mais ne sont pas reconduits automatiquement comme constats actuels.

### 2.2. Périmètre effectivement examiné

L'examen a porté prioritairement sur les documents structurants, les ressources récemment modifiées et plusieurs pages spécialisées permettant de vérifier les distinctions centrales.

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
- `fr/theme.md`
- `fr/tension.md`
- `fr/motif.md`
- `fr/de-la-notion-au-concept.md`
- `fr/pratiques-stabilisations-et-revisions.md`
- `fr/registres.md`

**Références philosophiques**

- `fr/wilfrid-sellars.md`
- `fr/joseph-rouse.md`

**Études de cas**

Les ressources suivantes appartiennent au périmètre documentaire de l'examen antérieur :

- `fr/botaniste-bucheron.md`
- `fr/pont-saint-benezet.md`
- `fr/conscience-ia-chiang-bentham.md`

Leur contenu n'a pas fait l'objet d'une nouvelle vérification intégrale dans le présent examen.

**Versions HTML**

Les versions HTML suivantes avaient été signalées dans l'audit précédent :

- `html/architecture-fonctionnelle-de-l-enquete.html`
- `html/conduire-une-enquete.html`

Leur présence et leur correspondance avec les versions Markdown n'ont pas été vérifiées dans le présent examen.

Ce périmètre permet d'établir plusieurs constats transversaux et de repérer des incohérences vérifiables.

Il ne constitue pas une validation individuelle de toutes les pages du corpus ni un inventaire exhaustif de l'ensemble du dépôt.

### 2.3. Fichiers absents, accessibles et non vérifiés

Il convient de distinguer l'absence d'un fichier, son inaccessibilité et l'absence de vérification de son contenu.

| Fichier ou ressource | État vérifié |
|---|---|
| `README.md` | Présent et consulté |
| `patterns.md` | Présent et consulté |
| `pattern-audit.md` | Présent et consulté |
| `pattern-tdm.md` | Présent et consulté |
| `audit-corpus.md` | Présent ; ancienne version à remplacer |
| `corpus-audit.md` | Absent |
| `fr/architecture-projet.md` | Présent et consulté |
| `fr/architecture-fonctionnelle-de-l-enquete.md` | Présent et consulté |
| `fr/tdm.md` | Présent et consulté |
| `_sidebar.md` | Présent et consulté |
| `fr/conduire-une-enquete.md` | Présent et partiellement examiné |
| `fr/temporaliser.md` | Présent et consulté |
| `fr/plateau-d-enquete.md` | Présent et consulté |
| `fr/orientation-de-l-examen.md` | Présent et consulté |
| `fr/theme.md` | Présent et consulté |
| `fr/tension.md` | Présent et consulté |
| `fr/motif.md` | Présent et consulté |
| `fr/de-la-notion-au-concept.md` | Présent et consulté |
| `fr/pratiques-stabilisations-et-revisions.md` | Présent et consulté |
| `fr/registres.md` | Présent |
| `fr/registre.md` | Absent |
| `fr/quadripartition-de-l-orientation.md` | Absent de la branche examinée |
| `fr/regimes-culturels-et-scientifiques-d-intelligibilite.md` | Présent |
| `regimes-culturels-et-scientifiques-d-intelligibilite.md` | Absent à la racine |
| `html/architecture-fonctionnelle-de-l-enquete.html` | Non vérifié |
| `html/conduire-une-enquete.html` | Non vérifié |

L'absence de `fr/quadripartition-de-l-orientation.md` est cohérente avec l'abandon de l'ancienne organisation. Elle ne justifie pas de recréer cette page.

L'absence de `corpus-audit.md` ne constitue pas une anomalie : le fichier de suivi effectivement utilisé est `audit-corpus.md`.

En revanche, l'absence du fichier racine `regimes-culturels-et-scientifiques-d-intelligibilite.md` est importante pour le contrôle d'un lien de navigation, car la ressource existe sous `fr/`.

Les contenus de l'ensemble des ressources spécialisées n'ont pas été intégralement vérifiés.

Les statistiques relatives au nombre de fichiers et à la taille du corpus ne sont pas reconduites : elles n'ont pas fait l'objet d'un inventaire exhaustif actualisé.

Aucun fichier absent ne doit être reconstitué à partir de son ancien intitulé ou de références indirectes.

## 3. État général du projet

### 3.1. Positionnement de Protokin

**Constat vérifié**

Le README présente Protokin comme une démarche d'enquête pragmatiste, inférentialiste et réflexive, méthodologiquement non ontologique.

Il précise que le projet organise des ressources destinées à examiner les difficultés rencontrées dans les pratiques descriptives.

Il distingue notamment :

- l'existence ;
- l'identification ;
- la détermination descriptive.

Il précise également que la démarche ne suppose pas que les pratiques produisent intégralement ce qu'elles décrivent.

Le README maintient le principe suivant :

> La cohérence d'une description ne suffit pas à établir son adéquation à ce qu'elle prétend décrire.

Il présente enfin l'architecture comme un ensemble de ressources situées et révisables.

**Interprétation**

Le positionnement général est désormais identifiable et suffisamment différencié.

Le README ne cherche plus à présenter Protokin comme une ontologie générale, un système universel ou une représentation exhaustive de l'enquête.

Il distingue correctement l'organisation des ressources du projet et leur mobilisation dans une situation déterminée.

Le problème principal n'est donc plus celui d'une présentation générale insuffisamment définie.

Il concerne désormais la capacité du corpus à transformer ce positionnement en ressources effectivement mobilisables et à examiner les difficultés que ses propres distinctions ne permettent pas de résoudre.

**Décision validée**

Conserver le positionnement actuel du README comme référence de présentation.

Éviter de multiplier les reformulations générales dans les pages spécialisées.

Concentrer les révisions sur la contribution effective des ressources et sur les difficultés qu'elles permettent de traiter.

### 3.2. Révision réciproque des descriptions et des ressources d'examen

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue les ressources descriptives de premier ordre et les ressources d'examen.

Il précise que l'examen d'une description peut conduire à modifier les ressources qui ont servi à la construire.

Inversement, une difficulté rencontrée dans l'examen peut conduire à réviser les opérations, les orientations ou les instruments mobilisés.

`fr/enquete-et-organisation-des-notions.md` développe également la possibilité de mobiliser une notion avant de prendre cette même notion comme objet d'examen.

`fr/pratiques-stabilisations-et-revisions.md` précise comment une activité peut être reprise sous la forme d'un résultat identifié, nommé et éventuellement stabilisé comme ressource conceptuelle.

**Interprétation**

La révision réciproque constitue un principe important de Protokin.

Elle évite de concevoir l'examen comme une activité extérieure qui ne pourrait jamais affecter les pratiques étudiées.

Elle permet également de reconnaître que les ressources d'examen ne sont pas soustraites à leur propre examen.

Cependant, cette révisabilité reste à éprouver dans les études de cas.

Il faut pouvoir identifier des situations dans lesquelles une difficulté rencontrée conduit effectivement à modifier une distinction, une opération, une catégorie ou une organisation documentaire.

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

Cette précision permet de maintenir une distinction entre la manière dont un objet est identifié et décrit, et les conditions dans lesquelles les affirmations portant sur cet objet peuvent être soutenues.

La démarche ne doit donc pas être comprise comme une relativisation générale des descriptions.

Le caractère situé des descriptions ne dispense pas d'examiner leur adéquation, leurs conditions de correction et les éléments susceptibles de les contester.

**Décision validée**

Maintenir la distinction entre existence, identification et détermination descriptive.

Veiller à ce que les pages spécialisées ne transforment pas la médiation descriptive en dépendance ontologique systématique.

### 3.4. Fonction propre des pages et organisation du corpus

**Constat vérifié**

`fr/architecture-projet.md` distingue les fonctions documentaires, les relations entre les pages et les centres de gravité du corpus.

Il présente trois centres :

- le centre de l'enquête ;
- le centre conceptuel ;
- le centre réflexif et éditorial.

Il précise que ces regroupements ne constituent ni une hiérarchie ni une architecture supplémentaire.

**Interprétation**

Cette organisation peut faciliter la compréhension des contributions principales du projet.

Elle présente néanmoins un risque : les centres de gravité pourraient devenir, dans leur utilisation, une classification supplémentaire qui ferait double emploi avec les fonctions documentaires et les rubriques de la TDM.

Cette difficulté n'est pas établie comme une incohérence. Elle demande à être examinée à partir de l'usage réel de ces regroupements.

**Décision proposée**

Conserver provisoirement les trois centres de gravité.

Ne pas les transformer en catégories obligatoires de classement.

Examiner leur utilité lors d'une prochaine révision de l'organisation documentaire.

## 4. Architecture fonctionnelle de l'enquête

### 4.1. Organisation actuelle

**Constat vérifié**

`fr/architecture-fonctionnelle-de-l-enquete.md` distingue quatre ensembles de ressources :

1. Les opérations.
2. Les orientations.
3. Les aspects transversaux.
4. Les instruments d'épreuve.

Les catégories regroupent certaines opérations afin de faciliter leur repérage. Elles ne constituent pas un ensemble supplémentaire.

La page distingue également :

- les ressources descriptives de premier ordre ;
- les ressources d'examen de second ordre ;
- les objets de l'examen ;
- les modes d'intervention ;
- les dimensions de la connaissance ;
- les ressources théoriques.

Ces éléments ne sont pas assimilés automatiquement aux quatre ensembles fonctionnels.

**Interprétation**

Cette organisation permet de différencier des ressources qui interviennent dans un même examen sans remplir la même fonction.

Elle constitue un état de référence documentaire suffisamment précis pour poursuivre le travail.

Sa cohérence interne ne suffit cependant pas à établir qu'elle est adéquate à toutes les situations.

**Décision validée**

Maintenir provisoirement les quatre ensembles comme référence de travail.

Ne pas considérer cette organisation comme une classification exhaustive ou définitive.

### 4.2. Statut des opérations : incohérence interne à corriger

**Constat vérifié**

L'architecture fonctionnelle définit initialement les opérations comme des travaux d'examen de second ordre portant sur les pratiques descriptives.

Elle précise que les opérations ne se confondent pas avec les activités des pratiques étudiées.

Les huit opérations actuellement distinguées sont :

- Délimiter ;
- Ancrer ;
- Distinguer ;
- Relier ;
- Configurer ;
- Justifier ;
- Reconstituer ;
- Redélimiter.

Le README et `fr/architecture-projet.md` présentent également les opérations comme des travaux d'examen.

Cependant, la section 7 de `fr/architecture-fonctionnelle-de-l-enquete.md` contient la formulation suivante :

> Les opérations désignent des activités descriptives.

Cette formulation contredit la définition initiale et la synthèse du même document.

Le `pattern-tdm.md`, dans sa section 2.3, parle également des opérations comme de « travaux descriptifs ».

**Interprétation**

Il ne s'agit pas d'une simple variation stylistique.

La distinction entre activités descriptives de premier ordre et travaux d'examen de second ordre est structurante pour Protokin.

Une activité telle que mesurer, observer, classer, interpréter ou décider peut appartenir à la pratique étudiée.

Une opération telle que Délimiter, Ancrer, Distinguer, Relier, Configurer, Justifier, Reconstituer ou Redélimiter désigne un travail d'examen portant sur cette pratique.

La formulation contradictoire risque de réintroduire une confusion entre les deux plans.

Elle affecte directement la compréhension de l'architecture et sa transmission dans la TDM.

**Décision validée**

Maintenir la définition des opérations comme travaux d'examen de second ordre.

Ne pas assimiler les opérations aux activités descriptives de premier ordre.

**Modifications à réaliser**

1. Dans `fr/architecture-fonctionnelle-de-l-enquete.md`, section 7, remplacer « les opérations désignent des activités descriptives » par une formulation cohérente avec la définition initiale.
2. Dans `pattern-tdm.md`, section 2.3, remplacer « travaux descriptifs » par « travaux d'examen ».
3. Vérifier que la distinction est conservée dans les pages consacrées à la conduite de l'enquête et aux opérations.
4. Vérifier les éventuelles versions HTML après correction.

Cette correction est prioritaire.

### 4.3. Statut des orientations

**Constat vérifié**

`fr/orientation-de-l-examen.md` distingue quatre orientations :

- Condition ;
- Relation ;
- Fonction ;
- Justification.

Une orientation précise le rapport sous lequel une situation, une pratique, une description, une opération ou un résultat est examiné.

Elle ne prescrit pas le travail nécessaire pour répondre à la question posée.

La page distingue également l'asymétrie des orientations : Justification possède une portée réflexive et transversale particulière, sans constituer une instance extérieure à l'enquête.

L'ancienne page `fr/quadripartition-de-l-orientation.md` est absente de la branche examinée.

**Interprétation**

L'organisation actuelle est cohérente avec l'abandon de l'ancienne quadripartition.

L'introduction de Fonction parmi les orientations permet d'examiner le rôle et la contribution d'un élément dans une pratique, sans confondre cette question avec les conditions de production ou les relations entre éléments.

L'asymétrie de Justification mérite d'être conservée : elle permet d'examiner les raisons et les engagements associés aux affirmations produites sous les autres orientations.

Cette organisation reste néanmoins une construction méthodologique. Sa pertinence doit être évaluée à partir des questions qu'elle permet effectivement de différencier.

**Décision validée**

Conserver provisoirement les quatre orientations actuelles.

Ne pas réintroduire l'ancienne quadripartition.

Maintenir la distinction entre l'opération Justifier et l'orientation Justification.

**Intervention restante**

Vérifier les références historiques résiduelles à l'ancienne organisation dans les pages spécialisées.

Ne pas supprimer les mentions historiques lorsqu'elles permettent de documenter l'évolution du projet.

### 4.4. Aspects transversaux et temporalisation

**Constat vérifié**

L'architecture fonctionnelle distingue deux aspects transversaux :

- Temporalité ;
- Réflexivité.

`fr/temporaliser.md` présente Temporaliser comme une fonction transversale.

La page distingue trois dimensions :

- la temporalité effective ;
- la temporalité prospective ;
- la temporalité rétrospective.

Elle examine notamment les effets de nécessité rétrospective et le problème de la reconstruction d'une trajectoire depuis une situation ultérieure.

Elle mobilise le rapprochement avec Hegel et Brandom pour préciser comment une configuration présente peut rendre intelligibles des dépendances antérieures sans démontrer que le résultat était nécessaire dès le commencement.

**Interprétation**

La distinction entre temporalité effective, prospective et rétrospective apporte une précision importante à l'architecture.

Elle permet de ne pas confondre :

- le déroulement effectif des événements ;
- ce qui pouvait être anticipé au moment où ils se produisaient ;
- les relations qui deviennent intelligibles depuis une situation ultérieure.

Cette distinction concerne aussi bien les pratiques descriptives étudiées que l'histoire de l'enquête elle-même.

La fonction Temporaliser ne constitue pas une opération supplémentaire.

Une précision terminologique reste utile : l'architecture désigne un aspect transversal par le nom Temporalité, tandis que la page spécialisée désigne la fonction d'examen par le verbe Temporaliser.

Cette différence paraît justifiable, mais doit rester explicite dans les autres pages.

**Décision validée**

Conserver la distinction entre Temporalité et Temporaliser lorsqu'elle permet de différencier la dimension examinée et le travail transversal correspondant.

Maintenir Temporaliser comme fonction transversale, non comme opération supplémentaire.

**Intervention restante**

Vérifier que les pages spécialisées ne présentent pas Temporaliser comme une étape ou une opération obligatoire.

Examiner les rapports entre Temporalité et Réflexivité sans les assimiler.

### 4.5. Explication, Audit et Épreuve

**Constat vérifié**

Les documents consultés distinguent plusieurs fonctions :

- **Explication** : activité descriptive possible, réponse à une question ou objet d'examen.
- **Audit** : fonction d'examen critique susceptible de mobiliser plusieurs opérations.
- **Épreuve** : exigence générale de confrontation des descriptions, des distinctions et des conclusions.

`fr/explication.md` développe le statut de l'explication.

`fr/auditeur.md` présente la position de l'auditeur.

L'architecture ne les classe pas automatiquement parmi les opérations, les aspects transversaux ou les instruments.

**Interprétation**

Ces termes ne désignent pas des ressources de même nature.

L'explication peut appartenir aux pratiques descriptives de premier ordre, devenir un objet d'examen ou mobiliser plusieurs opérations.

Auditer désigne une fonction critique qui peut intervenir transversalement. L'auditeur désigne une position discursive et pratique.

L'épreuve exprime une exigence générale de confrontation. Elle ne se confond pas avec les moyens particuliers qui permettent de la mettre en œuvre.

La distinction entre Audit et Réflexivité mérite cependant de rester ouverte à l'examen.

La réflexivité concerne la capacité de l'enquête à examiner ses propres conditions, ses ressources et ses limites. L'audit désigne un travail critique qui peut porter sur une description, un dispositif ou l'enquête elle-même.

**Décision validée**

Ne pas constituer une famille autonome regroupant Explication, Audit et Épreuve.

Conserver leurs développements propres.

Ne pas présenter Auditer comme une opération supplémentaire.

### 4.6. Instruments d'épreuve et Reprise

**Constat vérifié**

L'architecture fonctionnelle distingue trois instruments :

- Substitution ;
- Cas ;
- Comparaison.

La Reprise est présentée comme une modalité générale de réexamen.

Le `pattern-tdm.md` précise que la Reprise ne constitue pas un quatrième instrument.

Cependant, sa section 3.4 mentionne encore les « méthodes de comparaison, de substitution et de reprise », formulation susceptible de réintroduire une assimilation entre instruments et modalités de réexamen.

**Interprétation**

La distinction entre instruments et reprise est fonctionnellement justifiée.

Un instrument fournit un moyen déterminé de confrontation.

La reprise désigne une modalité de réexamen qui peut mobiliser un instrument ou plusieurs, mais qui peut également intervenir sans instrument particulier.

La formulation de la section 3.4 n'est pas suffisamment précise au regard de cette distinction.

**Décision validée**

Maintenir les trois instruments actuels.

Ne pas présenter la Reprise comme un quatrième instrument.

**Intervention proposée**

Reformuler la section 3.4 de `pattern-tdm.md` pour distinguer :

- les instruments de confrontation ;
- les modalités de réexamen ;
- les fonctions critiques susceptibles de mobiliser plusieurs opérations.

### 4.7. Dimensions de la connaissance

**Constat vérifié**

L'architecture fonctionnelle distingue cinq dimensions de la connaissance :

- Percevoir et prêter attention ;
- Identifier et distinguer ;
- Anticiper et inférer ;
- Évaluer et justifier ;
- Reprendre et réviser.

Elle précise que ces dimensions ne constituent ni des opérations supplémentaires ni des aspects transversaux.

**Interprétation**

Cette distinction permet de différencier les activités de connaissance qui peuvent faire l'objet d'un examen et les ressources mobilisées par Protokin pour les examiner.

Elle évite notamment de transformer la dimension « Reprendre et réviser » en une opération supplémentaire ou de confondre celle-ci avec la Reprise comme modalité de réexamen.

**Décision validée**

Maintenir cette distinction.

Ne pas ajouter les dimensions de la connaissance aux quatre ensembles fonctionnels.

**Intervention restante**

Vérifier que les pages spécialisées respectent cette séparation lorsqu'elles emploient des termes communs avec les opérations ou les aspects transversaux.

## 5. Organisation temporelle et reconstruction de l'enquête

### 5.1. Déroulement effectif, anticipation et reconstruction

**Constat vérifié**

`fr/temporaliser.md` distingue les temporalités effective, prospective et rétrospective.

`fr/plateau-d-enquete.md` reprend cette distinction.

La page présente le fil rouge comme un moyen de représenter des relations entre des opérations, leurs occurrences, les éléments examinés et les configurations concernées.

Elle précise qu'il ne représente pas un chemin unique que l'enquête aurait nécessairement parcouru.

`fr/conduire-une-enquete.md` met également l'accent sur les reprises motivées par des difficultés identifiables et sur la reconstruction rétrospective des relations entre les examens.

**Interprétation**

Ces développements convergent vers une conception moins linéaire de l'enquête.

Le déroulement effectif peut comporter des interruptions, des hésitations, des bifurcations et des possibilités abandonnées.

La reconstruction rétrospective permet de rendre certaines relations intelligibles depuis une situation ultérieure.

Elle ne démontre pas que le résultat était prévisible ou nécessaire dès le commencement.

Cette distinction est importante pour éviter que l'ordre de présentation des opérations soit interprété comme le déroulement réel ou nécessaire d'une enquête.

**Décision validée**

Maintenir la distinction entre déroulement effectif, possibilités prospectives et reconstruction rétrospective.

Ne pas présenter les opérations comme un cheminement obligatoire.

Conserver le plateau comme dispositif facultatif de représentation des relations.

**Intervention restante**

Vérifier que les pages consacrées à la conduite de l'enquête ne réintroduisent pas une progression téléologique ou une succession obligatoire.

Examiner les rapports entre `fr/conduire-une-enquete.md`, `fr/orientation-et-chemin-de-l-enquete.md`, `fr/modes-d-intervention-de-l-enquete.md` et `fr/plateau-d-enquete.md`.

La fonction propre de ces quatre ressources doit être contrôlée plus précisément.

### 5.2. Le plateau d'enquête

**Constat vérifié**

`fr/plateau-d-enquete.md` distingue :

- les occurrences des opérations ;
- les éléments examinés ;
- les relations représentées par le fil rouge ;
- les orientations ;
- les autres ressources éventuellement mobilisées ;
- les temporalités effective, prospective et rétrospective.

Il précise qu'une représentation graphique ne constitue pas une preuve de la relation représentée.

**Interprétation**

Le plateau fournit un moyen de rendre visibles des relations établies ou reconstruites entre des travaux d'examen.

Il ne constitue ni une architecture supplémentaire ni une procédure obligatoire.

Sa fonction paraît désormais mieux différenciée de celle de la chaîne principale des opérations.

**Décision validée**

Conserver le plateau comme instrument facultatif de représentation.

Ne pas imposer un plateau par régime descriptif ou par enquête.

**Intervention restante**

Éprouver cette représentation sur une étude de cas où plusieurs travaux ont été conduits séparément avant que leurs relations deviennent intelligibles rétrospectivement.

## 6. Notions, termes et fonctions conceptuelles

### 6.1. Distinction entre activité, résultat et ressource conceptuelle

**Constat vérifié**

`fr/pratiques-stabilisations-et-revisions.md` distingue analytiquement :

- l'activité accomplie ;
- l'identification du résultat ;
- la nomination ;
- la stabilisation conceptuelle.

La page précise explicitement que cette distinction ne constitue pas une classification des mots ni une séparation de leurs significations dans le langage courant.

Elle reconnaît la polysémie des termes et indique qu'un même terme peut désigner une activité, son résultat ou une ressource conceptuelle.

Elle distingue également la stabilisation conceptuelle, la stabilisation d'une configuration et l'effet de cliquet.

**Interprétation**

Cette clarification répond à une difficulté importante du corpus.

Dans le langage courant, les substantifs et les verbes peuvent désigner aussi bien une activité, un résultat ou une ressource mobilisable.

Une séparation lexicale stricte serait artificielle et ne correspondrait pas aux usages effectifs.

La distinction de Protokin est donc méthodologique : elle permet de séparer les fonctions qu'il est nécessaire d'examiner, même lorsqu'un même terme peut les assumer.

Cette distinction ne suppose pas que les locuteurs comprennent spontanément ces fonctions comme trois catégories indépendantes.

Elle permet d'examiner les relations entre ce qui est fait, ce qui est reconnu comme résultat et ce qui devient disponible pour de nouveaux usages.

**Décision validée**

Maintenir cette distinction dans `fr/pratiques-stabilisations-et-revisions.md`.

Ne pas chercher à imposer une séparation lexicale entre activité, résultat et ressource conceptuelle.

Ne pas reproduire intégralement cette explication dans `patterns.md` ou `pattern-audit.md`.

**Intervention restante**

Vérifier les pages qui utilisent les mêmes termes dans des fonctions différentes, notamment les pages consacrées aux opérations, aux notions et aux pratiques descriptives.

### 6.2. Un terme, plusieurs concepts

**Constat vérifié**

`fr/de-la-notion-au-concept.md` examine la distinction entre terme, notion et concept.

La page précise qu'un même terme peut être associé à plusieurs déterminations conceptuelles.

Elle développe notamment l'exemple du terme « motif » :

- le motif au sens de Protokin, qui contribue à expliquer une conduite ;
- le motif narratif, qui permet d'identifier et de comparer des éléments récurrents dans des récits.

Elle précise que le motif narratif possède une fonction descriptive et méthodologique dans la recherche comparatiste.

`fr/motif.md` développe ces deux usages.

`fr/theme.md` examine le thème comme principe de regroupement de récits autour d'un sujet commun et le distingue du motif narratif.

**Interprétation**

Cette organisation permet de traiter la polysémie sans imposer une identité conceptuelle à des usages différents.

Elle montre également qu'un terme peut désigner un concept possédant une fonction méthodologique dans une discipline déterminée.

La fonction d'un concept ne découle donc pas du terme seul. Elle dépend des distinctions qu'il permet d'établir, des opérations auxquelles il contribue et des conclusions que son emploi autorise.

La distinction entre motif, thème et type narratif permet d'éviter que leur proximité lexicale produise une confusion entre des unités de description et de comparaison différentes.

**Décision validée**

Conserver les pages distinctes :

- `fr/de-la-notion-au-concept.md` ;
- `fr/motif.md` ;
- `fr/theme.md`.

Ne pas fusionner ces ressources au seul motif qu'elles partagent un vocabulaire.

**Intervention restante**

Examiner les autres termes polysémiques du corpus lorsque leurs usages remplissent des fonctions différentes.

Ne pas transformer cette observation en obligation de créer une page distincte pour chaque sens d'un terme.

### 6.3. Tension

**Constat vérifié**

`fr/tension.md` définit la tension comme une difficulté située de fonctionnement qui apparaît lorsque plusieurs exigences, objectifs ou contraintes doivent être maintenus ou coordonnés sans que les ressources disponibles permettent de les traiter de manière suffisamment satisfaisante.

La page distingue notamment :

- tension et problème descriptif ;
- tension et incompatibilité ;
- tension et contradiction ;
- tension et conflit.

La TDM et la barre latérale référencent cette page.

**Interprétation**

La notion possède une fonction identifiable.

Elle permet de caractériser une difficulté pratique sans présupposer qu'elle constitue déjà une contradiction logique ou une incompatibilité établie.

Cette distinction est utile pour examiner des situations dans lesquelles plusieurs exigences demeurent légitimes ou nécessaires, mais difficiles à coordonner.

La page évite ainsi de transformer toute difficulté en opposition binaire.

**Décision validée**

Conserver la page `fr/tension.md` comme ressource spécialisée.

Ne pas faire de Tension une opération ou une orientation supplémentaire.

**Intervention restante**

Examiner son articulation avec les pages consacrées aux diagnostics de l'enquête et aux difficultés descriptives.

Vérifier que le terme n'est pas employé comme synonyme général de contradiction ou de conflit dans les autres pages.

### 6.4. Fonction des notions et fonction des opérations

**Constat vérifié**

Le corpus distingue les opérations d'examen et les notions qui peuvent être mobilisées dans les pratiques descriptives.

L'exemple du motif montre qu'un concept peut contribuer à plusieurs travaux sans devenir lui-même une opération.

**Interprétation**

Il faut maintenir une distinction entre :

- une notion qui permet d'identifier ou de caractériser un phénomène ;
- un concept qui organise un travail méthodologique ;
- une activité descriptive de premier ordre ;
- une opération d'examen de second ordre.

Un concept peut participer à une comparaison sans constituer l'opération Comparer ou l'instrument Comparaison.

De même, une notion peut être mobilisée dans une opération sans devenir une composante de l'architecture fonctionnelle.

**Décision validée**

Ne pas ajouter une composante à l'architecture au seul motif qu'un concept possède une fonction méthodologique dans une discipline.

Examiner le travail effectivement réalisé et la contribution propre de la ressource.

## 7. Organisation documentaire et cohérence éditoriale

### 7.1. Répartition des documents de référence

**Constat vérifié**

`patterns.md` distingue les fonctions respectives des documents suivants :

- `patterns.md` : référentiel éditorial ;
- `pattern-audit.md` : référentiel méthodologique de l'audit ;
- `audit-corpus.md` : registre des résultats de l'audit.

`pattern-audit.md` reprend cette répartition.

`fr/architecture-projet.md` distingue également l'organisation documentaire du projet et l'architecture fonctionnelle de l'enquête.

**Interprétation**

La répartition documentaire est désormais suffisamment explicite.

Les trois documents éditoriaux ne doivent pas devenir des versions concurrentes d'une même présentation.

Le présent audit doit conserver les résultats de l'examen, et non reproduire les critères généraux déjà définis dans `pattern-audit.md`.

**Décision validée**

Maintenir cette organisation.

Ne pas déplacer les critères généraux d'audit dans `audit-corpus.md`.

Ne pas faire de l'audit un journal exhaustif des modifications.

### 7.2. Conformité éditoriale et fonction des pages

**Constat vérifié**

`patterns.md` définit plusieurs patterns éditoriaux et précise que leur attribution dépend de la fonction effective des pages.

Il indique notamment que la proximité thématique ne suffit pas à établir une redondance.

Il précise également la convention des liens internes : les pages du corpus français doivent utiliser le préfixe `fr/`, y compris depuis une page située dans ce répertoire.

**Interprétation**

Cette convention doit être appliquée de manière cohérente.

Elle facilite l'identification du chemin documentaire et évite que les liens dépendent implicitement de l'emplacement de la page source.

La convention doit cependant être contrôlée dans les fichiers effectivement présents et non simplement considérée comme respectée parce qu'elle est écrite dans le référentiel.

**Décision validée**

Conserver la convention de préfixage `fr/`.

**Intervention restante**

Corriger les écarts constatés dans les pages structurantes et effectuer un contrôle plus large des liens.

### 7.3. Cohérence entre TDM et barre latérale

**Constat vérifié**

`fr/tdm.md` et `_sidebar.md` organisent les accès au corpus selon des fonctions de navigation distinctes.

La TDM propose une organisation détaillée des ressources.

La barre latérale propose une navigation plus courte et hiérarchisée.

Les deux documents comportent notamment des entrées relatives à :

- l'architecture du projet ;
- l'architecture fonctionnelle ;
- l'orientation de l'examen ;
- la temporalité ;
- les régimes descriptifs ;
- les notions et les catégories ;
- les études de cas ;
- les documents éditoriaux.

Les nouvelles pages `fr/theme.md` et `fr/tension.md` sont référencées dans les dispositifs de navigation consultés.

**Interprétation**

La distinction entre TDM et barre latérale est pertinente.

La barre latérale n'a pas à reproduire l'intégralité de la TDM.

Elle doit cependant donner accès aux ressources principales et employer des chemins valides.

Une différence de classement n'est pas nécessairement une incohérence, dès lors que les deux dispositifs remplissent des fonctions différentes.

**Décision validée**

Conserver la distinction entre navigation courte et navigation détaillée.

Ne pas chercher à rendre les deux documents identiques.

**Intervention restante**

Contrôler les liens et les intitulés dans les deux dispositifs.

Vérifier que les nouvelles pages sont accessibles depuis le parcours de lecture approprié.

## 8. Incohérences documentaires vérifiées

### 8.1. Lien incorrect dans `_sidebar.md`

**Constat vérifié**

Dans `_sidebar.md`, l'entrée :

`Régimes culturels et scientifiques d’intelligibilité`

pointe vers :

`regimes-culturels-et-scientifiques-d-intelligibilite.md`

Ce fichier est absent à la racine.

La ressource existe en revanche à l'emplacement :

`fr/regimes-culturels-et-scientifiques-d-intelligibilite.md`

**Interprétation**

Il s'agit d'une incohérence documentaire vérifiée.

Le lien ne respecte pas la convention de préfixage et pointe vers un chemin inexistant.

**Décision proposée**

Remplacer le chemin par :

`fr/regimes-culturels-et-scientifiques-d-intelligibilite.md`

Cette correction est prioritaire.

### 8.2. Liens sans préfixe dans la TDM

**Constat vérifié**

Dans `fr/tdm.md`, l'entrée consacrée aux régimes culturels et scientifiques d'intelligibilité utilise également un chemin sans préfixe `fr/`.

Le chemin concerné est :

`regimes-culturels-et-scientifiques-d-intelligibilite.md`

Le fichier correspondant existe sous `fr/`.

**Interprétation**

Le lien peut bénéficier de la résolution relative au répertoire de la page source selon le dispositif de publication.

Il reste néanmoins contraire à la convention éditoriale explicitement retenue dans `patterns.md` et `pattern-tdm.md`.

**Décision proposée**

Employer :

`fr/regimes-culturels-et-scientifiques-d-intelligibilite.md`

Vérifier le comportement du lien après correction.

### 8.3. Liens relatifs dans `fr/architecture-projet.md`

**Constat vérifié**

La page `fr/architecture-projet.md` utilise, dans sa section finale, plusieurs liens relatifs sans préfixe `fr/`.

Les liens concernés comprennent notamment :

- `introduction-generale.md` ;
- `architecture-fonctionnelle-de-l-enquete.md` ;
- `objets-de-l-examen.md` ;
- `modes-d-intervention-de-l-enquete.md` ;
- `orientation-de-l-examen.md` ;
- `la-chaine-principale-de-l-enquete.md` ;
- `conduire-une-enquete.md` ;
- `cas.md` ;
- `tdm.md`.

Les fichiers correspondants sont présents sous `fr/`.

**Interprétation**

Il s'agit d'un écart à la convention documentaire, et non d'une absence des ressources ciblées.

Les liens relatifs peuvent être résolus correctement selon le contexte de navigation. Ils ne respectent cependant pas la règle éditoriale explicite selon laquelle les pages françaises doivent utiliser le préfixe `fr/`.

**Décision proposée**

Remplacer ces chemins par leurs formes préfixées :

- `fr/introduction-generale.md` ;
- `fr/architecture-fonctionnelle-de-l-enquete.md` ;
- `fr/objets-de-l-examen.md` ;
- `fr/modes-d-intervention-de-l-enquete.md` ;
- `fr/orientation-de-l-examen.md` ;
- `fr/la-chaine-principale-de-l-enquete.md` ;
- `fr/conduire-une-enquete.md` ;
- `fr/cas.md` ;
- `fr/tdm.md`.

Cette correction doit être effectuée sans modifier les fonctions ou le contenu des pages ciblées.

### 8.4. État des références à l'ancienne quadripartition

**Constat vérifié**

Le fichier `fr/quadripartition-de-l-orientation.md` est absent.

La page actuelle `fr/orientation-de-l-examen.md` présente quatre orientations : Condition, Relation, Fonction et Justification.

**Interprétation**

L'organisation actuelle ne nécessite pas la restauration de l'ancienne page.

Les références résiduelles à l'ancienne organisation doivent néanmoins être examinées lorsqu'elles sont présentes dans des documents historiques ou des pages spécialisées.

**Décision validée**

Ne pas recréer l'ancienne page.

Ne pas supprimer les mentions historiques utiles à la compréhension des transformations du projet.

**Intervention restante**

Effectuer une recherche documentaire plus large des références à l'ancienne quadripartition.

## 9. Synthèse des décisions

Les décisions sont distinguées selon leur statut.

### 9.1. Décisions validées et maintenues

| Sujet | Décision |
|---|---|
| Positionnement du projet | Maintenir une démarche pragmatiste, inférentialiste, réflexive et méthodologiquement non ontologique. |
| Statut des descriptions | Maintenir la distinction entre existence, identification et détermination descriptive. |
| Architecture fonctionnelle | Maintenir provisoirement quatre ensembles de ressources. |
| Opérations | Les définir comme travaux d'examen de second ordre. |
| Orientations | Maintenir Condition, Relation, Fonction et Justification. |
| Aspects transversaux | Maintenir Temporalité et Réflexivité. |
| Temporaliser | Maintenir son statut de fonction transversale. |
| Audit | Maintenir sa fonction critique transversale, sans en faire une opération supplémentaire. |
| Épreuve | La maintenir comme exigence générale de confrontation. |
| Instruments | Maintenir Substitution, Cas et Comparaison. |
| Reprise | La maintenir comme modalité générale de réexamen. |
| Plateau | Le maintenir comme dispositif facultatif de représentation. |
| Polysémie | Maintenir la distinction méthodologique entre les fonctions d'un terme sans imposer de séparation lexicale. |
| Thème et motif | Conserver leurs pages distinctes. |
| Tension | Conserver sa fonction de caractérisation d'une difficulté située. |
| Documents éditoriaux | Maintenir la répartition entre patterns, référentiel d'audit et registre des résultats. |

### 9.2. Modifications proposées

| Fichier | Modification | Priorité |
|---|---|---|
| `fr/architecture-fonctionnelle-de-l-enquete.md` | Corriger la définition contradictoire des opérations en section 7. | Haute |
| `pattern-tdm.md` | Remplacer « travaux descriptifs » par « travaux d'examen » en section 2.3. | Haute |
| `pattern-tdm.md` | Clarifier la section 3.4 pour distinguer instruments et reprise. | Moyenne |
| `_sidebar.md` | Corriger le lien vers les régimes culturels et scientifiques d'intelligibilité. | Haute |
| `fr/tdm.md` | Ajouter le préfixe `fr/` au lien vers cette même ressource. | Moyenne |
| `fr/architecture-projet.md` | Uniformiser les liens internes avec le préfixe `fr/`. | Moyenne |

Ces modifications ne sont pas déclarées appliquées.

La présente révision de l'audit ne modifie pas automatiquement les fichiers concernés.

### 9.3. Contrôles restant à effectuer

| Domaine | Contrôle |
|---|---|
| Opérations | Vérifier les huit pages spécialisées et leurs définitions. |
| Orientations | Vérifier les usages dans les pages spécialisées. |
| Temporalité | Contrôler les pages qui présentent l'ordre des opérations ou les trajectoires d'enquête. |
| Réflexivité et audit | Examiner leur distinction dans les développements spécialisés. |
| Notions | Vérifier les usages polysémiques des termes importants. |
| Conduite de l'enquête | Examiner les recouvrements entre les pages consacrées à la conduite, aux modes d'intervention et aux orientations. |
| Études de cas | Éprouver les distinctions sur des situations déterminées. |
| TDM | Contrôler l'ensemble des liens. |
| Barre latérale | Contrôler l'ensemble des chemins. |
| Versions HTML | Vérifier leur existence et leur correspondance avec les sources Markdown. |
| Anciennes organisations | Rechercher les références résiduelles à la quadripartition et aux organisations abandonnées. |

## 10. Priorités de traitement

### Priorité 1 — Corriger les incohérences conceptuelles structurantes

- Corriger la définition des opérations en section 7 de `fr/architecture-fonctionnelle-de-l-enquete.md`.
- Corriger la définition des opérations dans `pattern-tdm.md`.
- Vérifier la cohérence entre premier ordre et second ordre dans les pages consacrées aux opérations.
- Maintenir la distinction entre opération, orientation, aspect transversal et instrument.

**Résultat attendu :** les documents de référence ne présentent plus de définitions concurrentes des opérations.

### Priorité 2 — Corriger les liens documentaires vérifiés

- Corriger le lien de `_sidebar.md` vers les régimes culturels et scientifiques d'intelligibilité.
- Uniformiser le lien correspondant dans `fr/tdm.md`.
- Corriger les liens relatifs dans `fr/architecture-projet.md`.
- Vérifier les chemins après modification.

**Résultat attendu :** les pages structurantes respectent la convention documentaire et leurs liens pointent vers les fichiers existants.

### Priorité 3 — Clarifier les fonctions des ressources de conduite

- Examiner `fr/conduire-une-enquete.md`.
- Examiner `fr/orientation-et-chemin-de-l-enquete.md`.
- Examiner `fr/modes-d-intervention-de-l-enquete.md`.
- Examiner `fr/plateau-d-enquete.md`.
- Vérifier les relations avec `fr/resultats-de-l-enquete.md`.

**Résultat attendu :** chaque page répond à un problème identifiable sans reproduire les développements des autres ressources.

### Priorité 4 — Contrôler les distinctions conceptuelles

- Activité descriptive et opération d'examen.
- Opération et orientation.
- Temporalité et temporaliser.
- Fonction et fonction descriptive.
- Configuration et Configurer.
- Motif, thème et type narratif.
- Terme, notion et concept.
- Critère, norme et justification.
- Explication et justification.
- Stabilisation conceptuelle et stabilisation d'une configuration.
- Tension, contradiction et incompatibilité.

**Résultat attendu :** les distinctions conservées correspondent à des différences analytiques effectives et ne sont pas imposées uniquement par la terminologie.

### Priorité 5 — Éprouver l'architecture

- Reprendre les études de cas.
- Examiner les ressources réellement mobilisées.
- Identifier les difficultés persistantes.
- Évaluer les gains analytiques.
- Repérer les situations où les catégories disponibles se révèlent insuffisantes.
- Réviser les ressources lorsque les cas font apparaître leurs limites.

**Résultat attendu :** l'organisation de Protokin est confrontée à des difficultés qui ne sont pas définies uniquement à partir de ses propres catégories.

### Priorité 6 — Contrôle documentaire exhaustif

- Vérifier l'ensemble des fichiers référencés dans la TDM.
- Contrôler les liens internes.
- Identifier les références obsolètes.
- Vérifier les ressources HTML.
- Comparer la navigation et la TDM.
- Identifier les éventuelles pages présentes mais non référencées.
- Établir un état vérifié des ressources présentes et absentes.

**Résultat attendu :** l'intégrité documentaire du dépôt peut être établie sur une base vérifiable.

## 11. Questions ouvertes

Les questions suivantes ne sont pas considérées comme résolues.

### 11.1. Architecture fonctionnelle

1. Les quatre ensembles fonctionnels actuels suffisent-ils à organiser les ressources effectivement mobilisées dans les enquêtes ?
2. Les catégories regroupant les opérations apportent-elles un gain réel de repérage sans introduire une hiérarchie implicite ?
3. Les huit opérations possèdent-elles toutes une fonction suffisamment distincte dans les enquêtes concrètes ?
4. Les quatre orientations permettent-elles de traiter les principales différences entre les questions d'examen ?
5. La distinction entre aspects transversaux, modalités d'examen et instruments d'épreuve reste-t-elle adéquate dans les situations effectivement étudiées ?
6. Certaines opérations ou orientations doivent-elles être révisées, abandonnées ou remplacées à la lumière des cas examinés ?
7. La distinction entre Temporalité et Temporaliser doit-elle être explicitée davantage dans les documents de référence ?

### 11.2. Explication, audit et épreuve

8. Dans quelles conditions l'explication relève-t-elle d'une production descriptive de premier ordre, d'un objet d'examen ou d'un travail mobilisant plusieurs opérations ?
9. Auditer possède-t-il une contribution suffisamment distincte de la réflexivité ?
10. La position de l'auditeur implique-t-elle des exigences spécifiques de responsabilité ?
11. L'épreuve doit-elle rester une exigence générale de confrontation ou certaines de ses modalités demandent-elles un traitement fonctionnel supplémentaire ?
12. La distinction entre instruments d'épreuve et reprise permet-elle de rendre compte des différents réexamens effectivement conduits ?

### 11.3. Organisation documentaire

13. Les pages consacrées à la conduite de l'enquête présentent-elles des fonctions suffisamment distinctes ?
14. Les versions HTML ont-elles toutes un statut éditorial et technique clairement établi ?
15. La navigation actuelle donne-t-elle un accès satisfaisant aux ressources importantes ?
16. Les études de cas disposent-elles d'une fonction suffisamment différenciée par rapport aux pages conceptuelles et aux pages de méthode ?
17. Certaines pages présentent-elles des recouvrements fonctionnels qui justifieraient une révision, un déplacement ou une fusion ?
18. Les trois centres de gravité de l'architecture du projet apportent-ils un gain de compréhension distinct des fonctions documentaires et de la TDM ?

### 11.4. Frontières conceptuelles

19. Les distinctions entre régimes descriptifs et registres sont-elles suffisamment opératoires ?
20. La distinction entre objet, référent et description permet-elle de traiter les difficultés d'identification sans présupposer une ontologie particulière ?
21. Les relations entre critère, norme, raison et justification sont-elles suffisamment explicites ?
22. Les notions de transformation, de stabilisation et de trajectoire remplissent-elles des fonctions distinctes ?
23. Les distinctions entre activité, résultat identifié et ressource conceptuelle permettent-elles de traiter les usages effectifs du langage sans imposer une séparation artificielle ?
24. Les pages consacrées aux notions polysémiques contribuent-elles à un examen suffisamment précis des fonctions conceptuelles ?
25. Les références philosophiques contribuent-elles effectivement à l'examen des problèmes ou conduisent-elles parfois à multiplier les rapprochements théoriques sans gain analytique identifiable ?

### 11.5. Fécondité de Protokin

26. Les ressources permettent-elles d'examiner des difficultés qui ne sont pas déjà organisées par leurs propres distinctions ?
27. Les enquêtes peuvent-elles conduire à abandonner une opération, à modifier une orientation ou à réorganiser l'architecture ?
28. Quels résultats permettent de distinguer un véritable gain analytique d'une simple reformulation des descriptions initiales ?
29. Quelles limites doivent être reconnues lorsque les éléments disponibles ne permettent pas de départager plusieurs descriptions ?
30. Dans quelles conditions une enquête doit-elle conclure que les ressources disponibles sont insuffisantes pour produire une détermination satisfaisante ?

Ces questions restent ouvertes jusqu'à ce que des examens suffisamment précis permettent d'y répondre.

Elles ne constituent pas une liste de modifications à effectuer systématiquement.

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

L'organisation documentaire doit également rester révisable : une page peut être déplacée, redéfinie, scindée, fusionnée ou supprimée lorsque sa fonction n'est plus suffisamment justifiée.

**L'organisation de Protokin doit rester révisable à partir des difficultés que les enquêtes font apparaître, y compris lorsque ces difficultés mettent en question ses propres distinctions.**
