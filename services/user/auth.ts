import {AuthUser} from "@/types/appTypes";
import api from "@/lib/apiClient";

export async function signUpUser(user: AuthUser): Promise<IApiRes<IUser>> {
    const { email, password, name } = user;
    const { data } = await api.post<IApiRes<IUser>>("/api/register", {
        email,
        password,
        name,
    });

    return data;
}
