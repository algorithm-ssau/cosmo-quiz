import TopicService from '../../services/TopicService'
import createAppSlice from '../createAppSlice';
import UserService from '../../services/UserService'

export const topicSlice = createAppSlice({
  name: 'topic',
  initialState: {
    topics: [],
    authors: [],
		topic: {},
    errorMessage: '',
    endTopic:false,
    isLoading: true,
    isTopicPrizeLoading: false,
    isStarsPrizeLoading: false,
    isDoneStarsPrize: false,
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

    getAuthors: create.asyncThunk(
      async () => {
        const res = await TopicService.getAuthors()
        return res.data;
      },
      {
        pending: state => {
          (state.isLoading = true), (state.errorMessage = '');
        },
        fulfilled: (state, action) => {
          state.authors = action.payload
          state.isLoading = false;
        },
        rejected: state => {
          state.authors = []
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
          state.endTopic = false;
          state.isDoneStarsPrize = false;
        },
        rejected: state => {
          state.topic = {}
          state.isLoading = false;
        },
      }
    ),
    sendTopicPrize: create.asyncThunk(
      async (payload) => {
        const res = await UserService.sendTopicPrize(payload.topic_id)
        return res.data;
      },
      {
        pending: state => {
          state.isLoading = true
          state.isTopicPrizeLoading = true
          state.errorMessage = ''
        },
        fulfilled: state => {
          state.isLoading = false;
          state.isTopicPrizeLoading = false
          state.endTopic = true;
        },
        rejected: state => {
          state.topic = {}
          state.isLoading = false;
        },
      }
    ),

    sendStarsPrize: create.asyncThunk(
      async () => {
        const res = await UserService.sendStarsPrize()
        return res.data;
      },
      {
        pending: state => {
          state.isStarsPrizeLoading = true
          state.isLoading = true
          state.errorMessage = ''
        },
        fulfilled: state => {
          state.isStarsPrizeLoading = false;
          state.isDoneStarsPrize = true;
          state.isLoading = false;
        },
        rejected: state => {
          state.topic = {}
          state.isLoading = false;
        },
      }
    )
  }),
});

export const { getAllTopics, getOneTopic, sendTopicPrize, getAuthors, sendStarsPrize } = topicSlice.actions;

export default topicSlice.reducer;
