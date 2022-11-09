import { useState } from 'react'
import {
  AcademicCapIcon,
  GlobeIcon,
  IdentificationIcon,
  PhoneIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline'
import CodechefIcon from '../assets/codechef-icon.svg'
import { countryList } from '../assets/Countries'
import loader from '../assets/loading.svg'
import database from '../utils/supabase'

function Registration({ SetisSuccessfull, referalId }) {
  const [ismuted, Setismuted] = useState(true)
  const [isLoading, SetisLoading] = useState(false)
  const [formDetails, SetformDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    country: '',
    university: '',
  })
  const [error, Seterror] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    country: '',
    university: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    let flag = true
    Object.values(error).forEach((obj) => {
      if (obj !== '') {
        flag = false
        return
      }
    })
    Object.values(formDetails).forEach((obj) => {
      if (obj === '') {
        flag = false
        return
      }
    })
    if (!flag) return
    SetisLoading(true)
    const { firstName, lastName, email, username, country, university } =
      formDetails
    const { error: err } = await database.from('registrations').insert({
      data: {
        firstName,
        lastName,
        email,
        username,
        country,
        university,
        refby: referalId.current ? referalId.current : '',
      },
    })
    if (err) {
      console.log(err)
      SetisLoading(false)
      return
    }
    referalId.current = res.key
    SetisLoading(false)
    SetisSuccessfull(true)
  }

  return (
    <div className="py-16 flex justify-center " id="registration">
      <div className="max-w-4xl flex  flex-col md:flex-row rounded-lg overflow-hidden">
        <div
          className="w-full text-sm font-squidgame bg-[#04c8bb] text-black items-center flex flex-col space-y-2 p-8"
          style={{ height: 'max-content' }}
        >
          <div className="text-2xl md:text-4xl ">ReGiStRaTiOn</div>
          <div className="font-montserrat text-sm text-center px-5 font-bold">
            Embark on the code cooking journey off in the far lands of
            CodeChef's turf
          </div>
          <div className="relative ">
            <IdentificationIcon className="h-6 w-6 absolute left-2 top-2 text-gray-500 " />
            <input
              className="h-10 w-[18rem] pl-10 py-2 pr-2 text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="First Name"
              name="firstName"
              value={formDetails.firstName}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
                if (e.target.value.length < 3) {
                  Seterror((prev) => ({
                    ...prev,
                    firstName: 'Atleast 3 Charachter',
                  }))
                } else if (error.firstName != '') {
                  Seterror((prev) => ({
                    ...prev,
                    firstName: '',
                  }))
                }
              }}
            />
            {error.firstName !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs font-extralight font-sans hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.firstName}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <IdentificationIcon className="h-6 w-6 absolute left-2 top-2 text-gray-500 " />
            <input
              className="h-10 w-[18rem] pl-10 py-2 pr-2 text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Last Name"
              name="lastName"
              value={formDetails.lastName}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
                if (e.target.value.length < 3) {
                  Seterror((prev) => ({
                    ...prev,
                    lastName: 'Atleast 3 Charachter',
                  }))
                } else if (error.lastName != '') {
                  Seterror((prev) => ({
                    ...prev,
                    lastName: '',
                  }))
                }
              }}
            />
            {error.lastName !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs font-extralight font-sans hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.lastName}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <img
              src={CodechefIcon}
              className="h-6 w-6 absolute left-2 top-2 text-gray-200 opacity-70"
            />
            <input
              className="h-10 w-[18rem] pl-10 py-2 pr-2 text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Codechef Username"
              name="username"
              value={formDetails.username}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
                if (e.target.value.length < 3) {
                  Seterror((prev) => ({
                    ...prev,
                    username: 'Atleast 3 Charachter',
                  }))
                } else if (error.username != '') {
                  Seterror((prev) => ({
                    ...prev,
                    username: '',
                  }))
                }
              }}
            />
            {error.username !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs  font-extralight font-sans hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.username}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <PhoneIcon className="h-6 w-6 absolute left-2 top-2 text-gray-500 " />
            <input
              className="h-10 w-[18rem] pl-10 py-2 pr-2 text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Email"
              name="email"
              value={formDetails.email}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
                const re =
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                if (!re.test(e.target.value)) {
                  Seterror((prev) => ({
                    ...prev,
                    email: 'Not Valid',
                  }))
                } else if (error.email != '') {
                  Seterror((prev) => ({
                    ...prev,
                    email: '',
                  }))
                }
              }}
            />
            {error.email !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs font-extralight font-sans hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.email}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <GlobeIcon className="h-6 w-6 absolute left-2 top-2 text-gray-500 " />
            <select
              className="h-10 w-[18rem] pl-10 py-2 pr-2 appearance-none text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Country"
              name="country"
              value={formDetails.country}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  country: e.target.value,
                }))
                if (e.target.value === '') {
                  Seterror((prev) => ({
                    ...prev,
                    country: 'Select One',
                  }))
                } else if (error.country != '') {
                  Seterror((prev) => ({
                    ...prev,
                    country: '',
                  }))
                }
              }}
            >
              <option value="">Country</option>
              {countryList.map((obj, i) => (
                <option value={obj} key={i}>
                  {obj}
                </option>
              ))}
            </select>
            {error.country !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs font-sans font-extralight hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.country}
                </div>
              </div>
            )}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <AcademicCapIcon className="h-6 w-6 absolute left-2 top-2 text-gray-500 " />
            <input
              className="h-10  w-[18rem] pl-10 py-2 pr-2 text-gray-900 border-blue-900 border-2 font-montserrat font-semibold bg-gray-200 rounded-full placeholder:text-gray-500  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Organisation/University"
              name="university"
              value={formDetails.university}
              onChange={(e) => {
                SetformDetails((prev) => ({
                  ...prev,
                  university: e.target.value,
                }))
                if (e.target.value.length < 3) {
                  Seterror((prev) => ({
                    ...prev,
                    university: 'Atleast 3 Charachter',
                  }))
                } else if (error.university != '') {
                  Seterror((prev) => ({
                    ...prev,
                    university: '',
                  }))
                }
              }}
            />
            {error.university !== '' && (
              <div className="absolute right-2 top-3 group ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#BE3A6F"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <div className=" absolute text-xs font-sans font-extralight hidden group-hover:inline-block bg-blue-500 text-center text-white p-1 rounded-lg right-5 -top-1 w-28">
                  {error.university}
                </div>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="border-[2px] border-black w-[18rem] flex items-center justify-center rounded-full py-1">
              <img src={loader} alt="loading" className="h-6 w-6" />
            </div>
          ) : (
            <div
              className="border-[2px] border-black w-[18rem] text-center rounded-full py-2 cursor-pointer hover:bg-pink-700 hover:text-white transition ease-in-out duration-150"
              onClick={handleSubmit}
            >
              {' '}
              SUBMIT
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Registration
