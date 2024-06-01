import http from "./AxiosService";

class UserService {
    async get() {
        return http.get("/api/user");
    }
}

export default new UserService();
