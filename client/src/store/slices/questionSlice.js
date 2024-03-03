import createAppSlice from '../createAppSlice';

export const questionSlice = createAppSlice({
  name: 'question',
  initialState: {
    words: [],
  },

  reducers: create => ({
    setWords: create.reducer((state, action) => {
      const wordsLengths = action.payload.wordsLengths;
      const chars = [];
      for (
        let i = 0;
        i <
        wordsLengths.reduce((acc, value) => {
          return acc + value;
        });
        i++
      ) {
        chars.push('');
      }

      wordsLengths.forEach(value => {
        const chunk = chars.splice(0, value);
        state.words.push(chunk);
      });
    }),
    // setChar: create.reducer((state, action) => {}),
    // removeChar: create.reducer((state, action) => {}),

    // create: create.asyncThunk(
    //   async (data, config) => {
    //     const res = await BookmarkService.create(
    //       data.title,
    //       data.link,
    //       data.description,
    //       data.tags
    //     );
    //     config.dispatch(getAllTags());
    //     return res.data;
    //   },
    //   {
    //     pending: state => {
    //       state.isLoading = true;
    //     },
    //     fulfilled: (state, action) => {
    //       state.bookmarks.unshift(action.payload);
    //       state.isLoading = false;
    //     },
    //     rejected: state => {
    //       state.isLoading = false;
    //     },
    //   }
    // ),
  }),
});

export const { setWords } = questionSlice.actions;

export default questionSlice.reducer;
