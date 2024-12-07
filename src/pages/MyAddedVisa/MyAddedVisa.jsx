import { Link, useLoaderData, useNavigate } from "react-router";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import UpdateVisaData from "../../components/UpdateVisaData/UpdateVisaData";
import { useAuth } from "../../provider/AuthProvider";
import { RiCloseLargeLine } from "react-icons/ri";
import { Button } from "@material-tailwind/react";


const MyAddedVisa = () => {
    const loadedAddedVisa = useLoaderData()
    const updateRef = useRef()
    const [visaUpdateData, setVisaUpdateData] = useState({})
    const {user} = useAuth()
    const navigate = useNavigate()

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
    const handleUpdateBtn = (updateId) =>  {
        updateRef.current.showModal()
        const filterVisa = loadedAddedVisa.find(prevD =>  prevD._id ===  updateId)
        setVisaUpdateData(filterVisa)
    }
    const handleUpdateInfoBtn = (updateData, id) =>  {
        fetch(`http://localhost:3000/update-data/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res =>  res.json())
        .then(data =>  {
            if(data.modifiedCount > 0) {
                updateRef.current.close()
                Swal.fire({
                    title: "Success!",
                    text: "Successfully updated visa information.",
                    icon: "success"
                  });
                  navigate("/my-added-visa")
            }
        }).catch(error =>  {
            Swal.fire({
                title: "Falied",
                text: "Failed to update visa information.",
                icon: "error"
              });
        })
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/P1SZ96F/section-6.png" title="My Added Visa" path="my-added-visa"/>
            
            {/* My Added visa  */}
            <div className="container mx-auto px-4 md:px-0 my-24">
                <div className="flex md:items-center flex-col md:flex-row justify-between my-8">
                    <div>
                        <p className="flex items-center gap-1 p-2 bg-primary-light/35 w-fit text-titleBlack px-8 rounded-bl-[15px] rounded-tr-[15px]">
                            <span className="uppercase font-rubik tracking-wide">Your Added Visa</span>
                            {/* <span><SlPlane size={22}/></span> */}
                        </p>
                        <h3 className="text-2xl md:text-3xl xl:text-4xl font-medium my-4 font-rubik">Here's all visa Added by you</h3>
                    </div>
                    <div className="p-1 border border-dashed border-primary rounded-lg w-fit h-fit mb-6 md:mb-0">
                        <Link to={"/add-visa"} className=""><Button variant="filled" className="bg-primary font-rubik font-medium text-sm tracking-wide hover:bg-primary-dark duration-300 focus:bg-primary-dark">Add more visa</Button></Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        loadedAddedVisa.map(visa =>  <VisaCard key={visa._id} visa={visa} onDelete={handleDelete} onUpdate={handleUpdateBtn}/>)
                    }
                </div>
            </div>
            {/* // modal  */}
            <div className="modal">
                <dialog ref={updateRef} id="my_modal_4" className={`modal`} style={{background: "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)"}}>
                    <div className="modal-box max-w-5xl">
                        <form method="dialog">
                            <button className="btn btn-sm md:btn-md border border-primary btn-circle right-5 absolute top-4"><RiCloseLargeLine  size={20}/></button>
                        </form>
                        <UpdateVisaData prevVisaData={visaUpdateData} onUpdateVisaInfo={handleUpdateInfoBtn}/>
                    </div>
                </dialog>
            </div>
            {/* Modal close  */}
        </div>
    );
};

export default MyAddedVisa;