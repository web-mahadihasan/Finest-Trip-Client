import toast from "react-hot-toast";
import Swal from "sweetalert2";

// Handle user Registration
const registerUser = (userData, createNewUser, updateUserProfile, setUser, error, setError, navigate) => {

    const {name, email, password, imageUrl} = userData;
    const updateData = { displayName: name, photoURL: imageUrl };
    console.log(userData)

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        
        userData = {
          name, email, imageUrl, gender,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        console.log(updateData)
        // updateUserProfile(updateData)
        //   .then(() => {
        //     fetch("http://localhost:3000/add-user", {
        //       method: "POST",
        //       headers: {
        //         "content-type": "application/json",
        //       },
        //       body: JSON.stringify(userData),
        //     })
        //       .then((res) => res.json())
        //       .then((data) => {
        //         if (data.insertedId) {
        //           toast.success("Successfully create new user");
        //           navigate("/");
        //         }
        //         console.log(data);
        //       });
        //   })
        //   .catch((err) => {
        //     Swal.fire({
        //       title: "Warning!",
        //       text: "Failed!!  while Creating New user! try again",
        //       icon: "error",
        //     });
        //   });
        console.log(result.user);
      })
      .catch((err) => {    
        if ((err = "auth/email-already-in-use")) {
          setError({
            ...error,
            alreadyUsed: "Email already used, Please try Log in",
          });
          Swal.fire({
            title: "Warning!",
            text: "Failed!!  Email already used, Please try Log in",
            icon: "error",
          });
        }
      });
}

// Handle Log in
const loginUser = (email, password, loginUserWithEmail, setError, error, setUser) => {

    loginUserWithEmail(email, password)
      .then((result) => {
        console.log(result.user)
        setUser(result.user);
        toast.success("User Successfully sing in");
        // navigate("/auth/register");
      })
      .catch((err) => {
        toast.error("Falied to Log in! Try again")
        if ((err = "auth/invalid-credential")) {
          setError({
            ...error,
            invalid: "Invalid email or password! try again",
          });
        }
        console.log(err);
      });
}

// Goole Login or Register 
const googleLogin = (loginWithGoogle, setUser) => {

    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          gender: result?.user?.gender || null,
          creationTime: result?.user?.metadata?.creationTime,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/add-user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Successfully create new user");
              // navigate("/");
            }
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Warning!",
          text: "Failed!!  while Creating New user! try again",
          icon: "error",
        });
      });
}
export {registerUser, loginUser, googleLogin }

































// createNewUser(email, password)
    //   .then((result) => {
    //     setUser(result.user);
    //     console.log(result.user)
    //     const userData = {
    //       name,
    //       email,
    //       gender,
    //       imageUrl,
    //       creationTime: result?.user?.metadata?.creationTime,
    //       lastSignInTime: result?.user?.metadata?.lastSignInTime,
    //     };
    //     updateUserProfile(updataData)
    //       .then(() => {
    //         // toast.success("successfull")
    //         fetch("http://localhost:3000/add-user", {
    //           method: "POST",
    //           headers: {
    //             "content-type": "application/json",
    //           },
    //           body: JSON.stringify(userData),
    //         })
    //           .then((res) => res.json())
    //           .then((data) => {
    //             if (data.insertedId) {
    //               toast.success("Successfully create new user");
    //               // navigate("/");
    //             }
    //             console.log(data);
    //           });
    //       })
    //       .catch((err) => {
    //         Swal.fire({
    //           title: "Warning!",
    //           text: "Failed!!  while Creating New user! try again",
    //           icon: "error",
    //         });
    //       });
    //     console.log(result.user);
    //   })
    //   .catch((err) => {
    //     if ((err = "auth/email-already-in-use")) {
    //       setError({
    //         ...error,
    //         alreadyUsed: "Email already used, Please try Log in",
    //       });
    //     }
    //   });


    // Log in 

    // loginUserWithEmail(email, password)
    //   .then((result) => {
    //     setUser(result.user);
    //     toast.success("User Successfully sing in");
    //     // navigate("/auth/register");
    //   })
    //   .catch((err) => {
    //     if ((err = "auth/invalid-credential")) {
    //       setError({
    //         ...error,
    //         invalid: "Invalid email or password! try again",
    //       });
    //     }
    //     console.log(err);
    //   });


    // Google log in 

    // loginWithGoogle()
    //   .then((result) => {
    //     console.log(result.user);
    //     setUser(result.user);
    //     const userData = {
    //       name: result?.user?.displayName,
    //       email: result?.user?.email,
    //       image: result?.user?.photoURL,
    //       gender: result?.user?.gender || null,
    //       creationTime: result?.user?.metadata?.creationTime,
    //       lastSignInTime: result?.user?.metadata?.lastSignInTime,
    //     };
    //     fetch("http://localhost:3000/add-user", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(userData),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.insertedId) {
    //           toast.success("Successfully create new user");
    //           // navigate("/");
    //         }
    //         console.log(data);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire({
    //       title: "Warning!",
    //       text: "Failed!!  while Creating New user! try again",
    //       icon: "error",
    //     });
    //   });