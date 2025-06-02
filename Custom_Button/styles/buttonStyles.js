// styles/buttonStyles.js

export const bgVariants = {
  primary: 'bg-[#0286FF]',
  secondary: 'bg-gray-500',
  danger: 'bg-red-500',
  success: 'bg-green-500',
  outline: 'bg-transparent border-neutral-300 border-[0.5px]',
};

export const textVariants = {
  primary: 'text-black',
  secondary: 'text-gray-100',
  danger: 'text-red-100',
  success: 'text-green-100',
  default: 'text-white',
};

export const baseButton = `
  w-full rounded-full p-3 flex flex-row justify-center items-center
  shadow-md shadow-neutral-400/70
`;
