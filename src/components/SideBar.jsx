import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

const Sidebar = () => {

  const activeMenu = true;

  return (
    <div className='ml-3 h-screen md:overflow-hidden md:small:overflow-auto overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>


            <Link to='/' onClick={() => {}} className='items-center gap-3 flex ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-800'>
              <SiShopware /> <span>Shopify</span>
            </Link>

              <TooltipComponent
                content='Menu' position='BottomCenter'>
              <button type='button' onClick={() => {}}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                <MdOutlineCancel />
              </button>
              </TooltipComponent>
              
          </div>

          <div className='mt-10'>
            {links.map((items) => 
              <div key={items.title}>
                <p className='uppercase m-3'>
                  {items.title}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar