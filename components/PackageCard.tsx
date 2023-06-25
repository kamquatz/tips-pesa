'use client'

import { PackageProps } from '@/types'

interface PackageCardProps {
    subscriptionPackage: PackageProps;
}

const PackageCard = ({ subscriptionPackage }: PackageCardProps) => {
    const { title, duration, matches, price } = subscriptionPackage;
    return (
        <div className='car-card group'>
            <small className='flex w-full justify-center font-bold'>
                {title}
            </small>

            <p className='flex w-full justify-center font-extrabold text-blue-600 text-[24px]'>
                <span className='self-start text-[8px] font-semibold'>KSh</span>
                {price}                
                <span className='self-end text-[8px] font-semibold'>.00</span>
            </p>

            <small className='flex w-full justify-center font-bold'>
            {duration}
            </small>

            <small className='flex w-full justify-center font-bold text-[10px]'>
            {matches}+ Matches
            </small>
        </div>
    )
}

export default PackageCard