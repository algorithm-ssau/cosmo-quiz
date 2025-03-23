import GameService from '../../services/GameService'
import createAppSlice from '../createAppSlice';

export const questionSlice = createAppSlice({
  name: 'question',
  initialState: {
    words: [],
    chars: [],
    wordsLengths: [],
    rightChars: [],
    isDone: false,
    isRightAnswer: false,
    countClue: 0,
    stars: 3,
    isLoading: false,
  },

  reducers: create => ({
    fetchData: create.asyncThunk(async (payload, config) => {
      const data = await (await GameService.getGameData(payload.question_id)).data
      config.dispatch(setRightChars({rightChars: data.rightChars}));
      config.dispatch(setWords({ wordsLengths: data.wordsLengths }));
      config.dispatch(
        setChars(data.chars)
      );
      config.dispatch(setCountClue({countClue: data.countClue}));
      config.dispatch(setIsDone(false))
      config.dispatch(setStars(3))
    }),

    setCountClue: create.reducer((state, action) => {
      const countClue = action.payload.countClue;
      state.countClue = countClue;
    }),
    setRightChars: create.reducer((state, action) => {
      const rightChars = action.payload.rightChars;
      state.rightChars = rightChars;
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
        chars.push({ id: 0, char: '', right: false });
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
          chars[i].right = false
          state.chars[index].selected = true;
          break;
        }
      }
      if (!chars.some(c => c.char === '')) {
        state.isDone = true;
      }

      state.isDone = !chars.find(char => char.char === '')

      const words = [];
      state.wordsLengths.forEach(length => {
        const word = chars.splice(0, length);
        words.push(word);
      });
      state.words = words;
    }),

    unselectChar: create.reducer((state, action) => {
      const chars = state.words.reduce((acc, value) => {
        return acc.concat(value);
      }, []);

      for (let i = 0; i < state.chars.length; i++) {
        if (state.chars[i].id === action.payload) {
          if(chars.find(char => char.id===action.payload).right == false){
            state.chars[i].selected = false;
            break;
          }
        }
      }


      for (let i = 0; i < chars.length; i++) {
        if (chars[i].id === action.payload && chars[i].right == false) {
          chars[i] = { id: 0, char: '', right: false};
          state.isDone = false
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

    fillRightChar: create.reducer((state) => {
      let index = new Array(state.words.length);
      for(let i = 0; i < index.length; i++){
        index[i] = new Array(state.rightChars[i].length);
      }
      // Находим индекс выбранного символа
      for(let i = 0; i < state.rightChars.length; i++){
        if(state.rightChars[i].length>2){
          for(let k = 0; k<state.chars.length; k++){
            if (state.chars[k].char === state.rightChars[i][0] && state.chars[k].selected === false) {
              index[i][0] = k;
              break;
            }
          }
          for (let k = 0; k < state.chars.length; k++) {
            if (state.chars[k].char === state.rightChars[i][1]) {
              index[i][1] = k;
              break;
            }
          }
          for (let k = 0; k < state.chars.length; k++) {
            if (state.chars[k].char === state.rightChars[i][2]) {
              index[i][2] = k;
              break;
            }
          }
          for (let k = 0; k < state.chars.length; k++) {
            if (state.chars[k].char === state.rightChars[i][3]) {
              index[i][3] = k;
              break;
            }
          }
        }
        else{
          for (let k = 0; k < state.chars.length; k++) {
            if (state.chars[k].char === state.rightChars[i][0]) {
              index[i][0] = k;
              break;
            }
          }
          for (let k = 0; k < state.chars.length; k++) {
            if (state.chars[k].char === state.rightChars[i][1]) {
              index[i][1] = k;
              break;
            }
          }
        }
      }
      // Разворачиваем state.words в один массив
      const chars = state.words.reduce((acc, value) => acc.concat(value), []);
      let temp = 0;
      let firstLastIndex = new Array(state.words.length);
      for(let i = 0; i < firstLastIndex.length; i++){
        firstLastIndex[i] = new Array(state.rightChars[i].length);
      }
      for(let i = 0; i<state.words.length; i++){
        if(state.rightChars[i].length>2){
          firstLastIndex[i][0] = temp;
          firstLastIndex[i][1] = temp + 1;
          firstLastIndex[i][2] = temp + state.words[i].length-2
          firstLastIndex[i][3] = temp + state.words[i].length-1
          temp += state.words[i].length;
        }
        else{
          firstLastIndex[i][0] = temp;
          firstLastIndex[i][1] = temp+state.words[i].length-1
          temp += state.words[i].length;
        }
      }
      
      console.log(index);
      console.log(firstLastIndex);
      // Заполняем первую и последнюю пустые ячейки
      for(let i = 0; i<firstLastIndex.length;i++){
        if(firstLastIndex[i].length>2){
          if(state.countClue == 2){
            chars[firstLastIndex[i][0]].id = state.chars[index[i][0]].id;
            chars[firstLastIndex[i][0]].char = state.chars[index[i][0]].char;
            chars[firstLastIndex[i][0]].right = true;
            state.chars[index[i][0]].selected = true;

            chars[firstLastIndex[i][3]].id = state.chars[index[i][3]].id;
            chars[firstLastIndex[i][3]].char = state.chars[index[i][3]].char;
            chars[firstLastIndex[i][3]].right = true;
            state.chars[index[i][3]].selected = true;
          }
          else{
            chars[firstLastIndex[i][1]].id = state.chars[index[i][1]].id;
            chars[firstLastIndex[i][1]].char = state.chars[index[i][1]].char;
            chars[firstLastIndex[i][1]].right = true;
            state.chars[index[i][1]].selected = true;

            chars[firstLastIndex[i][2]].id = state.chars[index[i][2]].id;
            chars[firstLastIndex[i][2]].char = state.chars[index[i][2]].char;
            chars[firstLastIndex[i][2]].right = true;
            state.chars[index[i][2]].selected = true;
          }
        }
        else{
          if(!isNaN(index[i][0])){
            chars[firstLastIndex[i][0]].id = state.chars[index[i][0]].id;
            chars[firstLastIndex[i][0]].char = state.chars[index[i][0]].char;
            chars[firstLastIndex[i][0]].right = true;
            state.chars[index[i][0]].selected = true;
            

            chars[firstLastIndex[i][1]].id = state.chars[index[i][1]].id;
            chars[firstLastIndex[i][1]].char = state.chars[index[i][1]].char;
            chars[firstLastIndex[i][1]].right = true;
            state.chars[index[i][1]].selected = true;
          }
        }
      }
    
      // Проверяем, завершена ли игра
      if (!chars.some(c => c.char === '')) {
        state.isDone = true;
      }
    
      // Переформируем words
      const words = [];
      state.wordsLengths.forEach(length => {
        words.push(chars.splice(0, length));
      });
      state.words = words;
      //await GameService.useHint(payload.topic_id, payload.question_id)
      if(state.countClue !=0){
        state.countClue--;
      }
    }),

    clear: create.asyncThunk(async (payload, config) => {
      config.dispatch(setIsDone(false))
      config.dispatch(setIsRightAnswer(false))
      config.dispatch(clearWords());
      config.dispatch(clearChars());
    }),

    clearWords: create.reducer(state => {
      const insertedChars = state.words.reduce((acc, value) => {
        return acc.concat(value);
      }, []);
      const chars = [];
      for (
        let i = 0;
        i <
        state.wordsLengths.reduce((acc, value) => {
          return acc + value;
        });
        i++
      ) {
        if(insertedChars[i].right){
          chars.push({id: insertedChars[i].id, char: insertedChars[i].char, right: true})
        }
        else{
          chars.push({ id: 0, char: '', right: false });
        }
      }

      const words = [];
      state.wordsLengths.forEach(length => {
        const word = chars.splice(0, length);
        words.push(word);
      });
      state.words = words;
    }), 

    clearChars: create.reducer(state => {
      const insertedChars = state.words.reduce((acc, value) => {
        return acc.concat(value);
      }, []);
      for(let i = 0; i<state.chars.length; i++){
        const foundChar = insertedChars.find(char => char.id === state.chars[i].id);
        if(foundChar && foundChar.right){
          state.chars[i].selected = true;
        }
        else{
          state.chars[i].selected = false;
        }
      }
    }),

    setIsDone: create.reducer((state, action) => {
      state.isDone = action.payload
    }),
    
    answer: create.asyncThunk(async (payload, config) => {
      const result = await GameService.answer(payload.topic_id, payload.question_id, payload.words, payload.stars)
      if (result.data.status === 'correct') {
        config.dispatch(setIsRightAnswer(true))
      } else {
        config.dispatch(setIsRightAnswer(false))
        config.dispatch(removeStar())
      }
    }),

    hint: create.asyncThunk(async payload => {
      await GameService.useHint(payload.topic_id, payload.question_id)
    }),

    failAnswer: create.asyncThunk(async(payload) => {
      await GameService.failanswer(payload.topic_id, payload.question_id);
      //config.dispatch(setIsRightAnswer(true));
    }),

    setIsRightAnswer: create.reducer((state, action) => {
      state.isRightAnswer = action.payload
    }),

    setStars: create.reducer((state, action) => {
      state.stars = action.payload
    }), 

    removeStar: create.reducer(state=> {
      state.stars--;
    })
  }),
});

export const {failAnswer, setStars, removeStar, hint, setWords, setChars, selectChar, unselectChar, fetchData, clear, setIsDone, setIsRightAnswer, answer, fillRightChar, setRightChars, setCountClue, clearWords, clearChars } = questionSlice.actions;

export default questionSlice.reducer;
