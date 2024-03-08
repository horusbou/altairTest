import React, { useEffect, useState } from "react"
import UserProfileWrapper from "./UserProfileWrapper"
import { BioIcon, DateIcon, EditIcon2, GenderIcon, MailIcon, PhoneIcon, UserIcon, UserNameIcon } from "../Icon"
import CustomRow from "../Componenets/CustomRow"
import { useParams } from "react-router-dom"
import { Customer } from "../interface"
import { useAppContext } from "../Context"

export const PersonalInfos  = ()=>{
    const {selectedUser} = useAppContext();

    return (
        <div className="relative px-4 py-4 h-full">
    <UserProfileWrapper>
        <div className="relative mt-2 py-8">
        <CustomRow
          description={"Customer"}
          textStyle="text-sm text-logoBlack font-medium"
          containerStyle="relative space-x-4"
        >
          <img src="/avatar.png" alt="avaatar" width={100} height={100} />
        </CustomRow>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="w-full">
            <div className="grid grid-cols-2 gap-6 items-center font-medium">
              <CustomRow
                description="Full Name"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <UserNameIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor capitalize text-xs">
                {selectedUser?.firstName} {selectedUser?.lastName}
              </span>


              <CustomRow
                description="Phone Number"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <PhoneIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor text-xs">
                -
              </span>

              <CustomRow
                description="E-mail"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <MailIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor text-xs">
                -
              </span>


              <CustomRow
                description="Make"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <GenderIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor capitalize text-xs">
                {selectedUser?.make}
              </span>

              <CustomRow
                description="Model"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <DateIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor text-xs">
                {selectedUser?.model}
              </span>

            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 items-start gap-y-6 font-medium">
              <CustomRow
                description="Year"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <BioIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor text-xs -ml-4 w-[90%] place-self-start">
                {selectedUser?.year}
              </span>

              <CustomRow
                description="Member since"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <UserIcon
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <span className="text-fontColor capitalize text-xs self-center -ml-4">
                -
              </span>

              <CustomRow
                description="comment"
                textStyle="text-xs w-fit text-logoBlack font-semibold"
                containerStyle="relative space-x-4"
              >
                <EditIcon2
                  width={22}
                  className="stroke-logoBlack shrink-0 font-medium fill-white stroke-2"
                />
              </CustomRow>
              <textarea
                placeholder="Ajouter un commentaire ou une note sur ce utilisteur"
                className="col-span-2 -mt-2  bg-bgGray text-logoBlack text-xs p-4 rounded-lg resize-none outline-logoGreen"
              />
              <button className="bg-logoGreen duration-200 ease-in hover:bg-logoGreen/80 text-white text-sm capitalize py-4 -mt-2 w-4/5 rounded-lg">
                ajouter
              </button>


            </div>
          </div>

      </div>
      </div>
    </UserProfileWrapper>
    </div>
    )
}
