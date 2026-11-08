# Patterns éditoriaux de Protokin

## 1. Fonction et portée

Ce document définit les repères utilisés pour rédiger, réviser et articuler les pages de Protokin.

Il aide à déterminer :

- la fonction propre d’une page ;
- le problème auquel elle répond ;
- la structure adaptée à son objet ;
- les distinctions nécessaires à son analyse ;
- ses relations avec les autres ressources du corpus ;
- les limites des conclusions qu’elle permet de soutenir.

Les patterns sont des **instruments éditoriaux révisables**, non des modèles obligatoires. Ils orientent le travail sans imposer une structure uniforme à toutes les pages.

Une page peut combiner plusieurs fonctions. Le pattern principal est celui qui correspond à sa contribution dominante ; les autres ne sont mobilisés que lorsque leur apport est nécessaire.

Ce document ne remplace ni l’architecture du projet, ni l’architecture fonctionnelle de l’enquête, ni l’audit du corpus :

- `patterns.md` définit les repères de rédaction et de révision ;
- `pattern-audit.md` guide l’examen des fonctions, des catégories et des relations entre les pages ;
- `audit-corpus.md` rend compte de l'état du corpus Protokin à un moment donné, à partir d'un examen de ses ressources et de leurs relations;
- `fr/architecture-projet.md` présente l’organisation documentaire du projet ;
- `fr/architecture-fonctionnelle-de-l-enquete.md` expose les opérations de l’enquête et leurs articulations ;
- `fr/tdm.md` oriente le lecteur dans le corpus.

Ces ressources sont complémentaires. Leur articulation ne justifie pas de reproduire leur contenu dans chacune d’elles.

## 2. Principes éditoriaux communs

Les principes suivants s’appliquent à l’ensemble du corpus. Ils définissent les exigences générales de rédaction et de révision ; les règles pratiques correspondantes sont précisées dans les sections suivantes.

### 2.1. Justifier la fonction de chaque page

Toute page doit répondre à un problème identifiable et apporter une contribution propre au corpus.

Une proximité thématique avec une page existante ne suffit pas à justifier un nouveau document. Il faut pouvoir préciser ce que la page apporte, ce qu’elle complète et ce qu’elle laisse aux autres ressources.

### 2.2. Préserver les différences de fonction

Les notions, les opérations, les orientations et les ressources documentaires peuvent être articulées sans devenir interchangeables.

Le principe directeur est le suivant :

**Continuité des dépendances, discontinuité des fonctions, non-conversion.**

Une relation entre deux éléments n’établit pas leur identité, pas plus qu’une dépendance n’autorise à réduire l’un à l’autre. Les distinctions doivent être maintenues lorsqu’elles modifient l’analyse ou la portée d’une conclusion.

### 2.3. Maintenir l’orientation méthodologique

Protokin est une démarche d’enquête pragmatiste, inférentialiste, réflexive et non ontologique sur les pratiques descriptives.

Les pages doivent examiner les conditions, les fonctions et les transformations de ces pratiques sans convertir directement une analyse descriptive en affirmation ontologique. Elles ne doivent ni supposer que toutes les descriptions se valent, ni considérer qu’une description cohérente est nécessairement adéquate.

**La cohérence d’une description ne suffit pas à établir son adéquation à ce qu’elle prétend décrire.**

### 2.4. Proportionner les conclusions aux éléments disponibles

Une page doit distinguer ce qu’elle établit, ce qu’elle rend plausible et ce qu’elle laisse indéterminé.

Les exemples, les références, les comparaisons et les instruments d’examen contribuent à soutenir une proposition ; aucun ne dispense d’examiner la portée de l'argument. Les conclusions ne doivent pas excéder ce que les éléments mobilisés permettent de soutenir.

### 2.5. Maintenir le corpus révisable

Les définitions, les distinctions, les méthodes et les propositions restent susceptibles d’être révisées à partir des difficultés rencontrées, des cas examinés et des contradictions constatées.

La cohérence du corpus est un objectif de travail, non une garantie de vérité. Aucun document n’est soustrait à l’examen en raison de son ancienneté ou de sa place dans l’architecture.

## 3. Règles de rédaction et de navigation

### 3.1. Structure adaptée à la fonction

La structure d’une page doit découler de son problème et de sa fonction.

Les rubriques suivantes forment une grille de travail, et non un sommaire obligatoire :

- **Fonction** : contribution de la page dans le corpus.
- **Problème** : difficulté qui justifie son existence.
- **Définition** : sens des termes nécessaires à l’analyse.
- **Distinctions** : différences qui modifient l’interprétation ou la portée des conclusions.
- **Articulation** : relations pertinentes avec les autres ressources.
- **Épreuve** : cas, comparaison, substitution ou examen permettant de mettre une proposition à l’épreuve.
- **Limites** : conclusions qui ne sont pas autorisées ou restent indéterminées.

Ces éléments peuvent être regroupés, déplacés ou omis lorsqu’ils ne contribuent pas à la fonction de la page.

### 3.2. Définitions et vocabulaire

Une définition doit préciser ce qu’un terme permet de distinguer, d’examiner ou d’inférer dans le contexte considéré. Elle ne doit pas se limiter à reformuler le terme ou à accumuler des synonymes.

Lorsqu’une notion est définie dans une page de référence, les autres pages doivent privilégier un rappel concis et un renvoi. Une redéfinition locale n’est justifiée que si le contexte exige de préciser un usage particulier.

Si un terme change de sens ou de fonction entre plusieurs pages, il faut examiner cette variation au lieu de l’harmoniser automatiquement.

Dans Protokin, les termes « auditer » et « auditeur » sont réservés respectivement à une fonction transversale de l’enquête et à une position dans une pratique discursive.
Le terme « audit » ne désigne pas une démarche autonome, une procédure générale de contrôle ou une catégorie documentaire.

### 3.3. Exemples et références

Un exemple doit éclairer une distinction ou contribuer à éprouver une proposition. Il ne constitue pas, à lui seul, une preuve générale.

Une page peut mobiliser :

- un exemple minimal pour clarifier une distinction ;
- un contre-exemple pour éprouver une définition ;
- une comparaison pour examiner des différences ;
- une étude de cas pour analyser une situation ;
- une référence pour situer un argument ou préciser sa provenance.

Les références doivent être effectivement pertinentes pour les propositions auxquelles elles sont associées. L’autorité d’une source ne remplace pas l’examen de l’argument.

Les questions ouvertes ne doivent être mentionnées que lorsqu’elles correspondent à une difficulté identifiable.

### 3.4. Liens internes

Les liens doivent être vérifiés à partir des chemins réellement présents dans la branche du dépôt examinée.

Pour les pages du corpus français, la convention éditoriale retenue est d’utiliser le préfixe `fr/` dans les chemins des liens internes, y compris depuis une page située dans `fr/`.

Exemple de forme attendue :

[Introduction générale](fr/introduction-generale.md)

Cette convention doit être appliquée de façon cohérente dans les renvois, les listes de ressources et les exemples documentaires. Avant toute modification, vérifier le chemin exact du fichier et le comportement des liens dans le dispositif de publication utilisé.

Pour les autres ressources, notamment les fichiers à la racine du dépôt, employer un chemin correspondant à leur emplacement réel. Ne pas appliquer mécaniquement le préfixe `fr/` à tous les fichiers.

Un lien doit remplir une fonction identifiable : approfondir une notion, expliciter une dépendance, compléter un examen ou permettre la navigation. Il ne doit pas remplacer une explication nécessaire à la compréhension de la page.

### 3.5. Vérification des sources

Toute révision substantielle doit partir des fichiers actuels de la branche concernée.

Il faut consulter les pages directement liées, vérifier les noms de fichiers et examiner les modifications déjà apportées. Si une ressource nécessaire est inaccessible, cette limite doit être signalée. Son contenu ne doit pas être reconstitué à partir d’extraits anciens ou de suppositions.

## 4. Les huit patterns éditoriaux

### Pattern A — Pages d’orientation et de cadrage

**Fonction**

Présenter le projet, expliciter son problème de départ ou rendre intelligible une partie de son organisation.

**Structure recommandée**

1. Fonction de la page.
2. Problème auquel elle répond.
3. Orientation ou organisation présentée.
4. Distinctions structurantes.
5. Portée et limites.

**Différenciation des fonctions**

- Le `README.md` présente le projet et oriente le lecteur vers ses ressources.
- `fr/introduction-generale.md` expose le problème de départ, l’orientation et la portée de la démarche.
- `fr/architecture-projet.md` explique l’organisation documentaire et les relations entre les ressources.
- `fr/architecture-fonctionnelle-de-l-enquete.md` présente les catégories, les opérations, les orientations, les fonctions transversales et les instruments d’épreuve qui organisent l’enquête.
- `fr/orientation-de-l-examen.md` définit la notion d’orientation et présente les orientations actuellement disponibles — Condition, Relation, Fonction et Justification — comme des repères de questionnement révisables.
- `fr/nom-origine-portee.md` examine, si nécessaire, l’origine et la portée du nom Protokin.

Cette répartition est un repère fonctionnel à confronter au contenu réel des fichiers. Elle ne justifie pas de faire répéter à chaque page l’ensemble de la présentation du projet.

**Points de vigilance**

- Partir d’un problème descriptif identifiable.
- Ne pas transformer le cadrage méthodologique en ontologie générale.
- Ne pas confondre organisation du corpus, fonctionnement de l’enquête et orientations de l’examen.
- Ne pas présenter les orientations actuellement disponibles comme une classification exhaustive, une hiérarchie ou des phases obligatoires.
- Distinguer l’orientation, qui précise sous quel rapport une situation est examinée, de l’opération, qui désigne le travail descriptif mobilisé pour traiter la question.
- Ne pas faire du README une seconde introduction générale.

**Critère de réussite**

Le lecteur comprend la fonction de la page, sa contribution spécifique et les ressources à consulter pour approfondir le sujet.

### Pattern B — Pages consacrées aux opérations de l’enquête

**Fonction**

Définir une opération, préciser les problèmes auxquels elle répond et déterminer ce qu’elle permet d’examiner.

**Structure recommandée**

1. Fonction.
2. Problème.
3. Définition opérationnelle.
4. Conditions de mobilisation.
5. Questions ou procédure d’examen.
6. Résultats possibles.
7. Limites.
8. Articulation avec les autres opérations.
9. Exemple, si nécessaire.

Les opérations concernées sont :

**Délimiter → Ancrer → Distinguer → Relier → Configurer → Justifier → Reconstituer → Redélimiter.**

Cette chaîne sert de repère d’orientation. Elle n’impose ni une succession temporelle obligatoire ni l’exécution systématique de toutes les opérations. Une difficulté peut conduire à revenir sur une opération antérieure ou à en mobiliser plusieurs conjointement.

**Points de vigilance**

- Décrire un examen identifiable, et non une notion générale.
- Préciser ce qui rend l’opération pertinente.
- Distinguer la dépendance entre opérations de leur succession.
- Ne pas présenter une opération comme une étape nécessaire de constitution de son objet.
- Déterminer les résultats qu’elle autorise et les questions qui restent ouvertes.
- Indiquer les conditions dans lesquelles elle doit être reprise.

**Critère de réussite**

Le lecteur sait pourquoi mobiliser l’opération, ce qu’il doit examiner et quand son résultat exige une révision.

### Pattern C — Pages consacrées aux notions

**Fonction**

Définir une notion, expliquer le problème auquel elle répond et préciser son rôle dans l’analyse.

**Structure recommandée**

1. Fonction.
2. Problème.
3. Définition.
4. Distinctions avec les notions voisines.
5. Articulation avec l’enquête.
6. Exemple discriminant.
7. Limites.
8. Questions ouvertes ou références, si nécessaire.

**Points de vigilance**

- Définir la notion par ce qu’elle permet d’examiner.
- Distinguer la notion de ses manifestations, de ses usages et des conclusions qu’on en tire.
- Éviter les synonymes qui masquent des différences de fonction.
- Ne pas transformer une distinction analytique en succession chronologique ou en hiérarchie ontologique.
- Ne pas déduire une relation de constitution de la seule présence d’une relation descriptive.
- Ne pas imposer une structure identique à toutes les notions.

Pour les notions voisines, les relations doivent être établies à partir du problème étudié. Il ne faut pas présupposer, par exemple, une chaîne automatique entre configuration rencontrée, configuration sémiotique, configuration descriptive, description, objet descriptif et référent.

**Critère de réussite**

Le lecteur peut employer la notion avec précision, la distinguer des notions voisines et identifier les conclusions qu’elle autorise.

### Pattern D — Pages consacrées au langage, à l’inférence et à la justification

**Fonction**

Analyser une fonction langagière ou inférentielle et préciser son rôle dans une pratique descriptive.

**Structure recommandée**

1. Fonction.
2. Problème de distinction.
3. Définition.
4. Exemple minimal.
5. Distinctions avec les fonctions voisines.
6. Conséquences et engagements.
7. Conditions de correction ou de justification.
8. Inférences non autorisées, si pertinentes.

**Points de vigilance**

- Distinguer forme grammaticale, contenu conceptuel et force pragmatique.
- Ne pas assimiler automatiquement proposition, assertion et description.
- Ne pas traiter la prédication comme une théorie complète de la signification.
- Distinguer les conditions de production d’un contenu, les engagements associés à son usage et sa justification.
- Ne pas déduire une obligation normative de la seule présence d’une description.
- Distinguer les raisons invoquées, les critères mobilisés et les conditions de production d’une conclusion.

Un exemple minimal, tel que « Ce vélo est rouge », peut servir à distinguer la forme grammaticale, le contenu attribué, l’acte d’assertion, les circonstances d’énonciation et les critères susceptibles de soutenir ou de contester l’attribution. Ces éléments peuvent dépendre les uns des autres sans être identiques.

**Critère de réussite**

La page identifie la fonction langagière ou inférentielle examinée, les distinctions nécessaires et les conséquences qui peuvent légitimement en être tirées.

### Pattern E — Pages consacrées aux méthodes et aux instruments

**Fonction**

Fournir une procédure pour examiner une description, comparer plusieurs descriptions ou éprouver une distinction.

**Structure recommandée**

1. Objet de l’examen.
2. Problème.
3. Conditions d’application.
4. Procédure.
5. Questions à poser.
6. Éléments à recueillir.
7. Règles d’interprétation.
8. Limites de l’instrument.
9. Exemple d’application.
10. Résultat attendu.

**Points de vigilance**

- Distinguer l’instrument, son objet et les conclusions tirées de son application.
- Expliciter les conditions qui rendent la procédure pertinente.
- Distinguer les observations de leur interprétation.
- Ne pas présenter la procédure comme une garantie automatique de validité.
- Ne pas confondre l’absence de résultat concluant avec la confirmation d’une hypothèse.
- Permettre l’application de la méthode sans obliger le lecteur à reconstruire toute l’architecture théorique.
- Préciser ce qui pourrait rendre l’instrument inadapté ou nécessiter sa révision.

**Critère de réussite**

Le lecteur sait quoi examiner, comment procéder, ce qu’il peut conclure et ce qui exige un examen supplémentaire.

### Pattern F — Pages consacrées aux relations entre notions ou régimes descriptifs

**Fonction**

Examiner les relations entre plusieurs notions, descriptions ou régimes sans présupposer leur identité ni leur incompatibilité.

**Structure recommandée**

1. Fonction.
2. Problème relationnel.
3. Éléments mis en relation.
4. Type de relation examiné.
5. Conditions de compatibilité ou de conflit.
6. Cas discriminants.
7. Conséquences pour l’enquête.
8. Limites.

**Points de vigilance**

- Identifier précisément les éléments mis en relation.
- Distinguer relation, dépendance, compatibilité, incompatibilité et contradiction.
- Ne pas supposer que deux descriptions d’un même référent sont nécessairement concurrentes.
- Ne pas confondre différence de vocabulaire, différence de fonction et contradiction.
- Ne pas réduire une relation à une propriété intrinsèque de l’un des termes.
- Préciser les conditions dans lesquelles une incompatibilité devient pertinente.
- Ne pas déduire qu’une différence de registre impose une traduction ou une réduction à un registre commun.
- Éviter de transformer une articulation locale en principe universel.

**Critère de réussite**

Le lecteur peut déterminer ce qui relie les éléments étudiés, dans quelles conditions la relation est pertinente et quelles conclusions elle permet de soutenir.

### Pattern G — Pages consacrées aux études de cas

**Fonction**

Mettre des distinctions, des propositions ou des instruments à l’épreuve d’une situation concrète.

**Structure recommandée**

1. Situation étudiée.
2. Question d’enquête.
3. Matériaux disponibles.
4. Descriptions en présence.
5. Distinctions pertinentes.
6. Analyse.
7. Résultats des épreuves.
8. Limites de l’interprétation.
9. Enseignements pour l’enquête.

**Points de vigilance**

- Distinguer les éléments disponibles, les descriptions produites et l’interprétation proposée.
- Présenter les matériaux nécessaires à la compréhension du cas.
- Ne pas forcer le cas à confirmer une distinction préétablie.
- Identifier les éléments qui résistent à l’analyse.
- Distinguer l’analyse locale des conclusions générales.
- Signaler les limites documentaires et interprétatives.
- Préciser ce qui, dans le cas, pourrait conduire à réviser une définition, une hypothèse ou un instrument.

**Critère de réussite**

Le cas montre ce que les instruments permettent effectivement d’examiner, mais aussi ce qu’ils ne permettent pas de conclure. Il peut conduire à réviser le cadre d’analyse au lieu de simplement l’illustrer.

### Pattern H — Pages de référence et de navigation

**Fonction**

Permettre au lecteur de retrouver les ressources, de comprendre leur fonction et de choisir un parcours adapté à son problème.

Ce pattern concerne notamment la table des matières, le lexique et les parcours de lecture.

**Table des matières**

Elle organise l’accès aux ressources selon leurs fonctions. Elle doit employer les titres et les chemins réellement présents dans le dépôt, éviter les doublons de classement et permettre plusieurs entrées lorsque le corpus le justifie.

Elle ne doit pas devenir un résumé concurrent des pages ni imposer un ordre de lecture qui ne correspond pas à leur fonction.

**Lexique**

Chaque entrée doit fournir, selon les besoins :

1. le terme ;
2. une définition concise ;
3. les distinctions essentielles ;
4. la page de référence ;

Le lexique est un instrument de consultation, non une répétition intégrale des développements théoriques. Il faut éviter les définitions circulaires et signaler les termes provisoires ou redéfinis lorsque cela est utile.

**Parcours de lecture**

Un parcours peut être organisé à partir d’une question ou d’un problème. Il indique les pages à consulter, leur fonction et l’ordre proposé. Cet ordre est une aide à la lecture, non une chaîne nécessaire de constitution.

**Points de vigilance**

- Vérifier l’existence de chaque cible.
- Employer les intitulés et les chemins exacts.
- Distinguer les ressources selon leur fonction principale.
- Expliquer l’utilité d’un renvoi lorsque celle-ci n’est pas évidente.
- Éviter d’inclure une page sur la seule base d’une proximité thématique.

**Critère de réussite**

Le lecteur peut retrouver une ressource, comprendre ce qu’elle apporte et poursuivre son enquête sans devoir maîtriser préalablement tout le corpus.

## 5. Procédure de rédaction et de révision

Toute révision substantielle suit six opérations de travail. Cet ordre est pratique : il ne constitue pas une nouvelle chaîne théorique de l’enquête.

### Étape 1 — Vérifier le corpus

Récupérer le fichier actuel dans la branche concernée. Consulter `patterns.md`, `pattern-audit.md` et les pages directement liées lorsque leur contenu est nécessaire à la décision.

Vérifier les chemins et les modifications récentes. Si une ressource nécessaire est inaccessible, le signaler et limiter les conclusions en conséquence.

Ne pas reconstituer le contenu d’un fichier inaccessible à partir de souvenirs, d’extraits anciens ou de suppositions.

### Étape 2 — Identifier la fonction et le pattern

Formuler brièvement :

- la fonction de la page ;
- le problème traité ;
- sa contribution spécifique ;
- ce qu’elle doit laisser aux autres ressources.

Nommer le pattern principal. Si plusieurs patterns interviennent, préciser uniquement les exigences secondaires nécessaires.

### Étape 3 — Examiner les relations

Comparer la page aux ressources voisines. Repérer les répétitions, les définitions concurrentes, les dépendances présupposées, les renvois manquants et les éventuelles contradictions.

Distinguer le recouvrement thématique du recouvrement fonctionnel. Une répétition peut être utile si elle facilite la compréhension ; elle devient problématique lorsqu’elle reproduit un développement sans apport supplémentaire.

### Étape 4 — Décider de la nature de la révision

Choisir une intervention proportionnée au problème :

- correction localisée ;
- réorganisation ;
- développement ou réduction ;
- fusion ;
- scission ;
- déplacement ;
- archivage ou suppression.

Une réécriture intégrale est justifiée lorsque la structure empêche de comprendre la fonction de la page ou que ses confusions ne peuvent pas être corrigées localement. Elle n’est pas une exigence générale.

### Étape 5 — Réviser et contrôler les engagements

Vérifier les définitions, les distinctions, les exemples et les conclusions. Examiner les conversions non justifiées, les engagements théoriques hérités et la portée des propositions.

Contrôler que la cohérence n’est pas utilisée comme preuve suffisante d’adéquation et que les limites importantes sont explicites.

### Étape 6 — Vérifier la navigation et documenter

Contrôler les liens, les chemins, les titres et les références à partir du dépôt réel. Examiner les pages susceptibles d’être affectées par la modification.

Pour une révision importante, conserver une trace de la décision, de sa justification et des vérifications restant à effectuer. Cette trace relève du suivi éditorial ; elle n’a pas à être ajoutée automatiquement à la page publiée.

## 6. Décisions éditoriales

Une décision doit être justifiée par la fonction effective de la page et son rapport au corpus, non par sa longueur, son ancienneté ou sa seule place dans la navigation.

| Décision | Critère |
|---|---|
| **Conserver** | La fonction est distincte et le contenu reste cohérent. |
| **Corriger** | La fonction est utile, mais des imprécisions ou des incohérences localisées subsistent. |
| **Relier** | La page est pertinente, mais ses dépendances ou ses renvois sont insuffisants. |
| **Restructurer** | L’organisation du contenu masque sa fonction ou ses distinctions principales. |
| **Fusionner** | Plusieurs pages remplissent essentiellement la même fonction et leur séparation n’apporte pas de différence utile. |
| **Scinder** | Une page remplit plusieurs fonctions autonomes qui gagnent à être séparées. |
| **Déplacer ou reclasser** | La fonction est pertinente, mais son emplacement documentaire gêne la compréhension du corpus. |
| **Archiver ou supprimer** | La page n’apporte plus de contribution distincte ou son contenu est repris ailleurs de manière adéquate. |
| **À examiner** | Les éléments disponibles ne permettent pas encore de décider de manière fiable. |

Avant une fusion, une scission ou une suppression, vérifier les liens entrants, les références croisées et les effets sur la navigation. Préserver ou redistribuer le contenu utile.

Une tension entre deux pages ne doit pas être corrigée par une harmonisation rédactionnelle avant d’avoir déterminé si elle relève d’une contradiction, d’une différence de définition, d’une différence de fonction ou d’une question encore ouverte.

## 7. Architecture révisable et enquête située

Les catégories, opérations, orientations, fonctions transversales et instruments de Protokin constituent des ressources de travail révisables.

Elles ne doivent pas être utilisées comme une grille préalable à laquelle chaque difficulté serait systématiquement rapportée.

La rédaction d'une page doit partir du problème qu'elle examine et identifier les ressources effectivement nécessaires à son traitement.

Une ressource existante peut être mobilisée, précisée ou laissée de côté. Une difficulté peut également révéler une distinction insuffisamment établie ou conduire à proposer une modification de l'architecture.

Il faut éviter de présenter l'organisation actuelle de Protokin comme exhaustive, nécessaire ou universelle.

L'architecture doit pouvoir être évaluée à partir de sa contribution aux enquêtes, et non seulement à partir de sa cohérence interne.

## 8. Contrôle final avant publication

La liste suivante sert de contrôle final. Elle ne constitue pas une obligation d’ajouter toutes ces rubriques à la page publiée.

### Fonction et structure

- [ ] La fonction de la page est identifiable.
- [ ] Le problème traité justifie son existence.
- [ ] Le pattern principal a été choisi.
- [ ] La structure sert la fonction de la page.
- [ ] La contribution propre est distincte de celle des pages voisines.
- [ ] Les répétitions sont justifiées ou supprimées.

### Définitions et arguments

- [ ] Les termes centraux sont employés avec précision.
- [ ] Les distinctions nécessaires sont explicites.
- [ ] Les exemples éclairent réellement le problème.
- [ ] Les principales conclusions sont soutenues par des éléments ou des raisons pertinents.
- [ ] Les dépendances sont distinguées des identités et des conversions.
- [ ] Les limites importantes sont explicites.
- [ ] Les questions ouvertes ne sont pas présentées comme des conclusions acquises.

### Cohérence et révision

- [ ] Les pages directement liées ont été consultées lorsque cela était nécessaire.
- [ ] Les différences de fonction ne sont pas traitées comme des contradictions sans examen.
- [ ] Les contradictions réelles ne sont pas masquées par une harmonisation.
- [ ] Les engagements théoriques hérités ont été examinés lorsqu’ils sont pertinents.
- [ ] Les décisions éditoriales sont proportionnées au problème constaté.

### Navigation et publication

- [ ] Les noms de fichiers et les chemins ont été vérifiés.
- [ ] Les liens internes ont été contrôlés.
- [ ] Les références soutiennent les propositions auxquelles elles sont associées.
- [ ] Les renvois correspondent à la fonction effective des pages ciblées.
- [ ] Les conséquences pour les autres ressources ont été identifiées.
- [ ] Les limites de la vérification sont signalées si certaines sources étaient inaccessibles.

## Synthèse

Les patterns servent à préserver la fonction propre des pages, à rendre leurs relations intelligibles et à contrôler la portée de leurs conclusions.

Ils reposent sur trois exigences :

- **Différenciation des fonctions** : chaque page apporte une contribution identifiable.
- **Continuité des dépendances** : les pages peuvent se soutenir, se compléter et se mettre à l’épreuve.
- **Non-conversion** : une relation ou une dépendance n’établit pas à elle seule une identité, une succession nécessaire ou la détermination d’un registre par un autre.

Ces exigences s’appliquent également aux patterns. Ils doivent pouvoir être révisés lorsque le corpus ou les difficultés rencontrées montrent qu’ils ne remplissent plus correctement leur fonction.

Leur objectif n’est pas de fermer le corpus dans une architecture uniforme, mais de rendre ses ressources plus lisibles, ses relations plus explicites et ses propositions plus faciles à examiner.
