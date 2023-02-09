import React, { useEffect, useRef, useState } from 'react';

let useClickOutSide = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        const handlerEvent = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handlerEvent);

        return () => {
            document.removeEventListener("mousedown", handlerEvent)
        }
    }, [handler]);

    return domNode
}

function SelectBox({ items, theme, placeholder, mandatory }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedText, setSelectedText] = useState('');
    const [selected, setSelected] = useState('');

    const selectBoxText = (ele) => {
        setSelected(ele.target.innerHTML);
        setIsOpen(!isOpen);
    }

    let domNode = useClickOutSide(() => {
        setIsOpen(false)
    })

    return (
        <>
            <div className="flex justify-center">
                <div ref={domNode} className={`w-full h-[32px] rounded-[4px] text-[#635D5D] flex flex-col items-center bg-white`}>
                    {/* select fields */}
                    <div onClick={() => setIsOpen(!isOpen)} className='w-full py-[6px] px-[10px] h-full flex items-center justify-between cursor-pointer'>
                        {/* <input placeholder={placeholder} className="appearance-none" /> */}
                        {/* <select>

                        </select> */}
                        <p className={`select-none text-[#706E6B] capitalize text-[13px]`}>
                            {selected ? selected : mandatory ? mandatory + placeholder : placeholder}
                        </p>

                        {/* icons */}
                        <div className={`h-[14px] flex items-center ${isOpen && "rotate-180 transition-all"} transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.841202 0.307678H11.1743C11.4662 0.307678 11.6706 0.707678 11.4371 0.984601L6.38724 7.50768C6.2121 7.75383 5.83264 7.75383 5.6575 7.50768L0.549305 0.984601C0.344977 0.707678 0.520116 0.307678 0.841202 0.307678Z" fill="#706E6B" />
                            </svg>
                        </div>
                    </div>

                    {/* all lists items */}
                    {
                        isOpen && (
                            <ul className={`z-20 divide-y-[1px] border-[1px] bg-[#F4F4F4] border-[#DEDEDE] divide-[#DEDEDE] ${isOpen ? 'opacity-1 duration-[1500ms]' : 'opacity-0 duration-[1500ms]'} relative w-full left-0 right-0 md:-bottom-[10%] bottom-2 rounded-[4px] transition-all`}>
                                {items.map((ele, id) => {
                                    const lastArray = items.length - 1;

                                    return (
                                        <li key={id} onClick={selectBoxText} className={`text-[13px] hover:bg-white text-[#0B0B0C] ${lastArray + 1 === ele.id && 'rounded-[0_0_10px_10px]'} box-border px-4 pt-[4px] pb-[6px] cursor-pointer`}>{ele.name}</li>
                                    )
                                })}
                            </ul>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SelectBox
