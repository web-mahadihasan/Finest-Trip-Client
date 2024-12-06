import { useLoaderData } from "react-router";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import UpdateVisaData from "../../components/UpdateVisaData/UpdateVisaData";
import { useAuth } from "../../provider/AuthProvider";
import { RiCloseLargeLine } from "react-icons/ri";


const MyAddedVisa = () => {
    const loadedAddedVisa = useLoaderData()
    const updateRef = useRef()
    const [visaUpdateData, setVisaUpdateData] = useState({})
    const {user} = useAuth()

    // useEffect(() => {
    //     const myAdedData = loadedAddedVisa.filter(prevD =>  prevD.userEmail ===   user.email)
    //     setVisaUpdateData(myAdedData)
    // }, [])


    const handleDelete = (deletedId) =>  {
        Swal.fire({
            title: "Are you sure?",
            text: "Onece deleted it will be delete form database!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#63AB45",
            confirmButtonText: "Delete",
            cancelButtonText: "Keep"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete-visa/${deletedId}`, {
                    method: "DELETE",
                })
                .then(res =>  res.json())
                .then(data =>  {
                    console.log(data)
                    if(data.deletedCount > 0){
                        // const remainingApplication = [...visaApplicationData].filter(prevData =>  prevData._id !==   appliedId)
                        // setVisaApplicationData(remainingApplication)
                        Swal.fire({
                            title: "Success!",
                            text: "Successfully delelte visa.",
                            icon: "success"
                          });
                    }
                }).catch(err =>  {
                    Swal.fire({
                        title: "Falied",
                        text: "Fetching error when cancel application! Try again.",
                        icon: "error"
                      });
                })
            }
          });
    }
    const handleUpdate = (updateId) =>  {
        updateRef.current.showModal()
        const filterVisa = loadedAddedVisa.find(prevD =>  prevD._id ===  updateId)
        setVisaUpdateData(filterVisa)
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/P1SZ96F/section-6.png" title="My Added Visa" path="my-added-visa"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 md:px-0">
                {
                    loadedAddedVisa.map(visa =>  <VisaCard key={visa._id} visa={visa} onDelete={handleDelete} onUpdate={handleUpdate}/>)
                }
            </div>
            {/* // modal  */}
            <div className="modal">
                <dialog ref={updateRef} id="my_modal_4" className={`modal`} style={{background: "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)"}}>
                    <div className="modal-box max-w-5xl">
                        <form method="dialog">
                            <button className="btn btn-sm md:btn-md border border-primary btn-circle right-5 absolute top-4"><RiCloseLargeLine size={20}/></button>
                        </form>
                        <UpdateVisaData prevVisaData={visaUpdateData} onApplicationSubmit={handleUpdate}/>
                    </div>
                </dialog>
            </div>
            {/* Modal close  */}
        </div>
    );
};

export default MyAddedVisa;