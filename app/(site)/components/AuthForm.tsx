'use client'


import Input from '@/app/components/Input/Input'
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  // useCallback 用于防止不必要的渲染
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  // 提交功能
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // 提交的时候，启用加载
    setIsLoading(true)
    if (variant === 'REGISTER') {
      // TODO: Axios Register
    }

    if (variant === 'LOGIN') {
      // TODO: NextAuth Sign In
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
    // TODO: NextAuth Sign In
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      ">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form 
          className='space-y-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input />
        </form>
      </div>
    </div>
  )
}
