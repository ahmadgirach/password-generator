import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { generatePassword } from '../utils'
import { Toaster, toast } from 'react-hot-toast'
import { ConfigItem } from '../components/ConfigItem'
import { ToggleButton } from '../components/ToggleButton'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {

  const [password, setPassword] = useState('')
  const [uppercase, _] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [length, setLength] = useState(16)
  const [dark, setDark] = useState(false)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.valueAsNumber)
  }

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // DON'T ALLOW TO UNCHECK IT.
    e.preventDefault()
  }

  const handleLowercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLowercase(e.target.checked)
  }

  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(e.target.checked)
  }

  const handleSymbolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbols(e.target.checked)
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    const root = typeof window !== 'undefined' ? window.document.documentElement : null
    if (root) {
      if (checked) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
    setDark(checked)
  }

  const regeneratePassword = () => {
    const password = generatePassword(uppercase, lowercase, numbers, symbols, length)
    setPassword(password)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    return toast('Copied to Clipboard!', {
      duration: 1200,
      position: 'top-right'
    })
  }

  useEffect(regeneratePassword, [uppercase, lowercase, numbers, symbols, length])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary text-gray-700 dark:bg-darkPrimary dark:text-darkSecondary">
      <Head>
        <title>Secure Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-1 flex-col items-center justify-center gap-4 px-20 text-center">
        <div className="flex justify-end items-center gap-2 mt-6">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <ToggleButton id='toggle' checked={dark} onChangeHandler={handleThemeChange} />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
        <h2 className="font-bold text-3xl uppercase mt-10">Password Generator</h2>
        <h1 className="text-xl">Generate a secure and unique password effortlessly.</h1>

        <section className="rounded-md shadow-xl flex flex-col justify-center items-center gap-10 p-10">

          <div className='flex flex-col justify-center items-center gap-4'>
            <input type="text" name="password" id="password" value={password} className='bg-indigo-50 outline-none rounded-md text-center text-xl text-black tracking-wide py-2 px-4 dark:text-darkPrimary dark:bg-indigo-200' readOnly />
            {/* <textarea name="password" id="password" cols={40} rows={2} value={password} className='bg-indigo-50 outline-none rounded-md text-center text-xl text-black tracking-wide p-3' readOnly></textarea> */}
            <div className='w-full flex gap-2'>
              <button title='Copy to Clipboard' onClick={copyToClipboard} className='bg-indigo-200 p-3 rounded-md w-1/2 dark:text-darkPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-7 mx-auto' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button title='Regenerate Password' onClick={regeneratePassword} className='bg-indigo-200 p-3 rounded-md w-1/2 dark:text-darkPrimary'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-7 mx-auto' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className="text-lg font-bold uppercase">Configuration</h3>
            <div className='space-y-2'>
              <p className='text-lg'>Password Length</p>
              <input type="range" name="length" id="length" value={length} onChange={handleSliderChange} className='w-full h-10 mx-0 my-2 appearance-none dark:bg-darkPrimary focus:outline-none' />
              <p>{length}</p>
            </div>
            <div className="text-left space-y-3">
              <ConfigItem
                id='uppercase'
                caption='Include Uppercase'
                checked={uppercase}
                onChangeHandler={handleUppercaseChange}
              />
              <ConfigItem
                id='lowercase'
                caption='Include Lowercase'
                checked={lowercase}
                onChangeHandler={handleLowercaseChange}
              />
              <ConfigItem
                id='numbers'
                caption='Include Numbers'
                checked={numbers}
                onChangeHandler={handleNumbersChange}
              />
              <ConfigItem
                id='symbols'
                caption='Include Symbols'
                checked={symbols}
                onChangeHandler={handleSymbolsChange}
              />
            </div>
          </div>

        </section>
      </main >

      <Footer />

      <Toaster />

    </div >
  )
}

export default Home
