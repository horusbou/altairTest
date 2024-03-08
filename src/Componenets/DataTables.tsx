import { useState } from "react";
import CustomRow from "./CustomRow";
import { Customer, Service } from "../interface";
import { BlockIcon, EditIcon2, EyeIcon } from "../Icon";
import { UsersTable } from "./UsersTable";
import { useLocation } from "react-router-dom";
import { ServiceTable } from "./ServiceTable";

function DataTables({ infos,grids}: { infos: Customer[]|Service[],grids:number }) {
    const location = useLocation();
    const pathname = location.pathname;


  return (
    <div className="bg-bgGray w-full h-fit rounded-xl">
        {infos.map((info,id)=>(
            <div
            key={id}
            className={`grid items-center justify-items-start py-3 mx-3 ${id !== infos.length - 1 && "border-b border-logoBlack"
              } font-medium text-[13px] text-logoBlack`}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${grids},minmax(0,1fr))`,
            }}
          >

            {pathname==='/'&& <UsersTable info={info as Customer} />}
            {pathname.includes('/services')&& <ServiceTable info={info as Service}/>}


     </div>
        ))}



    </div>
  );
}

export default DataTables;
