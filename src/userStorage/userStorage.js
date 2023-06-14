const userStorage = {
    storage: localStorage,

    initialStorage() {
        if (!JSON.parse(this.storage.getItem('BosaNogaOnlineStore'))) {
            this.storage.setItem('BosaNogaOnlineStore', JSON.stringify({ products: [], totalCost: 0, productsCounter: 0}));
        }
    },

    addCart(cart) {
        this.storage.setItem('BosaNogaOnlineStore', JSON.stringify(cart));
    },
    
    storageLoadCart() {
        try {
            return JSON.parse(this.storage.getItem('BosaNogaOnlineStore'))
          } catch (e) {
            throw new Error('Invalid data');
          }
    },
    
    removeCart() {
        this.storage.removeItem('BosaNogaOnlineStore')
    },
};

export default userStorage;