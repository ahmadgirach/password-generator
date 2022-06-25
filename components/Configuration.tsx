import { ConfigItem } from "./ConfigItem"

type Props = {
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
    handleSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleUppercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleLowercaseChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSymbolsChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

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
    handleSymbolsChange
}: Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className="text-lg font-bold uppercase">Configuration</h3>
            <div className='space-y-2'>
                <p className='text-lg'>Password Length</p>
                <input
                    type="range"
                    name="length"
                    id="length"
                    value={length}
                    onChange={handleSliderChange}
                    className='w-full h-10 mx-0 my-2 appearance-none dark:bg-darkPrimary focus:outline-none'
                />
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
    )
}
