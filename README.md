---

## IV. Index de la Base de Connaissances (Dépôt des Fichiers)

### 1. Le Bloc de Fondation (Couche Abstraite de Bas Niveau)
* **`SOCLE.md` : Lois de l'Environnement Cinétique (v2.2)** Le Hardware thermodynamique du monde. Fixe l'axiome du coût de tenue ($COST$), la définition de la réalité comme *résistance sous effort*, et la règle de multi-satisfaisabilité.
* **`SEP.md` : Table de Correspondance Standard (v2.2)** Le dictionnaire de bas niveau réalisant le "Casting" des concepts philosophiques classiques en variables de bas niveau (ex: *Liberté* $\rightarrow$ Souveraineté cinétique de $K_{res}$ ; *Justice* $\rightarrow$ Solvabilité inférentielle du collectif).

### 2. Les Piliers du Kernel (Le Moteur Opératoire)
* **`pilier1.md` : Spécifications des Primitives et Lames du Rasoir** Déclare les variables machines ($S, C, I, \Delta, K_{res}, COST$). Implémente la **Lame de Brandom** au cœur du compilateur : `VALID($I) ⇔ CONSEQUENCE($I) ≠ ∅`. Tout concept sans conséquence inférentielle subit un `DELETE` immédiat.
* **`pilier2.md` : Architectonique des Régimes** Spécifie les règles d'étanchéité, de couplage et les modes de défaillance inter-scopes (`FAIL_TRANS`, `FAIL_TRUST`).
* **`pilier3.md` : Moteur d'Exécution et Runtime Loop** Définit l'itération continue de la boucle de tenue : $(\Delta) \rightarrow \text{MEMB} \rightarrow \text{ATTR} \rightarrow \text{SUT} \rightarrow S'$.
* **`pilier4.md` : Dynamique des Ruptures et Gestionnaire de Fin de Vie** Gère la cinétique des pannes du système et implémente la distinction critique entre **Résidus** (scories métaboliques à purger) et **Réserves** (latence conceptuelle évolutive).
* **`pilier5.md` : Régimes d'Objectivité (Le Validateur)** Formulise l'opérateur `RESIST`. Intègre la bibliothèque des résistances historiques (la contrainte transcendantale de Kant, expérimentale de Bachelard, inférentielle de Sellars et normative de Brandom).
* **`pilier6.md` : Console Finale de Diagnostic (`CHECK_VIABILITY`)** Le script d'audit du système machine, classant l'état global selon quatre modes opératoires : `HEALTH` (🟢), `TENSION` (🟠), `CRITICAL` (🔴), `COLLAPSE` (⚫).
* **`pilier7.md` : Réservoir des Dépendances Externes (`Library`)** Arbre des dépendances théoriques du projet (Schrödinger, Prigogine, Von Foerster, Castoriadis, Sellars, Brandom).

### 3. La Connectique et les Opérateurs de Continuité
* **`sutures.md` : Spécifications des Opérateurs de Liaison (v2.1)** Détaille les 7 points de couture sémantique et somatique qui fabriquent l'illusion de la continuité vécue à partir d'échantillonnages discrets.
* **`op_REVISE.md` : Architecture de la Nécessité Rétrospective** Manuel technique dédié au **Mode Magnanime** du système. Explique comment l'algorithme de *Recollection* réécrit rétrospectivement l'historique des erreurs ($\Delta$) pour les convertir en étapes nécessaires du progrès normatif.
* **`COHERENCE.md` : Architecture de Tenue de l'Espace des Raisons** Modélise l'immunité du cOS face au tournage à vide. Coordonne la friction de la Physis avec la solvabilité déontique des assertions de l'agent.

---

## V. Les Verrous de Sécurité de la Version v2.2

La version v2.2 active deux règles de compilation strictes au niveau du runtime (Runtime Rules) :

1.  **L'Axiome de l'Agentivité Déontique (`NOMOS`) :** $$\\text{AGENT}(\$S) \\Leftrightarrow \\text{SCOREKEEPER}(\\text{Engagements})$$  
    Exister comme sujet dans le système implique la responsabilité de tenir à jour le registre de ses attributions et de ses dettes justificatives. Tout agent refusant l'imputabilité de ses énoncés voit ses droits d'écriture suspendus au niveau du Kernel.
2.  **L'Algorithme de Maintenance Sociale (`KOINOS`) :** $$\\text{INSTITUTION}(\$S) \\Leftrightarrow \\text{COHÉRENCE}(\\text{Scorekeeping})$$  
    Le lien collectif est dépouillé de tout mysticisme fusionnel : il est traité comme un protocole distribué de suivi croisé des promesses de tenue. L'effondrement du suivi entraîne immédiatement l'état d'**Insolvabilité Sémantique**.

---

## VI. Procédure de Déploiement et d'Audit du Jardin Digital

Pour exécuter un audit complet de la base de connaissances avant sa mise en ligne via le moteur Docsify, lancez l'appel de méthode suivant depuis la console `META` :

```bash
# Initialisation de la console de viabilité du carnet
EXEC: CHECK_VIABILITY($Protokin_Garden) --mode=STRESS_TEST

# Attente des résultats du validateur multi-régimes
[AUDIT MEMB] : SIGNAL_TO_NOISE_RATIO = OK
[AUDIT VIABLE] : Vr (0.84) > Vd (0.21) -> STATE(HEALTH)
[AUDIT TRUST] : SCOREKEEPING_LIQUIDITY = SOLVABLE
[AUDIT META] : REGIME_CONFUSION = 0%

VERDICT GLOBAL : 🟢 STATE(HEALTH) | System fluid, plastic and adaptive.