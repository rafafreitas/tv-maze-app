import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import MaskInput from 'react-native-mask-input';

import { THEME } from '@src/constants';
import { View } from 'react-native';
import { styles } from './styles';
import Text from '../Text';

export interface IInputRefProps {
  resetField: () => void;
  updateField: (v: string) => void;
}

export interface IInput {
  name?: string;
  label?: string;
  value?: string | undefined | null;
  defaultValue?: string;
  error?: string;
  onChange?: (text: string) => void;
  placeholder?: string | undefined;
  secureTextEntry?: boolean;
  disabled?: boolean;
}

const InputDefault = forwardRef<IInputRefProps | undefined, IInput>(
  (
    {
      label = '',
      value = '',
      defaultValue,
      error,
      onChange = () => {},
      placeholder,
      secureTextEntry = false,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const [prepareValue, setPrepareValue] = useState<string>(
      value || defaultValue || '',
    );

    useEffect(() => {
      const prepare = value || defaultValue || '';
      setPrepareValue(prepare);
    }, [value, defaultValue]);

    const handleChange = (event: string) => {
      setPrepareValue(event);
      onChange(event);
    };

    const resetField = () => {
      setPrepareValue('');
    };

    const updateField = (v: string) => {
      handleChange(v);
    };

    useImperativeHandle(ref, () => ({
      resetField,
      updateField,
    }));

    return (
      <View style={styles.inputContainer}>
        {label && (
          <View style={styles.labelContainer}>
            <Text variant={error ? 'error' : 'white'}>{label}</Text>
          </View>
        )}
        <View style={styles.inputContainerRow}>
          <MaskInput
            value={prepareValue}
            placeholder={placeholder}
            textContentType="oneTimeCode"
            placeholderTextColor={error ? THEME.error : THEME.black}
            editable={!disabled}
            onChangeText={handleChange}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            {...rest}
          />
        </View>
        <View style={styles.errorContainer}>
          {error && (
            <Text variant={error ? 'error' : 'black'} fontSize={11}>
              {error || ''}
            </Text>
          )}
        </View>
      </View>
    );
  },
);

export default InputDefault;
