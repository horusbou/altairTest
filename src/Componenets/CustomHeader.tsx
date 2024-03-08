import React from "react";
import CustomRow from "./CustomRow";
import { useNavigate } from "react-router-dom";

import {
  ArchiveIcon,
  BackArrowIcon,
  BlockIcon,
  DropIcon,
  EditIcon,
  EditIcon2,
} from "../Icon";
interface Props {
  title: string;
  arrowIcon: boolean;
  editIcon: boolean;
  editIcon1: boolean;
  archiveIcon: boolean;
  blockIcon: boolean;
  selectedUser: any;
  createListener: () => void;
  importIcon: boolean;
  importListener: () => void;
}

function CustomHeader({
  title,
  arrowIcon,
  editIcon,
  editIcon1,
  archiveIcon,
  blockIcon,
  selectedUser,
  createListener,
  importIcon,
  importListener,
}: Partial<Props>) {
  const push = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {arrowIcon && (
          <BackArrowIcon
            listener={() => push("/")}
            width={28}
            className="fill-white cursor-pointer stroke-logoBlack duration-100 ease-in hover:stroke-logoGreen stroke-2"
          />
        )}
        <h1 className="ml-4 mr-1 text-logoBlack shrink-0 capitalize font-medium">
          {title}
        </h1>

        {selectedUser && (
          <>
            <DropIcon
              width={15}
              className="fill-white stroke-logoBlack stroke-[4px] -rotate-90"
            />

            <span className="text-sm font-semibold text-logoBlack">
              # {selectedUser}
            </span>
          </>
        )}
      </div>
      <div className="shrink-0 flex items-center space-x-2">
        {importIcon && (
          <CustomRow
            listener={importListener}
            description="Import"
            textStyle="text-xs text-fontColor duration-200 ease-in group-hover:text-logoGreen"
            containerStyle="group cursor-pointer bg-bgGray duration-200 ease-in hover:bg-white rounded-full px-2 py-1 space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width={18}
              className="duration-200 ease-in group-hover:stroke-logoGreen stroke-fontColor stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </CustomRow>
        )}
        {editIcon && (
          <CustomRow
            listener={createListener}
            description="Create"
            textStyle="text-xs text-fontColor duration-200 ease-in group-hover:text-logoGreen"
            containerStyle="group cursor-pointer bg-bgGray duration-200 ease-in hover:bg-white rounded-full px-2 py-1 space-x-1"
          >
            <EditIcon
              width={18}
              className="duration-200 ease-in group-hover:stroke-logoGreen stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
        )}
        {editIcon1 && (
          <CustomRow
            description="Update"
            textStyle="text-xs text-fontColor"
            containerStyle="bg-bgGray rounded-full px-2 py-1 space-x-1"
          >
            <EditIcon2
              width={18}
              className="stroke-fontColor fill-bgGray stroke-2"

            />
          </CustomRow>
        )}
        {archiveIcon && (
          <CustomRow
            description="Save"
            textStyle="text-xs text-fontColor"
            containerStyle="bg-bgGray rounded-full px-2 py-1 space-x-1"
          >
            <ArchiveIcon
              width={18}
              className="stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
        )}
        {blockIcon && (
          <CustomRow
            description="Blocked"
            textStyle="text-xs text-fontColor"
            containerStyle="bg-bgGray rounded-full px-2 py-1 space-x-1"
          >
            <BlockIcon
              width={18}
              className="stroke-fontColor fill-bgGray stroke-2"
            />
          </CustomRow>
        )}
      </div>
    </div>
  );
}

export default CustomHeader;
