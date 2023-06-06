import { useAppSelector } from "../../types/hooks";
import { RootState } from "../store";

const filterSelector = (state: RootState) => state.filter;

export const useFilterSelector = () => {
  return {
    filterContact: useAppSelector(filterSelector),
  };
};
