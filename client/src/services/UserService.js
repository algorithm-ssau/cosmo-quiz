import http from "./AxiosService";

class UserService {
    async get() {
        return http.get("/api/user");
    }
    async sendTopicPrize(topic_id){
        console.log("Отправляем topic_id:", topic_id);
        return http.post("/api/user/sendTopicPrize", {topic_id})
    }
    async sendStarsPrize(){
        return http.post("/api/user/sendStarsPrize")
    }
    async sendNewUserPrize(){
        return http.post("/api/user/sendNewUserPrize")
    }
    async resendPrizes(){
        return http.post("/api/user/resendPrizes")
    }
    async editUserData(newName, newEmail){
        return http.post("/api/user/editUserData", {newName, newEmail})
    }
}

export default new UserService();
