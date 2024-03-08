import React, { useState } from "react";
import { BlockIcon, EditIcon2, EyeIcon } from "../Icon";
import CustomRow from "./CustomRow";
import { Customer } from "../interface";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "./ActionButton";


export function UsersTable({info}:{info: Customer}) {
    const [seeEdit,setSeeEdit] = useState(false)
    const push = useNavigate();


    function handleShowModal(): void {
        push(`/users/${info.id}`);
    }

    return (
        <>
        <CustomRow
        description={info.firstName}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

<CustomRow
        description={info.lastName}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

    <CustomRow
        description={"#"}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />
<CustomRow
        description={info.service.length.toString()}
        containerStyle="space-x-2"
        textStyle="capitalize"
      />

      <ActionButton handleShow={handleShowModal} />
    </>
    )
}
