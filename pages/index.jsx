import Head from 'next/head'
import Image from 'next/image'
import CreditCard from '../components/CreditCard'
import Coupon from '../components/Coupon'
import Navbar from '../components/Navbar'
import AddCard from '../components/AddCard'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Home = () => {
  const router = useRouter()
  const [Cards, setCards] = useState([])
  const [Offers, setOffers] = useState([])
  const [Total, setTotal] = useState([])
  const [openAdd, setopenAdd] = useState(false)
  const [Active, setActive] = useState(false)

  useEffect(() => {
    setCards([...Cards])
  }, [openAdd])

  useEffect(() => {
    if (Active) {
      // filter
    } else {
      setCards([...Total])
    }
  }, [Active])

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      router.push('/login')
    }
    fetch('https://nathuramgodse.me/card/getcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: localStorage.getItem('userId') }),
    })
      .then((response) => response.json())
      .then((result) => {
        setCards(result.data)
      })
      .catch((error) => console.log('error', error))

    fetch('https://nathuramgodse.me/offer/getoffer')
      .then((response) => response.json())
      .then((result) => {
        setOffers(result.coupon)
      })
      .catch((error) => console.log('error', error))
    // return () => {
    //   cleanup;
    // };
  }, [])

  return (
    <>
      <Head>
        <title>Bred | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {openAdd ? <AddCard setopenAdd={setopenAdd} openAdd={openAdd} /> : null}
      <section className="container mx-auto flex items-center justify-between px-4 pt-4 pb-2 text-gray-400 md:px-8 md:pt-8">
        <p className="text-center text-xs font-medium uppercase leading-snug tracking-widest text-gray-400">
          SELECT CARD
        </p>
        <div
          onClick={() => setopenAdd(true)}
          className="inline-flex h-12 cursor-pointer items-center justify-center space-x-2.5 rounded-full border-2 border-black border-opacity-10 bg-gradient-to-r from-black to-black px-2.5 py-1 shadow"
        >
          <div className="  inline-flex flex-col items-start justify-start rounded-full bg-gray-800 p-1.5 shadow-inner">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 3.96158V2.96158H5V3.96158V5H3.96155H2.96155V7H3.96155H5V8.03844V9.03844H7V8.03844V7H8.03841H9.03841V5H8.03841H7V3.96158Z"
                fill="#fff"
              />
            </svg>
          </div>
          <p className="text-base font-medium leading-snug tracking-wide text-white">
            Add Card
          </p>
        </div>
      </section>
      {/* cards section */}
      <section className="container mx-auto flex flex items-center space-x-6 overflow-x-scroll px-4 pt-4 pb-2 text-gray-400  md:px-8 md:pt-8">
        {Cards.map((card, ind) => (
          <CreditCard
            key={ind}
            setActive={setActive}
            Active={Active}
            {...card}
          />
        ))}
      </section>
      <section className="container mx-auto flex items-center justify-between px-4 pt-20 pb-2 text-gray-400 md:px-8">
        <p className="text-center text-xs font-medium uppercase leading-snug tracking-widest text-gray-400">
          Recommended Offers
        </p>
      </section>
      <section className="container mx-auto flex flex items-center justify-between space-x-6 overflow-x-scroll px-4 pt-4 pb-2 text-gray-400 md:px-8 md:pt-8">
        {Offers.map((offer, ind) => (
          <>
            {offer.type === 'Recommended ' ? (
              <Coupon key={ind} {...offer} />
            ) : null}
          </>
        ))}
      </section>
      <section className="container mx-auto flex items-center justify-between px-4 pt-20 pb-2 text-gray-400 md:px-8">
        <p className="text-center text-xs font-medium uppercase leading-snug tracking-widest text-gray-400">
          Tourism
        </p>
      </section>
      <section className="container mx-auto flex flex items-center justify-between space-x-6 overflow-x-scroll px-4 pt-4 pb-2 text-gray-400 md:px-8 md:pt-8">
        {Offers.map((offer, ind) => (
          <>
            {offer.type === 'tourism' ? (
              <Coupon key={ind} color="#7FC0B1" {...offer} />
            ) : null}
          </>
        ))}
      </section>
      <section className="container mx-auto flex items-center justify-between px-4 pt-20 pb-2 text-gray-400 md:px-8">
        <p className="text-center text-xs font-medium uppercase leading-snug tracking-widest text-gray-400">
          Food
        </p>
      </section>
      <section className="container mx-auto flex flex items-center justify-between space-x-6 overflow-x-scroll px-4 pt-4 pb-2 text-gray-400 md:px-8 md:pt-8">
        {Offers.map((offer, ind) => (
          <>
            {offer.type === 'food' ? (
              <Coupon key={ind} color="#EFC76F" {...offer} />
            ) : null}
          </>
        ))}
      </section>
      <section className="pb-48"></section>
    </>
  )
}

export default Home
