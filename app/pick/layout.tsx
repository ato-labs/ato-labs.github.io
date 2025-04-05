import { PropsWithChildren } from 'react'
const PickLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full flex justify-center bg-white'>
      <div className='w-full h-dvh flex items-center justify-center min-w-[300px] max-w-[600px]'>
        {children}
      </div>
    </div>
  )
}

export default PickLayout
