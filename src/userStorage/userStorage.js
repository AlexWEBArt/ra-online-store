const userStorage = {
    storage: localStorage,

    initialStorage() {
        if (!JSON.parse(this.storage.getItem('BosaNogaOnlineStore'))) {
            this.storage.setItem('BosaNogaOnlineStore', JSON.stringify({ 
                cart: {
                    products: [], 
                    totalCost: 0, 
                    productsCounter: 0
                },
                favorites: [],
            }));
        }
    },

    addCart(cart) {
        const loadStorage = this.loadStorage();
        loadStorage.cart = cart;
        this.storage.setItem('BosaNogaOnlineStore', JSON.stringify(loadStorage));
    },

    addFavorites(favorites) {
        const loadStorage = this.loadStorage();
        loadStorage.favorites = favorites;
        this.storage.setItem('BosaNogaOnlineStore', JSON.stringify(loadStorage));
    },
    
    loadStorage() {
        try {
            return JSON.parse(this.storage.getItem('BosaNogaOnlineStore'))
          } catch (e) {
            throw new Error('Invalid data');
          }
    },
    
    removeStorage() {
        this.storage.removeItem('BosaNogaOnlineStore')
    },
};

export default userStorage;