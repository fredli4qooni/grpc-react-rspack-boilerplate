declare module '*/user_pb.js' {
  export class GetUserRequest {
    setUserId(id: string): void;
  }
  export class UserResponse {
    toObject(): { userId: string; name: string; email: string };
  }
}

declare module '*/user_grpc_web_pb.js' {
  import { GetUserRequest, UserResponse } from '*/user_pb.js';
  import { RpcError } from 'grpc-web';

  export class UserServiceClient {
    constructor(endpoint: string, metadata: any, options: any);
    getUser(
      request: GetUserRequest,
      metadata: {},
      callback: (err: RpcError, response: UserResponse) => void
    ): void;
  }
}