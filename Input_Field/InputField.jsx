import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  baseWrapper,
  baseLabel,
  baseContainer,
  baseIcon,
  baseInput,
} from './styles/inputStyles'; // Adjust the path as needed

const InputField = ({
  label, // Text label displayed above the input
  icon, // Optional icon source
  onIconPress, // Optional function when icon is pressed
  secureTextEntry = false, // Hides input text for password fields
  fontFamily = 'System', // Optional custom fontFamily
  labelStyle = '', // Tailwind or className string for label
  containerStyle = '', // Tailwind or className string for input container
  inputStyle = '', // Tailwind or className string for TextInput
  iconStyle = '', // Tailwind or className string for icon
  className = '', // General wrapper className (not used here)
  keyboardAvoiding = true, // Option to disable KeyboardAvoidingView
  behavior = Platform.OS === 'ios' ? 'padding' : 'height', // Customize keyboard behavior
  ...props // Spread additional TextInput props (e.g., placeholder, keyboardType)
}) => {
  const Wrapper = keyboardAvoiding ? KeyboardAvoidingView : View;

  return (
    <Wrapper behavior={behavior}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className={`${baseWrapper}`}>
          {label && (
            <Text
              className={`${baseLabel} ${labelStyle}`}
              style={{ fontFamily }}
            >
              {label}
            </Text>
          )}
          <View className={`${baseContainer} ${containerStyle}`}>
            {icon && (
              <TouchableOpacity disabled={!onIconPress} onPress={onIconPress}>
                <Image source={icon} className={`${baseIcon} ${iconStyle}`} />
              </TouchableOpacity>
            )}
            <TextInput
              className={`${baseInput} ${inputStyle}`}
              style={{ fontFamily }}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default InputField;
