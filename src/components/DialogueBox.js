export const DialogueBox = () => {
  return (
    <div>
      <div
        class="max-w-xs p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
        role="alert">
        <div class="flex items-center justify-between">
          <span class="sr-only">Confirnation Box</span>
          <h3 class="font-medium">Task Added Succesfully</h3>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
