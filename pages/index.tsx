import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { generatePassword, isFireFoxBrowser } from "../utils";
import { Toaster, toast } from "react-hot-toast";
import { Footer } from "../components/Footer";
import { Headings } from "../components/Headings";
import { ThemeButtons } from "../components/ThemeButtons";
import { Configuration } from "../components/Configuration";
import { PasswordArea } from "../components/PasswordArea";
import { useDarkMode } from "../hooks/useDarkMode";
import { Header } from "../components/Header";
import { Disclaimer } from "../components/Disclaimer";

const Home: NextPage = () => {
  const [password, setPassword] = useState("");
  const [uppercase, _] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(20);
  const [theme, setTheme] = useDarkMode();

  const MAX_LENGTH = 128;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = e.target.valueAsNumber;
    if (length) setLength(length <= MAX_LENGTH ? length : MAX_LENGTH);
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
    const theme = checked ? "dark" : "light";
    setTheme(theme);
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
      duration: 1500,
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

  const isFireFox = isFireFoxBrowser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primary text-gray-700 dark:bg-darkPrimary dark:text-darkSecondary">
      <Header />

      <Disclaimer />

      <main className="w-full flex flex-1 flex-col items-center justify-center gap-3 px-20 text-center">
        <ThemeButtons
          checked={theme === "dark"}
          onChangeHandler={handleThemeChange}
        />
        <Headings />
        <section className="rounded-md shadow-xl shadow-darkPrimary flex flex-col justify-center items-center gap-6 p-10 dark:shadow-darkSecondary md:flex-row">
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
            isFireFox={isFireFox}
          />
        </section>
      </main>

      <Footer />

      <Toaster />
    </div>
  );
};

export default Home;
