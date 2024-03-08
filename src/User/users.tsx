import React from "react"
import CustomHeader from "../Componenets/CustomHeader"
// import DataTables from "../Componenets/DataTables"
import TableTitles from "../Componenets/TableTitles"
import { tableTitles } from "../utils"
import { Customer } from "../interface"
import useFetch from "../hooks/useFetch"
import DataTables from "../Componenets/DataTables"
import { useAppContext } from "../Context"
import SearchField from "../Componenets/SearchField"

export const Users = ()=>{
    const {customersData:customers,isLoading,filteredCustomers,searchedQuery} = useAppContext()

    return (
        <div className="relative px-4 py-4 h-full">
            <CustomHeader title="Customers"/>
                <div className="h-[86%] mt-4">
                    <TableTitles titles={tableTitles} grids={tableTitles.length} />
                    {searchedQuery?.length? null: customers && <DataTables infos={customers}  grids={tableTitles.length} />}
                    {!searchedQuery?.length ? null: filteredCustomers &&  <DataTables infos={filteredCustomers}  grids={tableTitles.length} />}
                    {(!customers || customers?.length === 0) && !isLoading && (
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                                Not Found
                            </span>
                            )}
                </div>
          </div>
    )
}
