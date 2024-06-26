import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogBackdrop,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export default function CommandPalette({ commands }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen])

  const filteredCommands = !query
    ? []
    : commands.filter(command =>
        command.title.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <>
      <Transition show={isOpen} afterLeave={() => setQuery('')}>
        <Dialog
          onClose={setIsOpen}
          className='fixed inset-0 overflow-y-auto p-4 pt-[25vh]'
        >
          <TransitionChild
            enter='duration-300 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-200 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <DialogBackdrop className='fixed inset-0 bg-gray-500/75' />
          </TransitionChild>
          <TransitionChild
            enter='duration-300 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-200 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Combobox
              as='div'
              onChange={command => {
                setIsOpen(false)
                router.push(command.url)
              }}
              className='relative mx-auto max-w-lg divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5'
            >
              <div className='flex items-center space-x-2 px-4'>
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
                <ComboboxInput
                  onChange={e => {
                    setQuery(e.target.value)
                  }}
                  className='placholder-gray-400 h-12 w-full border-0 bg-transparent text-gray-800 focus:outline-0 focus:ring-0'
                  placeholder='search commands'
                />
              </div>
              {filteredCommands.length > 0 && (
                <ComboboxOptions
                  static
                  className='max-h-40 overflow-y-auto py-4 text-sm'
                >
                  {filteredCommands.map(command => (
                    <ComboboxOption key={command.id} value={command}>
                      {({ active }) => (
                        <div
                          className={`space-x-1 px-4 py-2 ${
                            active ? 'bg-indigo-600' : 'bg-white'
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              active ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {command.title}
                          </span>
                          <span
                            className={`${
                              active ? 'text-indigo-200' : 'text-gray-400'
                            }`}
                          >
                            - {command.subtitle}
                          </span>
                        </div>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
              {query && filteredCommands.length === 0 && (
                <p className='p-4 text-sm text-gray-500'>no results found</p>
              )}
            </Combobox>
          </TransitionChild>
        </Dialog>
      </Transition>
      <button
        className='absolute bottom-[0.5rem] right-[0.5rem] rounded-lg bg-cb-blue p-2 md:hidden
        '
        type='button'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <RocketLaunchIcon className='h-6 w-6 text-cb-yellow' />
      </button>
    </>
  )
}
