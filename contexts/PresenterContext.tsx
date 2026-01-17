
import React, { createContext, useContext } from 'react';
import { AppPresenter } from '../presenters/AppPresenter';

const PresenterContext = createContext<AppPresenter | null>(null);

export const PresenterProvider: React.FC<{ presenter: AppPresenter; children: React.ReactNode }> = ({ presenter, children }) => {
  return (
    <PresenterContext.Provider value={presenter}>
      {children}
    </PresenterContext.Provider>
  );
};

export const usePresenter = () => {
  const context = useContext(PresenterContext);
  if (!context) {
    throw new Error('usePresenter must be used within a PresenterProvider');
  }
  return context;
};
