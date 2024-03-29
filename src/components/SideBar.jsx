import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar =  () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sm text-white'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-sm text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m2'

  return (
    <div className='ml-3 h-screen md:overflow-auto md:small:overflow-auto overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>

            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 flex ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-800'>
              <SiShopware/><span>Shopify</span>
            </Link>

              <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={() => setActiveMenu( (prevActiveMenu) => !prevActiveMenu)} className='block mt-4 text-lg p-3 hover:bg-light-gray'>
                <MdOutlineCancel/>
              </button>
              </TooltipComponent>

          </div>

          <div className='mt-10'>
            {links.map((item) => 
              <div key={item.title}>
                <p className='uppercase m-3 text-gray-600 mt-4'>
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  className={({isActive}) => 
                    isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className='capitalize'>
                      {link.name}
                    </span>
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