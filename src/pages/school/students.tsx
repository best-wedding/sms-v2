import Layout from "../../components/Layout";
import React from "react";
import Title from "../../components/Students/Title";
// import { SearchField } from "components/search";
import { STUDENTS, HOMEROOMS } from "../../api/apiUrl";
// import { ToastContext } from "App.jsx";
import { getRequest, postRequest } from "../../api/apiCall";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../api/queryKey";
// import { SortByDateAdded } from 'components/helpers';
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cards from "components/Students/Cards";
import Table from "components/Students/Table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import LGCards from "components/Students/LGCards";

export default function Students() {
  const params: { slug: any } = useParams();
  const { slug: school } = params;

  const easysch_token: { school_uid: any } = jwt_decode(
    localStorage?.easysch_token
  );
  const { data: homerooms } = useQuery(
    [queryKeys.getClasses, easysch_token?.school_uid],
    async () => await getRequest({ url: HOMEROOMS(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
    }
  );
  const { data: studentList } = useQuery(
    [queryKeys.getStudents, easysch_token?.school_uid],
    async () => await getRequest({ url: STUDENTS(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
    }
  );
  const [rooms, setRooms] = React.useState(homerooms?.data);
  const [students, setStudents] = React.useState(studentList?.data);
  React.useEffect(() => {
    setRooms(homerooms?.data);
    setStudents(studentList?.data);
  }, [homerooms?.data, studentList?.data]);
// console.log(students)
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
      setStudents([
        ...students,
        {
          full_name: data?.data.full_name,
          image: data?.data.image,
          gender: data?.data.gender,
          email: data?.data.email,
          current_class: { name: data?.data.current_class.name },
          age: data?.data.age,
          is_debtor: data?.data.is_debtor,
          id: data?.data.id,
        },
      ]);
      setOpen(false);
      setState({
        first_name: "",
        last_name: "",
        religion: "",
        middle_name: "",
        guardian_full_name: "",
        guardian_full_name2: "",
        phone_number: "",
        phone_number2: "",
        address: "",
        state_of_origin: "",
        date_of_birth: new Date(),
        email: "",
        outstanding_debt: 0,
        class_id: "",
        gender: "",
        guardian_name: "",
        image: "",
        imageFile: "",
        // class_id: ""
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
    data.append("middle_name", state.middle_name);
    data.append("guardian_full_name", state.guardian_full_name);
    data.append("guardian_full_name2", state.guardian_full_name2);
    data.append("phone_number", state.phone_number);
    data.append("phone_number2", state.phone_number2);
    data.append("address", state.address);
    data.append("state_of_origin", state.state_of_origin);
    data.append("date_of_birth", state.date_of_birth.toString());
    data.append("email", state.email);
    data.append("outstanding_debt", state.outstanding_debt.toString());
    data.append("image", state.image);
    data.append("class_id", state.class_id);
    data.append("gender", state.gender);
    mutate({
      url: STUDENTS(easysch_token?.school_uid),
      data: data,
    });
  };
  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    religion: "",
    middle_name: "",
    guardian_full_name: "",
    guardian_full_name2: "",
    phone_number: "",
    phone_number2: "",
    address: "",
    state_of_origin: "",
    date_of_birth: new Date(),
    email: "",
    outstanding_debt: 0,
    class_id: "",
    gender: "",
    guardian_name: "",
    image: "",
    imageFile: "",
  });
  const [open, setOpen] = React.useState(false);
  return (
    <Layout>
      <Title />
      <hr className=" lg:my-10 my-4"/>
        <Cards data={students} />
        <LGCards data={students} />
        <Table  data={students} />
        <div className="my-10 w-full flex justify-between px-8 lg:px-0">
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
  );
}
