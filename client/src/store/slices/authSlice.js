import AuthService from '../../services/AuthService';
import createAppSlice from '../createAppSlice';

export const authSlice = createAppSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuth: false,
    errorMessage: '',

    isLoading: false,
  },

  reducers: create => ({
    checkAuth: create.asyncThunk(
      async () => {
        const res = await AuthService.refresh();
        return res.data;
      },
      {
        pending: state => {
          (state.isLoading = true), (state.errorMessage = '');
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

    register: create.asyncThunk(
      async (payload, config) => {
        try {
          const res = await AuthService.register(payload.email, payload.password);
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
  }),
});

export const { checkAuth, login, logout, register } = authSlice.actions;

export default authSlice.reducer;
