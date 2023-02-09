import React from 'react'

function Loading() {
    return (
        <>
            <div className='h-screen w-full overflow-hidden bg-[#E5E5E5]'>
                <div className='flex flex-col h-full justify-between relative'>
                    {/* logo images */}
                    <div className='absolute right-[25px] top-[25px] flex items-center justify-center'>
                        <img src='./ADC_LOGO.svg' className='h-[60px] lg:mx-none mx-auto' alt='logo-images' />
                    </div>

                    {/* loading animations */}
                    <div className='w-full h-full flex items-center flex-col justify-center'>
                        {/* mahindra rise logo */}
                        <div className='flex items-center justify-center'>
                            <img src='./mahindrarise_logo.svg' className='h-[60px]' alt='logo-images' />
                        </div>
                        {/* line animations svg */}
                        {/* <span className='w-[300px] h-[1px] animate-[scaling_2s_ease-out]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="319" height="3" viewBox="0 0 319 3" fill="black">
                                <line opacity="0.5" y1="1.5" x2="319" y2="1.5" stroke="url(#paint0_radial_625_2022)" strokeWidth="3" />
                                <defs>
                                    <radialGradient id="paint0_radial_625_2022" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(153.324 9.352) scale(134.763 2921.3)">
                                        <stop stop-color="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading