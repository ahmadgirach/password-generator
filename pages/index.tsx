import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { generatePassword } from '../utils'

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
    setUppercase(e.target.checked)
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
    alert("Password has been copied to clipboard")
  }

  useEffect(() => {
    regeneratePassword()
  }, [uppercase, lowercase, numbers, symbols, length])

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Password Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-sky-100">
        <section className="w-full rounded-md shadow-md p-4 bg-white space-y-4">
          <h2 className="font-bold text-3xl text-sky-600 uppercase">Password Generator Tool</h2>
          <h1 className="font-bold text-xl">Use my online password generator tool to create a secure unique password and stay safe online.</h1>

          <div className="w-full bg-white p-2 strength-indicator"></div>

          <div className='flex justify-center items-center gap-4'>
            <textarea name="password" id="password" cols={20} rows={3} value={password} className='bg-gray-200 p-4 outline-none w-3/4 rounded-md text-center min-w-fit' readOnly></textarea>
            <button title='Copy to Clipboard' onClick={copyToClipboard}>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-10 text-sky-800' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
            <button title='Regenerate Password' onClick={regeneratePassword}>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-9 text-sky-800' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <div className='flex flex-col'>
              <p>Password Length</p>
              <input type="range" name="length" id="length" value={length} onChange={handleSliderChange} />
            </div>
            <div className='flex flex-col'>
              <div className='space-x-2'>
                <input type="checkbox" name="uppercase" id="uppercase" checked={uppercase} onChange={handleUppercaseChange} />
                <label htmlFor="uppercase">Uppercase</label>
              </div>
              <div className='space-x-2'>
                <input type="checkbox" name="lowercase" id="lowercase" checked={lowercase} onChange={handleLowercaseChange} />
                <label htmlFor="lowercase">Lowercase</label>
              </div>
              <div className='space-x-2'>
                <input type="checkbox" name="numbers" id="numbers" checked={numbers} onChange={handleNumbersChange} />
                <label htmlFor="numbers">Numbers</label>
              </div>
              <div className='space-x-2'>
                <input type="checkbox" name="symbols" id="symbols" checked={symbols} onChange={handleSymbolsChange} />
                <label htmlFor="symbols">Symbols</label>
              </div>
            </div>
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
    </div>
  )
}

export default Home
