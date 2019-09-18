export interface User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    contact: number;
    isAdmin: boolean;
    imagePath?: string;
}
