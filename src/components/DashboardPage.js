import React, { useState } from 'react'
import Header from './Header'
import PowerBi from './PowerBi'
// import IframeContents from './IframeContents'
// import SelectBox from './SelectBox'
import Sidebar from './Sidebar'

function DashboardPage() {
    // const [activeTimesLine, setActiveTimesLine] = useState(1)

    // const timesline = [
    //     {
    //         id: 1,
    //         name: 'MTD'
    //     },
    //     {
    //         id: 2,
    //         name: 'PM'
    //     },
    //     {
    //         id: 3,
    //         name: 'QTD'
    //     },
    //     {
    //         id: 4,
    //         name: 'YTD'
    //     }
    // ]

    // // selectbox

    // const itemsContents = [
    //     {
    //         id: 1,
    //         name: 'model 1'
    //     },
    //     {
    //         id: 1,
    //         name: 'model 2'
    //     },
    //     {
    //         id: 1,
    //         name: 'model 3'
    //     },
    //     {
    //         id: 1,
    //         name: 'model 4'
    //     }
    // ]

    // // finances and more buttons

    // const buttonsContents = [
    //     {
    //         id: 1,
    //         name: 'Finance'
    //     },
    //     {
    //         id: 2,
    //         name: 'Business'
    //     },
    //     {
    //         id: 3,
    //         name: 'Functional'
    //     }
    // ]

    return (
        <>
            <div className='w-full h-full'>
                {/* headers */}
                <div className='h-[60px] w-full bg-white shadow-sm border-b-[1px] border-[#DEDEDE]'>
                    <Header />
                </div>

                {/* contents */}
                <div className='flex'>
                    {/* sidebar */}
                    <div className='w-[200px] h-screen bg-white shadow-sm'>
                        <Sidebar />
                    </div>
                    {/* main contents */}
                    <div className='h-max flex-1 p-[10px_16px]'>
                        <PowerBi />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage