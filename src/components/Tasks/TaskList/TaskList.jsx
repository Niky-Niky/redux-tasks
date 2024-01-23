import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { statusFilters } from "../../../redux/constants";
import css from "./TaskList.module.css";


export const TaskList = () => {
   const tasks = useSelector(state=>state.tasks)
   const filterStatus = useSelector(state=>state.filters.status) 

   const visibleTasks = tasks.filter((task)=>{
      switch (filterStatus) {
        case statusFilters.active:
          return !task.completed;
        case statusFilters.completed:
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
