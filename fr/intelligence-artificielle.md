# Intelligence artificielle — Résultats computationnels et pratiques descriptives

## Fonction

Cette page examine les difficultés descriptives qui apparaissent lorsque des systèmes d’intelligence artificielle produisent des classifications, des prédictions, des recommandations ou des textes mobilisés dans des pratiques humaines.

Elle cherche à distinguer ce que le système produit, ce que les utilisateurs en interprètent et ce qu’ils peuvent légitimement conclure ou décider à partir de ces résultats.

L’intelligence artificielle constitue ici un cas d’étude, non une catégorie dont Protokin devrait déterminer l’essence. La page examine des usages particuliers et les relations entre les descriptions qu’ils mobilisent.

## Problème : que permet de conclure un résultat computationnel ?

Un système d’intelligence artificielle peut classer des données, estimer une probabilité, produire une recommandation ou générer un texte. Ces résultats peuvent être utiles, parfois difficiles à obtenir autrement, et modifier sensiblement une pratique.

Une difficulté apparaît lorsque le résultat est traité comme s’il suffisait à établir une conclusion plus large que celle pour laquelle il a été produit. Un score de risque peut ainsi être interprété comme une propriété stable d’une personne ; une prédiction peut être prise pour un fait établi ; un texte bien formulé peut être tenu pour une réponse suffisamment justifiée.

L’erreur ne consiste pas nécessairement à utiliser le résultat du système. Elle consiste à lui attribuer une portée qui n’a pas été examinée.

Pour analyser ces situations, il faut distinguer plusieurs questions :

- Quel résultat le système produit-il ?
- À partir de quelles données, de quels traitements et de quelles catégories ?
- À quelle tâche ce résultat est-il destiné ?
- Quels éléments permettent d’en apprécier la performance et les limites ?
- Comment ce résultat est-il interprété et utilisé dans la pratique concernée ?
- Quelles raisons permettent de défendre la conclusion ou la décision qui en découle ?

Ces questions sont liées, mais elles ne se remplacent pas mutuellement.

## Distinguer le calcul, le résultat et son usage

Un système d’intelligence artificielle ne produit pas tous les types de résultats de la même manière. Un modèle peut attribuer un score, classer une image, proposer une séquence de mots, signaler une anomalie ou recommander une action. La nature du résultat dépend du système, de son entraînement, de ses données d’entrée et de la tâche pour laquelle il est utilisé.

Il faut distinguer au moins quatre éléments.

- **Le traitement computationnel** : les opérations effectuées par le système sur des données selon son architecture, ses paramètres et ses règles de fonctionnement.
- **Le résultat produit** : un score, une classe, une prédiction, une recommandation, un texte ou une autre sortie déterminée.
- **L’interprétation du résultat** : la manière dont une personne ou une institution comprend ce résultat et le rapporte à une situation.
- **La conclusion ou la décision** : ce qui est affirmé, retenu ou entrepris à partir de cette interprétation.

Cette distinction ne signifie pas que ces éléments seraient indépendants. Le choix de la tâche influence le résultat attendu ; la présentation du résultat peut orienter son interprétation ; les usages institutionnels peuvent modifier les données collectées et les critères de conception.

Il s’agit plutôt d’empêcher qu’un élément soit traité comme s’il suffisait à établir les autres.

Un score n’est pas encore une décision. Une prédiction n’est pas nécessairement un fait observé. Une réponse formulée dans un langage naturel n’est pas, par sa seule forme, une conclusion justifiée.

Inversement, le caractère computationnel d’un résultat ne suffit pas à le rendre inutile ou faux. Sa pertinence doit être examinée au regard de la tâche, des données, des conditions d’emploi et de la conclusion que l’on cherche à soutenir.

## Performance et validité d’une conclusion

Un système peut obtenir de bons résultats selon une métrique déterminée sans que chacune de ses sorties soit adéquate à la situation dans laquelle elle est utilisée.

Une mesure de performance porte sur une tâche, un ensemble de données et une procédure d’évaluation définis. Elle peut contribuer à établir que le système réussit certaines opérations dans les conditions testées. Elle ne suffit pas nécessairement à établir que le résultat particulier est correct, que les mêmes performances se maintiennent dans un autre contexte ou que la décision prise à partir du résultat est justifiée.

Il faut donc distinguer :

- la performance mesurée du système pour une tâche définie ;
- la fiabilité du résultat dans les conditions concrètes de son utilisation ;
- l’adéquation de l’interprétation à la situation examinée ;
- la justification de la conclusion ou de la décision qui en découle.

Ces distinctions ne rendent pas l’évaluation technique secondaire. Elles permettent de préciser ce qu’elle établit et ce qui demande un examen supplémentaire.

Par exemple, un système peut être évalué pour sa capacité à repérer certains signes dans des images médicales. Même si ses performances sont satisfaisantes sur un jeu de test, l’utilisation d’un résultat particulier suppose encore d’examiner les conditions dans lesquelles l’image a été produite, les limites connues du système et la pertinence du résultat pour le cas traité.

La performance mesurée est un élément de l’évaluation ; elle ne vaut pas automatiquement justification de toutes les décisions prises à partir du système.

## Premier cas : une recommandation de triage médical

Considérons un système utilisé dans un service d’urgence pour signaler des situations susceptibles de nécessiter une intervention rapide.

Le système reçoit certaines données, leur applique des traitements et produit un score ou une catégorie de priorité. Ce résultat peut aider à attirer l’attention sur une situation qui demande un examen rapide.

Plusieurs questions doivent cependant rester distinctes.

**Le résultat computationnel.** Il faut savoir ce que le système évalue, quelles données il utilise et ce que signifie la catégorie qu’il attribue. Un niveau de priorité n’est pas nécessairement un diagnostic complet, et une estimation de risque n’est pas une observation directe de tous les aspects de l’état du patient.

**L’interprétation clinique.** Le professionnel doit rapporter le résultat aux informations pertinentes pour le patient, aux observations disponibles et aux autres éléments de la situation. Selon le contexte, le résultat peut confirmer une hypothèse, attirer l’attention sur un signe ou demander une vérification supplémentaire.

**La décision.** La décision de soin doit être examinée au regard des informations disponibles, des critères cliniques pertinents et des responsabilités applicables. Elle ne découle pas automatiquement d’un score, même lorsque celui-ci constitue un indice utile.

Une difficulté descriptive apparaît, par exemple, si une catégorie calculée est traitée comme une description exhaustive de l’état du patient, ou si un score est utilisé pour écarter automatiquement une personne sans examiner la pertinence du résultat pour son cas.

L’audit doit alors déterminer ce que le système a effectivement établi, ce que les professionnels en ont conclu et quels éléments soutiennent la décision finale.

Cet exemple ne prouve ni que les systèmes d’aide au triage sont fiables dans tous les contextes, ni qu’ils sont nécessairement inadaptés. Il montre pourquoi la portée d’un résultat doit être examinée au regard de son usage.

## Deuxième cas : un score de risque dans une décision judiciaire

Considérons maintenant un système qui attribue à une personne un score estimant un risque de récidive à partir de données historiques et de caractéristiques retenues pour la tâche.

Le score peut fournir un élément d’information. Mais sa signification dépend des données utilisées, de la population sur laquelle le système a été évalué, de la définition du résultat prédit et des conditions dans lesquelles l’estimation est mobilisée.

Une confusion apparaît si le score est traité comme une propriété intrinsèque et permanente de la personne, ou si sa valeur est présentée comme une preuve suffisante pour déterminer une décision judiciaire.

Il faut distinguer :

- l’estimation produite par le système ;
- les éléments empiriques qui permettent d’évaluer cette estimation ;
- l’interprétation de sa pertinence pour une personne et une situation déterminées ;
- les critères juridiques applicables à la décision ;
- les raisons permettant de défendre la décision et de la soumettre à la contradiction.

Le passage du score à une décision ne constitue pas une simple lecture du résultat. Il suppose des choix sur la pertinence des données, la portée du risque estimé, les critères applicables et les conséquences que l’institution entend tirer de l’évaluation.

Le score ne devient pas une caractéristique naturelle de la personne du seul fait qu’il est exprimé numériquement. Il ne constitue pas non plus, à lui seul, une justification juridique.

L’examen doit porter sur le résultat, les conditions de sa production, son interprétation et les règles qui encadrent la décision. Il doit aussi permettre d’identifier les personnes et les institutions responsables de l’usage du système.

Ce cas n’établit pas que tout score de risque est dépourvu de pertinence. Il montre que la pertinence d’un résultat statistique et la justification d’une décision judiciaire constituent deux questions distinctes.

## Les supports matériels et les choix de conception

Les résultats d’un système d’intelligence artificielle dépendent de conditions matérielles et de choix qui ne sont pas toujours visibles au moment de leur utilisation.

Selon le système, il peut être nécessaire d’examiner :

- les données d’entraînement ou les données utilisées en fonctionnement ;
- la manière dont les catégories et les variables ont été définies ;
- les objectifs d’optimisation et les métriques d’évaluation ;
- les procédures de collecte, de sélection et de traitement des données ;
- les conditions techniques et institutionnelles de déploiement ;
- les modifications apportées au système et les modalités de suivi de ses résultats.

Ces éléments peuvent affecter ce que le système repère, les erreurs qu’il produit et les usages auxquels ses résultats se prêtent. Ils ne doivent pas être invoqués comme une explication automatique de toute erreur particulière : leur rôle doit être examiné à partir des éléments disponibles.

La matérialité du système ne se réduit pas à ses serveurs ou à ses composants. Les catégories retenues, les choix de conception, les procédures d’évaluation et les règles d’utilisation contribuent également aux conditions dans lesquelles ses résultats prennent une fonction.

Il importe donc de ne pas présenter le résultat comme s’il apparaissait sans médiation, mais aussi de ne pas supposer que la seule identification de ses conditions de production suffit à l’invalider.

## Qui répond de l’usage du résultat ?

La responsabilité ne se déduit pas directement du mode de calcul. Elle doit être examinée à partir des rôles effectivement exercés dans la conception, le déploiement, l’interprétation et l’utilisation du système.

Selon les situations, plusieurs acteurs peuvent intervenir : concepteurs, fournisseurs de données, responsables du déploiement, professionnels utilisateurs, institutions qui fixent les règles d’emploi et personnes qui prennent les décisions finales.

Leur contribution n’est pas nécessairement identique. Il faut examiner qui a choisi les critères, qui pouvait connaître les limites du système, qui avait la possibilité de vérifier le résultat, qui disposait du pouvoir de décision et quelles obligations s’appliquaient à chacun.

Cette analyse évite deux conclusions trop rapides.

La première consisterait à attribuer au système, du seul fait qu’il produit un résultat, l’ensemble des responsabilités liées à la décision. La seconde consisterait à considérer que la présence d’un système computationnel dispense les personnes et les institutions de répondre de leurs choix.

La responsabilité doit être rapportée aux rôles, aux pouvoirs, aux connaissances accessibles et aux règles applicables. Elle ne peut être distribuée correctement qu’après examen de la situation concrète.

Cette question ne se confond pas avec celle de savoir si un système peut être décrit comme agent, ni avec celle de savoir si ses productions sont utiles. L’analyse des usages et des responsabilités ne suffit pas à trancher toutes les questions relatives à l’agentivité artificielle.

## Comment conduire l’examen ?

Face à une difficulté impliquant un système d’intelligence artificielle, l’enquête peut être orientée par les questions suivantes :

1. **Délimiter le problème.** Quel résultat, quelle interprétation ou quelle décision est contesté ?
2. **Identifier les éléments disponibles.** Quelles données, traces, informations techniques et observations permettent d’examiner la situation ?
3. **Distinguer les fonctions.** Que produit le système, qu’en déduit l’utilisateur et quelle décision est prise ?
4. **Examiner les relations.** Comment le résultat est-il relié à la situation, aux autres informations et aux critères applicables ?
5. **Évaluer la portée.** Qu’est-ce que les éléments disponibles permettent d’établir, et quelles conclusions dépasseraient leur portée ?
6. **Examiner la justification et la responsabilité.** Quelles raisons soutiennent la décision, qui doit pouvoir y répondre et quelles possibilités de contestation ou de révision existent ?

Ces questions ne constituent pas une procédure universelle ni une suite obligatoire d’étapes. Leur ordre dépend de la difficulté rencontrée. L’enquête peut conduire à revenir sur le problème initial, à rechercher des informations supplémentaires ou à réviser la distinction sur laquelle reposait l’analyse.

Les quatre orientations de la quadripartition peuvent aider à différencier les questions en jeu : les conditions matérielles et institutionnelles, les relations entre les éléments, les fonctions exercées dans la pratique et les justifications mobilisées. Elles ne constituent ni quatre composantes du système ni quatre phases obligatoires de l’examen.

## Ce que le cas permet d’établir — et ce qu’il n’établit pas

L’étude permet de dégager plusieurs distinctions utiles.

- Un résultat computationnel ne se confond pas avec l’interprétation qui en est faite.
- Une performance mesurée ne garantit pas l’adéquation de chaque résultat à une situation particulière.
- Un score ou une classification ne constitue pas automatiquement une propriété intrinsèque de la personne concernée.
- La pertinence d’un résultat pour une tâche ne suffit pas à justifier toutes les décisions prises à partir de ce résultat.
- L’identification des conditions de production d’une sortie ne suffit ni à la valider ni à l’invalider.
- L’utilisation d’un système ne supprime pas la nécessité d’examiner les rôles, les critères et les responsabilités des acteurs concernés.

Ces distinctions ne permettent pas de conclure que tous les systèmes d’intelligence artificielle fonctionnent de la même manière, qu’ils sont incapables de produire des résultats pertinents ou que leurs usages doivent être acceptés ou rejetés en bloc.

Elles ne tranchent pas davantage, à elles seules, la question de la conscience ou de l’agentivité artificielle. Pour les besoins de cette étude, il suffit de distinguer la production d’un résultat, la fonction qu’il prend dans une pratique et les conditions dans lesquelles les conclusions tirées de son usage peuvent être défendues.

## Articulation avec Protokin

Cette étude de cas met à l’épreuve plusieurs distinctions de Protokin sans les transformer en théorie générale de l’intelligence artificielle.

Elle mobilise notamment :

- [Architecture fonctionnelle de l’enquête](fr/architecture-fonctionnelle-de-l-enquete.md), pour situer les opérations mobilisables face à une difficulté descriptive ;
- [Quadripartition de l’orientation](fr/quadripartition-de-l-orientation.md), pour différencier les questions relatives aux conditions, aux relations, aux fonctions et aux justifications ;
- [Une première cartographie des régimes descriptifs](fr/une-premiere-cartographie-des-regimes-descriptifs.md), pour identifier les manières de décrire mobilisées dans une situation ;
- [Explication](fr/explication.md), pour distinguer la production d’un phénomène, l’interprétation d’un résultat et la justification d’une conclusion ;
- [Assertion](fr/assertion.md) et [Inférence](fr/inference.md), pour examiner les engagements et les conséquences associés aux affirmations produites ou reprises par les utilisateurs ;
- [Justification](fr/justification.md), pour examiner les raisons permettant de défendre ou de contester une conclusion.

Ces renvois désignent des ressources spécialisées ; ils ne signifient pas que chaque analyse de l’IA doive mobiliser toutes ces notions.

L’étude ne constitue pas une nouvelle architecture du projet. Elle montre comment une difficulté liée à l’usage de systèmes computationnels peut être délimitée, examinée et révisée sans confondre les résultats du système, les descriptions qui les reprennent et les décisions qui en découlent.

## Synthèse

L’intelligence artificielle constitue un cas particulièrement utile pour examiner les relations entre calcul, description, interprétation et décision. Les systèmes peuvent produire des résultats pertinents et transformer les pratiques dans lesquelles ils sont utilisés. La portée de ces résultats dépend cependant de la tâche, des données, des conditions d’emploi et des conclusions qu’on leur fait soutenir.

L’enjeu n’est ni d’attribuer automatiquement une autorité aux résultats computationnels, ni de les disqualifier du seul fait de leur origine technique. Il consiste à déterminer ce qu’ils permettent d’établir, comment ils interviennent dans une pratique et quelles raisons soutiennent les conclusions et les décisions qui en découlent.

**Un résultat computationnel peut contribuer à une décision sans suffire, à lui seul, à la justifier.**
