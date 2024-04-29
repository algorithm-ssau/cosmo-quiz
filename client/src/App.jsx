import { useDispatch, useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { checkAuth } from './store/slices/authSlice';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Private from './routes/Private';
import Public from './routes/Public';

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const isAuthLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <HelmetProvider>
      {isAuthLoading ? (
        <div></div>
      ) : (
        <>
          {isAuth ? (
            <Routes>
              <Route element={<Layout />}>
                {Private.map(elem => (
                  <Route key={elem.path} path={elem.path} Component={elem.component} />
                ))}
                <Route path='*' element={<Navigate to='/' replace={true} />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              {Public.map(elem => (
                <Route key={elem.path} path={elem.path} Component={elem.component} />
              ))}
              <Route path='*' element={<Navigate to='/login' replace={true} />} />
            </Routes>
          )}
        </>
      )}
    </HelmetProvider>
  );
}
