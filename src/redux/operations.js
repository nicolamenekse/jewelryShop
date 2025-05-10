import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import defaultProfile from '../assets/default-profile.jpg'

const users = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    age: 25,
    bio: "Seyahat etmeyi ve yeni yerler keşfetmeyi seven, müzik tutkunu biriyim. Kitap okumak ve doğa yürüyüşleri benim için vazgeçilmez.",
    gender: "female",
    isAvailable: true,
    friendCount: 156,
    image: defaultProfile,
    interests: ["seyahat", "müzik", "kitap", "doğa"]
  },
  {
    id: 2,
    name: "Mehmet Demir",
    age: 28,
    bio: "Yazılım geliştirici olarak çalışıyorum. Spor yapmayı ve teknoloji ile ilgilenmeyi seviyorum.",
    gender: "male",
    isAvailable: true,
    friendCount: 89,
    image: defaultProfile,
    interests: ["teknoloji", "spor", "yazılım"]
  },
  {
    id: 3,
    name: "Zeynep Kaya",
    age: 23,
    bio: "Grafik tasarımcıyım. Sanat ve fotoğrafçılık benim tutkum. Yeni insanlarla tanışmayı seviyorum.",
    gender: "female",
    isAvailable: false,
    friendCount: 234,
    image: defaultProfile,
    interests: ["sanat", "fotoğrafçılık", "tasarım"]
  },
  {
    id: 4,
    name: "Can Öztürk",
    age: 30,
    bio: "Mühendis olarak çalışıyorum. Doğa sporları ve kamp yapmak en büyük hobilerim.",
    gender: "male",
    isAvailable: true,
    friendCount: 145,
    image: defaultProfile,
    interests: ["kamp", "doğa sporları", "mühendislik"]
  },
  {
    id: 5,
    name: "Elif Şahin",
    age: 26,
    bio: "Doktor olarak çalışıyorum. Dans etmeyi ve yeni restoranlar keşfetmeyi seviyorum.",
    gender: "female",
    isAvailable: true,
    friendCount: 178,
    image: defaultProfile,
    interests: ["dans", "yemek", "seyahat"]
  }
];

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            return users;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const addUser = createAsyncThunk("users/addUser", async (user, thunkAPI) => {
    try {
        const newUser = {
            ...user,
            id: users.length + 1,
            friendCount: 0,
            isAvailable: true
        };
        users.push(newUser);
        return newUser;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})

export const updateUserStatus = createAsyncThunk(
    "users/updateStatus",
    async ({ userId, isAvailable }, thunkAPI) => {
        try {
            const userIndex = users.findIndex(user => user.id === userId);
            if (userIndex !== -1) {
                users[userIndex].isAvailable = isAvailable;
                return users[userIndex];
            }
            throw new Error("User not found");
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const setGenderFilter = createAction('users/setGenderFilter');
export const setAvailabilityFilter = createAction('users/setAvailabilityFilter');
export const setAgeRange = createAction('users/setAgeRange');
