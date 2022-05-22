import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalAuthState } from '@/atoms'
import { useAuth } from '@/hooks'
import Error from './Error'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useRecoilState(modalAuthState)
  const [errors, setErrors] = useState<string[]>([])
  
  useEffect(() => {
    if (!open) setTimeout(() => setErrors([]), 300)
  }, [])

  const { login } = useAuth(
    { middleware: 'guest' },
    {
      revalidateOnMount: false,
    }
  )

  async function handlerLogin(e: any) {
    e.preventDefault()
    setIsLoading(true)
    setErrors([])
    try {
      await login({
        username: e.target.username.value,
        password: e.target.password.value,
      })
      setOpen(false)
    } catch (err: any) {
      console.log(err)
      setErrors(err && typeof err.message == 'string' ? [err.message] : err.message)
    }
    setIsLoading(false)
  }

  return (
    <>
      <Error errors={errors}></Error>
      <form onSubmit={handlerLogin} className="bg-gray-700 px-6 py-8">
        <div className="space-y-4 px-6">
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            className="block w-full rounded-lg p-2.5 text-center text-base font-semibold text-black-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Tài khoản"
          />
          <input
            name="password"
            type="password"
            minLength={6}
            required
            autoComplete="current-password"
            className="block w-full rounded-lg p-2.5 text-center text-base font-semibold text-black-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Mật khẩu"
          />
        </div>

        <div className="mt-6 px-6">
          <button
            type="submit"
            name="btnLogin"
            disabled={isLoading}
            className="inline-flex w-full justify-center rounded-3xl border border-transparent bg-gray-500 px-4 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:bg-[#cfd088]"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  )
}
export default Login
