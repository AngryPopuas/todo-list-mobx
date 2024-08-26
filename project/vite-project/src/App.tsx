import CreateTaskForm from './components/business/forms/create-task-form/CreateTaskForm'
import Header from './components/business/header/Header'


const App = () => {

  return (
    <>
      <Header />
      <div className='max-w-[750px] mx-auto w-full px-10 mt-5'>
        <CreateTaskForm />
      </div>
    </>
  )
}

export default App
