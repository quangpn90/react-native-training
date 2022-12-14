import React, { useState } from 'react';
import { Text, View } from 'react-native';

// LIB
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Feather } from '@expo/vector-icons';

// Components
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import Switch from 'components/Switch';

// Types
import { ILoginCredentials } from 'types/models/User';

// Styles
import { styles } from './styles';
import Colors from 'themes/Colors';

// initial values
const loginFormInit: ILoginCredentials = {
  username: '',
  password: ''
};

// validation schema
const loginSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
}).required();

interface ILoginFormProps {
  onSubmit: (data: ILoginCredentials) => void;
}

const LoginForm = ({ onSubmit }: ILoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginCredentials>({
    mode: 'onChange',
    defaultValues: loginFormInit,
    resolver: yupResolver(loginSchema)
  });

  const onSubmitLoginForm: SubmitHandler<ILoginCredentials> = (loginInfo: ILoginCredentials) => {
    onSubmit(loginInfo);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* Username */}
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={(value: string) => onChange(value)}
              value={value}
              label='Username'
              placeholder='Enter your username'
              testID='usernameInput'
              type='text'
              iconRight={<Feather name='user' size={20} color={Colors.textGray} right />}
            />
          )}
          name='username'
        />
        {errors.username && (
          <Text testID='usernameInputError' accessibilityRole='text' style={styles.errorMessage}>
            {errors.username?.message}
          </Text>
        )}

        {/* Password */}
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={(value: string) => onChange(value)}
              value={value}
              label='Password'
              placeholder='Enter your password'
              testID='passwordInput'
              type='password'
            />
          )}
          name='password'
        />
        {errors?.password && (
          <Text testID='passwordInputError' style={styles.errorMessage}>
            {errors?.password?.message}
          </Text>
        )}

        <View style={styles.forgotPasswordWrap}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <View style={styles.rememberMeWrap}>
          <Text style={styles.rememberMeText}>Remember me</Text>

          <Switch value={true}/>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerTextWrapper}>
          <Text style={styles.condition}>
            By connecting your account confirm that you agree with our
            <Text style={styles.Term}> Term and Condition</Text>
          </Text>
        </View>

        <Button
          testID='loginButton'
          type='Bottom'
          text='Login'
          disabled={Boolean(errors?.username || errors?.password)}
          onPress={handleSubmit(onSubmitLoginForm)}
        />
      </View>
    </View>
  );
};

export default LoginForm;
