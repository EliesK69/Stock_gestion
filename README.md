
// Readme en construction au fur et à mesure de l'avancée du projet

Une app de gestion des stocks qui permet à un commerçant admin de créer ses boutiques et d'ajouter des produits avec leurs stocks pour chaque produit. Il peut également créer des comptes user simples qui peuvent vérifier le stock et rentrer une commande.

Ces produits ont une unité de mesure choisie et un seuil fixé à partir duquel une alerte pour restocker le produit est envoyée.
A chaque commande, une quantité choisie dans une unité de mesure elle aussi fixée au préalable (qui peut être différente de l'unité de mesure représentant le stock), fait diminuer le stock.

Chaque user est rattaché à une seule boutique.

Le back-end est codé sur NestJs en suivant la logique API REST. 