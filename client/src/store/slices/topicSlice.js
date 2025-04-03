import TopicService from '../../services/TopicService'
import createAppSlice from '../createAppSlice';
import UserService from '../../services/UserService'

export const topicSlice = createAppSlice({
  name: 'topic',
  initialState: {
    topics: [],
		topic: {},
    errorMessage: '',
    endTopic:false,
    isLoading: true,
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
          state.isLoading = true
          state.errorMessage = ''
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
    sendPrize: create.asyncThunk(
      async (payload) => {
        const res = await UserService.sendPrize(payload.topic_id)
        return res.data;
      },
      {
        pending: state => {
          state.isLoading = true
          state.errorMessage = ''
        },
        fulfilled: state => {
          state.isLoading = false;
          state.endTopic = true;
        },
        rejected: state => {
          state.topic = {}
          state.isLoading = false;
        },
      }
    )
  }),
});

export const { getAllTopics, getOneTopic, sendPrize } = topicSlice.actions;

export default topicSlice.reducer;
