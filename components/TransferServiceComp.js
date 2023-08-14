import React, { useState, useEffect , useReducer } from "react";
import Layout from "./Layout"
import Link from 'next/link'
import { useRouter } from "next/router";
import { reducer3 } from "../reducer/reducers";
import api from "../api/api";
import { BiChevronDown } from "react-icons/bi";
import {BsThreeDots } from 'react-icons/bs'


const initialState = {
  isLoading: false,
  isError: false,
  bookingList: [],
};

const TransferServiceComp = () => {

  const params = useRouter();
  const { pathname } = params;

  const [state, dispatch] = useReducer(reducer3, initialState);

  
  useEffect(() => {
    let didCancel = false;
    const bookingList = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const data = await api.listDocuments(
          "64900092904d8c615a96",
          "64900e33e090e3f48b2d"
        );
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload:{ document: data.documents }});

        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
      
    };
    bookingList();
    return () => (didCancel = true);
    
  }, [pathname]);

  const employeeHandler = () =>
  {

  }


  const datac = {
    cardData: [
      { id: "1", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Detailing", },
      { id: "2", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "3", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Subscription", },
      { id: "4", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "5", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Subscription", },
      { id: "6", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Detailing", },
      { id: "7", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "8", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "9", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Detailing", },
      { id: "10", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "11", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "12", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Subscription", },
      { id: "13", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "14", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "15", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "16", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "17", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "18", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "19", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "21", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "22", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "23", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "24", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "25", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "26", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "27", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "28", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "29", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },
      { id: "20", fullName: "Johnny Depp", address: "3093 Cheshire Road", contact: "+971 21456320", serviceDate: "28/05/2023", serviceAssigned: "...", wallet: "IQD 100.25", serviceStatus: "Pending", payment: "cod", serviceType: "Car Wash", },

    ]
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calculate total pages
  const totalPages = Math.ceil(datac.cardData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datac.cardData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };



  return (
    <div >

      <table className="table table-compact w-full z-0">
        <thead>
          <tr>
          <th>S.No.</th>
            <th>User Id</th>
            {/* <th>address</th> */}
            <th>vehicle No.</th>
            <th>Booking Date</th>
            <th>Service Date</th>
            <th>payment</th>
            <th>service Transfer</th>
            <th>service Status</th>
          </tr>
        </thead>

        <tbody>
        {state.bookingList.map((bookingList, index) => (
          <tr key={index}>
              <th>{index+1}</th>
              <td>{bookingList.user_id}</td>
              {/* <td>{bookingList.address}</td> */}
              <td>{bookingList.veh_no}</td>
              <td>{bookingList.$createdAt}</td>
              <td>{bookingList.srv_dt}</td>
              <td>{bookingList.payment_mode}</td>
              {/* <td>{bookingList.assigned_to}</td> */}
              
              <td><div className="dropdown ">
              <a href="#ModalThreeDot"><BsThreeDots/></a>
              <ul id="ModalThreeDot" tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56">

              <Link href="/profile" className="flex me-3 hover:bg-slate-100 my-3">
                <img className='mx-2' src="/Image/headerImage/HeaderPerson.png" width={35} height={35} alt="logo" />
                <h1 className='font-semibold text-xl hover:text-black'> Profile</h1>
              </Link>

              {/* The button to open modal */}
              <label htmlFor="my-modal-6" className="flex me-3 hover:bg-slate-100 mt-1 mb-3">
                <h1 className='font-semibold text-xl hover:text-black'>Assign</h1>
              </label>

            </ul>
              </div></td>
              <td>{bookingList.status}</td>
              <div>
                
              </div>
            </tr>

          ))}
          
        </tbody>
      </table>
    
      <div className="mx-1" style={{ display: "flex", position: "fixed", bottom: 5, right: 20 }}>
        {/* Pagination buttons */}

        <button
          className="btn btn-sm hover:bg-[#002F7C] text-xs border rounded text-white bg-[#002F7C]"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn btn-sm btn-outline hover:bg-[#002F7C] mx-2  text-black rounded border border-[#002F7C] ${currentPage === index + 1 ? "bg-[#002F7C] text-white" : ""
              }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-sm hover:bg-[#002F7C] text-xs border rounded text-white bg-[#002F7C]"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Next
        </button>

      </div>
      <div className="modal" id="modalThreeDot">
        <div className="modal-box w-11/12 max-w-3xl">
          {/**************INPUT TAGS**************/}
          <h1 className="font-medium text-xl text-center">Edit Service</h1>
          
          <div className="modal-action flex justify-center">
            <a
              href="#"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              x
            </a>
            <div onClick={(e) => editHandleCategory(categoryData)}>
              <a href="#" className="btn bg-[#002054] hover:bg-[#002054]">
                Add Category
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferServiceComp