"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Home = () => {
    const handleSubscription = () => {

    }


    return (
        <div className='hero'>
            <div className='flex-1 pt-12 padding-x'>
                {/* <h1 className='hero__title'>
                TipsPesa offers sure Soccer Prediction Matches Daily -- With over 95% Accuracy
            </h1> */}
                <p className='hero__subtitle'>
                    Streamline your betting experience with our A.I analysed sure predictions
                </p>

                <CustomButton
                    title="Subscribe to Premium"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleSubscription}
                />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src='/hero.png' alt='hero' fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>


        </div>
    )
}

export default Home