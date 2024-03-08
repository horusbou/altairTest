import { BrandIcon, NotificationIcon } from "../Icon";
import SearchField from "./SearchField";

function NavBar() {
  return (
    <div className="bg-bgWhite py-4 px-12 font-poppins flex justify-between">
      <BrandIcon width={210} />

      <div className="flex space-x-2 items-center">
        <SearchField placeholder="Chercher" />
        <NotificationIcon
          width={22}
          color="white"
          className="stroke-logoBlack stroke-[2px]"
        />
      </div>
    </div>
  );
}

export default NavBar;
