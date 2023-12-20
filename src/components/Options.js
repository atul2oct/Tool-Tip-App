import React from 'react'
import { useState } from 'react'
import ToolTip from './ToolTip';

const Options = () => {

    const [toolTip,setToolTip] = useState("");

    function handleToolTip(event){
        setToolTip(event.target.value);
    }

  return (
    <div className='flex flex-col justify-between items-center h-11/12 w-11/12 min-h-[400px] lg:mt-40'>
        <fieldset className='flex justify-center items-center gap-10 border-4 py-4'>
            <legend className='font-bold text-lg text-center underline'>Choose Where You Want Tool-Tip</legend>

            <div>
                <input type="radio" id="top" value="top" name={toolTip}
                checked={toolTip === "top"} onChange={handleToolTip}
                />
                <label htmlFor='top' className='text-sm mt-[4px]'>Top</label>
            </div>
            
            <div>
                <input type="radio" id="bottom" value="bottom" name={toolTip}
                checked={toolTip === "bottom"} onChange={handleToolTip}
                />
                <label htmlFor='bottom' className='text-sm mt-[4px]'>Bottom</label>
            </div>

            <div>
                <input type="radio" id="left" value="left" name={toolTip}
                checked={toolTip === "left"} onChange={handleToolTip}
                />
                <label htmlFor='left' className='text-sm mt-[4px]'>Left</label>
            </div>

            <div>
                <input type="radio" id="right" value="right" name={toolTip}
                checked={toolTip === "right"} onChange={handleToolTip}
                />
                <label htmlFor='right' className='text-sm mt-[4px]'>Right</label>
            </div>
        </fieldset>

        <ToolTip toolTip={toolTip} />
    </div>
  )
}

export default Options