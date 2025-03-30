// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Homepage() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const [reveal , setReveal] = useState(0)
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start end' , 'end start']
  })

  const divScale = useTransform(scrollYProgress , [0,2] , [1, 0.2])
  const imageScale = useTransform(scrollYProgress , [0,3], [1, 2])
  useEffect(() => {
    let num = 0
      const interval = setInterval(() => {
          if(num >= 100) {
            setReveal(num)
            clearInterval(interval)
            return
          }
          else {
            num += 1
          }
          setReveal(num)
      }, 30)

      return () => clearInterval(interval)
  } , [])

  return (
    <div ref={containerRef} className="bg-black min-h-dvh">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              // onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}
      </header>

      <motion.div className="relative isolate px-2 pt-14 lg:px-8 "
        style={{scale: divScale}}
        >
        {/* {console.log(scrollYProgress)} */}

        {/* Custom stretched elliptical radial gradient */}
        {/* <div className="absolute inset-0 flex justify-center -z-10">
          <div
            style={{
              background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(59, 120, 246, 0.6), rgba(19, 130, 247, 0.4), rgba(0, 0, 0.0))",
              height: "80vh",
              width: "40%",
              filter: "blur(10px)",
            }}
          />
        </div> */}

        {/* Modified waterfall effect - flows from top to mid-page */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          {/* <div
            style={{
              clipPath:
                'polygon(100% 0, 0 0, 53% 76%)',
            }}
            className="relative left-[calc(50%-18rem)] aspect-[1155/978] w-[36.125rem] -translate-x-1/2 bg-gradient-to-b from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
          <div className="" />
        </div>
        <div className="mx-auto max-w-7xl  sm:py-48 lg:py-30 ">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1  className="text-balance animate-r text-6xl sm:text-9xl font-bold tracking-tight bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(to bottom, #E9E9E9 55%, #939EA5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Workflow Automation for Growing Teams
            </h1>
            <div className="flex justify-center">
            <p className="text-center mt-8 text-pretty max-w-3xl text-lg font-medium text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row  gap-5 items-center sm:justify-center gap-x-6 ">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Your Free Trial Today
              </a>
              <a href="#" className="text-xl font-semibold text-gray-100 underline">
                Book Your Slot
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/* Bottom decoration polygon - commented out to emphasize top waterfall effect */}
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        <div className="absolute inset-0 flex justify-center -z-9 ">
          <div
            style={{
              background: "radial-gradient(ellipse 40% 10% at 50% 100%, rgba(9, 120, 246, 0.6), rgba(0, 23, 267, 0.4), rgba(0, 0, 0.0))",
              height: "80vh",
              width: "100%",
              filter: "blur(0px)",
            }}
          />
        </div>
        <div className="absolute inset-0 flex justify-center -z-9 ">
          <div
            style={{
              background: `radial-gradient(ellipse 50% ${reveal}% at 50% 130%, rgba(59, 120, 246, 0.6), rgba(19, 130, 247, 0.4), rgba(0, 0, 0.0))`,
              height: "80vh",
              width: "70%",
              filter: "blur(0px)",
            }}
          />
        </div>
      </motion.div>


      {/* Featured Image Section */}
      <div className="w-full py-16 md:py-24 bg-black -mt-15 sm:-mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div className="overflow-hidden rounded-2xl shadow-2xl"
          style={{scale: imageScale}}
          >
            <div className="relative  w-full">
              <img
                src="https://cdn.sanity.io/images/hvk0tap5/production/bf901b81573f47b98ac14a4999aadd81be55cb20-1938x1222.png?w=1200&q=95&fit=max&auto=format"
                alt="Featured workspace automation dashboard"
                className="w-full h-full object-cover"
              />

              {/* Overlay with caption/description */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Streamlined Workflow Management</h3>
                  <p className="text-gray-300 max-w-2xl">Our intuitive dashboard puts everything your team needs in one place, eliminating the chaos of scattered tools.</p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Image caption or supporting text */}
          {/* <div className="mt-6 text-center">
            <p className="text-gray-400">Trusted by over 10,000 teams worldwide to streamline their workflows</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}