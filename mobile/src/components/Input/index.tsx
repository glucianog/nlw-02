import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

interface InputProps {
  label: string,
  placeholder: string,
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState('java');
  return( 
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#c1bccc"
        placeholder={placeholder}
      />
    </>
  );
  

}

export default Input;