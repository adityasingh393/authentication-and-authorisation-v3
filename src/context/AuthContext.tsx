import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { useLocalForage } from '../hooks/useLocalForage';
import { User } from '../types/User';

type AuthState = {
  users: User[];
  currentUser: User | null;
};

type AuthAction =
  | { type: 'REGISTER'; payload: User }
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_USERS'; payload: User[] };

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: { users: [], currentUser: null },
  dispatch: () => null,
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'REGISTER':
      return { ...state, users: [...state.users, action.payload] };
    case 'LOGIN':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT':
      return { ...state, currentUser: null };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useLocalForage<User[]>('users', []);
  const [state, dispatch] = useReducer(authReducer, {
    users: [],
    currentUser: null,
  });

  React.useEffect(() => {
    dispatch({ type: 'SET_USERS', payload: users });
  }, [users]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
