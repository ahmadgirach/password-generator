export const Disclaimer = () => {
  return (
    <div className="text-center mx-auto mt-4 font-primary text-sm text-red-700 dark:text-red-300 border border-red-700 dark:border-red-300 p-4 rounded-xl">
      <h2 className="text-2xl font-semibold font-secondary mb-2">Disclaimer:</h2>
      <h4>
        This tool generates a random password on the client side itself. That
        means the generated passwords are not stored on any server or anything.
      </h4>
      <h4>
        However, Password Security is a complex Topic and Hence use this tool at
        your own risk as I am not responsible for any damage this tool might
        cause.
      </h4>
      <h4>Thanks.</h4>
    </div>
  );
};
