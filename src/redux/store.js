import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Redux Toolkit'in varsayılan serileştirme kontrolünü devre dışı bırak
                // Bu, Date objeleri gibi serileştirilemeyen değerlerin kullanılmasına izin verir
                ignoredActions: ['users/updateStatus'],
                ignoredPaths: ['users.items'],
            },
        }),
});