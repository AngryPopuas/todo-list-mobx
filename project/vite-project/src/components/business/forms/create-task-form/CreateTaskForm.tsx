import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const CreateTaskForm = () => {

    const handleCreateTask = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault()


    }
    return (
        <form onClick={(e) => {handleCreateTask(e)}} className="flex flex-row gap-x-5">
            <Input placeholder="Enter task title"/>
            <Button>Create</Button>
        </form>
    )
}

export default CreateTaskForm