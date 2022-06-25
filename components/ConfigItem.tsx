import React from "react"
import { ToggleButton } from "./ToggleButton"

type Props = {
    caption: string,
    id: string,
    checked: boolean,
    onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ConfigItem = ({ caption, id, checked, onChangeHandler }: Props) => {
    return (
        <div className="flex justify-between items-center gap-10 rounded-md bg-indigo-200 px-4 py-3 dark:text-darkPrimary">
            <p>{caption}</p>
            <ToggleButton id={id} checked={checked} onChangeHandler={onChangeHandler} />
        </div>
    )
}
