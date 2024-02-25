import { App } from "components/App";
import { TaskList } from "components/TaskList/TaskList"
import { Home, Login, Registration } from 'pages';
import { createBrowserRouter } from "react-router-dom"

// /
// / tasks
// /login
// /register

export const tasksRouter = createBrowserRouter([
{
path: '/',
element: <App />,
children: [
{
index: true,
element: <Home/>
},
{
path: '/tasks',
element: <TaskList/>
},
{
path: '/login',
element: <Login/>
},
{
path: '/register',
element: <Registration/>
}
]
}
])

