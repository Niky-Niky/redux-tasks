import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { statusFilters } from "../../../redux/constants";
import css from "./TaskList.module.css";
import { getTasks } from "../../../redux/selectors";
import { getFiltersStatus } from "../../../redux/selectors";


export const TaskList = () => {
   const tasks = useSelector(getTasks)
   const filterStatus = useSelector(getFiltersStatus) 

   const visibleTasks = tasks.filter((task)=>{
      switch (filterStatus) {
        case statusFilters.active:
          console.log(!task.completed)
          return !task.completed;
        case statusFilters.completed:
          console.log(task.completed)
            return task.completed;
        default:
          return task;
      }
})
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
