import { Button } from '@/components/ui/button'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import React from 'react'

const RootElement = document.getElementById('modals')

const ModalsOverlay = ({ children, isOpen, handleClose }: { children: React.ReactNode, isOpen: boolean, handleClose: () => void }) => {
    return (
        createPortal(
            <>
                {isOpen &&
                    <>
                        <div className='bg-[#000000aa] flex justify-center items-center w-screen h-screen top-0 left-0 fixed z-50'>
                            <div className='min-w-[350px] flex flex-col relative p-[10px] bg-header border border-input rounded-md '>
                                <Button
                                    onClick={handleClose}
                                    variant={'outline'}
                                    className='self-end'
                                    size={'icon'}>
                                    <X/>
                                </Button>
                                {children}
                            </div>
                        </div>
                    </>
                }

            </>
            ,

            RootElement!
        )
    )
}

export default ModalsOverlay