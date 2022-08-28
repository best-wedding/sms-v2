import Layout from '../../components/Layout'
import React from 'react'
import {BellIcon, CogIcon, PlusIcon, SearchIcon, ArrowDownIcon, UserAddIcon, ChevronDownIcon, DotsHorizontalIcon, PencilAltIcon, PencilIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline"
import { getRequest, postRequest } from 'api/apiCall'
import { TEACHERS } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { useParams } from 'react-router'
import jwtDecode from 'jwt-decode'
export default function Teachers() {
  const params:{slug: any} = useParams()
  const {slug: school} = params
  
  const easysch_token:{school_uid: any} = jwtDecode(localStorage?.easysch_token)
  const { data: teacherList } = useQuery(
    [queryKeys.getTeachers, easysch_token?.school_uid],
    async () => await getRequest({ url: TEACHERS(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
      onError(err){
        alert(err)
      }
    }
  );
  const [teachers, setTeachers] = React.useState(teacherList?.data);
  React.useEffect(() => {
    setTeachers(teacherList?.data);
  }, [teacherList?.data]);
  

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.value });
  // };
  const cache = useQueryClient();
  // const {showAlert} = React.useContext(ToastContext)
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      // showAlert({
      //   message: data?.message,
      //   severity: "success",
      // });
      setOpen(false);
      setTeachers([
        ...teachers,
        {
          user: {
            full_name: data?.data.full_name,
            image: data?.data.image,
            email: data?.data.email,
            is_active: data?.data.is_active,
            role: data?.data.groups[0]?.name,
            groups: data?.data.groups,
            phone_number: data?.data.phone_number,
          },
          gender: data?.data.gender,
          id: data?.data.id,
        },
      ]);
      setState({
        first_name: "",
        last_name: "",
        religion: "",
        phone_number: "",
        address: "",
        date_of_birth: new Date(),
        email: "",
        gender: "",
        image: "",
        imageFile: "",
        role: "",
      });
      cache.invalidateQueries();
    },
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", state.first_name);
      data.append("last_name", state.last_name);
      data.append("religion", state.religion);
      data.append("phone_number", state.phone_number);
      data.append("address", state.address);
      data.append("date_of_birth", state.date_of_birth.toString());
      data.append("email", state.email);
      data.append("gender", state.gender);
      data.append("role", state.role);
      data.append("image", state.image);

    mutate({
      url: TEACHERS(easysch_token?.school_uid),
      data: data,
    });
  };

  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    religion: "",
    phone_number: "",
    address: "",
    date_of_birth: new Date(),
    email: "",
    gender: "",
    image: "",
    imageFile: "",
    role: "",
  });
  const handleDate = (date: Date | null) => {
    setState({ ...state, date_of_birth: date });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
console.log(teachers)
  const [open, setOpen] = React.useState(false);
  return (
    <Layout>
      <div className="lg:flex grid grid-cols-2 gap-4 justify-between w-full">
      <div className="flex rounded-md shadow-sm flex-grow items-center">
        <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 lg:flex items-center pl-3 pointer-events-none hidden">
              <SearchIcon className="text-indigo-700 w-8 h-8" aria-hidden="true" />
            </div>
            <input
              type="search"
              name="search_students "
              id="search_students"
              className="block w-full focus:ring-indigo-500 focus:border-indigo-500 rounded-full py-1 h-14 lg:w-80 lg:pl-20 pl-4 placeholder-gray-400 text-lg font-normal"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-end w-full lg:pr-0">
          
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-3 md:px-12 py-3 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-6 flex items-center">
            <UserAddIcon className='h-6 mr-2 text-xl' />
            New Teacher
            </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10">
      {
        teachers?.map(data=>(
          <div className=" rounded-px20 py-8 bg-white mt-10 flex flex-col items-center col-span-1 w-full  transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg">
        <div className="flex justify-center w-full mb-6">
          <img src={data.image} alt="" className=" w-28 h-28 bg-purple-300 rounded-full object-center object-cover" />
        </div>
        <p className=' mb-2 font-bold text-xl w-full text-blue-900 text-center'>
          {data.full_name}
        </p>
        <p className="text-center text-gray-400 mb-8">Teacher Course</p>
        <div className="flex justify-center">
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center mr-4">
            <PencilIcon className='h-6' />
            </button>
          <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
            <ExternalLinkIcon className='h-6' />
            </button>
        </div>
      </div>
        ))
      }
      </div>
      <div className="mb-10 w-full flex justify-between">
        <p className=' font-normal text-base text-purple-300 hidden md:block'>
          Showing{" "}<span className="text-blue-900">1-12</span>{" "}from{" "}<span className="text-blue-900">100</span>{" "}data
        </p>
        <div className="flex w-full md:w-auto justify-center">
        <button className="rounded-px40 text-indigo-700 md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
          <ChevronLeftIcon className='h-6' />
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-indigo-700 hover:bg-white hover:text-indigo-700 text-white transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center ml-4">
          1
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-purple-300 hover:bg-indigo-700 hover:text-white text-indigo-700 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center mx-4">
          2
          </button>
        <button className="rounded-px40 border-2 border-indigo-700 bg-purple-300 hover:bg-indigo-700 hover:text-white text-indigo-700 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg w-12 h-12 flex items-center justify-center mr-4">
          3
          </button>
        <button className="rounded-px40 text-indigo-700 md:py-2 md:px-2 py-2 transform transition-all duration-500 hover:scale-110 shadow hover:shadow-lg px-2 flex items-center">
          <ChevronRightIcon className='h-6' />
          </button>
        </div>
      </div>
    </Layout>
  )
}
