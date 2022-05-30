import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalAuthState } from '@/atoms'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import Error from './Error'
import toast from 'react-hot-toast'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useRecoilState(modalAuthState)
  const [errors, setErrors] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!open) setTimeout(() => setErrors([]), 300)
  }, [])

  const { register } = useAuth(
    {},
    {
      revalidateOnMount: false,
    }
  )

  async function handlerRegister(e: any) {
    e.preventDefault()
    setIsLoading(true)
    setErrors([])
    try {
      await register({
        username: e.target.username.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
        referal: e.target.referal.value,
      })
      setOpen(false)
      toast.loading('Đăng ký thành công. Vui lòng đợi', { duration: 2000 })
      setTimeout(() => router.push('/dashboard'), 2000)
    } catch (err: any) {
      console.log(err)
      setErrors(typeof err.message == 'string' ? [err.message] : err.message)
    }
    setIsLoading(false)
  }

  return (
    <>
      <Error errors={errors}></Error>
      <form onSubmit={handlerRegister} className="bg-gray-700 px-6 py-8">
        <div className="space-y-4 px-6">
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            className="input input-bordered w-full text-center text-base"
            placeholder="Tài khoản"
          />
          <input
            name="password"
            type="password"
            minLength={6}
            required
            autoComplete="current-password"
            className="input input-bordered w-full text-center text-base"
            placeholder="Mật khẩu"
          />
          <input
            name="confirmPassword"
            type="password"
            minLength={6}
            required
            autoComplete="current-password"
            className="input input-bordered w-full text-center text-base"
            placeholder="Nhập lại mật khẩu"
          />
          <input
            name="referal"
            type="text"
            required
            value={router.query.ref}
            autoComplete="referal"
            className="input input-bordered w-full text-center text-base"
            placeholder="Người giới thiệu"
          />
        </div>

        <div className="mt-6 px-6">
          <button
            type="submit"
            name="btnLogin"
            disabled={isLoading}
            className="btn w-full rounded-2xl border border-transparent bg-gray-500 px-4 py-3 text-base font-medium text-white hover:bg-gray-400 disabled:bg-[#cfd088]"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </>
  )
}
export default Register
