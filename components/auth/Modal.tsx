import { useRecoilState } from 'recoil'
import { modalAuthState } from '@/atoms'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const AuthModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [open, setOpen] = useRecoilState(modalAuthState)

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center font-semibold">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 text-slate-200 text-left align-middle shadow-xl transition-all">
                  <button
                    className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:bg-slate-700 rounded-md px-2"
                    onClick={() => setOpen(false)}
                  >
                    ×
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="my-6 text-center text-xl font-medium leading-6"
                  >
                    {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                  </Dialog.Title>
                  {isRegister ? <Signup /> : <Login />}

                  {isRegister ? (
                    <div className="my-6 px-4 text-right text-sm text-slate-200">
                      <span className="font-normal">Đã có tài khoản?</span>{' '}
                      <button
                        onClick={() => setIsRegister(false)}
                        className="font-semibold"
                      >
                        Đăng nhập
                      </button>
                    </div>
                  ) : (
                    <div className="my-6 px-4 text-right text-sm text-slate-200">
                      <span className="font-normal">Chưa có tài khoản?</span>{' '}
                      <button
                        onClick={() => setIsRegister(true)}
                        className="font-semibold"
                      >
                        Đăng ký
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default AuthModal
