import { ATag } from "./ATag"

export const Footer = () => {
    return (
        <footer className="w-full h-24 flex flex-col items-center justify-center border-t text-sm">
            <ATag
                link="https://github.com/ahmadgirach/password-generator"
                brand="Ahmad Girach"
                label={`&copy; ${new Date().getFullYear()}`}
                setDangerously
            />
            <ATag
                link="https://www.cssportal.com/style-input-range"
                brand="CSS Portal"
                label="Slider design by "
            />
            <ATag
                link="https://www.heroicons.com"
                brand="Hero Icons"
                label="Icons by "
            />
        </footer>
    )
}
