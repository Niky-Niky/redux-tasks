import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import {visibleTasks} from '../../../redux/selectors'
import { selectTasks } from "../../../redux/selectors";
import { selectFiltersStatus } from "../../../redux/selectors";
import { useEffect } from "react";
import { fetchTask } from "../../../redux/operations";


export const TaskList = () => {
   const dispatch = useDispatch()
  
  const tasks = useSelector(visibleTasks)

  useEffect(() => {
    dispatch(fetchTask())
  }, [dispatch])


  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
