import { useEffect, useState } from "react";
import { ConfigItem } from "./ConfigItem";

type Props = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  handleSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUppercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLowercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSymbolsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFireFox: boolean;
};

export const Configuration = ({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  handleSliderChange,
  handleUppercaseChange,
  handleLowercaseChange,
  handleNumbersChange,
  handleSymbolsChange,
  isFireFox,
}: Props) => {
  const [inputType, setInputType] = useState("number");
  const [pContent, setPContent] = useState("");

  useEffect(() => {
    setInputType(isFireFox ? "range" : "number");
  }, [isFireFox]);

  useEffect(() => {
    setPContent(isFireFox ? length.toString() : "");
  }, [length]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 font-secondary">
      <h3 className="text-lg font-bold uppercase font-primary">
        Configuration
      </h3>
      <div className="space-y-2">
        <p className="text-lg">Password Length</p>
        <label htmlFor="length">
          <input
            type={inputType}
            name="length"
            id="length"
            value={length}
            onChange={handleSliderChange}
            className="w-full h-10 mx-0 my-2 appearance-none dark:bg-darkPrimary focus:outline-none"
            min={8}
            max={128}
          />
        </label>
        <p>{pContent}</p>
      </div>
      <div className="text-left space-y-3">
        <ConfigItem
          id="uppercase"
          caption="Include Uppercase"
          checked={uppercase}
          onChangeHandler={handleUppercaseChange}
        />
        <ConfigItem
          id="lowercase"
          caption="Include Lowercase"
          checked={lowercase}
          onChangeHandler={handleLowercaseChange}
        />
        <ConfigItem
          id="numbers"
          caption="Include Numbers"
          checked={numbers}
          onChangeHandler={handleNumbersChange}
        />
        <ConfigItem
          id="symbols"
          caption="Include Symbols"
          checked={symbols}
          onChangeHandler={handleSymbolsChange}
        />
      </div>
    </div>
  );
};
