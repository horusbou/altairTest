import { useState } from "react";
import { BlockIcon, EditIcon2, EyeIcon } from "../Icon";
import CustomRow from "./CustomRow";
interface Props{
    handleShow:()=>void;
    handleDelete:()=>void;
    handleUpdate:()=>void;
}
export const ActionButton = ({handleShow,handleDelete,handleUpdate}:Partial<Props>)=>{
    const [seeEdit,setSeeEdit] = useState(false)

    return (
        <div
        onClick={() => setSeeEdit(!seeEdit)}
        className="relative w-11/12 cursor-pointer text-sm duration-100 ease-out hover:text-logoGreen -translate-y-1 flex flex-col leading-[10px] items-end justify-start"
      >
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <div
          className={`absolute w-fit rounded-md h-fit bg-white top-0 right-4 duration-100 ease-in ${seeEdit ? "opacity-100" : "invisible opacity-0"
            }`}
        >
          <CustomRow
            description="Show"
            textStyle="text-[10px]"
            containerStyle="group text-fontColor hover:text-logoGreen px-2 my-1 space-x-1"
            listener={handleShow}
          >
            <EyeIcon
              width={14}
              className="group-hover:stroke-logoGreen stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
          <CustomRow
            description="Update"
            textStyle="text-[10px]"
            containerStyle="group text-fontColor hover:text-logoGreen px-2 my-1 space-x-1"
            listener={handleUpdate}
          >
            <EditIcon2
              width={14}
              className="group-hover:stroke-logoGreen stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
          <CustomRow
            description="Delete"
            textStyle="text-[10px]"
            containerStyle="group text-fontColor hover:text-logoGreen px-2 my-1 space-x-1"
            listener={handleDelete}
          >
            <BlockIcon
              width={14}
              className="group-hover:stroke-logoGreen stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
          <span className="absolute -right-[12px] top-1/2 -translate-y-1/2 inline-block border-[6px] border-transparent border-l-white" />
          </div>
          </div>
    )
}
