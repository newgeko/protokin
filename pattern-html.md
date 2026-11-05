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

## Direction artistique — Identité visuelle des pages HTML

### Fonction

Définir une identité visuelle commune aux pages HTML de Protokin. Cette direction artistique assure la cohérence graphique et éditoriale du corpus, tout en laissant à chaque page la liberté de choisir une présentation adaptée à sa fonction.

La direction artistique constitue un cadre de conception, non un modèle de page à reproduire systématiquement.

### 1. Intention générale

L'identité visuelle de Protokin s'inscrit dans un registre documentaire, organo-technique et expérimental.

Elle doit évoquer un environnement d'examen et de mise à l'épreuve des descriptions : un espace où des distinctions, des relations, des transformations et des arguments peuvent être rendus visibles et examinés.

L'interface ne doit pas chercher à représenter une théorie générale du monde, un système total ou une architecture métaphysique.

Elle privilégie :
- la lisibilité plutôt que l'effet visuel ;
- la précision plutôt que la décoration ;
- les relations plutôt que les symboles ;
- les annotations plutôt que les effets spectaculaires ;
- la sobriété plutôt que l'accumulation graphique.

L'ensemble peut évoquer un atlas documentaire, un instrument d'examen ou un environnement de travail éditorial.

### 2. Univers graphique

L'univers graphique repose sur un fond sombre, des surfaces différenciées avec discrétion et une hiérarchie typographique nette.

Il évite :
- les interfaces technologiques génériques ;
- les effets néon et les dégradés lumineux omniprésents ;
- les textures décoratives ;
- les illustrations abstraites sans fonction explicative ;
- les codes visuels de tableaux de bord commerciaux ;
- les représentations pseudo-scientifiques ou pseudo-métaphysiques.

Les éléments graphiques doivent contribuer à organiser la lecture, à signaler une distinction ou à rendre une relation perceptible.

### 3. Palette chromatique

La palette est limitée et stable.

| Usage | Couleur indicative | Fonction |
|---|---|---|
| Fond principal | Graphite profond `#171A1D` | Espace général de lecture |
| Fond secondaire | Graphite clair `#22272B` | Sections et surfaces distinctes |
| Fond ponctuel | `#2B3238` | Encadrés et éléments interactifs |
| Texte principal | Blanc cassé `#E8E6DF` | Lecture courante |
| Texte secondaire | Gris `#A4AAA9` | Annotations et métadonnées |
| Accent structurel | Bleu froid `#7896A8` | Relations, repères et navigation |
| Accent de tension | Ocre cuivré `#B58B61` | Difficultés, reprises et transformations |
| Alerte ou réserve | Rouge assourdi `#A66D68` | Limites, contradictions ou points de vigilance |

Les couleurs d'accent ne doivent pas devenir des codes théoriques fixes. Leur fonction est éditoriale et visuelle. Elles ne signifient pas qu'une orientation, une opération ou un régime descriptif possède une couleur intrinsèque.

Le contraste entre texte et fond doit rester suffisant dans toutes les situations de lecture.

### 4. Typographie

La typographie doit privilégier une lecture prolongée et une hiérarchie immédiatement compréhensible.

- Une police sans sérif sobre pour les titres, les paragraphes et la navigation.
- Une police monospace pour les notations, les identifiants, les repères techniques et certains éléments de schématisation.
- Une hiérarchie limitée de tailles et de graisses.
- Une largeur de colonne adaptée à la lecture de textes argumentatifs.
- Un interlignage suffisamment généreux.
- Une distinction nette entre titres, texte courant, citations, notes et légendes.

Les effets typographiques ne doivent pas se substituer à la structure argumentative du contenu.

### 5. Composition et mise en page

Les pages reposent sur une grille commune, mais leur composition dépend de leur fonction.

Le socle partagé comprend :
- une zone d'identification de la page ;
- un titre principal ;
- une indication éventuelle de catégorie ou de fonction documentaire ;
- une zone principale de contenu ;
- une navigation cohérente ;
- un accès à la version Markdown de référence ;
- un pied de page discret.

La lecture doit rester prioritaire. Les colonnes latérales, sommaires internes, annotations et panneaux complémentaires ne sont utilisés que lorsqu'ils apportent un bénéfice réel.

Les espaces vides sont des éléments de composition à part entière. Ils permettent de distinguer les parties et de limiter la surcharge visuelle.

### 6. Langage graphique

Le langage graphique repose principalement sur des formes simples :
- lignes pour les relations et les dépendances ;
- cadres pour délimiter des ensembles ou des niveaux de lecture ;
- flèches pour indiquer une orientation ou une transformation ;
- repères pour identifier des éléments ;
- annotations pour préciser une réserve ou une interprétation ;
- tableaux pour organiser des comparaisons ;
- schémas pour rendre visibles des configurations.

Chaque représentation doit être accompagnée, lorsque nécessaire, d'une explication textuelle.

Un schéma ne doit pas faire croire qu'une relation est nécessaire, exhaustive, hiérarchique ou chronologique si le contenu source ne l'établit pas.

Les visualisations doivent distinguer les éléments issus du texte source de ceux ajoutés pour faciliter sa compréhension.

### 7. Composants communs

Les pages peuvent partager un ensemble limité de composants :
- en-tête et navigation ;
- fil d'Ariane ;
- titre et métadonnées ;
- sommaire local ;
- blocs de définition ;
- blocs de distinction ;
- encadrés de réserve ou de limite ;
- tableaux comparatifs ;
- schémas annotés ;
- références et liens documentaires ;
- accès à la page Markdown d'origine.

Ces composants définissent une grammaire graphique commune. Ils ne constituent pas des éléments obligatoires de chaque page.

Leur utilisation dépend de leur utilité pour le contenu considéré.

### 8. Variations selon la fonction des pages

L'identité visuelle est commune, mais les formes de présentation peuvent varier.

| Fonction de la page | Forme de présentation privilégiée |
|---|---|
| Architecture | Cartographie des composantes et de leurs relations |
| Opération | Présentation des activités, conditions et possibilités de reprise |
| Orientation | Organisation des angles d'examen et des questions associées |
| Concept | Lecture structurée, définitions et distinctions |
| Comparaison | Mise en regard de descriptions et de leurs écarts |
| Étude de cas | Dossier documentaire, étapes de l'examen et éléments de preuve |
| Chronologie | Présentation des séquences et transformations |
| Méthode | Parcours de travail et possibilités de révision |

Ces formes sont indicatives. Une page peut combiner plusieurs modes de présentation si sa fonction le justifie.

### 9. Interaction et comportement

Les interactions doivent rester limitées, explicites et utiles.

Elles peuvent servir à :
- déplier une précision ;
- afficher une annotation ;
- comparer plusieurs éléments ;
- parcourir les étapes d'un examen ;
- filtrer un ensemble documentaire ;
- consulter une référence complémentaire.

Une interaction ne doit jamais dissimuler une partie essentielle du raisonnement ni rendre le contenu inaccessible sans manipulation.

Les animations sont discrètes et fonctionnelles. Elles ne doivent pas ralentir la lecture ni donner une impression artificielle de mouvement ou de complexité.

### 10. Adaptation aux écrans et accessibilité

Les pages doivent être lisibles sur ordinateur, tablette et téléphone.

La mise en page s'adapte aux dimensions disponibles sans supprimer les informations essentielles. Les schémas complexes doivent disposer d'une solution de consultation adaptée aux petits écrans.

Les exigences minimales comprennent :
- navigation au clavier ;
- contrastes suffisants ;
- hiérarchie sémantique correcte des titres ;
- textes alternatifs pour les images informatives ;
- libellés explicites pour les commandes ;
- absence de dépendance exclusive à la couleur ;
- possibilité de consulter le contenu essentiel sans JavaScript.

### 11. Règle de cohérence

Une page HTML appartient visuellement au corpus Protokin lorsqu'elle respecte l'identité graphique commune et conserve une organisation éditoriale reconnaissable.

Elle n'a pas besoin de reproduire la composition des autres pages.

La cohérence du corpus repose donc sur la stabilité du langage visuel, de la typographie, de la navigation et des composants communs, et non sur l'uniformité des mises en page.

**La direction artistique unifie les conditions de lecture ; elle ne détermine pas la forme de l'enquête.**
