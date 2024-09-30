// Classe Produit
class Product {
    constructor(id, name, price) {
        this.id = id;      // Identifiant unique pour chaque produit
        this.name = name;  // Nom du produit
        this.price = price; // Prix du produit
    }
}

// Classe Item de Panier
class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product; // Produit associé à cet item
        this.quantity = quantity; // Quantité de ce produit dans le panier
    }

    // Méthode pour calculer le prix total de cet item dans le panier
    getTotalPrice() {
        return this.product.price * this.quantity; // Prix total pour cet item
    }
}

// Classe Panier
class ShoppingCart {
    constructor() {
        this.items = []; // Tableau pour stocker les items du panier
    }

    // Méthode pour ajouter un produit au panier
    addItem(product) {
        // Vérifier si le produit existe déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // Si oui, augmenter la quantité
            existingItem.quantity += 1;
        } else {
            // Sinon, ajouter un nouvel item au panier
            this.items.push(new ShoppingCartItem(product));
        }
        this.updateCartDisplay(); // Mettre à jour l'affichage du panier
    }

    // Méthode pour supprimer un produit du panier
    removeItem(productId) {
        // Supprimer un produit du panier en utilisant son id
        this.items = this.items.filter(item => item.product.id !== productId);
        this.updateCartDisplay(); // Mettre à jour l'affichage du panier
    }

    // Méthode pour mettre à jour la quantité d'un produit dans le panier
    updateQuantity(productId, newQuantity) {
        // Trouver le produit dans le panier
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            // Mettre à jour sa quantité
            item.quantity = newQuantity;
            // Si la nouvelle quantité est 0 ou moins, supprimer l'item du panier
            if (newQuantity <= 0) {
                this.removeItem(productId);
            }
        }
        this.updateCartDisplay(); // Mettre à jour l'affichage du panier
    }

    // Méthode pour afficher les items du panier
    displayCart() {
        // Sélectionner le conteneur des items du panier
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter les items

        // Boucler à travers les items du panier et les afficher
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product.name} - ${item.quantity} x ${item.product.price} €`;
            cartItemsContainer.appendChild(li);
        });
    }

    // Méthode pour calculer le nombre total d'articles dans le panier
    getTotalItems() {
        // Retourner le nombre total d'items dans le panier
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour calculer le prix total de tous les items dans le panier
    getTotalPrice() {
        // Retourner le prix total de tous les items en additionnant leur prix total
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Méthode pour mettre à jour l'affichage du panier
    updateCartDisplay() {
        // Mettre à jour l'affichage du panier en appelant displayCart()
        this.displayCart();
        // Mettre à jour le nombre total d'articles et le prix total
        document.getElementById('total-items').textContent = this.getTotalItems();
        document.getElementById('total-price').textContent = this.getTotalPrice().toFixed(2);
    }
}

// Liste des produits (à remplir)
const products = [
    new Product(1, 'Produit 1', 10.00),
    new Product(2, 'Produit 2', 15.50),
    new Product(3, 'Produit 3', 20.00),
    new Product(4, 'Produit 4', 25.00),
];

// Instance du panier (ShoppingCart)
const cart = new ShoppingCart();

// Fonction pour afficher la liste des produits
function displayProductList() {
    // Sélectionner le conteneur des produits
    const productsContainer = document.querySelector('.products');

    // Boucler à travers la liste des produits et créer des éléments DOM
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Prix: ${product.price} €</p>
            <button onclick="cart.addItem(${product.id})">Ajouter au panier</button>
        `;
        productsContainer.appendChild(div);
    });
}

// Appel de displayProductList() pour afficher les produits lorsque la page est chargée
displayProductList();
