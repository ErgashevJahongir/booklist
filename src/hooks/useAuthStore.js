import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useAuthStore = create(
    persist(
        set => ({
            user: null,
            setUser: user => set(state => ({ ...state, user })),
        }),
        {
            name: "Book-list",
            storage: createJSONStorage(() => localStorage),
        },
    ),
)
