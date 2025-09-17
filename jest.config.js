module.exports = {
  // Menentukan lingkungan tes JSDOM 
  testEnvironment: 'jsdom',

  // Memberi tahu Jest untuk menggunakan ts-jest untuk file .ts dan .tsx
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
};