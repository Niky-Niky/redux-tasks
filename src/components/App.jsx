import { Layout } from "./Tasks/Layout/Layout";
import { AppBar } from "./Tasks/AppBar/AppBar";
import { TaskForm } from "./Tasks/TaskForm/TaskForm";
import { TaskList } from "./Tasks/TaskList/TaskList";

export const App = () => {
  return (    
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
