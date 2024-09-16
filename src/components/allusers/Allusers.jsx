import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import style from "./allusers.module.css";
import { Link } from "react-router-dom";
import Spinner1 from "../spinner/Spinner1";
const Allusers = () => {
  let [users, setUsers] = useState(null);

  let [id, setId] = useState("");
  useEffect(() => {
    async function fetchDB() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      setTimeout(()=>{
        setUsers(data);
      }, 1000 )
    }
    fetchDB();
  }, [id]);

  function deleteUser(id) {
    console.log(id);
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setId(id);
      toast.success(`${id} user deleted`);
    });
  }
  if (users) {
    return (
      <article id={style.cardContainer}>
        {users?.map(({ id, username, email, password }) => {
          return (
            <section key={id} className={style.card}>
              <h1>Username : {username}</h1>
              <h3>email : {email}</h3>
              <div className={style.btnContainer}>
               <Link to={`/edit/${id}`}>
               <button>edit</button>
               </Link>
                <button onClick={() => deleteUser(id)}>delete</button>
              </div>
            </section>
          );
        })}
      </article>
    );
  } else {
    return <Spinner1/>
  }
 
};

export default Allusers;
