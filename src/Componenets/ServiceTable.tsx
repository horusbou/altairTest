import React, { useState } from "react";
import { BlockIcon, EditIcon2, EyeIcon } from "../Icon";
import CustomRow from "./CustomRow";
import {  Customer, Service } from "../interface";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context";
import { ActionButton } from "./ActionButton";


export function ServiceTable({info}:{info: Service}) {
    const [seeEdit,setSeeEdit] = useState(false)
    const push = useNavigate();
    const {selectedUser,setSelectedUser,setCustomersData,customersData} = useAppContext()


    function handleDeleteItem(): void {
        if (selectedUser) {
            const updatedServices = selectedUser.service.filter(service => service.id !== info.id);
            const updatedUser = { ...selectedUser, service: updatedServices };
            setSelectedUser(updatedUser);

            if (customersData) {
                const updatedCustomers = customersData.map(customer => {
                    if (customer.id === selectedUser.id) {
                        return updatedUser;
                    }
                    return customer;
                });
                setCustomersData(updatedCustomers);
            }
        }
    }


    return (
        <>
        <CustomRow
        description={info.code.toString()}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

<CustomRow
        description={info.desc}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

    <CustomRow
        description={info.date.toLocaleDateString()}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />
<CustomRow
        description={`$${info.cost.toString()}`}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

    <ActionButton  handleDelete={handleDeleteItem}/>
        </>
    )
}
