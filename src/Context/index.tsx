import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Customer } from "../interface";
import useFetch from "../hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";


const AppContext = createContext<AppContext>({} as AppContext);


interface AppContext {
    selectedUser: Customer | undefined;
    setSelectedUser: React.Dispatch<React.SetStateAction<Customer | undefined>>
    customersData:Customer[] | undefined;
    setCustomersData:React.Dispatch<React.SetStateAction<Customer[] | undefined>>
    isLoading:boolean;
    searchedQuery:string|undefined;
    setSearchedQuery:React.Dispatch<React.SetStateAction<string | undefined>>
    filteredCustomers:Customer[] | undefined;
    setFilteredCustomers:React.Dispatch<React.SetStateAction<Customer[] | undefined>>;
  }

  export const useAppContext = ()=>{
    const context = useContext(AppContext);
    if (!context)
      throw new Error("useUserContext must be used inside an UserContextProvider")

    return context;
  }

export function AppContextProvider({children }: { children: ReactNode }) {
    const [selectedUser, setSelectedUser] = useState<Customer>();
    const [customersData, setCustomersData] = useState<Customer[]>();
    const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>();
    const [searchedQuery, setSearchedQuery] = useState<string>();
    const { pathname } = useLocation();

    const { data: customers,isLoading,error} = useFetch<Customer[]>();

    useEffect(()=>{
        if(customers && customers.length>0 && !isLoading)
            setCustomersData(customers);
    },[customers])

    useEffect(() => {
        if (pathname.split("/").length <= 2 || !pathname.includes("users")) return;
        const user = customersData && customersData.find(el => el.id.toString() === pathname.split("/")[2]);
        if (user) {
            setSelectedUser(user);
        } else {
            console.log("User not found with ID:", pathname.split("/")[2]);
        }
    }, [pathname]);

    return (
      <AppContext.Provider value={{ selectedUser, setSelectedUser,customersData,setCustomersData,isLoading,filteredCustomers,setFilteredCustomers,searchedQuery, setSearchedQuery }}>
        {children}
      </AppContext.Provider>
    );
  }
