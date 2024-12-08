import { Link, useLoaderData, useNavigate } from "react-router";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import UpdateVisaData from "../../components/UpdateVisaData/UpdateVisaData";
import { useAuth } from "../../provider/AuthProvider";
import { RiCloseLargeLine } from "react-icons/ri";
import { Button } from "@material-tailwind/react";
import { LuUserRoundCog } from "react-icons/lu";
import ProfielPerformance from "./profilePerformance";
import CountUp from "react-countup";
import passport from "../../assets/passport.png"

const MyAddedVisa = () => {
    const loadedAddedVisa = useLoaderData()
    const updateRef = useRef()
    const [visaAddedByUser, setVisaAddedByUser] = useState(loadedAddedVisa)
    const {user} = useAuth()
    const navigate = useNavigate()

    const performance = [
        { name: "Visa Approved", progress: 85 },
        { name: "Cancellation", progress: 25 }
    ]
    useEffect(() => {
        const myAdedData = loadedAddedVisa.filter(prevD =>  prevD.userEmail ===   user.email)
        setVisaAddedByUser(myAdedData)
    }, [])

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
                        const remainingApplication = [...visaAddedByUser].filter(prevData =>  prevData._id !==   appliedId)
                        setVisaAddedByUser(remainingApplication)
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
        setVisaAddedByUser(filterVisa)
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
    console.log(user)
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/P1SZ96F/section-6.png" title={"Welcome, " + user.displayName} path="my-added-visa"/>
            
            {/* My Added visa  */}
            <div className="container mx-auto px-4 md:px-0 my-24">
                <p className="flex items-center gap-2 justify-center">
                    <span><img src={passport} alt="Visa category icon" className="w-9"/></span>
                    <span className="uppercase font-rubik">Added Visa</span>
                </p>
                <h3 className="text-2xl text-center md:text-3xl xl:text-4xl font-medium mt-3 mb-16 font-rubik">A Happy Journey With Us</h3>
                {/* Profile  */}
                <div className="border grid grid-cols-1 lg:grid-cols-4 shadow-md">
                    <div className="p-8 bg-primary-light/15 col-span-1">
                        <h3 className="text-2xl xl:text-3xl font-medium my-4 font-rubik text-titleBlack">Your Dashborad</h3>
                         <img src={user.photoURL} alt="" className="w-28 h-32 rounded-md shadow-lg"/>
                         <Button variant="filled" className="bg-primary font-jost font-medium tracking-wider mt-3">Update Profile</Button>                 
                    </div>
                    <div className="p-5 col-span-3">
                        <div className="">
                            <p className="flex items-center gap-2 mb-2 border p-2 w-fit px-4 border-primary rounded-md">
                                <span><LuUserRoundCog size={22}/></span>
                                <span className="uppercase font-rubik">User Info</span>
                            </p>
                            <div className="flex gap-4 items-center justify-between flex-wrap">
                                <h4 className="text-2xl font-jost font-medium text-titleBlack/85">Name: <span className="text-titleBlack/60">{user?.displayName}</span></h4>
                                <h4 className="text-2xl font-jost font-medium text-titleBlack/85">Email: <span className="text-titleBlack/60">{user?.email}</span></h4>
                                <h4 className="text-2xl font-jost font-medium text-titleBlack/85">Account Create: <span className="text-titleBlack/60 ">12-14-2024</span></h4>
                            </div>
                            {/* performance  */}
                            <div className="flex items-center justify-between gap-6 flex-wrap">
                                {performance.map((performance, index) => (
                                    <ProfielPerformance key={index} title={performance.name} targetProgress={performance.progress} />
                                ))}
                                {/* Review  */}
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="border  mt-6 h-28 py-4 px-6 border-primary rounded-md w-fit mx-auto">
                                        <p className="font-jost text-center text-xl p-1">Rating</p>
                                        <h3 className="text-4xl font-rubik font-bold text-center text-primary">
                                            <CountUp start={1.1} end={4.9} decimals={1} delay={1} duration={3} />
                                            <span className="text-titleBlack/70"> / <span className="text-2xl text-titleBlack/70">5.0</span> </span>
                                        </h3>
                                    </div>
                                    <p className="text-xl text-center font-medium font-jost text-titleBlack/85">Review by Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Added visa  */}
                <div className=" my-24">
                    <div className="flex md:items-center flex-col md:flex-row justify-between mb-10">
                        <div>
                            <p className="flex items-center gap-1 p-2 bg-primary-light/35 w-fit text-titleBlack px-8 rounded-bl-[15px] rounded-tr-[15px]">
                                <span className="uppercase font-rubik tracking-wide">Vias Added by You</span>
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
                            visaAddedByUser.length > 0 ? 
                            visaAddedByUser.map(visa =>  <VisaCard key={visa._id} visa={visa} onDelete={handleDelete} onUpdate={handleUpdateBtn}/>)
                            : (<h3 className="col-span-2 text-3xl font-rubik font-medium text-red-600">Yout don't Add any visa </h3> )
                        }
                    </div>
                </div>
            </div>

            {/* // modal  */}
            <div className="modal">
                <dialog ref={updateRef} id="my_modal_4" className={`modal`} style={{background: "linear-gradient(125deg, rgba(99, 171, 69, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)"}}>
                    <div className="modal-box max-w-5xl">
                        <form method="dialog">
                            <button className="btn btn-sm md:btn-md border border-primary btn-circle right-5 absolute top-4"><RiCloseLargeLine  size={20}/></button>
                        </form>
                        <UpdateVisaData prevVisaData={visaAddedByUser} onUpdateVisaInfo={handleUpdateInfoBtn}/>
                    </div>
                </dialog>
            </div>
            {/* Modal close  */}
        </div>
    );
};

export default MyAddedVisa;