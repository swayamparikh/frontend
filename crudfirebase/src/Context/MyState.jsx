import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDb } from "../../firebasefile/Firebase";

function MyState(props) {

    const [user, setuser] = useState({
        name: "",
        email: "",
        imageurl: "",
        location: ""
    });

    // add Product Function

    const adduser = async () => {
        // validtion
        if (user.name == "" || user.email == "" || user.imageurl == "" || user.location == "") {
            return alert("all Fields are required")
        }

        // product refrence
        // collection add karva fireDb mathi and collection name
        const userRef = collection(fireDb, "user")

        try {

            // productred , usestate to products
            await addDoc(userRef, user);
            getuser();
            alert("User added successfully");
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setuser("");

        } catch (error) {
            console.log(error)
        }
    }

    // get products data

    const [alluser, setAlluser] = useState([]);

    const getuser = async () => {
        try {
            const q = query(
                collection(fireDb, 'user'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    // data and id
                    userArray.push({ ...doc.data(), id: doc.id })
                })
                setAlluser(userArray)
            })

            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getuser();
    }, [])



    // update product 

    // allproduct item aayega
    const edituserhandle = (item) => {
        setuser(item)
    }

    // edit handle function

    const edituser = async (item) => {
        try {
            // setdoc data aayega usko change karege

            await setDoc(doc(fireDb, 'user', user.id), user)
            getuser();
            alert("User update successFully");
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setuser("")
        } catch (error) {
            console.log(error)
        }
    }


    // delete function
    const deleteuser = async (item) => {
        try {
            // deletdoc method use doc (dirdb,collection,item.id)
            await deleteDoc(doc(fireDb, "user", item.id))
            getuser();
            alert("User deleted Successfully");

        } catch (error) {
            console.log(error)
        }
    }

    // Serch funclity
    const [Serach, setsaerch] = useState("")

    return (
        <MyContext.Provider value={{ user, setuser, adduser, getuser, alluser, edituserhandle, edituser, deleteuser, Serach, setsaerch }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;