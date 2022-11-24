import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addContact,
    deleteContact,
    updateName,
    updatePhone,
} from "./features/contacts/contactSlice";
import { useState } from "react";

function App() {
    const dispatch = useDispatch();
    const contactList = useSelector((state) => state.contacts.value);
    console.log(contactList);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameUpdate, setNameUpdate] = useState("");
    const [phoneUpdate, setPhoneUpdate] = useState("");

    return (
        <div className="App">
            <h1>My Contacts</h1>
            <div className="addcontact">
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter name..."
                />
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Enter number..."
                />
                <button
                    onClick={() =>
                        dispatch(
                            addContact({
                                id: contactList[contactList.length - 1].id + 1,
                                name,
                                phone,
                            })
                        )
                    }
                    type="submit"
                >
                    Add Contact
                </button>
            </div>

            {contactList.map((contact) => (
                <div key={contact.id} className="card">
                    <div className="container">
                        <h4 className="name">
                            <b>{contact.name}</b>
                        </h4>
                        <p className="contact">{contact.phone}</p>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setNameUpdate(e.target.value)}
                            type="text"
                            placeholder="Update Name..."
                        />
                        <button
                            onClick={() =>
                                dispatch(
                                    updateName({
                                        id: contact.id,
                                        nameUpdate,
                                    })
                                )
                            }
                            type=""
                        >
                            Update Name
                        </button>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setPhoneUpdate(e.target.value)}
                            type="text"
                            placeholder="Update Phone..."
                        />
                        <button
                            onClick={() =>
                                dispatch(
                                    updatePhone({
                                        id: contact.id,
                                        phoneUpdate,
                                    })
                                )
                            }
                            type=""
                        >
                            Update Phone
                        </button>
                    </div>
                    <button
                        onClick={() =>
                            dispatch(deleteContact({ id: contact.id }))
                        }
                        type=""
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;
