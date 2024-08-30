import { ThemeToggle } from "../theme/theme-toggle/ThemeToggle"


const Header = () => {
    return (
        <header className='w-full h-[200px] bg-header flex flex-row justify-center'>
            <div className="flex flex-row items-center w-full max-w-[1280px] px-10 justify-between">
                <div className="flex flex-row items-center">
                    <h1 className='text-[40px] text-[#4EA8DE] font-black'>to</h1>
                    <h1 className='text-[40px] text-[#5E60CE] font-black'>do</h1>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header