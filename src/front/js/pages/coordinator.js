// main Coordinator/Admin page

//Needs to have access to guest list.


//Add table to display members currently attending event.
//Table needs to have buttons to edit, update and delete.
// table needs to show counter of current members.




import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/coordinator.css";





export const Coordinator = () => {
    const { store, actions } = useContext(Context);

    return (
        // < !--Editable table-- >
        <div className="card">
            <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Editable table
            </h3>
            <div className="card-body">
                <div id="table" className="table-editable">
                    <span className="table-add float-right mb-3 mr-2"
                    ><a href="#!" className="text-success"
                    ><i className="fas fa-plus fa-2x" aria-hidden="true"></i></a
                        ></span>
                    <table className="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Guest Name</th>
                                <th className="text-center">email</th>
                                <th className="text-center">Access Level</th>
                                <th className="text-center">Details</th>
                                <th className="text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pt-3-half" contentEditable="true">Aurelia Vega</td>
                                <td className="pt-3-half" contentEditable="true">AVega@email.com</td>
                                <td className="pt-3-half" contentEditable="false">VIP</td>
                                <td className="pt-3-half">
                                    {/* details button will link to members ID card */}
                                    <span className="table-details"
                                    ><button type="button" className="btn btn-primary btn-rounded btn-sm my-0">
                                            Details
                                        </button></span
                                    >
                                </td>
                                <td>
                                    <span className="table-remove"
                                    ><button type="button" className="btn btn-danger btn-rounded btn-sm my-0">
                                            Remove
                                        </button></span
                                    >
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
