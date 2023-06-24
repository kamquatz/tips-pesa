"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Home = () => {
    const handleSubscription = () => {

    }


    return (
        <div className='hero'>
            <div className='flex-1 pt-12 padding-x'>
                <p className='mt-10 text-gray-500'>
                    Streamline your betting experience with our A.I analyzed sure predictions
                </p>
                <p className='text-right text-green-500'>+95% Win Rate</p>

                <CustomButton
                    title="Subscribe to Premium"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleSubscription}
                />
            </div>
        </div>
    )
}

export default Home