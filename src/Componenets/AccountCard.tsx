import React from "react";
import {
    UserMinusIcon,
    UsersArchiveIcon,
    UsersBlockIcon,
    UsersIcon,
  } from "../Icon";

  type UserType = 'all' | 'pending' | 'blocked' | 'archive';


  interface Props {
    info: {
      type: UserType;
      num: number;
      title: string;
      titles?: string[];
    };
    chooseAccounts: UserType;
    setChooseAccounts: (e: UserType) => void
  }

  function AccountCard({ info, chooseAccounts, setChooseAccounts }: Props) {
    return (
      <div
        onClick={() => setChooseAccounts(info.type)}
        className={`flex cursor-pointer border duration-75 ease-in space-x-3 bg-bgGray px-4 py-3 w-52 rounded-2xl
        ${info.type === chooseAccounts
            ? "border-logoGreen"
            : "border-bgGray hover:border-logoGreen"
          }`}
      >
        {info.type === "all" ? (
          <UsersIcon
            width={35}
            className="fill-bgGray shrink-0 stroke-logoBlack stroke-1 self-end"
          />
        ) : info.type === "pending" ? (
          <UserMinusIcon
            width={35}
            className="fill-bgGray shrink-0 stroke-logoBlack stroke-1 self-end"
          />
        ) : info.type === "blocked" ? (
          <UsersBlockIcon
            width={35}
            className="fill-bgGray shrink-0 stroke-logoBlack stroke-1 self-end"
          />
        ) : (
          <UsersArchiveIcon
            width={35}
            className="fill-bgGray shrink-0 stroke-logoBlack stroke-1 self-end"
          />
        )}

        <div className="text-logoBlack shrink-0">
          <h3 className="font-semibold">{info.num}</h3>
          <p className="text-xs font-medium">{info.title}</p>
        </div>
      </div>
    );
  }

  export default AccountCard;
