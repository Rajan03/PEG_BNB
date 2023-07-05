interface IUser {
    _id: string;
    name: string;
    email: string;
    image: string;

    isAdmin: boolean;
    isVerified: boolean;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface IApiRes<T> {
    data: T;
    status: string;
    message: string;
}
