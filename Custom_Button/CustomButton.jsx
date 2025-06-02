import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { bgVariants, textVariants, baseButton } from './styles/buttonStyles'; // adjust path as needed

const CustomButton = ({
  onPress, // Callback function for button press
  title = '', // Button label
  bgVariant = 'primary', // Background variant: primary | secondary | danger | success | outline
  textVariant = 'default', // Text color variant
  fontFamily = 'System', // Optional custom font
  textSize = 'text-lg', // Tailwind text size (e.g., text-base, text-xl)
  textWeight = 'font-bold', // Tailwind font weight
  IconLeft, // Optional left icon (React component)
  IconRight, // Optional right icon (React component)
  className = '', // Custom Tailwind className for button
  textStyle = {}, // Inline style overrides for <Text>
  disabled = false, // Disables the button and dims appearance
  ...props // Additional props for TouchableOpacity
}) => {
  const bgStyle = bgVariants[bgVariant] ?? bgVariants.primary;
  const textColor = textVariants[textVariant] ?? textVariants.default;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`
        ${baseButton}
        ${bgStyle}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`${textSize} ${textWeight} ${textColor}`}
        style={{ fontFamily, ...textStyle }}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
