import { TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { filterAction } from "../../redux/filter/filterSlice";

const FilterUser: FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const filterContacts = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(filterAction(value.trim()));
    setFilter(value.trim());
  };

  return (
    <TextField
      label="Filter contact by name"
      variant="standard"
      name="filter"
      value={filter}
      onChange={filterContacts}
      size="small"
    />
  );
};

export default FilterUser;
