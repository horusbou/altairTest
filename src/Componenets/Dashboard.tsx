import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../Context";
import CustomRow from "./CustomRow";
import { DashboardIcon } from "../Icon";

export function Dashboard() {
    const { pathname } = useLocation();
    const { selectedUser, } = useAppContext();

    return (
        <div className="col-span-3 pt-6 pb-4 flex flex-col justify-between bg-white rounded-md">
            <div>
            <Link to="/">
                    <CustomRow
                        description="Dashboard"
                        containerStyle={`group space-x-3 duration-100 ease-out border-sideMenuGreen px-6 mb-4 ${pathname === "/" ? "border-l-2" : "hover:border-l-2"
                        }`}
                        textStyle={`text-[13px] duration-200 ease-out ${pathname === "/"
                        ? "text-sideMenuGreen"
                        : "text-logoBlack group-hover:text-sideMenuGreen"
                        }`}
                    >
                    <DashboardIcon
                    width={28}
                    color="black"
                    className={`group stroke-2 duration-200 ease-out ${pathname === "/"
                        ? "stroke-sideMenuGreen"
                        : "stroke-logoBlack group-hover:stroke-sideMenuGreen"
                        }`}
                    />
                </CustomRow>
            </Link>

            </div>
        </div>
    )

}
