import http from './AxiosService'

class TopicService{
	async getAll() {
		return http.get('/api/topics')
	}

	async getOne(id) {
		return http.get(`/api/topics/${id}`)
	}

	async getAuthors() {
		return http.get('/api/topics/authors')
	}
}

export default new TopicService()