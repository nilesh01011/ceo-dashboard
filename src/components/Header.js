import React from 'react'

function Header() {
    return (
        <>
            <div className='py-[12px] flex items-center'>
                {/* left logo */}
                <div className='w-[200px] border-r-[1px] border-[#C1C1C1]'>
                    <div className='flex items-center justify-center'>
                        <img src='/mahindrarise_logo.svg' className='h-[36px]' alt='logo-images' />
                    </div>
                </div>

                {/* right */}
                <div className='flex-1 px-[22px]'>
                    <h2 className='text-[18px] font-[700] uppercase'>Nilesh</h2>
                </div>
            </div>
        </>
    )
}

export default Header