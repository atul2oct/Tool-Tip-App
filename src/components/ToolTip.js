import React, { useState } from 'react'
import './ToolTip.css';
const ToolTip = ({toolTip}) => {
    console.log(toolTip);

    const[isVisible,setIsVisible]=useState(false);

    const showTooltip=()=>{
        setIsVisible(true);
    }
    const hideTooltip=()=>{
        setIsVisible(false);
    }

    const getPosition=()=>{
        switch(toolTip)  {
        case 'top':
            return 'top';
        case 'bottom':
            return 'bottom';
        case 'left':
            return 'left';
        case 'right':
            return 'right';
        default:
            return 'center';
        }
    };
  return (
    <div className='tooltip-container' onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Hover Here
        </span>
        </button>
      {
        isVisible && (<div className={`tooltip ${getPosition()}` }>
          <p className='text-center w-max uppercase'>
            {
                toolTip.length === 0 ? ("Choose Tool Tip") :(`${toolTip} Tool Tip`)
            }
          </p>
        </div>)
      }
    </div>
  )
}

export default ToolTip