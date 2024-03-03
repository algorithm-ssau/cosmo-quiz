import createAppSlice from '../createAppSlice';

export const questionSlice = createAppSlice({
  name: 'question',
  initialState: {
    words: [],
    chars: [],
    wordsLengths: [],

    isLoading: false,
  },

  reducers: create => ({
    fetchData: create.asyncThunk(async (payload, config) => {
      config.dispatch(setWords({ wordsLengths: [3, 2, 7] }));
      config.dispatch(
        setChars([
          { id: 1, char: 'q', selected: false },
          { id: 2, char: 'w', selected: false },
          { id: 3, char: 'e', selected: false },
          { id: 4, char: 'r', selected: false },
          { id: 5, char: 't', selected: false },
          { id: 6, char: 'y', selected: false },
          { id: 7, char: 'u', selected: false },
          { id: 8, char: 'i', selected: false },
        ])
      );
      return console.log('data fetched');
    }),

    setWords: create.reducer((state, action) => {
      const wordsLengths = action.payload.wordsLengths;
      state.wordsLengths = wordsLengths;
      const chars = [];
      for (
        let i = 0;
        i <
        wordsLengths.reduce((acc, value) => {
          return acc + value;
        });
        i++
      ) {
        chars.push({ id: 0, char: '' });
      }

      const words = [];
      wordsLengths.forEach(length => {
        const word = chars.splice(0, length);
        words.push(word);
      });
      state.words = words;
    }),

    setChars: create.reducer((state, action) => {
      const chars = [];
      action.payload.forEach(value => {
        chars.push({
          id: value.id,
          char: value.char,
          selected: value.selected,
        });
      });
      state.chars = chars;
    }),

    selectChar: create.reducer((state, action) => {
      let index = 0;

      for (let i = 0; i < state.chars.length; i++) {
        if (state.chars[i].id === action.payload) {
          index = i;
          state.chars[i].selected = true;
          break;
        }
      }

      const chars = state.words.reduce((acc, value) => {
        return acc.concat(value);
      }, []);

      for (let i = 0; i < chars.length; i++) {
        if (chars[i].char === '') {
          chars[i].id = action.payload;
          chars[i].char = state.chars[index].char;
          break;
        }
      }

      const words = [];
      state.wordsLengths.forEach(length => {
        const word = chars.splice(0, length);
        words.push(word);
      });
      state.words = words;
    }),

    unselectChar: create.reducer((state, action) => {
      for (let i = 0; i < state.chars.length; i++) {
        if (state.chars[i].id === action.payload) {
          state.chars[i].selected = false;
          break;
        }
      }

      const chars = state.words.reduce((acc, value) => {
        return acc.concat(value);
      }, []);

      for (let i = 0; i < chars.length; i++) {
        if (chars[i].id === action.payload) {
          chars[i] = { id: 0, char: '' };
          break;
        }
      }

      const words = [];
      state.wordsLengths.forEach(length => {
        const word = chars.splice(0, length);
        words.push(word);
      });
      state.words = words;
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

export const { setWords, setChars, selectChar, unselectChar, fetchData } =
  questionSlice.actions;

export default questionSlice.reducer;
