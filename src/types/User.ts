export interface User {
  jwt: string;
  data?: {
    username: string;
    displayName: string;
  };
}
