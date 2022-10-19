import { SIZES } from "../constants";
import { FilterButtons } from "./FilterButtons";

export const TodoFilter = () => {


  return (
    <div
      className="bg-light-very-gray sm:hidden rounded-md px-5 flex space-x-4 mt-7 items-center justify-center dark:bg-dark-very-desaturated-blue"
      style={{ paddingTop: SIZES.paddingVertical, paddingBottom: SIZES.paddingVertical }}
    >
      <FilterButtons />
    </div>
  );
};

