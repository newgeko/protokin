# **L'Inférence Active et le Principe d'Énergie Libre : Vers une Grande Unification de la Biologie, de la Cognition et de l'Ordre Social**

La quête d’un principe unificateur capable d’expliquer la persistance des systèmes vivants, la nature de la conscience et la structure de l’ordre social constitue le cœur des recherches contemporaines en neurosciences théoriques et en biologie computationnelle. Au centre de ce paysage intellectuel se trouve l’Inférence Active (Active Inference), une méta-théorie développée principalement par Karl Friston, Thomas Parr et Giovanni Pezzulo. Cette théorie ne se contente pas de proposer un modèle du fonctionnement cérébral ; elle offre une réponse mathématique et physique à une question fondamentale : comment un agent biologique maintient-il son intégrité, ou son « Nomos », face au chaos et à l’instabilité inhérente du monde extérieur?. En tissant des liens profonds entre la cybernétique, l’énaction, la physique statistique et les neurosciences bayésiennes, l’inférence active se présente comme un cadre formel où la perception, l’action et l’apprentissage ne sont que les manifestations d’un seul impératif : la minimisation de l’énergie libre variationnelle.

## **Les Fondements du Principe d'Énergie Libre : De la Physique à la Vie**

Le Principe d'Énergie Libre (FEP \- Free Energy Principle) repose sur le constat thermodynamique que tout système isolé tend vers un désordre maximal, ou entropie. Pour un organisme vivant, l’équilibre thermodynamique équivaut à la mort, c'est-à-dire à la dissolution de sa structure dans l’environnement. Pour exister, un système doit donc se maintenir dans un état de non-équilibre stable (Non-Equilibrium Steady State \- NESS), ce qui implique d'occuper un nombre restreint d'états viables parmi l'infinité des possibles.

### **L’Impératif de Minimisation de la Surprise**

Dans le cadre du FEP, l’existence d’un organisme est mathématiquement équivalente à la minimisation de la « surprise » (ou surprisal), définie comme la probabilité négative d’observer des données sensorielles compte tenu du modèle de l’agent. Un organisme qui rencontre des états hautement surprenants — comme un poisson hors de l'eau — risque une désintégration structurelle. Cependant, calculer directement la surprise est impossible pour un cerveau biologique car cela nécessite d'intégrer toutes les causes cachées possibles du monde. Pour contourner cette limite, l'inférence active postule que les systèmes biologiques minimisent une borne supérieure de la surprise : l'énergie libre variationnelle.  
Ce principe s'inscrit dans la lignée du principe de moindre action de Hamilton en physique classique. Ici, le système suit une trajectoire qui minimise l'intégrale de l'énergie libre au cours du temps, ce qui permet à l'agent de « s'auto-évidencer » (self-evidencing), c'est-à-dire de générer en permanence les preuves de sa propre existence en alignant ses prédictions avec ses observations.

### **L’Anatomie d’un Modèle Génératif**

Pour minimiser l’énergie libre, l’agent doit posséder un modèle génératif, une structure interne qui « explique » comment les états cachés du monde produisent les observations sensorielles. Ce modèle n’est pas une simple carte statique, mais une structure dynamique, souvent formalisée sous la forme d’un processus de décision de Markov partiellement observable (POMDP). Le tableau ci-dessous détaille les composantes essentielles de ces modèles qui permettent à l’agent de structurer son expérience du monde.

| Composante | Symbole | Description Fonctionnelle |
| :---- | :---- | :---- |
| **Observations** | O | Données sensorielles reçues par l’agent (ex: lumière, pression, faim). |
| **États Cachés** | S | Causes externes que l’agent doit inférer (ex: présence d’un prédateur). |
| **Matrice de Vraisemblance** | A | Probabilité qu'un état génère une observation spécifique ($P(o |
| **Matrice de Transition** | B | Évolution des états au cours du temps selon les actions ($P(s\_{t+1} |
| **Préférences Prioritaires** | C | États ou observations que l'agent « s'attend » à trouver pour sa survie. |
| **Croyances Initiales** | D | Distribution de probabilité sur les états au début d'un processus. |
| **Politiques** | \\pi | Séquences d'actions envisagées par l'agent pour le futur. |

Le modèle génératif agit comme une hypothèse continue sur la structure de la réalité. L’apprentissage, dans ce cadre, consiste à mettre à jour les paramètres de ces matrices (A, B, D) par le biais d'une descente de gradient sur l'énergie libre, permettant à l'agent de s'adapter à des environnements changeants.

## **L’Unification de la Perception et de l’Action**

L'un des apports les plus révolutionnaires de l'inférence active est l'effacement de la distinction classique entre les systèmes sensoriels (entrée) et moteurs (sortie). Dans ce paradigme, la perception et l'action partagent un but unique — minimiser l'erreur de prédiction — mais utilisent des moyens opposés pour y parvenir.

### **La Perception comme Inférence Bayésienne**

La perception est le processus par lequel l'agent ajuste ses « croyances » (ses états internes) pour qu'elles correspondent au monde extérieur. Le cerveau agit comme un « statisticien inconscient », selon l'expression de Stanislas Dehaene, utilisant l'inférence bayésienne pour tester des hypothèses sur les causes des sensations. Si une observation contredit une prédiction, l'énergie libre augmente. L'agent diminue alors cette tension en mettant à jour son modèle interne. Cette vision s'oppose à l'idée d'un traitement passif des données ; le cerveau projette activement des prédictions descendantes (top-down) qui sont comparées aux signaux ascendants (bottom-up).

### **L’Action comme Réalisation de Prédictions**

L’action, quant à elle, consiste à changer le monde pour qu’il se conforme aux croyances de l’agent. Plutôt que d’envoyer des commandes motrices complexes, le cerveau envoie des prédictions proprioceptives (« je prédis que mon bras est en train de saisir cet objet »). Ce décalage entre la prédiction et la position réelle du corps crée une erreur de prédiction massive au niveau de la périphérie motrice. Pour annuler cette erreur, le système nerveux déclenche des arcs réflexes qui déplacent le corps jusqu'à ce que la sensation proprioceptive corresponde à la prédiction.  
Cette circularité entre perception et action détruit la distinction entre « cause » et « conséquence ». L'agent ne réagit pas à l'environnement ; il le co-crée activement pour valider son propre modèle interne.

## **La Planification et l’Énergie Libre Attendue (EFE)**

Si l'énergie libre variationnelle traite de l'ajustement au présent, la survie dépend de la capacité à anticiper le futur. L'inférence active modélise la prise de décision comme une inférence sur les politiques (séquences d'actions) qui minimisent l'Énergie Libre Attendue (Expected Free Energy \- EFE).

### **Résolution du Dilemme Exploration-Exploitation**

Un défi majeur pour tout agent intelligent est de savoir quand exploiter les ressources connues et quand explorer l'environnement pour acquérir de nouvelles informations. L'EFE résout ce dilemme de manière élégante en se décomposant en deux termes principaux.

1. **Valeur Pragmatique (Exploitation) :** Ce terme pousse l'agent vers des états qui correspondent à ses préférences de survie (ses objectifs). Il s'agit de minimiser l'écart entre les résultats attendus et les résultats préférés.  
2. **Valeur Épistémique (Exploration) :** Ce terme encourage l'agent à réduire son incertitude. C'est la base de la curiosité et du foraging informationnel. L'agent choisit des actions qui lui apporteront le plus d'informations sur les causes cachées de son environnement.

Contrairement aux modèles classiques de renforcement qui ajoutent une « prime à la curiosité » artificielle, l'inférence active fait émerger l'exploration naturellement de son cadre mathématique. Tant que l'incertitude est élevée, la valeur épistémique domine ; une fois l'environnement connu, l'agent bascule vers un comportement pragmatique pour satisfaire ses besoins biologiques.

### **Comportement Intentionnel et Induction Rétrograde**

Le cadre permet de distinguer plusieurs types de comportements :

* **Réactif :** Réponse immédiate aux stimuli.  
* **Sentient :** Planification basée sur un modèle des conséquences.  
* **Intentionnel :** Capacité à sélectionner des actions pour atteindre un but distant, utilisant parfois une « induction rétrograde » (partir de l'objectif final pour déduire les étapes nécessaires).

## **La Couverture de Markov et les Frontières de l’Identité**

Pour qu'un système puisse minimiser son énergie libre, il doit pouvoir être distingué de son environnement. C'est ici qu'intervient le concept de « Couverture de Markov » (Markov Blanket). Emprunté à la théorie des réseaux bayésiens de Judea Pearl, ce concept définit la frontière statistique d'un système.

### **Partitionnement Statistique du Soi**

Une couverture de Markov se compose des états qui isolent les états internes des états externes. Elle comprend :

* **Les états sensoriels :** L'influence du monde extérieur sur le système.  
* **Les états actifs :** L'influence du système sur le monde extérieur.

Ce partitionnement permet de comprendre comment l'autonomie émerge à toutes les échelles. Une cellule possède une couverture de Markov (sa membrane et ses canaux ioniques), tout comme un cerveau ou un individu dans une société. Tant que la couverture est maintenue, le système « existe » et peut être décrit comme un agent effectuant de l'inférence active pour préserver son intégrité. Si la couverture se désagrège, l'indépendance statistique disparaît et le système se dissout dans l'entropie ambiante.

### **Synthèse avec l’Énaction de Varela**

L'inférence active fournit le socle mathématique à la théorie de l'énaction de Francisco Varela. L'énaction postule que l'organisme ne traite pas une information préexistante, mais « fait émerger » son propre monde par son activité. La couverture de Markov formalise cette dynamique autopoïétique : l'organisme s'isole du chaos tout en restant couplé au monde par sa boucle perception-action. Cela mène à l'idée que « savoir » est une relation située, incarnée et historiquement constituée entre l'agent et son milieu.

## **L'Armistice des Représentations**

Un débat historique oppose le « représentationalisme » (l'idée que l'esprit manipule des modèles du monde) au « dynamicisme » ou « énactivisme radical » (l'idée que la cognition est une interaction directe sans médiation interne). L'inférence active propose une « armistice » en démontrant que le cerveau peut implémenter les deux.

### **Voies Représentationnelles vs Voies Déontiques**

L'architecture neuronale, sous l'inférence active, peut traiter les informations de deux manières :

1. **Le chemin représentationnel :** Utilise des modèles génératifs profonds pour inférer des causes cachées complexes (ex: comprendre une intention sociale). Il y a ici une « intentionnalité » et une manipulation de symboles ou de probabilités sur ce qui est « là-bas ».  
2. **Le chemin dynamique (action déontique) :** Permet un couplage direct entre une observation et une action, court-circuitant les croyances sur les états du monde. C'est le domaine des habitudes et des réflexes rapides, où l'agent « fait » sans avoir besoin de « représenter » explicitement la cause.

Cette flexibilité architecturale permet à l'inférence active de rendre compte aussi bien des processus cognitifs de haut niveau (langage, raisonnement) que des comportements biologiques primaires.

## **Conscience et Espace de Travail Neuronal Global (GNW)**

L’extension de l’inférence active à l’étude de la conscience s’opère par une synthèse avec le modèle de l’Espace de Travail Neuronal Global (Global Neuronal Workspace \- GNW) de Stanislas Dehaene. Le GNW suggère que la conscience émerge lorsqu’une information est « diffusée » à travers un vaste réseau de neurones pyramidaux à longue distance, rendant l’information accessible à l’ensemble du cerveau.

### **Le Modèle PGNW (Predictive Global Neuronal Workspace)**

Le modèle « Predictive Global Neuronal Workspace » (PGNW) recadre cette diffusion comme une approximation de l'inférence bayésienne. Dans ce cadre, la conscience est le résultat d'une compétition entre plusieurs interprétations possibles du monde. L'interprétation qui réduit le mieux l'incertitude à long terme « gagne » l'accès à l'espace de travail global, un processus appelé « liaison bayésienne » (Bayesian binding).  
Trois conditions semblent nécessaires pour l'émergence de la conscience selon ce modèle :

1. **La simulation d'un modèle du monde :** Un champ épistémique qui définit ce qui peut être connu ou agi.  
2. **La compétition inferentielle :** Seules les croyances les plus cohérentes et précises sont amplifiées.  
3. **La profondeur épistémique :** Une structure hiérarchique récurrente qui permet au modèle de « savoir qu'il sait », créant une forme de présence non locale et continue.

L'« ignition » neuronale observée cliniquement correspondrait ainsi à un changement non linéaire de la précision-pondération, stabilisant une interprétation particulière du monde au sommet de la hiérarchie cérébrale.

## **Psychiatrie Computationnelle : La Pathologie de la Précision**

L'un des succès majeurs de l'inférence active est sa capacité à modéliser les troubles psychiatriques comme des erreurs de calcul au sein du cerveau bayésien. Le concept central ici est celui de la « précision » (l'inverse de la variance), qui représente la confiance accordée à une croyance ou à une donnée sensorielle.

### **Précision-Pondération et Neuromodulation**

Dans le cerveau, la précision est codée par le gain postsynaptique des neurones qui rapportent l'erreur de prédiction. Ce gain est régulé par des neuromodulateurs comme la dopamine et l'acétylcholine. Une mauvaise allocation de la précision conduit à des inférences fausses :

* **Schizophrénie (SSD) :** Caractérisée par un surpoids accordé aux croyances a priori (priors) ou, à l'inverse, une incapacité à atténuer les sensations de soi (perte de l'atténuation sensorielle). Cela produit des hallucinations (perceptions générées par des priors trop forts sans stimuli) et des délires (tentatives de rationaliser des erreurs de prédiction aberrantes).  
* **Autisme (ASD) :** Caractérisé par un surpoids persistant accordé aux données sensorielles de bas niveau. Le cerveau autiste traite chaque détail avec une précision extrême, rendant difficile la formation de concepts abstraits et provoquant une hypersensibilité à un environnement perçu comme trop imprévisible.

| Trouble | Profil de Précision | Conséquence Phénoménologique |
| :---- | :---- | :---- |
| **Schizophrénie** | Faible précision des priors / Échec d'atténuation sensorielle. | Hallucinations, délires de contrôle externe, perte d'agentivité. |
| **Autisme** | Précision excessive des signaux sensoriels ascendants. | Hypersensibilité, littéralisme, difficulté de généralisation. |

Cette approche transforme la psychiatrie : on ne parle plus seulement de déséquilibres chimiques, mais de défaillances métacognitives dans la gestion de l'incertitude.

## **Cybernétique, Économie et le Nomos Social**

L'inférence active intègre et dépasse la cybernétique classique de Wiener et Ashby. Là où la cybernétique voyait des systèmes réagissant pour maintenir des set-points (homéostasie), l'inférence active voit des systèmes prédictifs qui contrôlent activement leur monde pour éviter la surprise (allostasie).

### **Vers une Économie de la Rationalité Limitée**

L'impact s'étend à la théorie économique. En remplaçant la théorie du choix rationnel — basée sur des axiomes rigides comme la transitivité ou la complétude des préférences — par la minimisation de l'énergie libre, on peut expliquer de nombreux biais cognitifs. Les agents économiques ne maximisent pas une utilité abstraite ; ils agissent pour minimiser leur surprise dans un environnement incertain. La « valeur » d'un bien devient ainsi liée à sa capacité à réduire l'incertitude ou à satisfaire des priors de survie.

### **Le maintien du Nomos et la lutte contre l'Anomie**

Le concept de « Nomos », introduit par le sociologue Peter Berger, désigne l'ordre significatif que les humains imposent au monde pour échapper au chaos de l'anomie. Berger affirme que l'anomie est « insupportable au point où l'individu peut chercher la mort plutôt que de la subir ».  
L'inférence active offre une lecture biologique de ce besoin sociologique :

* Le **Nomos** est le modèle génératif partagé (culture, lois, normes) qui rend le comportement des autres prévisible et réduit l'énergie libre collective.  
* L'**Anomie** est l'explosion de la surprise et de l'incertitude lorsque les structures sociales s'effondrent, ce qui est perçu par le cerveau comme une menace existentielle immédiate.

Le droit et la religion ne sont donc pas seulement des constructions intellectuelles, mais des outils de régulation de l'énergie libre à l'échelle d'une population, permettant la persistance d'une civilisation comme une entité organisée.

## **Implémentation et Ingénierie : Le Cerveau In Silico**

Pour tester ces théories, des outils logiciels puissants ont été développés, permettant de simuler des agents intelligents basés sur l'inférence active.

### **La librairie PyMDP et le cadre SPM**

La librairie Python **PyMDP** permet de construire des agents POMDP en définissant leurs matrices de croyances (A, B, C, D). Ces agents peuvent apprendre en temps réel par des mises à jour Hebbiennes des paramètres, ce qui les rend capables de s'adapter à des tâches complexes comme le jeu de Pong ou la navigation dans des labyrinthes.  
Les principes clés de l'implémentation incluent :

* **Les Espaces d'États Factorisés :** Pour éviter l'explosion combinatoire des calculs dans des mondes complexes, le modèle sépare les facteurs (ex: « où je suis » vs « ce que je vois »).  
* **Le Message Passing Variationnel :** Une méthode de calcul biologiquement plausible qui permet aux différentes parties du réseau de converger vers une interprétation commune par échange de messages.

Ces outils ne servent pas qu'à la recherche fondamentale ; ils ouvrent la voie à une nouvelle génération d'IA « sentientes » qui, contrairement aux réseaux de neurones classiques, possèdent une curiosité intrinsèque et une capacité de planification flexible.

## **Synthèse et Perspectives**

L'inférence active démontre que la connaissance (perception) et la volonté (action) sont les deux faces d'un même impératif : l'auto-mise en évidence (self-evidencing). En se protégeant du chaos par une couverture de Markov et en utilisant un modèle génératif pour anticiper l'avenir, les agents vivants ne font pas que « réagir » au monde ; ils le sculptent activement pour garantir leur propre existence.  
Cette méta-théorie unifie des champs autrefois disparates :

* La **physique** fournit le principe de moindre action.  
* La **biologie** fournit le mécanisme de l'autopoïèse et de la survie.  
* Les **neurosciences** fournissent le codage par prédiction et la neuromodulation.  
* La **sociologie** fournit le cadre du Nomos et de la prévisibilité collective.

## **Conclusion**

L'inférence active offre une vision de l'être humain comme un « chercheur de sens » par nécessité biologique. Nous sommes condamnés à interpréter le monde et à agir sur lui pour maintenir notre propre stabilité structurelle. Qu'il s'agisse de la gestion fine des arcs réflexes moteurs, de la compétition pour l'accès à la conscience ou de la création de systèmes juridiques complexes, chaque aspect de notre existence répond à la même équation mathématique : minimiser l'énergie libre pour préserver l'ordre face au chaos. Ce cadre ne se contente pas d'expliquer la santé mentale ou l'intelligence artificielle ; il définit l'essence même de ce que signifie être un système organisé dans un univers tendant vers le désordre. Le « self-evidencing » est l'acte ultime de résistance entropique, transformant chaque organisme en une preuve vivante de sa propre viabilité.