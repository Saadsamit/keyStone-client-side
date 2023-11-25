import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types';

export default function MyModal({isOpen,closeModal,children}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}
MyModal.propTypes={
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}