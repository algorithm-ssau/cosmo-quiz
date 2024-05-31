import GameService from '../../services/GameService'
import createAppSlice from '../createAppSlice';

export const questionSlice = createAppSlice({
  name: 'question',
  initialState: {
    words: [],
    chars: [],
    wordsLengths: [],
    isDone: false,
    isRightAnswer: false,

    isLoading: false,
  },

  reducers: create => ({
    fetchData: create.asyncThunk(async (payload, config) => {
      const data = await (await GameService.getGameData(payload.question_id)).data
      config.dispatch(setWords({ wordsLengths: data.wordsLengths }));
      config.dispatch(
        setChars(data.chars)
      );
      config.dispatch(setIsDone(false))
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
          state.chars[index].selected = true;
          if (i === chars.length - 1) {
            state.isDone = true
          }
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
      state.isDone = false

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

    clear: create.asyncThunk(async (payload, config) => {
      const state = config.getState().question
      config.dispatch(setIsDone(false))
      config.dispatch(setWords({ wordsLengths: state.wordsLengths }));
      config.dispatch(
        setChars(state.chars.map(char => ({...char, selected: false})))
      );
    }),

    setIsDone: create.reducer((state, action) => {
      state.isDone = action.payload
    }),
    
    answer: create.asyncThunk(async (payload, config) => {
      const result = await GameService.answer(payload.topic_id, payload.question_id, payload.words)
      if (result.data.status === 'correct') {
        config.dispatch(setIsRightAnswer(true))
      } else {
        config.dispatch(setIsRightAnswer(false))
      }
    }),

    setIsRightAnswer: create.reducer((state, action) => {
      state.isRightAnswer = action.payload
    })
  }),
});

export const { setWords, setChars, selectChar, unselectChar, fetchData, clear, setIsDone, setIsRightAnswer, answer } = questionSlice.actions;

export default questionSlice.reducer;
