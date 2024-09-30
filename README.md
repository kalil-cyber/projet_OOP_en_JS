# Atelier: Recréer un Panier d'Achat avec JavaScript Orienté Objet (OOP)

#### Objectif :
Dans cet atelier, vous allez recréer un panier d'achat similaire à celui vu dans le cours sur JavaScript et le DOM. Cette fois, vous allez réécrire le code en utilisant l'approche JavaScript Orienté Objet (OOP).

#### Étape 1 : Créer une Classe Produit
Créez une classe qui représente un **produit**. Cette classe doit stocker les propriétés suivantes :
- **id** : l'identifiant unique du produit
- **name** : le nom du produit
- **price** : le prix du produit

💡 *Piste : Utilisez un constructeur pour initialiser les propriétés du produit lors de sa création.*

#### Étape 2 : Créer une Classe Item de Panier
Créez une classe pour l'**item du panier**. Elle doit inclure :
- Un objet **produit**
- Une **quantité** de ce produit dans le panier

💡 *Piste : La quantité représente combien de fois un produit est ajouté au panier.*

#### Étape 3 : Ajouter une Méthode de Calcul du Prix Total
Ajoutez une méthode dans la classe Item de Panier pour calculer le **prix total** basé sur la quantité de produit dans le panier.

💡 *Piste : Multipliez le prix du produit par la quantité.*

#### Étape 4 : Créer une Classe Panier
Créez une classe **Panier** qui contient une **liste** (un tableau) d'items de panier.

💡 *Piste : La liste stockera des instances d'objets de la classe Item de Panier.*

#### Étape 5 : Ajouter des Méthodes au Panier
Ajoutez plusieurs méthodes à la classe Panier :
1. **Obtenir le total des articles** dans le panier.
2. **Ajouter un produit** au panier (ou augmenter la quantité d'un produit déjà existant).
3. **Supprimer un produit** du panier.
4. **Afficher les articles** présents dans le panier.

💡 *Piste : Pour ajouter des items, parcourez les produits déjà existants dans le panier et mettez à jour les quantités si nécessaire. Pour la suppression, enlevez l'item du tableau d'items.*

#### Étape 6 : Tester les Objets et Méthodes
Créez les produits et le panier, puis testez vos méthodes :
1. Créez des **produits**.
2. Créez un **panier**.
3. **Ajoutez** des items au panier.
4. **Affichez** les items du panier.
5. **Supprimez** un item du panier et vérifiez le résultat.

💡 *Piste : Utilisez `console.log()` pour afficher le contenu du panier et vérifier vos méthodes.*

#### Fin de l'atelier :
Essayez de compléter chaque étape en utilisant les concepts de la programmation orientée objet (OOP). Vous n'avez pas besoin d'écrire tout le code d'un coup. Commencez par chaque classe et méthode séparément, puis testez-les avant de passer à l'étape suivante.

Bonne chance!
