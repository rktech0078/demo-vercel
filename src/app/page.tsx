import Link from "next/link"

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Hi, Welcome to our Crypto Trading Platform.If you are new user, please register first, or you can login to your account.
            </h1>
            <div className="flex gap-4">
            <Link  href="/login">
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
              Login
            </button>
            </Link>
            <Link href="/register">
            <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
              Register
            </button>
            </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home