// main Coordinator/Admin page

//Needs to have access to guest list.


//Add table to display members currently attending event.
//Table needs to have buttons to edit, update and delete.
// table needs to show counter of current members.




import React, { useContext, useCallback, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import "../../styles/coordinator.css";





export const Coordinator = (props) => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    const history = useHistory();
    const handleOnClick = useCallback((guest) => history.push('/IDcard/' + guest.guest_hash), [history]);
    const [formData, setFormData] = useState([store.guest]);
    console.log(formData)
    const addGuest = () => {
        return
    }


    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setFormData((values) => ({ ...values, [name]: value }));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { name, email } = formData;
    //     actions.addGuest(name, email).then(() => history.push("/guest"));
    // };


    return (
        // < !--Editable table-- >
        <div className="table container-fluid">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Editable table / guest list
            </h3>
            <div className="card-body">
                <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2"
                    ><a href="#!" className="text-success"
                    ><i className="fas fa-plus fa-2x" aria-hidden="true" onClick={actions.addGuest}></i></a
                        ></span>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Guest Name</th>
                                <th className="text-center">email</th>
                                <th className="text-center">Permissions</th>
                                <th className="text-center">Details</th>
                                <th className="text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.guest.map((guest, index) => {
                                return <tr>
                                    <td className="pt-3-half" contentEditable="true">{guest.name}</td>
                                    <td className="pt-3-half" contentEditable="true">{guest.email}</td>
                                    <td className="pt-3-half" contentEditable="false">VIP</td>
                                    <td className="pt-3-half">
                                        {/* details button will link to members ID card */}
                                        <span className="table-details">


                                            <button onClick={() => handleOnClick(guest)} type="button" className="btn btn-primary btn-rounded btn-sm my-0">
                                                Details
                                            </button></span>

                                    </td>
                                    <td>
                                        <span className="table-remove"
                                        ><button type="button" className="btn btn-danger btn-rounded btn-sm my-0">
                                                Remove
                                            </button></span
                                        >
                                    </td>
                                </tr>
                            })}
                            <tr>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};

Coordinator.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
};