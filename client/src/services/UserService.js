import http from "./AxiosService";

class UserService {
    async get() {
        return http.get("/api/user");
    }
    async sendPrize(topic_id){
        console.log("Отправляем topic_id:", topic_id);
        return http.post("/api/user/sendPrize", {topic_id})
    }
}

export default new UserService();
