import { RpcError } from 'grpc-web';
import { GetUserRequest, UserResponse } from "./proto/user_pb.js";
import { UserServiceClient } from "./proto/user_grpc_web_pb.js";
import { User } from "../types/user";

const endpoint = 'http://localhost:8080';
const client = new UserServiceClient(endpoint, null, null);

/**
 * Mengambil data pengguna berdasarkan ID mereka melalui panggilan gRPC.
 * Fungsi ini membungkus panggilan gRPC dalam sebuah Promise untuk penggunaan async/await.
 *
 * @param {string} userId - ID unik dari pengguna yang akan diambil.
 * @returns {Promise<User>} Sebuah Promise yang akan resolve dengan objek User jika berhasil.
 * @throws {Error} Sebuah Promise yang akan reject dengan Error jika panggilan gRPC gagal.
 */
export const getUserById = (userId: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        const request = new GetUserRequest();
        request.setUserId(userId);

        client.getUser(request, {}, (err: RpcError, response: UserResponse) => {
            if (err) {
                console.error(`gRPC Error: ${err.message}`);
                return reject(new Error(`Failed to fetch user: ${err.message}`));
            }
            
            const result = response.toObject();
            
            resolve({
                userId: result.userId,
                name: result.name,
                email: result.email,
            });
        });
    });
};