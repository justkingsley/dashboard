import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, Sparkline } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ECommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark: text-gray-600 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-90 p-8 pt-9 m-3 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-700 '>
                Earnings
              </p>
              <p className='text-2xl'>
                $68,900.89
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce