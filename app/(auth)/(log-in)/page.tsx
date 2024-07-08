'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'; // Ensure this import is correct
import { useRouter } from 'next/navigation'

export default function StartScreen() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  function clickHandle() {
    setIsLoading(true)
    router.push('/chat')
  }

  return (
    <div className="z-10 items-center justify-center p-5 duration-200 rounded-2xl ">
      <div className="mx-auto grid md:w-[550px] gap-6">
        <div className="max-w-4xl w-full mx-auto bg-black/30 hover:bg-black duration-200 p-4 flex items-center justify-center flex-col rounded-lg ">
          <h2 className="text-3xl font-bold mb-4">Hey There</h2>
          <p>
            This project isn't really advanced yet, but it's working, and I can
            show off my skills. For now, I'll only allow two models. You can't
            delete messages, and you can see the information about the models.
            Also, the models are not free, so please be understanding.
          </p>

          <p className="my-5  text-center text-xl">The tech stack </p>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col  items-center justify-center">
              <div className="flex w-32 items-center justify-start">
                <Image
                  className="bg-none mr-2 border-stem-green-400  "
                  src={'/nextjs.png'}
                  height={30}
                  width={30}
                  alt="next"
                />
                <strong>Next.js</strong>
              </div>
              <p>
                A React framework that helps blur the nes between cent and
                server, supporting pre-rendering pages at build time or request
                time.
              </p>
            </div>
            <div className="flex w-32 text-start items-center justify-center">
              <Image
                className=" my-2 mr-2 border-stem-green-400  "
                src={'/TailwindCSS.png'}
                height={35}
                width={35}
                alt="next"
              />
              <strong>TailwindCSS</strong>
            </div>
            <p>
              A utity-first CSS framework that lets me quickly build custom
              designs.
            </p>
            <div />
            <div className="flex w-32  items-center text-start justify-start">
              <Image
                className=" my-2 mr-2  bg-none border-stem-green-400  "
                src={'/prisma.png'}
                height={25}
                width={25}
                alt="next"
              />
              <strong>Prisma</strong>
            </div>{' '}
            <p>
              An ORM that glues the project together, making it easier to work
              with the database.
            </p>
            <div />
            <div className="flex  w-32 items-center text-start justify-start">
              <Image
                className=" my-2 mr-2 bg-none border-stem-green-400  "
                src={'/supabase.png'}
                height={30}
                width={30}
                alt="next"
              />
              <strong>Supabase</strong>
            </div>
            <p>
              Provides backend services, authentication and real-time databases,
              offering a more feature-rich environment compared to other
              options.
            </p>
            <div />
          </div>

          {!isLoading ? (
            <Button
              onClick={clickHandle}
              type="button"
              className="w-full bg-stem-green-500 mt-4"
            >
              Continue
            </Button>
          ) : (
            <div className="mx-auto p-2">
              <div
                className="spinner-border animate-spin inline-block size-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden text-center font-bold text-xl">
                  ~
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
