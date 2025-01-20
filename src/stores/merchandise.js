import { defineStore } from 'pinia';

export const useMerchandiseStore = defineStore('merchandise', {
  state: () => ({
    merchandise: [
      {
        id: "1",
        name: "Techno Stencil Stickers (Pack of 5)",
        price: 4.99,
        description: "Decorate your gear with these cool techno-themed stickers. Pack includes 5 unique designs.",
        sizes: ["S", "M", "L"],
        stock: 200,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "2",
        name: "Teste 0 Stock",
        price: 19.99,
        description: "Show your love for techno with this stylish snapback cap. Features an adjustable strap for a perfect fit.",
        sizes: ["XS", "S", "M"],
        stock: 0,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "3",
        name: "Techno Rave Hoodie",
        price: 39.99,
        description: "Stay cozy and rave-ready with this techno hoodie made from ultra-soft fabric. Features bold front and back prints.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        stock: 165,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "4",
        name: "Minimal Techno Tote Bag",
        price: 14.99,
        description: "Carry your essentials in style with this minimalistic techno tote bag. Made from durable, eco-friendly materials.",
        sizes: ["XL", "XXL"],
        stock: 75,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "5",
        name: "Techno Love Beanie",
        price: 17.99,
        description: "Keep warm while looking cool with this Techno Love beanie, perfect for chilly festival nights.",
        sizes: ["XS", "M", "L", "XXL"],
        stock: 45,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "6",
        name: "Underground Techno Poster",
        price: 12.99,
        description: "Decorate your space with this bold and edgy underground techno poster.",
        sizes: ["XS", "S"],
        stock: 50,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "7",
        name: "Teste 1 Stock",
        price: 7.99,
        description: "Carry a piece of the techno scene wherever you go with this sleek keychain.",
        sizes: ["XS", "S"],
        stock: 1,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "8",
        name: "Bassline Socks",
        price: 9.99,
        description: "Step into the rhythm with these comfortable and stylish bassline socks.",
        sizes: ["XS", "S", "M", "L"],
        stock: 110,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "9",
        name: "Festival Survival Fanny Pack",
        price: 29.99,
        description: "Stay hands-free and organized with this durable festival fanny pack featuring multiple compartments.",
        sizes: ["XS", "S", "XL", "XXL"],
        stock: 90,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      },
      {
        id: "10",
        name: "Glow In The Dark Techno Bracelet",
        price: 5.99,
        description: "Light up the night with this glow-in-the-dark bracelet, a must-have for every techno lover.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        stock: 130,
        mainImage: "https://artoftechno.com/cdn/shop/files/background-hoodie-teecopy_0f236cfd-6d71-402b-9f5e-6656ecba4c1c.jpg?v=1731583105&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_8cf3031d-97a6-48c7-ae71-54330d92be78.jpg?v=1731592193&width=800",
          "https://artoftechno.com/cdn/shop/files/back3_a558b538-08f9-4fc5-bd91-ac1613b3c563.jpg?v=1731401265&width=800",
          "https://artoftechno.com/cdn/shop/products/6F20E950-49C0-4F10-A467-FAB158874B78.jpg?v=1724409196&width=800"
        ]
      }
    ]
  }),

  getters: {
    getMerchandiseById: (state) => (id) => {
      return state.merchandise.find(item => item.id === id);
    },
    getAllMerchandise: (state) => {
      return state.merchandise;
    },
    getStockLevel: (state) => (id) => {
      const item = state.merchandise.find(item => item.id === id);
      return item ? item.stock : 0;
    }
  },

  actions: {
    addMerchandise(newItem) {
      const itemExists = this.merchandise.some(item => item.id === newItem.id);
      if (itemExists) {
        throw new Error('Item already exists');
      }
      this.merchandise.push(newItem);
    },

    removeMerchandise(id) {
      const index = this.merchandise.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('Item not found');
      }
      this.merchandise.splice(index, 1);
    },

    updateMerchandise(updatedItem) {
      const index = this.merchandise.findIndex(item => item.id === updatedItem.id);
      if (index === -1) {
        throw new Error('Item not found');
      }
      this.merchandise[index] = { ...this.merchandise[index], ...updatedItem };
    },

    updateStock(id, quantity) {
      const item = this.merchandise.find(item => item.id === id);
      if (!item) {
        throw new Error('Item not found');
      }
      item.stock = quantity;
    },

    decreaseStock(productId) {
      const product = this.merchandise.find(p => p.id === productId)
      if (product && product.stock > 0) {
        product.stock--
        return true
      }
      throw new Error('Product out of stock')
    }
  },

  persist: true
});
