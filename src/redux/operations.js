import { createAsyncThunk } from '@reduxjs/toolkit'

// Örnek ürün verileri
const products = [
  {
    id: 1,
    title: "Altın Kolye",
    price: 1299.99,
    description: "Zarif tasarımlı 14 ayar altın kolye",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "İnci Kolye",
    price: 899.99,
    description: "Doğal inci kolye",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Elmas Kolye",
    price: 2499.99,
    description: "Pırlanta taşlı altın kolye",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Gümüş Bileklik",
    price: 299.99,
    description: "El yapımı gümüş bileklik",
    category: "bracelet",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Altın Bileklik",
    price: 1499.99,
    description: "14 ayar altın bileklik",
    category: "bracelet",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Pandora Bileklik",
    price: 799.99,
    description: "Pandora marka gümüş bileklik",
    category: "bracelet",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Vintage Kolye",
    price: 599.99,
    description: "Vintage tarz gümüş kolye",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Minimalist Kolye",
    price: 399.99,
    description: "Minimalist tasarımlı gümüş kolye",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    title: "Çelik Bileklik",
    price: 199.99,
    description: "Paslanmaz çelik bileklik",
    category: "bracelet",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    title: "Altın Zincir",
    price: 899.99,
    description: "14 ayar altın zincir",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 11,
    title: "Gümüş Zincir",
    price: 299.99,
    description: "925 ayar gümüş zincir",
    category: "necklace",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 12,
    title: "Altın Bilezik",
    price: 1999.99,
    description: "22 ayar altın bilezik",
    category: "bracelet",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            // API çağrısı yerine statik veriyi döndürüyoruz
            return products;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const addTask = createAsyncThunk("products/addTask", async (task, thunkAPI) => {
    try {
        // Yeni ürün ekleme işlemi
        const newProduct = {
            ...task,
            id: products.length + 1
        };
        products.push(newProduct);
        return newProduct;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

