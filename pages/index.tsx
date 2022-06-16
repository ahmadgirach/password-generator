import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { generatePassword } from '../utils'
import { Toaster, toast } from 'react-hot-toast'
import { ToggleButton } from '../components/ToggleButton'
import { ConfigItem } from '../components/ConfigItem'

const Home: NextPage = () => {

  const [password, setPassword] = useState('')
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [length, setLength] = useState(10)

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

  const regeneratePassword = () => {
    const password = generatePassword(uppercase, lowercase, numbers, symbols, length)
    setPassword(password)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    return toast('Copied to Clipboard!', {
      duration: 1000,
    })
  }

  useEffect(regeneratePassword, [uppercase, lowercase, numbers, symbols, length])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary">
      <Head>
        <title>Password Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-1 flex-col items-center justify-center px-20 text-center">
        <h2 className="font-bold text-3xl uppercase mt-10">Password Generator</h2>
        <section className="rounded-md shadow-xl bg-white flex flex-col justify-center items-center gap-4 p-10">
          <h1 className="text-xl">Generate a secure and unique password effortlessly.</h1>

          <div className='flex flex-col justify-center items-center gap-4'>
            <textarea name="password" id="password" cols={20} rows={3} value={password} className='bg-sky-50 outline-none rounded-md text-center text-xl text-black tracking-wide' readOnly></textarea>
            <div>
              <button title='Copy to Clipboard' onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-7 text-sky-800' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button title='Regenerate Password' onClick={regeneratePassword}>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-7 text-sky-800' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h3 className="text-2xl font-bold">Configuration</h3>
            <div className='space-y-2 sm:mt-6'>
              <p className='text-lg'>Password Length</p>
              <input type="range" name="length" id="length" value={length} onChange={handleSliderChange} />
              <p>{length}</p>
            </div>
            {/* <div className='text-left space-y-3'>
              <div className='flex items-center gap-2 sm:mt-6'>
                <input
                  type="checkbox"
                  name="uppercase"
                  id="uppercase"
                  checked={uppercase}
                  onChange={handleUppercaseChange}
                />
                <label htmlFor="uppercase" className='cursor-pointer'>Uppercase</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="lowercase" id="lowercase" checked={lowercase} onChange={handleLowercaseChange} />
                <label htmlFor="lowercase" className='cursor-pointer'>Lowercase</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={handleNumbersChange} />
                <label htmlFor="numbers" className='cursor-pointer'>Numbers</label>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={handleSymbolsChange} />
                <label htmlFor="symbols" className='cursor-pointer'>Symbols</label>
              </div>
            </div> */}
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

        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        &copy; {new Date().getFullYear()}
        <a
          className="text-sky-700 font-bold"
          href="https://bio.link/ahmadgirach"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Ahmad Girach
        </a>
      </footer>

      <Toaster />
    </div>
  )
}

export default Home
