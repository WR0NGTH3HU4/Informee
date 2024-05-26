export interface User {
  jwt: string;
  data?: {
    id: string;
    username: string;
    displayName: string;
  };
}
