import Addtask from "./components/Add"
import TaskList from "./components/TaskList"

function App() {
  

  return (
    <>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Addtask></Addtask>
      <TaskList></TaskList>
    </div>  
    </>
  )
}

export default App
