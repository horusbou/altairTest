import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import {  Service } from "../interface";
import UserProfileWrapper from "./UserProfileWrapper";
import TableTitles from "../Componenets/TableTitles";
import { ServiceTitles } from "../utils";
import DataTables from "../Componenets/DataTables";

export default function Services(){
    const { selectedUser } = useAppContext();

    const services = selectedUser && selectedUser.service;
    return (
        <div className="relative px-4 py-4 h-full">
        <UserProfileWrapper>
            <div className="relative mt-2 py-8">
            <div className="h-[86%] mt-4">
                    <TableTitles titles={ServiceTitles} grids={ServiceTitles.length} />
                    {services && <DataTables infos={services}  grids={ServiceTitles.length} />}
                    {(!services ||services?.length === 0) && false && (
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                                Not Found
                            </span>
                            )}
                            {false && (
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-red-600">
                                {'error'}
                            </span>
                            )}
                </div>
            </div>
        </UserProfileWrapper>
        </div>
    )
}
