# Modern Frontend Boilerplate: React 19, Rspack, gRPC-Web, and Jest

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Rspack](https://img.shields.io/badge/Rspack-Fast-orange?logo=webpack)
![gRPC](https://img.shields.io/badge/gRPC--Web-TypeSafe-green?logo=grpc)
![Jest](https://img.shields.io/badge/Tests-Jest-red?logo=jest)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A comprehensive, production-ready boilerplate for building modern frontend applications. This project provides a robust foundation by combining high-performance technology stack, type-safe API communication, and comprehensive testing suite.

---

## ✨ Key Features

- **Modern Technology Stack**: Built with React 19, TypeScript, and efficient state management using Zustand
- **Type-Safe API Layer**: Leverages gRPC-Web and Protocol Buffers for reliable, efficient backend communication with zero data synchronization errors
- **Optimized Build System**: Powered by Rspack, an ultra-fast Rust-based bundler with Webpack ecosystem compatibility
- **Robust Testing Suite**: Complete configuration for unit and component testing with Jest and React Testing Library
- **Clean Architecture**: Well-organized folder structure that separates concerns and scales effortlessly
- **Built-in Best Practices**: Includes colocated tests, automated scripts for gRPC code generation, and comprehensive JSDoc code documentation

## 🚀 Technology Stack

- **Core**: React 19, TypeScript, Zustand
- **Build Tool**: Rspack
- **API Communication**: gRPC-Web, Protocol Buffers
- **Testing**: Jest, React Testing Library, `ts-jest`
- **Package Manager**: pnpm

## 📂 Project Structure

The project structure is designed for scalability and maintainability.

```
/
├── protos/               # Single source of truth for API contracts (.proto)
├── public/               # Static assets
├── src/
│   ├── api/             # API wrappers and generated gRPC code
│   ├── common/          # Common UI components (e.g., Button)
│   ├── components/      # Feature components (e.g., UserProfile)
│   ├── store/           # Global state management (Zustand)
│   ├── types/           # TypeScript type definitions
│   └── ...
├── jest.config.js       # Jest configuration
├── rspack.config.js     # Rspack configuration
└── tsconfig.json        # TypeScript configuration
```

## 🏁 Getting Started

### Prerequisites

Ensure you have the following tools installed on your system:

1. Node.js (v18+)
2. pnpm (`npm install -g pnpm`)
3. Git
4. **Protocol Buffer Compiler (`protoc`) and Plugins**:
   - `protoc`
   - `protoc-gen-js` (`npm install -g protoc-gen-js`)
   - `protoc-gen-grpc-web`

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Generate gRPC client code:**
   This step compiles `.proto` files into usable JavaScript code.
   ```bash
   pnpm proto:gen
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the displayed port) in your browser.

## 📜 Available Scripts

- `pnpm dev`: Runs the application in development mode with Rspack
- `pnpm build`: Builds the application for production
- `pnpm test`: Runs the testing suite with Jest
- `pnpm proto:gen`: Regenerates gRPC client code from files in the `/protos` folder

## 🧪 Testing

This project is configured with Jest and React Testing Library for unit and component testing.

- **Running Tests**:
  ```bash
  pnpm test
  ```
- **Philosophy**: Tests are colocated alongside the files they test for better visibility and maintainability (e.g., `Button.tsx` and `Button.test.tsx`)
- **Mocking**: External dependencies, such as Zustand stores, are mocked to ensure tests run in isolation

## 🔄 gRPC Workflow

To modify or add new API calls:

1. **Edit Contracts**: Modify or add definitions in `.proto` files within the `/protos` folder
2. **Regenerate Code**: Run `pnpm proto:gen` to update client code in `src/api/proto/`
3. **Update API Wrappers**: Adjust functions in `src/api/userService.ts` (or create new service files) to utilize new messages and services
4. **Use in Application**: Call new functions from API wrappers within your components or stores

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

