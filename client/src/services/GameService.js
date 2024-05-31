import http from './AxiosService';

class GameService {
  async answer(topic_id, question_id, words) {
    return http.post('/api/game/answer', { topic_id, question_id, words });
  }

	async getGameData(question_id) {
		return http.get(`/api/game/${question_id}`)
	}
}

export default new GameService();
