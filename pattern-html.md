# Pattern — Traduction HTML des pages Markdown

Version : 26.11.05

## Fonction

Définir les règles de production des versions HTML des pages Markdown du corpus Protokin.

Le HTML constitue une traduction éditoriale et, lorsque cela est pertinent, interactive d'une ressource Markdown. Il vise à améliorer son accessibilité, sa lisibilité et la compréhension de sa fonction.

Il ne constitue ni une nouvelle source théorique ni une réécriture autonome du contenu.

## Problème

Une conversion uniforme des pages Markdown en HTML ne respecte pas nécessairement la diversité fonctionnelle du corpus.

Une définition, une opération d'enquête, une distinction conceptuelle, une étude de cas et une page d'architecture ne présentent pas les mêmes besoins de lecture.

La question n'est donc pas seulement de convertir un format documentaire en format web, mais de déterminer quelle présentation HTML sert effectivement le contenu et la fonction de chaque page.

## Définition

La traduction HTML est une opération de transposition éditoriale qui conserve le contenu, les distinctions, les engagements et les limites d'une page Markdown tout en adaptant leur présentation aux possibilités du navigateur.

Elle peut mobiliser :
- une organisation typographique ;
- des tableaux et des schémas ;
- des représentations graphiques ;
- des interactions de consultation ;
- des filtres et des comparaisons ;
- des parcours de navigation ;
- des visualisations temporelles.

Ces moyens ne sont mobilisés que lorsqu'ils apportent une valeur explicative ou fonctionnelle identifiable.

## Principes

### 1. Fidélité conceptuelle

La version HTML conserve les notions, définitions, distinctions, arguments, exemples et réserves de la page source.

Elle ne simplifie pas une difficulté théorique au point d'en modifier la portée.

### 2. Fidélité fonctionnelle

La présentation dépend de la fonction propre de la page.

Une page consacrée à une opération ne doit pas devenir une simple présentation encyclopédique de cette opération.

Une étude de cas ne doit pas devenir une illustration décorative.

Une page de définition ne doit pas devenir artificiellement un outil interactif.

### 3. Proportionnalité

La complexité de l'interface doit être proportionnée à celle du contenu et à l'utilité de la représentation.

Une présentation textuelle structurée est préférable à une visualisation inutile.

L'interactivité n'est jamais une exigence en soi.

### 4. Non-substitution

Le Markdown demeure la source documentaire de référence.

Le HTML ne crée pas de nouvelles catégories, opérations ou orientations et ne modifie pas l'architecture du projet.

### 5. Révisabilité

La version HTML doit pouvoir être comparée à sa source Markdown.

Toute modification du contenu source appelle une vérification de la version HTML correspondante.

### 6. Transparence

Les schémas, tableaux et visualisations distinguent les éléments présents dans la source, les interprétations proposées et les représentations ajoutées pour faciliter la compréhension.

Une représentation graphique ne constitue pas une preuve supplémentaire.

## Types de présentation

Le choix de présentation dépend de la fonction de la page.

| Type | Présentation privilégiée |
|---|---|
| Conceptuelle | Lecture structurée et définitions |
| Opératoire | Parcours et représentation des opérations |
| Architecturale | Cartographie des relations et dépendances |
| Comparative | Tableaux et confrontations |
| Temporelle | Chronologies et trajectoires |
| Documentaire | Dossier de sources et éléments d'enquête |

Ces types ne sont ni exclusifs ni obligatoires.

## Procédure de production

### Étape 1 — Identifier la source

Recharger la version actuelle du fichier Markdown depuis la branche de référence.

Ne pas travailler à partir d'une version ancienne ou d'un extrait incomplet.

### Étape 2 — Identifier la fonction

Déterminer :
- la fonction propre de la page ;
- son problème ;
- ses notions centrales ;
- ses distinctions ;
- ses dépendances documentaires ;
- ce qu'elle n'établit pas.

### Étape 3 — Déterminer la présentation

Choisir la forme HTML la plus adaptée.

Justifier chaque représentation ou interaction par sa contribution à la compréhension du contenu.

### Étape 4 — Produire le HTML

Conserver l'intégralité des éléments conceptuellement nécessaires.

Privilégier :
- HTML sémantique ;
- CSS sobre et responsive ;
- JavaScript limité aux interactions utiles ;
- accessibilité clavier ;
- lisibilité sur mobile et ordinateur ;
- absence de dépendances inutiles.

### Étape 5 — Vérifier la fidélité

Comparer la page HTML avec le Markdown.

Vérifier notamment :
- les définitions ;
- les distinctions ;
- les exemples ;
- les références ;
- les réserves ;
- les liens internes ;
- les éventuelles interactions.

### Étape 6 — Vérifier le fonctionnement

Tester les liens, les interactions, les dimensions d'écran et l'accessibilité.

Vérifier que le contenu reste intelligible sans JavaScript lorsque cela est techniquement possible.

## N'établit pas

Ce pattern :
- ne définit pas une nouvelle architecture théorique ;
- ne prescrit pas une interface uniforme ;
- n'impose pas une visualisation à chaque page ;
- ne transforme pas chaque ressource en application ;
- ne donne pas au HTML un statut supérieur au Markdown ;
- ne considère pas une représentation graphique comme une validation de son contenu.

## Synthèse

Le HTML rend les ressources de Protokin consultables et représentables selon leur fonction propre.

La qualité d'une traduction HTML ne se mesure pas à sa sophistication graphique ou interactive, mais à sa capacité à rendre le contenu plus accessible sans en altérer les engagements descriptifs.

**Une page HTML réussie n'ajoute pas nécessairement quelque chose à la théorie : elle rend plus intelligible le travail que la page Markdown permet d'accomplir.**
