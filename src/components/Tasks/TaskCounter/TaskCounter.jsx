import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";
import { count } from "../../../redux/selectors";

export const TaskCounter = () => {

  const task = useSelector(count)

  return (
    <div>
      <p className={css.text}>Active:{task.active}</p>
      <p className={css.text}>Completed:{task.completed}</p>
    </div>
  );
};
