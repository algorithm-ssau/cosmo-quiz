import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService'
import createAppSlice from '../createAppSlice';

export const authSlice = createAppSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuth: true,
    errorMessage: '',
    editMessage:"",
    isLoading: false,
    newUser: false
  },

  reducers: create => ({
    checkAuth: create.asyncThunk(
      async () => {
        const res = await AuthService.refresh();
        return res.data;
      },
      {
        pending: state => {
          state.isLoading = true;
          state.errorMessage = '';
        },
        fulfilled: (state, action) => {
          localStorage.setItem('accessToken', action.payload.accessToken);
          state.user = action.payload.user;
          state.isAuth = true;
          state.isLoading = false;
        },
        rejected: state => {
          localStorage.removeItem('accessToken');
          state.user = {};
          state.isAuth = false;
          state.isLoading = false;
        },
      }
    ),

    fetchUserData: create.asyncThunk(async () => {
      const res = await UserService.get()
      return res.data
    }, {
      pending: state => {
        state.errorMessage = '';
      },
      fulfilled: (state, action) => {
        state.user = action.payload.user;
      }
    }),

    register: create.asyncThunk(
      async (payload, config) => {
        try {
          const res = await AuthService.register(payload.name, payload.email, payload.password);
          localStorage.setItem('accessToken', res.data.accessToken);
          return res.data.user;
        } catch (error) {
          throw config.rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: state => {
          state.errorMessage = '';
        },
        fulfilled: (state, action) => {
          state.user = action.payload;
          state.isAuth = true;
          state.newUser = true;
        },
        rejected: (state, action) => {
          state.errorMessage = action.payload;
          state.user = {};
          state.isAuth = false;
        },
      }
    ),

    offNewUser: create.asyncThunk(async() => {
      const res = await UserService.sendNewUserPrize();
      return res.data;
    },
    {
      pending: state => {
        state.newUser = false;
      },
    }),

    clearError: create.reducer(state => {
      state.errorMessage = '';
      state.editMessage = '';
    }),

    login: create.asyncThunk(
      async (payload, config) => {
        try {
          const res = await AuthService.login(payload.email, payload.password);
          localStorage.setItem('accessToken', res.data.accessToken);
          return res.data.user;
        } catch (error) {
          throw config.rejectWithValue(error.response.data.message);
        }
      },
      {
        pending: state => {
          state.errorMessage = '';
        },
        fulfilled: (state, action) => {
          state.user = action.payload;
          state.isAuth = true;
        },
        rejected: (state, action) => {
          state.errorMessage = action.payload;
          state.user = {};
          state.isAuth = false;
        },
      }
    ),

    logout: create.asyncThunk(
      async () => {
        const res = await AuthService.logout();
        localStorage.removeItem('accessToken');
        return res.data;
      },
      {
        pending: state => {
          state.errorMessage = '';
        },
        fulfilled: state => {
          state.user = {};
          state.isAuth = false;
        },
        rejected: state => {
          state.user = null;
          state.isAuth = false;
        },
      }
    ),

    editUserData: create.asyncThunk(async (payload, config) => {
      try{
        const res = await UserService.editUserData(payload.userName, payload.email);
        return res.data;
      }catch (error) {
          throw config.rejectWithValue(error.response.data.message);
        }
    }, {
      pending: state => {
        state.editMessage = '';
      },
      fulfilled: (state) => {
        state.editMessage = "Данные сохранены"
      },
      rejected: (state, action) => {
        state.editMessage = action.payload;
      },
    }),
  }),
});

export const { checkAuth, login, logout, register, fetchUserData, clearError, editUserData, offNewUser } = authSlice.actions;

export default authSlice.reducer;
