import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import sublinks from "./data";
import coffeeData from "./coffeeData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [allCoffees, setAllCoffees] = useState([]);
  const [addedToBasket, setAddedToBasket] = useState([]);
  const [filterCoffees, setFilterCoffees] = useState([]);
  const [searchTarget, setSearchTarget] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchDrinks = () => {
    setLoading(true);
    if (coffeeData) {
      const newCoffees = coffeeData.map((item) => {
        const {
          id,
          categories,
          name,
          thumbnail_image,
          detail_image,
          description,
          price,
        } = item;
        return {
          id: id,
          category: categories,
          name: name,
          imgThum: thumbnail_image,
          imgDtl: detail_image,
          info: description,
          price: price,
        };
      });
      setAllCoffees(newCoffees);
    } else {
      setAllCoffees([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        allCoffees,
        isSidebarOpen,
        searchTarget,
        searchTerm,
        filterCoffees,
        addedToBasket,
        setFilterCoffees,
        setSearchTarget,
        setSearchTerm,
        openSidebar,
        setAddedToBasket,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
