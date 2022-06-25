import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { generatePassword } from "../utils";
import { Toaster, toast } from "react-hot-toast";
import { Footer } from "../components/Footer";
import { Headings } from "../components/Headings";
import { ThemeButtons } from "../components/ThemeButtons";
import { Configuration } from "../components/Configuration";
import { PasswordArea } from "../components/PasswordArea";

const Home: NextPage = () => {
  const [password, setPassword] = useState("");
  const [uppercase, _] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(16);
  const [dark, setDark] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.valueAsNumber);
  };

  const handleUppercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // DON'T ALLOW TO UNCHECK IT.
    e.preventDefault();
  };

  const handleLowercaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLowercase(e.target.checked);
  };

  const handleNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(e.target.checked);
  };

  const handleSymbolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbols(e.target.checked);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const root =
      typeof window !== "undefined" ? window.document.documentElement : null;
    if (root) {
      if (checked) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
    setDark(checked);
  };

  const regeneratePassword = () => {
    const password = generatePassword(
      uppercase,
      lowercase,
      numbers,
      symbols,
      length
    );
    setPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    return toast("Copied to Clipboard!", {
      duration: 1200,
      position: "top-right",
    });
  };

  useEffect(regeneratePassword, [
    uppercase,
    lowercase,
    numbers,
    symbols,
    length,
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary text-gray-700 dark:bg-darkPrimary dark:text-darkSecondary">
      <Head>
        <title>Random Password Generator</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Generate Random Password" />
        <meta
          name="description"
          content="Avoid using common password patterns and use this tool to generate random password."
        />
        <meta name="copyright" content="Ahmad Girach" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://random-passsword-generator.netlify.app/"
        />
        <meta property="og:title" content="Generate Random Password" />
        <meta
          property="og:description"
          content="Avoid using common password patterns and use this tool to generate random password."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://random-passsword-generator.netlify.app/"
        />
        <meta property="twitter:title" content="Generate Random Password" />
        <meta
          property="twitter:description"
          content="Avoid using common password patterns and use this tool to generate random password."
        />
        <meta property="twitter:image" content="" />
      </Head>

      <main className="w-full flex flex-1 flex-col items-center justify-center gap-4 px-20 text-center">
        <ThemeButtons checked={dark} onChangeHandler={handleThemeChange} />
        <Headings />
        <section className="rounded-md shadow-xl shadow-darkPrimary flex flex-col justify-center items-center gap-10 p-10 dark:shadow-darkSecondary">
          <PasswordArea
            password={password}
            copyToClipboard={copyToClipboard}
            regeneratePassword={regeneratePassword}
          />
          <Configuration
            length={length}
            uppercase={uppercase}
            lowercase={lowercase}
            numbers={numbers}
            symbols={symbols}
            handleSliderChange={handleSliderChange}
            handleUppercaseChange={handleUppercaseChange}
            handleLowercaseChange={handleLowercaseChange}
            handleNumbersChange={handleNumbersChange}
            handleSymbolsChange={handleSymbolsChange}
          />
        </section>
      </main>

      <Footer />

      <Toaster />
    </div>
  );
};

export default Home;
