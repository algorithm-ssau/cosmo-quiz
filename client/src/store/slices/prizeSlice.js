import createAppSlice from '../createAppSlice';
import UserService from '../../services/UserService'


export const prizeSlice = createAppSlice({
  name: 'prize',
  initialState: {
    isPrizeSending: false,
    isDone: false
  },

  reducers: create => ({
    resendPrizes: create.asyncThunk(
        async () => {
            const res = await UserService.resendPrizes()
            return res.data;
        },
        {
        pending: state => {
          state.isPrizeSending = true
        },
        fulfilled: state => {
            state.isPrizeSending = false;
            state.isDone = true;
        },
        rejected: state => {
          state.isPrizeSending = false;
          state.isDone = true;
        },
      }
    ),
    clearState: create.reducer(state => {
        state.isDone = false;
      }),
    
  }),
});

export const { resendPrizes, clearState } = prizeSlice.actions;

export default prizeSlice.reducer;