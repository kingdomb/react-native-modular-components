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

// Modular InputField Component
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
        <View className='my-2 w-full'>
          {label && (
            <Text
              className={`text-lg mb-3 ${labelStyle}`}
              style={{ fontFamily }}
            >
              {label}
            </Text>
          )}
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <TouchableOpacity disabled={!onIconPress} onPress={onIconPress}>
                <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
              </TouchableOpacity>
            )}
            <TextInput
              className={`rounded-full p-4 text-[15px] flex-1 text-left ${inputStyle}`}
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
