import http from './AxiosService';

class GameService {
  async answer(topic_id, question_id, words, stars_count) {
    return http.post('/api/game/answer', { topic_id, question_id, words, stars_count });
  }

  async failanswer(topic_id, question_id) {
    return http.post('/api/game/failAnswer', { topic_id, question_id});
  }

  async useHint(topic_id, question_id) {
    return http.post('/api/game/hint', { topic_id, question_id});
  }

	async getGameData(question_id) {
		return http.get(`/api/game/${question_id}`)
	}

  async getAnswer(question_id){
    return http.get(`/api/game/answer/${question_id}`)
  }
}

export default new GameService();
