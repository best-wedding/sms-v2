import React from 'react'
import { Link, useParams, withRouter, Redirect, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getSchool, login } from "../api/apiCall";
import { GETSCHOOL, LOGIN_URL } from "api/apiUrl";
import jwt_decode from "jwt-decode";
import { queryKeys } from "api/queryKey";

export default function Login() {
    const history = useHistory()
    const params: {slug: any} = useParams()
    const school = params?.slug
    const location = useLocation()
    const { data } = useQuery(
      [queryKeys.getSchool, school],
      async () => await getSchool({ url: GETSCHOOL(school) }),
      {
        retry: 2,
        enabled: !!school,
      }
    );
    const [schoolData, setSchoolData] = React.useState(data?.data);
    React.useEffect(() => {
      setSchoolData(data?.data);
    }, [data?.data]);
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState<{
      email: string;
      password: string;
    }>({
      email: "",
      password: "",
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };
    const { mutate } = useMutation(login, {
      async onSuccess(data) {
        localStorage.setItem("schoolId", schoolData?.uid);
        localStorage.setItem("schoolName", schoolData?.name);
        localStorage.setItem("schoolLogo", schoolData?.logo);
        localStorage.setItem("schoolSlug", school.toLowerCase())
        const easysch_token: { groups: string[] } =
          typeof window !== "undefined" &&
          jwt_decode(localStorage?.getItem("easysch_token"));
          await setOpen(true);
          if (easysch_token?.groups.length === 2) {
            // TODO: Fix after BEc exam Dialog state isn't updating for some weird reason
            window.location.href = `/${school}/dashboard`;
            // setOpen(true);                    
            // LoginDialog({open, setOpen, school})
          }
          if (easysch_token?.groups.length === 1) {
            if (easysch_token?.groups[0] === "Teacher") {
            window.location.href = `/${school}/dashboard`;
          }
          if (easysch_token?.groups[0] === "Bursar") {
            window.location.href = `/${school}/dashboard`;
          }
          if (easysch_token?.groups[0] === "Secretary") {
            window.location.href = `/${school}/dashboard`;
          }
          if (easysch_token?.groups[0] === "Owner") {
            window.location.href = `/${school}/dashboard`;
          }
        }
      },
    });
    const submitForm = (e: any) => {
      e.preventDefault();
      mutate({
        url: LOGIN_URL(schoolData?.uid),
        data: {
          username: state.email,
          password: state.password,
          school_id: schoolData?.uid
        },
      });
    };
  return (
    <div className="w-full min-h-screen flex font-sans">
  <div className=" w-3/5 min-h-screen lg:flex items-center justify-center hidden" style={{backgroundImage: `url(${require('../images/Rectangle 1.png')})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <img src={require("../images/Group 3.png")} alt="" className='transform transition-all duration-500 hover:scale-105' />
  </div>
  <div className="lg:w-2/5 mx-auto h-full items-center justify-center flex flex-col">
    <img src={schoolData?.logo} className="block mt-10" alt="" />
    <h1 className="text-center font-bold text-3xl text-black lg:mb-20 lg:mt-0 mt-10 mb-10">
      Sign In
    </h1>
    <form onSubmit={submitForm}>
      <div className="mb-5 ">
        <div className=" mb-3">
          Email Address
        </div>
        <input required onChange={handleChange} type="text" className=" form-input lg:h-11 lg:w-rectangle py-2 w-min_rectangle h-7 mx-auto border-indigo-500 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="Example@rocket.mail" id="email" name="email" />
      </div>
      <div className="mb-2 ">
        <div className=" mb-3">
          Password
        </div>
        <input required onChange={handleChange} type="password" className="form-input lg:h-11 lg:w-rectangle py-2 w-min_rectangle h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="*******" id="password" name="password" />
      </div>
      <div className=" mb-6 text-indigo-500 flex flex-row-reverse font-semibold text-sm cursor-pointer">Forgot Password?</div>
      <button type="submit" className="bg-indigo-500 text-white h-11 lg:mx-auto lg:w-rectangle w-min_rectangle h-7 flex items-center justify-center rounded-lg font-semibold text-sm mb-4 cursor-pointer hover:bg-white hover:text-indigo-500 transform hover:scale-110 transition-all duration-700 border-2 border-indigo-500" id="submit">Login</button>
      <div className="text-center font-semibold text-sm">
        Are you new here? <span className="text-indigo-500">Sign Up</span>
      </div>
    </form>
  </div>
</div>

  )
}
