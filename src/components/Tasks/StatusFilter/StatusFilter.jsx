import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../../redux/slices";

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state=>state.filters)
  const handelChange=(filter)=>dispatch(setStatusFilter(filter))
  return (
    <div className={css.wrapper}>
      <Button onClick = {()=>handelChange(statusFilters.all)} selected={filter===statusFilters.all}>All</Button>
      <Button onClick = {()=>handelChange(statusFilters.acyive)} selected={filter===statusFilters.active}>Active</Button>
      <Button onClick = {()=>handelChange(statusFilters.completed)} selected={filter===statusFilters.completed}>Completed</Button>
    </div>
  );
};
