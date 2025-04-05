import Image from 'next/image'

interface CardProps {
  src: string
  size: number
}

export const Card = ({ src, size }: CardProps) => {
  return (
    <div className='max-w-sm h-full w-[calc(100dvw-32px)] max-h-[600px] bg-white border-2 border-gray-500 rounded-xl shadow-sm flex flex-col justify-around'>
      <section id='card_header_area' className='pt-[50px]'>
        <div className='w-full text-center'>
          <p className='font-medium text-black text-3xl'>
            타이틀이 표시 됩니다.
          </p>
        </div>
      </section>

      <section id='card_content_area'>
        <div className='flex w-full justify-center items-center'>
          <a href='#'>
            <Image src={src} alt='source' width={size} height={size} />
          </a>
        </div>
      </section>

      <section id='card_question_area' className='px-[40px]'>
        <a className='inline-flex font-bold cursor-pointer w-full justify-center text-xl items-center py-1 text-center rounded-lg hover:bg-gray-200 focus:ring-4  focus:ring-blue-300 bg-white border-2 text-gray-900'>
          시작하기
        </a>
      </section>
    </div>
  )
}
