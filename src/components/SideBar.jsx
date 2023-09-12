import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

const Sidebar = () => {

  const activeMenu = true;

  const activeLinke = 'flex items-center gap-5 pl-4 pb-2.5 rounded-lg mt-3'

  return (
    <div className='ml-3 h-screen md:overflow-hidden md:small:overflow-auto overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>

            <Link to='/' onClick={() => {}} className='items-center gap-3 flex ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-800'>
              <SiShopware/><span>Shopify</span>
            </Link>

              <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={() => {}} className='block mt-4 text-xl p-3 hover:bg-light-gray md:hidden'>
                <MdOutlineCancel/>
              </button>
              </TooltipComponent>

          </div>

          <div className='mt-10'>
            {links.map((items) => 
              <div key={items.title}>
                <p className='capitalize m-3 text-gray-500 mt-4'>
                  {items.title}
                </p>

                {items.links.map((link) => (
                  <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={() => {}}
                  className={({}) => {}}
                  >

                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar