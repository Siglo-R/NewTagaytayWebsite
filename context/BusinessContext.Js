import { createContext, useContext, useState } from 'react';

const BusinessContext = createContext({
  selectedBusiness: null,
  setSelectedBusiness: () => {},
});

const BusinessContextProvider = ({ children }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <BusinessContext.Provider value={{ selectedBusiness, setSelectedBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

const useBusinessContext = () => {
  return useContext(BusinessContext);
};

export { BusinessContextProvider, useBusinessContext };