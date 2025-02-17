import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Keyboard,
  ReturnKeyType,
} from 'react-native';
import WrongIcon from '../assets/svg/Wrong'
import { spacing } from '../styles/spacing';
import { textScale } from '../styles/responsiveStyles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  autoFocus?: boolean;
  returnKeyType?: ReturnKeyType;
  clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always';
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search',
  onSubmit,
  onClear,
  autoFocus = false,
  returnKeyType = 'search',
  clearButtonMode = 'while-editing'
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChangeText('');
    onClear?.();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={[
        styles.searchContainer,
        isFocused && styles.searchContainerFocused,
        value.length > 0 && styles.searchContainerWithText
      ]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType={returnKeyType}
          clearButtonMode={Platform.OS === 'ios' ? clearButtonMode : 'never'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={onSubmit}
          autoFocus={autoFocus}
          selectionColor="#007AFF"
        />
        
        {Platform.OS === 'android' && value.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClear}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <WrongIcon size={24} color='#000'/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.PADDING_12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: spacing.PADDING_12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchContainerFocused: {
    borderColor: '#007AFF',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  searchContainerWithText: {
    borderColor: '#007AFF',
  },
  input: {
    flex: 1,
    fontSize: textScale(16),
    color: '#1f2937',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    fontWeight: '400',
  },
  clearButton: {
    padding: spacing.PADDING_8,
    marginRight: spacing.MARGIN_8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#9ca3af',
    fontSize: textScale(24),
    fontWeight: '300',
    marginTop: -2,
  },
  cancelButton: {
    marginLeft: spacing.MARGIN_12,
    padding: spacing.PADDING_4,
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: textScale(16),
    fontWeight: '500',
  },
});

export default SearchBar;