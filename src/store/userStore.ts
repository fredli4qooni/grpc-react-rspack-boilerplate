// src/store/userStore.ts
import { create } from "zustand";
import { User } from "../types/user";
import { getUserById } from "../api/userService";

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: (userId: string) => Promise<void>;
}

/**
 * @typedef {object} UserState - Mendefinisikan bentuk (shape) dari state pengguna.
 * @property {User | null} user - Objek data pengguna, atau null jika belum ada.
 * @property {boolean} isLoading - Status loading, true jika sedang dalam proses fetch.
 * @property {string | null} error - Pesan error, atau null jika tidak ada error.
 * @property {(userId: string) => Promise<void>} fetchUser - Fungsi untuk memicu pengambilan data pengguna.
 */

/**
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<UserState>>}
 * Hook Zustand untuk mengelola state pengguna secara global.
 * Menyediakan state untuk data pengguna, status loading, dan error,
 * serta action untuk mengambil data dari API.
 */

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  /**
   * Mengambil data pengguna dari API dan memperbarui state.
   * @param {string} userId - ID pengguna yang akan di-fetch.
   */
  fetchUser: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const userData = await getUserById(userId);
      set({ user: userData, isLoading: false });
    } catch (err) {
      const error =
        err instanceof Error ? err.message : "An unknown error occurred";
      set({ error, isLoading: false, user: null });
    }
  },
}));
