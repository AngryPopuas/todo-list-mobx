import CreateTaskForm from './components/business/forms/create-task-form/CreateTaskForm'
import Header from './components/business/header/Header'
import TaskList from './components/business/task/task-list/TaskList'


const App = () => {

  return (
    <>
      <Header />
      <div className='max-w-[750px] mx-auto w-full px-10 mt-5'>
        <CreateTaskForm />
        <TaskList />
      </div>
    </>
  )
}

export default App
