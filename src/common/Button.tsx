import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Komponen tombol dasar yang dapat digunakan kembali di seluruh aplikasi.
 * Menerima semua atribut standar dari elemen <button> HTML.
 * @param {ButtonProps} props - Properti untuk komponen tombol.
 * @returns {React.ReactElement} Elemen tombol yang di-render.
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      {...props}
    >
      {children}
    </button>
  );
};