import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import sublinks from "./data";
import coffeeData from "./coffeeData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [coffees, setCoffees] = useState([]);
  const [searchTarget, setSearchTarget] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

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
      setCoffees(newCoffees);
    } else {
      setCoffees([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    const results = !searchTerm
      ? coffees
      : coffees.filter((coffee) =>
          coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    setCoffees(results);
  }, [searchTerm]);
  /*  */
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

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
        coffees,
        isSidebarOpen,
        location,
        page,
        searchTarget,
        searchTerm,
        setSearchTarget,
        setCoffees,
        setSearchTerm,
        openSidebar,
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
