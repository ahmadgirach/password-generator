type Props = {
  password: string;
  copyToClipboard: () => void;
  regeneratePassword: () => void;
};

export const PasswordArea = ({
  password,
  copyToClipboard,
  regeneratePassword,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        className="bg-indigo-50 outline-none rounded-md text-center text-xl text-black tracking-wide py-2 px-4 dark:text-darkPrimary dark:bg-indigo-200"
        readOnly
      />
      <div className="w-full flex gap-2">
        <button
          title="Copy to Clipboard"
          onClick={copyToClipboard}
          className="bg-indigo-200 p-3 rounded-md w-1/2 dark:text-darkPrimary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button
          title="Regenerate Password"
          onClick={regeneratePassword}
          className="bg-indigo-200 p-3 rounded-md w-1/2 dark:text-darkPrimary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
