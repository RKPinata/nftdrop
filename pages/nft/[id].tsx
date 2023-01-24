import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react"

function NFTDropPage() {

  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  //showAddress
  console.log(address);

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      {/* Left */}
      <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
        <div className='flex flex-col items-center justify-center py-2
        lg:min-h-screen'>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
            <img
            className='w-44 rounded-xl object-cover object-center
            lg:h-96 lg:w-80
            ' src="https://static.okx.com/cdn/nft/e719ece5-be9c-4a08-b604-f3af1e97e4e3.png" alt="degods nft" />
          </div>
          <div className='space-y-2 p-5 text-center'>
            <h1 className='text-4xl font-bold text-white'>
              Degods Ripoff
            </h1>
            <h2 className='text-xl text-gray-300'>
              I wanna be rich ripping people off
            </h2>
          </div>
        </div>

      </div>

      {/* Right */}
      <div className='lg:col-span-6  flex flex-1 flex-col p-12'>
        {/* Header */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 lg:w-96 cursor-pointer text-xl font-extralight'>The{' '}
          <span className='font-extrabold underline decoration-pink-600/50'>DegodsRipoff</span>{' '}
          NFT MarketPlace</h1>
          <button 
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className='rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white lg-px-5 lg:py-3'>
            {address ? 'Sign Out' : 'Sign In'}    
          </button>
        </header>

        <hr className='my-2 border'/>
        {address && (
          <p className='text-center '>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)} 
          </p>
        )}

        {/* Content */}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center' >
          <img 
          src="https://links.papareact.com/bdy" 
          alt="" 
          className='w-80 object-cover pb-10 lg:h-40'
          />

          <h1 className='text-3xl font-bold lg:text-4xl lg:font-extrabold '>
            The DeGods Rippoff Money Milker | NFT Drop
          </h1>

          <p className='pt-2 text-xl text-green-500'>13 / 21 NFTs Claimed</p>
        </div>

        {/* Mint Button */}
        <button className='mt-10 h-16 w-full bg-red-600 text-white rounded-full font-bold'>
          Mint NFT (0.01 ETH)
        </button>
      </div>

    </div>
  )
}

export default NFTDropPage