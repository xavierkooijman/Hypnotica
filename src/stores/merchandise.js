import { Coins } from 'lucide-vue-next';
import { defineStore } from 'pinia';

export const useMerchandiseStore = defineStore('merchandise', {
  state: () => ({
    merchandise: [
      {
        id: "1",
        name: "Techno Stencil T-Shirt",
        price: 4.99,
        description: "Decorate your gear with these cool techno-themed stickers.",
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
        mainImage: "https://artoftechno.com/cdn/shop/files/2_bc6afc4e-c3de-41eb-850f-a7530d94015e.jpg?v=1731582682&width=1000",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/1_ae1a0aa4-2e8b-4914-9e09-9e15567e61b7.jpg?v=1731593078&width=1000",
          "https://artoftechno.com/cdn/shop/files/back_028a25be-86c6-4c1f-b597-dd619c7a418d.jpg?v=1731400787&width=1000",
          "https://artoftechno.com/cdn/shop/files/w.jpg?v=1731593119&width=1000"
        ]
      },
      {
        id: "3",
        name: "Techno Rave Hoodie",
        price: 39.99,
        description: "Stay cozy and rave-ready with this techno hoodie made from ultra-soft fabric. Features bold front and back prints.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        stock: 165,
        mainImage: "https://artoftechno.com/cdn/shop/files/blue_82b6628a-0558-4d62-b63c-6d4f92a0b18c.jpg?v=1731582556&width=1000",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/fronmt1_f59dbd03-cc02-4671-9e65-a8f501940fa2.jpg?v=1731593257&width=1000",
          "https://artoftechno.com/cdn/shop/files/blue_836fa011-93c2-4670-9848-caec95ba2f6d.jpg?v=1731400830&width=1000",
          "https://artoftechno.com/cdn/shop/files/w_a9027d68-ec5b-457e-a7a8-e392dcee03dc.jpg?v=1731593263&width=1000"
        ]
      },
      {
        id: "4",
        name: "Minimal Techno Tote Bag",
        price: 14.99,
        description: "Carry your essentials in style with this minimalistic techno tote bag. Made from durable, eco-friendly materials.",
        sizes: ["XL", "XXL"],
        stock: 75,
        mainImage: "https://artoftechno.com/cdn/shop/files/liularave.jpg?v=1731582829&width=1000",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_e0d70682-9a05-48a2-b509-04e74141b80a.jpg?v=1731582827&width=1000",
          "https://artoftechno.com/cdn/shop/files/raveback.jpg?v=1731339360&width=1000",
          "https://artoftechno.com/cdn/shop/files/front_aec0e586-3258-4e28-bf5e-939e1dea9f7c.jpg?v=1731339367&width=1000"
        ]
      },
      {
        id: "5",
        name: "Techno Love Beanie",
        price: 17.99,
        description: "Keep warm while looking cool with this Techno Love beanie, perfect for chilly festival nights.",
        sizes: ["XS", "M", "L", "XXL"],
        stock: 45,
        mainImage: "https://artoftechno.com/cdn/shop/files/butterfly.jpg?v=1731580170&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/1_c63b69c7-d828-43a1-b39d-932d1543f0fc.jpg?v=1731580171&width=800",
          "https://artoftechno.com/cdn/shop/files/Untitled-1.jpg?v=1731328129&width=800",
          "https://artoftechno.com/cdn/shop/files/front_eef65ab1-684c-4264-84bc-8a634beb8655.jpg?v=1731328129&width=800"
        ]
      },
      {
        id: "6",
        name: "Teste 1 Stock",
        price: 7.99,
        description: "Carry a piece of the techno scene wherever you go with this sleek keychain.",
        sizes: ["XS", "S"],
        stock: 1,
        mainImage: "https://artoftechno.com/cdn/shop/files/bluemedusa.jpg?v=1731580214&width=800",
        secondaryImages: [
          "https://artoftechno.com/cdn/shop/files/front_739b1c7c-73d9-47a0-b7ed-2516329f3b71.jpg?v=1731580214&width=800",
          "https://artoftechno.com/cdn/shop/files/medusablue.jpg?v=1731339390&width=800",
          "https://artoftechno.com/cdn/shop/files/front_68cdbe60-d2b6-4f3c-9bfd-839b65c93a5d.jpg?v=1731339389&width=800"
        ]
      },
    ],
    promoCodes: [
      {
        name: 'Small Discount',
        code: 'TECHNO10',
        discount: 15,
        requiredCoins: 500
      },
      {
        name: 'Medium Discount',
        code: 'TECHNO20',
        discount: 20,
        requiredCoins: 1000
      },
      {
        name: 'Large Discount',
        code: 'TECHNO30',
        discount: 30,
        requiredCoins: 1500
      },
    ],
  }),

  getters: {
    getMerchandiseById: (state) => (id) => {
      return state.merchandise.find(item => item.id == id);
    },
    getAllMerchandise: (state) => {
      return state.merchandise;
    },
    getStockLevel: (state) => (id) => {
      const item = state.merchandise.find(item => item.id == id);
      return item ? item.stock : 0;
    },
    getpromoCodes: (state) => {
      return state.promoCodes;
    }
  },

  actions: {
    addMerchandise(name, price, description, sizes, stock, images) {
      const itemExists = this.merchandise.some(item => item.name == name);
      if (itemExists) {
        throw new Error('Item with that name already exists');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.merchandise.some(item => item.id == newId));

      const newItem = {
        id: newId,
        name,
        price,
        description,
        sizes,
        stock,
        mainImage: images[0],
        secondaryImages: images.slice(1)
      }

      this.merchandise.push(newItem);
    },

    removeMerchandise(id) {
      const index = this.merchandise.findIndex(item => item.id == id);
      if (index === -1) {
        throw new Error('Item not found');
      }
      this.merchandise.splice(index, 1);
    },

    updateMerchandise(updatedItem) {
      const index = this.merchandise.findIndex(item => item.id == updatedItem.id);
      if (index === -1) {
        throw new Error('Item not found');
      }
      this.merchandise[index] = { ...this.merchandise[index], ...updatedItem };
    },

    updateStock(id, quantity) {
      const item = this.merchandise.find(item => item.id == id);
      if (!item) {
        throw new Error('Item not found');
      }
      item.stock = quantity;
    },

    decreaseStock(productId) {
      const product = this.merchandise.find(p => p.id == productId)
      if (product && product.stock > 0) {
        product.stock--
        return true
      }
      throw new Error('Product out of stock')
    }
  },
  persist: true,
});