import React, { useState, useEffect } from "react";


const NewUsers = () => {


    const [ourchef, setOurchef] = useState([]);

    useEffect(() => {

        const fetchOurCheff = async () => {
            try {
                const response = await fetch("https://www.mamtismamas.com/api/cheff/allChefs")
                const jsonData = await response.json()
                // console.log(jsonData, "data")
                setOurchef(jsonData);
                const dataLength = jsonData.length;
                // console.log("Length of fetched data:", dataLength);
            } catch (err) {
                console.log(err)
            }
        }
        fetchOurCheff();

    }, []);

    let serialNumber = 1; // Initialize the serial number counter

   


    return (
        <div className="w-full">





            <div className="ease-in duration-300 overflow-x-auto w-full md:px-0">
                <h1 className="mb-3 mt-3  font-semibold text-xl">New Chefs</h1>

                <table className="table table-compact w-full z-0">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Location</th>
                            <th>User Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {ourchef?.map((item) => (

                            <tr key={item.id} >
                                <th>{serialNumber++}</th>
                                <th>{item.id}</th>
                                <td>{item.fullName || item.username}</td>
                                <td>{item.country || "Not Mentioned"}</td>
                                <td>{item.define_as || "User"}</td>
                                <td className="">
                                    <span className="p-1 rounded-md" >{item.created_at.split('T')[0]}</span>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>

            </div>



        </div>
    )
}

export default NewUsers
