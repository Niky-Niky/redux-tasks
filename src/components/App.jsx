import { useSelector } from "react-redux"
import { Layout } from "../components/Layout/Layout"
import { AppBar } from "./AppBar/AppBar"
import { TaskForm } from "./TaskForm/TaskForm"
import { TaskList } from "./TaskList/TaskList"

export const App = () => {
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks)
  
  return(
    <>
      <Layout>
        <AppBar/>
        <TaskForm/>
        <TaskList/>
      </Layout>
    </>
  )
}