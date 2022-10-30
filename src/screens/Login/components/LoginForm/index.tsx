import React from 'react'

// LIB
import {useForm, Controller, SubmitHandler} from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup/dist/yup'
import {vs} from 'react-native-size-matters/extend'

// Components
import Input, {InputType} from '@components/Input'
import Switch from '@components/Switch'

// Themes
import {Icons, Metrics} from '@themes'

// Styles
import ViewStyled from '@components/View/View.styles'
import PStyled from '@components/Paragraph/P.styles'
import FlexStyled from '@components/Flex/Flex.styles'

// Types
import {LoginCredentials} from '@model-types'
import {PARAGRAPH_TYPE} from '@constants'
import {BtnType, Button} from '@components/Button'
import LayoutStyled from '@components/Layout/Layout.styles'

// initial values
const loginFormInit: LoginCredentials = {
  username: '',
  password: '',
}

// validation schema
const loginSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
}).required()

interface ILoginFormProps {
  onSubmit: (data: LoginCredentials) => void
}

const LoginForm = ({onSubmit}: ILoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginCredentials>({
    mode: 'onChange',
    defaultValues: loginFormInit,
    resolver: yupResolver(loginSchema),
  })

  const onSubmitLoginForm: SubmitHandler<LoginCredentials> = (
    loginInfo: LoginCredentials,
  ) => {
    onSubmit(loginInfo)
  }

  return (
    <>
      <LayoutStyled.Main>
        {/* Username */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <Input
              label="Username"
              placeholder="Enter your username"
              icon={Icons.filledProfile}
              value={value}
              type={InputType.NORMAL}
              onChange={(val: string) => onChange(val)}
            />
          )}
          name="username"
        />
        {errors.username && (
          <PStyled.ErrorMessage>
            {errors.username?.message}
          </PStyled.ErrorMessage>
        )}

        {/* Password */}
        <ViewStyled.Custom pTop={vs(Metrics.padding.mediumPlus)}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                onChange={(val: string) => onChange(val)}
                value={value}
                label="Password"
                placeholder="Enter your password"
                type={InputType.PASSWORD}
              />
            )}
            name="password"
          />
          {errors?.password && (
            <PStyled.ErrorMessage>
              {errors.password?.message}
            </PStyled.ErrorMessage>
          )}
        </ViewStyled.Custom>

        <PStyled.ErrorMessage
          textAlign="right"
          mTop={vs(Metrics.margin.extraMedium)}>
          Forgot password?
        </PStyled.ErrorMessage>
        <FlexStyled.FlexSpaceBetweenCenter mTop={vs(Metrics.margin.large)}>
          <PStyled.Base>Remember me</PStyled.Base>
          <Switch />
        </FlexStyled.FlexSpaceBetweenCenter>
      </LayoutStyled.Main>
      <FlexStyled.FlexEnd>
        <FlexStyled.Row
          pBottom={Metrics.padding.large}
          pHorizontal={Metrics.padding.large}>
          <PStyled.Center type={PARAGRAPH_TYPE.CONFIRM_AGREE}>
            {'By connecting your account confirm that you agree with our '}
            <PStyled.Center type={PARAGRAPH_TYPE.TERM_AND_CONDITION}>
              {'Term and Condition'}
            </PStyled.Center>
          </PStyled.Center>
        </FlexStyled.Row>

        <Button
          type={BtnType.BOTTOM}
          disabled={!!errors?.username || !!errors?.password}
          onPress={handleSubmit(onSubmitLoginForm)}
          label="Login"
        />
      </FlexStyled.FlexEnd>
    </>
  )
}

export default LoginForm