import { useLoaderData } from "react-router";
import PageBanner from "../../components/PageBanner/PageBanner";
import VisaCard from "../../components/VisaCard/VisaCard";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
    const lastedVisa = useLoaderData()

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
        console.log("update id ", updateId)
    }
    return (
        <div>
            <PageBanner bgImg="https://i.ibb.co.com/P1SZ96F/section-6.png" title="My Added Visa" path="my-added-visa"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4 md:px-0">
                {
                    lastedVisa.map(visa =>  <VisaCard key={visa._id} visa={visa} onDelete={handleDelete} onUpdate={handleUpdate}/>)
                }
            </div>
        </div>
    );
};

export default MyAddedVisa;