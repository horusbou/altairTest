import { useEffect, useState } from "react";
import { SearchIcon } from "../Icon";
import { Customer } from "../interface";
import { useAppContext } from "../Context";

function SearchField({ placeholder }:{placeholder:string}) {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const {customersData,setFilteredCustomers,setSearchedQuery} = useAppContext()
    const [searchResults, setSearchResults] = useState<Customer[]>();
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setSearchedQuery(searchQuery);
      };

      const filterCustomers = () => {
        if(!customersData)
            return [];
        return customersData.filter(customer => {
          const customerAttributes = Object.values(customer).join(' ').toLowerCase();
          if (customerAttributes.includes(searchQuery.toLowerCase())) {
            return true;
          }

          for (const service of customer.service) {
            const serviceAttributes = Object.values(service).join(' ').toLowerCase();
            if (serviceAttributes.includes(searchQuery.toLowerCase())) {
              return true;
            }
          }

          return false;
        });
      };
useEffect(()=>{
    setFilteredCustomers(filterCustomers());
},[searchQuery])

  return (
    <div className="flex space-x-4 bg-bgGray px-4 py-1 rounded-full">
      <input type="text" placeholder={placeholder} className="bg-bgGray text-sm outline-none" onChange={handleSearchChange} />
      <SearchIcon width={22} color="#F1F1F1" className="stroke-fontColor stroke-[2px] placeholder:text-fontColor" />
    </div>
  );
}

export default SearchField;
