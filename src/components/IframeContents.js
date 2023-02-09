import React from 'react'

function IframeContents() {
    return (
        <>
            <div className='h-max flex gap-[20px]'>
                {/* iframes */}
                <div className='flex-1'></div>

                {/* right sides */}
                <div className='1x1:w-[32.6%] w-[32.4%] flex flex-col gap-[10px]'>
                    {/* box 1 */}
                    <div className='w-full h-max bg-white shadow rounded-[4px]'>
                        {/* head */}
                        <div className='rounded-[4px_4px_0_0] bg-[#F4F4F4] h-[30px] p-[18px_16px] flex items-center justify-center'>
                            <span className='1x1:text-[13px] text-[12px]'>Delight to Win</span>
                        </div>

                        {/* body contents */}
                        <div className='w-full h-[146px] grid grid-cols-2 1x1:gap-[20px] gap-[16px] p-[18px_16px]'>
                            {/* left sides */}
                            <div className='w-full h-full flex flex-col'>
                                <div className='flex gap-[12px]'>
                                    {/* icons */}
                                    <span className='h-[36px]'>
                                        <img src='/customerConcern.svg' className='w-full h-full object-contain' alt='images' />
                                    </span>

                                    <div className='text-start leading-[20px]'>
                                        <h6 className='capitalize text-[16px]'>Customer Concern</h6>
                                    </div>
                                </div>

                                {/* amounts */}

                                <div className='h-full flex items-center justify-center'>
                                    <span className='1x1:text-[28px] text-[24px] font-bold'>xxx</span>
                                </div>
                            </div>

                            {/* right sides */}
                            <div className='w-full h-full'>
                                {/* month target */}
                                <div className='w-full flex items-center gap-[5px]'>
                                    <span className='bg-[#DEDEDE] p-[2px_3px] rounded-[4px] 1x1:text-[16px] text-[14px] font-[600]'>200</span>
                                    <span className='1x1:text-[14px] text-[12px]'>Month Target</span>
                                </div>

                                {/* mtd rates */}
                                <div className='w-full pt-[20px]'>
                                    {/* mtd 1 */}
                                    <div className='w-full flex items-center gap-[8px]'>
                                        <span className='text-[#E3182D] 1x1:text-[16px] text-[14px]'>- 2.25%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IframeContents