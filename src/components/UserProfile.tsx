import React from 'react';
import { useUserStore } from '../store/userStore';
import { Button } from '../common/Button';

/**
 * Komponen "pintar" (smart component) yang bertanggung jawab untuk menampilkan informasi profil pengguna.
 * Komponen ini menggunakan `useUserStore` untuk mengambil data dari state global,
 * menangani status loading dan error, dan memicu aksi `fetchUser`.
 * @returns {React.ReactElement} Elemen UI untuk profil pengguna.
 */
export const UserProfile: React.FC = () => {
  const { user, isLoading, error, fetchUser } = useUserStore();

  /**
   * Handler untuk tombol fetch. Memanggil action `fetchUser` dari store.
   */
  const handleFetch = () => {
    // Memanggil API dengan user ID '123' sebagai contoh
    fetchUser('123');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>User Profile</h2>
      <Button onClick={handleFetch} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch User Data'}
      </Button>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {user && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>ID:</strong> {user.userId}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};