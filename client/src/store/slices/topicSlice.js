import TopicService from '../../services/TopicService'
import createAppSlice from '../createAppSlice';

export const topicSlice = createAppSlice({
  name: 'topic',
  initialState: {
    topics: [],
		topic: {},
    errorMessage: '',

    isLoading: false,
  },

  reducers: create => ({
    getAllTopics: create.asyncThunk(
      async () => {
        const res = await TopicService.getAll()
        return res.data;
      },
      {
        pending: state => {
          (state.isLoading = true), (state.errorMessage = '');
        },
        fulfilled: (state, action) => {
          state.topics = action.payload
          state.isLoading = false;
        },
        rejected: state => {
          state.topics = []
          state.isLoading = false;
        },
      }
    ),

		getOneTopic: create.asyncThunk(
      async (payload) => {
        const res = await TopicService.getOne(payload)
        return res.data;
      },
      {
        pending: state => {
          (state.isLoading = true), (state.errorMessage = '');
        },
        fulfilled: (state, action) => {
          state.topic = action.payload
          state.isLoading = false;
        },
        rejected: state => {
          state.topic = {}
          state.isLoading = false;
        },
      }
    ),
  }),
});

export const { getAllTopics, getOneTopic } = topicSlice.actions;

export default topicSlice.reducer;
