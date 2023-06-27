import { useRef } from "react";
// import PropTypes from "prop-types";

import styles from "../Css/UserCompo.module.css"


function UserHere(props){
  
  
  const { user, deleteUser, editUser, saveUser, selectOne } = props;

  const nameRefHere = useRef(null);
  const emailRefHere = useRef(null);
  const roleRefHere = useRef(null);

// here main function starts

  return (

    // here we have to initialize one table row 



    <tr key={user.id} className={user.selected ? styles.selected : ""}>

      <td>
        <label for={`check-${user.id}`}>
          <input
            id={`check-${user.id}`}
            type="checkbox"
            placeholder=""
            data={`${user.selected}`}
            onChange={() => selectOne(user.id)}
            checked={user.selected}
          ></input>
        </label>
      </td>

{/* // here we have to initialize the table data in a one row   */}
      <td>
        {/* Here we have to select the icons (delete) */}
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          placeholder=""
          ref={nameRefHere}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>


      {/* // here we have to initialize the table data in a one row   */}



      <td>
         {/* Here we have to select the Email */}
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="email"
          placeholder=""
          ref={emailRefHere}
          name="email"
          defaultValue={user.email}
        />
      </td>


{/* // here we have to initialize the table data in a one row   */}




      <td>
         {/* Here we have to select the Role */}
        <input
          className={user.edit ? styles.editable : styles.readOnly}
          readOnly={!user.edit}
          type="text"
          placeholder=""
          ref={roleRefHere}
          name="role"
          defaultValue={user.role}
        />
      </td>



      {/* // here we have to initialize the table data in a one row   */}


      <td className={styles.icons}>
        {/* this is for save the data after edit */}
        {user.edit ? (
          <i
            onClick={() => saveUser(user.id, nameRefHere, emailRefHere, roleRefHere)}
            className="fas fa-save"
          ></i>
          
        ) : (
          // this is for edit the data 
          <i onClick={() => editUser(user.id)} className="fas fa-edit"></i>
        )}
             {/* this is for delete the data */}
        <i onClick={() => deleteUser(user.id)} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  );
};



export default UserHere;
