type Props = {
    brand: string,
    label: string,
    link: string,
    setDangerously?: boolean,
}

export const ATag = ({ brand, label, link, setDangerously }: Props) => {
    return (
        <p>

            {setDangerously ? <span dangerouslySetInnerHTML={{ __html: label }}></span> : <span>{label}</span>} {' '}

            <a
                className="font-bold text-indigo-600 dark:text-indigo-400"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {brand}
            </a>
        </p>
    )
}
