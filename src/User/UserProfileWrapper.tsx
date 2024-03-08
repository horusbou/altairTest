import { ReactNode, useEffect, useState } from "react";
import CustomHeader from "../Componenets/CustomHeader";
import CustomRow from "../Componenets/CustomRow";
import { PaperIcon, UserIcon } from "../Icon";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Customer } from "../interface";
import useFetch from "../hooks/useFetch";
import { useAppContext } from "../Context";

export default function UserProfileWrapper({ children }: { children: ReactNode }) {
    const { userId } = useParams();
    const {selectedUser} = useAppContext()
    const push = useNavigate()

    const pathname = window.location.pathname;


    return (
      <>
        <CustomHeader title="Client"
          arrowIcon
          editIcon1
          blockIcon
          selectedUser={`${selectedUser?.firstName} ${selectedUser?.lastName} - ${userId}`}
        />
        <div className="mt-4 flex snap-x h-10 pr-2 items-start pt-[0.5px] overflow-x-auto customSrollBar">
          <CustomRow
            listener={() => push(`/users/${userId}`)}
            description="Personal Infos"
            textStyle="text-[13px] text-logoBlack font-semibold"
            containerStyle={`snap-start scroll-ml-2 ml-4 bg-bgGray w-fit h-fit cursor-pointer shrink-0 rounded-full px-3 py-1.5
            space-x-2 ${pathname===`/users/${selectedUser?.id}`
                ? "outline outline-1 outline-logoGreen"
                : "duration-200 ease-in hover:outline hover:outline-1 hover:outline-logoGreen"
              }`}
          >
            <UserIcon
              width={22}
              className="stroke-logoBlack font-medium fill-bgGray stroke-2"
            />
          </CustomRow>

          <CustomRow
            listener={() => push(`/users/${userId}/services`)}
            description="Services"
            textStyle="text-[13px] text-logoBlack font-semibold"
            containerStyle={`snap-start scroll-mx-2 ml-4 bg-bgGray w-fit h-fit cursor-pointer shrink-0 rounded-full px-3 py-1.5 space-x-2
              ${pathname===`/users/${selectedUser?.id}/services`
                ? "outline outline-1 outline-logoGreen"
                : "duration-200 ease-in hover:outline hover:outline-1 hover:outline-logoGreen"
              }`}
          >
            <PaperIcon
              width={22}
              className="stroke-logoBlack font-medium fill-bgGray stroke-2"
            />
          </CustomRow>
        </div>
        {children}
      </>
    )
  }
