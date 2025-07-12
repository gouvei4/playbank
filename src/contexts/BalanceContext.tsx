import React, { createContext, useContext, useState, ReactNode } from 'react';

type BalanceContextType = {
  balance: string;
  showBalance: boolean;
  setBalance: (value: string) => void;
  toggleBalance: () => void;
};

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState('100.000,00');
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => setShowBalance((prev) => !prev);

  return (
    <BalanceContext.Provider
      value={{ balance, showBalance, setBalance, toggleBalance }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance deve ser usado dentro do BalanceProvider');
  }
  return context;
};
