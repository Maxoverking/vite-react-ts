import { TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../redux/filter/filterSlice";
import { useFilterSelector } from "../../redux/filter/filterSelector";

const FilterUser: FC = () => {
  const dispatch = useDispatch();
  const { filterContact } = useFilterSelector();
  const [filters, setFilter] = useState("");

  console.log("🚀  filterContact:", filterContact);

  const filterContacts = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(filterAction(value.trim()));
    setFilter(value.trim());
  };

  return (
    <TextField
      label="Filter contact"
      variant="standard"
      name="filter"
      value={filters}
      onChange={filterContacts}
      size="small"
    />
  );
};

export default FilterUser;
