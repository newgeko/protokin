
```mermaid

flowchart TD

%% =========================
%% NŒUD CENTRAL
%% =========================

A[{Nom du concept}]

%% =========================
%% IDENTIFICATION
%% =========================

A --> B[Identification]

B --> B1[Famille : {famille}]
B --> B2[Type : {régime / opérateur / tension / transition}]
B --> B3[Domaine : {domaine}]
B --> B4[Statut : {statut}]
B --> B5[Centralité : {niveau}]

%% =========================
%% DÉFINITION EXTERNE
%% =========================

A --> C[Définition externe]

C --> C1[{définition minimale}]
C --> C2[Cadre non-Protokin]

%% =========================
%% ASSIGNATION PROTOKIN
%% =========================

A --> D[Assignation Protokin]

D --> D1[P{n} — {régime 1}]
D --> D2[P{n} — {régime 2}]
D --> D3[P{n} — {régime 3}]

D --> D4[Type : {stabilisation / opérateur / interface / tension / transition / limite}]
D --> D5[Position : {Proto / Kin / transversal / hybride}]

%% =========================
%% EFFETS STRUCTURELS
%% =========================

A --> E[Effets structurels]

E --> E1[Proto]
E1 --> E1a[{entité → opération → résultat}]
E1 --> E1b[{entité → opération → résultat}]

E --> E2[Kin]
E2 --> E2a[{entité → opération → résultat}]
E2 --> E2b[{entité → opération → résultat}]

E --> E3[Meta]
E3 --> E3a[{entité → transformation → effet sur modèle}]

%% =========================
%% SYNTHÈSE FONCTIONNELLE
%% =========================

A --> F[Synthèse fonctionnelle]

F --> F1[Stabilisation]
F --> F2[Déstabilisation]
F --> F3[Génération]
F --> F4[Blocage]

%% =========================
%% TENSIONS
%% =========================

A --> G[Tensions]

G --> G1[T{n} — {nom}]
G --> G2[T{n} — {nom}]
G --> G3[Type : {échelle / traduction / normatif / collapsus / compression}]

%% =========================
%% TRANSITION PROTO → KIN
%% =========================

A --> H[Transition Proto → Kin]

H --> H1[Condition : {condition}]
H --> H2[Type : {médiation / rupture / continue / impossible}]
H --> H3[Point critique : {événement seuil}]

%% =========================
%% SYNTHÈSE GLOBALE
%% =========================

A --> I[Synthèse]

I --> I1[Opérateur / Régime / Interface]
I --> I2[Effets multi-niveaux]
I --> I3[Position dans l’architecture Protokin]
```