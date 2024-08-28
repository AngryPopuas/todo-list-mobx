import CreateTaskForm from './components/business/forms/create-task-form/CreateTaskForm'
import Header from './components/business/header/Header'
import TaskInfo from './components/business/task/task-info/TaskInfo'
import TaskList from './components/business/task/task-list/TaskList'


const App = () => {

  return (
    <>
      <Header />
      <div className='max-w-[1280px] h-[400px] mx-auto w-full flex flex-row gap-x-5 px-10 mt-5'>
        <div className='flex-1 overflow-y-scroll'>
          <CreateTaskForm />
          <TaskList />
        </div>
        <TaskInfo />
      </div>
    </>
  )
}

export default App
