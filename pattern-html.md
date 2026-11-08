# Pattern — Traduction HTML des pages Markdown

## 1. Fonction et portée

Ce pattern définit les règles de production des versions HTML des pages Markdown du corpus Protokin.

Il encadre une opération de transposition éditoriale : rendre une ressource consultable dans un environnement web, en adaptant sa présentation aux possibilités du navigateur sans modifier sa fonction, ses distinctions ou ses engagements.

Il poursuit deux objectifs complémentaires :

- assurer une identité visuelle et une expérience de consultation cohérentes à l'échelle du corpus ;
- permettre à chaque page d'adopter une présentation adaptée à son contenu et à sa fonction propre.

Le pattern ne prescrit donc ni une conversion automatique ni un modèle de page uniforme.

Le Markdown demeure la source documentaire de référence. Le HTML en constitue une version de consultation et de représentation.

## 2. Problème

Une conversion uniforme des pages Markdown en HTML ne respecte pas nécessairement la diversité fonctionnelle du corpus.

Une page d'architecture, une définition, une opération d'enquête, une comparaison et une étude de cas ne présentent pas les mêmes besoins de lecture.

À l'inverse, une liberté graphique totale produirait un ensemble de pages sans cohérence visuelle ni continuité de consultation.

Il faut donc articuler deux exigences :

- une identité commune qui permette de reconnaître les pages comme appartenant au même corpus ;
- des formes de présentation différenciées qui respectent la fonction de chaque ressource.

L'unité du corpus ne doit pas être obtenue au prix de l'uniformisation de ses contenus.

## 3. Définition

La traduction HTML est une transposition éditoriale et, lorsque cela est pertinent, interactive d'une ressource Markdown.

Elle conserve les éléments nécessaires à la compréhension de la page :

- ses notions et ses définitions ;
- ses distinctions ;
- ses arguments et leurs articulations ;
- ses exemples et ses références ;
- ses réserves et ses limites ;
- ses relations avec les autres ressources.

Elle adapte leur organisation et leur présentation aux possibilités du support HTML.

Cette adaptation peut mobiliser :
- une organisation typographique ;
- des tableaux et des schémas ;
- des représentations graphiques ;
- des parcours de consultation ;
- des comparaisons ;
- des interactions ;
- des visualisations temporelles ou relationnelles.

Ces moyens ne sont utilisés que lorsqu'ils apportent un bénéfice identifiable à la compréhension ou à la consultation.

## 4. Principes de traduction

### 4.1. Fidélité conceptuelle

La version HTML ne doit pas modifier le contenu théorique ou méthodologique de la source.

Elle conserve les distinctions, les arguments, les exemples et les réserves nécessaires à la compréhension du propos.

Une simplification de la présentation est possible. Une simplification qui modifie la portée d'une proposition ne l'est pas.

### 4.2. Fidélité fonctionnelle

La présentation HTML doit servir la fonction propre de la page.

Une page d'opération doit rendre intelligible le travail d'examen qu'elle décrit. Une étude de cas doit permettre d'examiner les éléments et les arguments mobilisés. Une page conceptuelle doit préserver les distinctions qui structurent son propos.

La forme de présentation ne doit pas transformer la nature de la ressource.

### 4.3. Proportionnalité

La complexité de l'interface doit être proportionnée au contenu et à l'utilité de la représentation.

Une page textuelle structurée peut être préférable à une visualisation.

Une interaction n'est pas nécessaire du seul fait que le support HTML la rend possible.

### 4.4. Non-substitution

Le HTML ne remplace pas le Markdown comme source documentaire de référence.

Il ne crée pas de nouvelles catégories, opérations, orientations ou distinctions. Il ne modifie pas l'architecture du projet.

Toute proposition ajoutée pour faciliter la compréhension doit être identifiable comme un apport de présentation et non comme un élément établi par la source.

### 4.5. Transparence des représentations

Les schémas, tableaux et visualisations doivent distinguer :

- les éléments explicitement présents dans la source ;
- les relations directement établies par celle-ci ;
- les choix de représentation ajoutés pour faciliter la lecture.

Une représentation ne constitue pas une preuve supplémentaire.

Elle ne doit pas suggérer une relation nécessaire, une hiérarchie, une succession ou une exhaustivité que le texte source n'établit pas.

### 4.6. Révisabilité

Toute version HTML doit pouvoir être rapprochée de son fichier Markdown source.

Une modification substantielle du Markdown appelle une vérification de la version HTML correspondante.

Les deux versions doivent conserver une correspondance documentaire identifiable.

## 5. Direction artistique commune

### 5.1. Intention visuelle

L'identité visuelle de Protokin relève d'un registre documentaire, organo-mécanique et expérimental.

Elle doit évoquer un environnement d'examen et de mise à l'épreuve des descriptions : un espace où des différences, des relations, des transformations et des arguments peuvent être rendus visibles et examinés.

L'univers graphique peut associer :
- la précision d'un document technique ;
- la profondeur visuelle d'un environnement sombre ;
- des structures organiques et mécaniques ;
- des tracés, des articulations et des annotations ;
- une dimension expérimentale contenue.

L'ensemble doit rester lisible et fonctionnel. Il ne s'agit pas de représenter visuellement une théorie générale du monde ou une architecture métaphysique.

### 5.2. Principes graphiques

L'identité graphique privilégie :

- la lisibilité plutôt que l'effet ;
- la précision plutôt que la décoration ;
- la structure plutôt que l'accumulation ;
- les relations plutôt que les symboles ;
- les annotations plutôt que les effets spectaculaires ;
- la profondeur et la matière plutôt que les effets lumineux artificiels.

Elle évite notamment :
- les interfaces technologiques génériques ;
- les effets néon omniprésents ;
- les dégradés décoratifs ;
- les textures sans fonction ;
- les illustrations abstraites sans rapport avec le contenu ;
- l'esthétique de tableau de bord commercial ;
- les représentations pseudo-scientifiques.

### 5.3. Palette chromatique

La palette repose sur des tons sombres, minéraux et froids, avec des accents limités.

| Usage | Couleur indicative | Fonction |
|---|---|---|
| Fond principal | `#151A1F` | Espace général de lecture |
| Fond secondaire | `#20272E` | Sections et surfaces distinctes |
| Surface ponctuelle | `#2B343D` | Encadrés et éléments interactifs |
| Texte principal | `#E7E9E7` | Lecture courante |
| Texte secondaire | `#A4ADB3` | Annotations et métadonnées |
| Accent structurel | `#7896A8` | Repères, relations et navigation |
| Accent secondaire | `#B5A078` | Mise en évidence ponctuelle |
| Alerte ou réserve | `#AD7772` | Contradiction, limite ou point de vigilance |

La palette constitue une base commune, non un système de classification conceptuelle.

Les couleurs ne doivent pas recevoir de signification théorique permanente. Le bleu ne désigne pas intrinsèquement la relation ; l'accent secondaire ne désigne pas intrinsèquement la transformation.

Les accents restent rares. La couleur ne doit jamais être le seul moyen de différencier deux informations.

### 5.4. Typographie

La typographie doit permettre une lecture prolongée.

Le système repose sur deux familles complémentaires :

- une typographie sans sérif pour les titres, les paragraphes et la navigation ;
- une typographie monospace pour les identifiants, les notations, les repères techniques et certains éléments de schématisation.

Les règles communes sont les suivantes :

- hiérarchie limitée de tailles et de graisses ;
- largeur de lecture maîtrisée ;
- interlignage suffisamment généreux ;
- distinction nette entre texte, titre, citation, note et légende ;
- absence d'effets typographiques qui concurrencent le contenu.

Les polices retenues doivent être disponibles localement ou faire l'objet d'une dépendance clairement maîtrisée.

### 5.5. Grille et composition

Les pages partagent une structure générale reconnaissable :

- une zone d'identification du projet ;
- un titre principal ;
- une indication éventuelle de fonction ou de rubrique ;
- une zone principale de lecture ;
- une navigation commune ;
- un accès à la source Markdown ;
- un pied de page discret.

La composition peut varier selon la page.

Une colonne de lecture centrale convient aux textes argumentatifs. Une disposition en plusieurs zones peut être pertinente pour une cartographie ou une comparaison. Une navigation latérale peut faciliter la consultation d'un document long.

Les colonnes secondaires et les panneaux complémentaires ne doivent pas réduire excessivement la zone de lecture.

Les espaces vides participent à la hiérarchie visuelle et ne doivent pas être systématiquement remplis.

### 5.6. Langage graphique

Le langage graphique commun peut utiliser :

- des lignes pour représenter des relations ou des dépendances ;
- des cadres pour délimiter des ensembles ;
- des flèches pour indiquer une orientation ou une transformation ;
- des repères pour identifier des éléments ;
- des annotations pour préciser une réserve ou une interprétation ;
- des tableaux pour organiser des comparaisons ;
- des schémas pour rendre visibles certaines configurations.

Les formes organiques ou mécaniques ne sont utilisées que lorsqu'elles contribuent à la représentation du contenu.

Les schémas doivent rester compréhensibles sans dépendre exclusivement de leur apparence visuelle. Ils sont accompagnés d'un titre et, lorsque nécessaire, d'une explication textuelle.

### 5.7. Composants communs

Les pages peuvent partager les composants suivants :

- en-tête et navigation ;
- fil d'Ariane ;
- titre et métadonnées ;
- sommaire local ;
- bloc de définition ;
- bloc de distinction ;
- encadré de réserve ou de limite ;
- tableau comparatif ;
- schéma annoté ;
- références documentaires ;
- accès à la version Markdown.

Ces composants constituent une grammaire graphique commune. Ils ne sont pas obligatoires dans chaque page.

Leur présence dépend de leur utilité.

## 6. Adaptation de la présentation à la fonction des pages

L'identité visuelle commune ne détermine pas une composition unique.

La forme de chaque page est choisie à partir de sa fonction effective, et non de son seul titre ou de sa catégorie documentaire.

| Fonction dominante | Présentation possible |
|---|---|
| Orientation et cadrage | Organisation des repères et des relations |
| Architecture | Cartographie des composantes et de leurs articulations |
| Opération d'enquête | Présentation du travail d'examen, des conditions de mobilisation et des reprises possibles |
| Orientation de l'examen | Mise en évidence des questions et des rapports sous lesquels examiner une situation |
| Notion ou concept | Lecture structurée, définition, distinctions et limites |
| Langage, inférence et justification | Mise en évidence des énoncés, des engagements et des relations inférentielles |
| Méthode ou instrument | Présentation des conditions d'utilisation, des étapes et des résultats possibles |
| Comparaison | Mise en regard de descriptions, de leurs différences et de leurs conséquences |
| Étude de cas | Dossier documentaire, éléments disponibles, examen et limites des conclusions |
| Référence et navigation | Accès organisé aux ressources et parcours de consultation |

Ces formes sont indicatives et non exclusives.

Une page peut combiner plusieurs modes de présentation lorsque sa fonction le justifie.

La présentation ne doit jamais transformer une ressource spécialisée en résumé général du projet.

## 7. Interaction et comportement

Les interactions sont utilisées lorsqu'elles facilitent réellement la consultation.

Elles peuvent notamment permettre de :

- déplier une précision ;
- consulter une annotation ;
- comparer plusieurs éléments ;
- parcourir un ensemble documentaire ;
- afficher des informations complémentaires ;
- filtrer une liste de ressources ;
- explorer une représentation complexe.

Une interaction ne doit pas dissimuler une partie essentielle du raisonnement.

Les contenus nécessaires à la compréhension doivent rester accessibles sans manipulation particulière.

Les animations sont discrètes et fonctionnelles. Elles ne doivent ni ralentir la lecture ni donner une impression artificielle de complexité.

Le JavaScript est limité aux fonctionnalités qui le justifient. Une présentation statique reste préférable lorsque l'interaction n'apporte pas de bénéfice identifiable.

## 8. Adaptation aux écrans et accessibilité

Les pages doivent être consultables sur ordinateur, tablette et téléphone.

L'adaptation aux écrans ne doit pas entraîner la disparition d'informations essentielles.

Les schémas complexes doivent disposer d'une solution de consultation adaptée aux petits écrans.

Les exigences minimales comprennent :

- navigation au clavier ;
- contrastes suffisants ;
- hiérarchie sémantique correcte des titres ;
- textes alternatifs pour les images informatives ;
- libellés explicites des commandes ;
- absence de dépendance exclusive à la couleur ;
- mise en page responsive ;
- consultation du contenu essentiel sans JavaScript, lorsque cela est techniquement possible.

L'accessibilité fait partie de la qualité éditoriale de la page.

## 9. Procédure de production

### Étape 1 — Vérifier la source

Recharger le fichier Markdown depuis la branche de référence du dépôt.

Vérifier :
- le chemin exact ;
- le contenu actuel ;
- la date ou la version lorsqu'elle existe ;
- les liens internes pertinents ;
- les ressources dont dépend la page.

Ne pas produire une version HTML à partir d'un extrait ancien ou d'un contenu supposé.

Si une ressource nécessaire est inaccessible, le signaler et ne pas reconstituer son contenu.

### Étape 2 — Identifier la fonction

Déterminer :

- le problème traité ;
- la fonction propre de la page ;
- ses notions centrales ;
- ses distinctions ;
- ses arguments ;
- ses exemples et références ;
- ses dépendances documentaires ;
- ce qu'elle n'établit pas.

Identifier également les éléments qui doivent rester directement accessibles à la lecture.

### Étape 3 — Choisir la forme de présentation

Déterminer la composition la plus adaptée à la fonction de la page.

Préciser :
- les éléments qui relèvent de la lecture textuelle ;
- les éléments qui gagnent à être représentés ;
- les éventuelles interactions utiles ;
- les informations qui doivent rester visibles ;
- les relations que les représentations ne doivent pas suggérer.

Ne pas ajouter de visualisation simplement pour différencier graphiquement une page.

### Étape 4 — Produire la page HTML

Respecter l'identité visuelle commune et les principes de présentation retenus.

Privilégier :
- HTML sémantique ;
- CSS structuré et réutilisable ;
- JavaScript limité ;
- dépendances techniques maîtrisées ;
- navigation cohérente ;
- adaptation aux différents écrans ;
- accessibilité.

La composition peut être spécifique à la page, mais les composants communs doivent rester reconnaissables.

### Étape 5 — Vérifier la fidélité

Comparer le HTML avec le fichier Markdown source.

Vérifier notamment :

- les définitions ;
- les distinctions ;
- les arguments ;
- les exemples ;
- les références ;
- les réserves ;
- les limites ;
- les liens internes ;
- les éventuels ajouts de représentation.

Toute différence substantielle doit être justifiée.

### Étape 6 — Vérifier le fonctionnement

Tester :
- les liens ;
- la navigation ;
- les interactions ;
- l'affichage sur plusieurs dimensions d'écran ;
- l'accessibilité au clavier ;
- la lisibilité des schémas ;
- la consultation sans JavaScript lorsque cela est possible.

Vérifier également que l'accès à la source Markdown est identifiable.

## 10. Contrôle avant publication

Une page HTML peut être considérée comme prête lorsque les conditions suivantes sont réunies.

### Fidélité

- [ ] La source Markdown a été vérifiée.
- [ ] La fonction propre de la page est conservée.
- [ ] Les distinctions et les arguments sont préservés.
- [ ] Les limites et les réserves restent accessibles.
- [ ] Les ajouts de représentation ne modifient pas les conclusions.

### Cohérence visuelle

- [ ] La palette et la typographie respectent l'identité commune.
- [ ] La navigation est cohérente avec les autres pages.
- [ ] Les composants communs sont employés de manière pertinente.
- [ ] La composition est adaptée à la fonction de la page.
- [ ] Les effets visuels restent au service de la lecture.

### Fonctionnement

- [ ] Les liens ont été vérifiés.
- [ ] Les interactions fonctionnent.
- [ ] La page est lisible sur ordinateur et téléphone.
- [ ] Les exigences essentielles d'accessibilité sont respectées.
- [ ] La version Markdown de référence reste accessible.

## 11. Ce que ce pattern n'établit pas

Ce pattern :

- ne définit pas une nouvelle architecture théorique de Protokin ;
- ne modifie pas les catégories, les opérations ou les orientations de l'enquête ;
- ne prescrit pas une interface identique pour toutes les pages ;
- n'impose pas une visualisation à chaque ressource ;
- ne transforme pas chaque page en application interactive ;
- ne donne pas au HTML un statut supérieur au Markdown ;
- ne considère pas une représentation graphique comme une preuve ;
- ne fixe pas définitivement les choix techniques de l'ensemble du site.

La direction artistique assure une continuité visuelle. Elle ne détermine ni la fonction des ressources ni la manière dont elles doivent être examinées.

## 12. Synthèse

La traduction HTML consiste à rendre les ressources de Protokin plus accessibles dans un environnement web, sans altérer leur fonction ni leurs engagements descriptifs.

L'identité visuelle commune garantit la reconnaissance du corpus. La diversité des présentations respecte la fonction propre de chaque page.

La qualité d'une page HTML ne se mesure donc ni à sa sophistication graphique ni au nombre de ses interactions, mais à sa capacité à rendre le contenu plus intelligible et plus facile à examiner.

**L'identité visuelle unifie les conditions de lecture ; la fonction de chaque page détermine sa forme de présentation.**
