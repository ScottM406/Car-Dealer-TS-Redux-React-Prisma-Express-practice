import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import { postNewShowingRequest, setNewShowingRequestInputValue } from "../../state/newShowingRequestSlice";


interface Props {
  vehicleID: number
  vehicleYear: number
  vehicleMake: string
  vehicleModel: string
}

const RequestShowingWidget: React.FC<Props> = ({ vehicleID, vehicleYear, vehicleMake, vehicleModel} ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const newShowingRequestValues = useSelector((state: RootState) => state.newShowingRequest);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const currentTime = new Date()
    const formattedTime = currentTime.toISOString().slice(0,16);
    const dateInput = (document.getElementById('request-showing-widget-datetime-input') as HTMLInputElement);
    if (dateInput) {
      dateInput.min = formattedTime
    }
  }, []);

  const postRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const completeNewShowingRequestValues = {
      ...newShowingRequestValues,
      carsOnLotID: vehicleID
    };
    dispatch(postNewShowingRequest(completeNewShowingRequestValues));
    setFormSubmitted(true);
  };

  return (
    <div id="request-showing-widget">
      <div id="request-showing-widget-block" className={`collapse card card-body ${isOpen ? "show" : ""}`}>
        <h1>{vehicleYear} {vehicleMake} {vehicleModel}</h1>
        {formSubmitted ?
          <p>Thank you for setting up a showing! A sales professional will be reaching out soon to finalize your showing.</p>
          :
          <form onSubmit={postRequest}>
            <label htmlFor="request-showing-firstname-input">First Name:</label>
            <input
            type="text"
            name="firstname"
            id="request-showing-firstname-input"
            required
            value={newShowingRequestValues.firstName}
            onChange={(e) => dispatch(setNewShowingRequestInputValue({ field: 'firstName', value: e.target.value }))}
            />
            <label htmlFor="request-showing-lastname-input">Last Name:</label>
            <input
            type="text"
            name="lastname"
            id="request-showing-lastname-input"
            required
            value={newShowingRequestValues.lastName}
            onChange={(e) => dispatch(setNewShowingRequestInputValue({ field: 'lastName', value: e.target.value }))}
            />
            <label htmlFor="request-showing-telephone-number-input">Phone Number:</label>
            <input
            type="tel"
            name="telephone"
            id="request-showing-telephone-number-input"
            required
            value={newShowingRequestValues.phoneNumber}
            onChange={(e) => dispatch(setNewShowingRequestInputValue({ field: 'phoneNumber', value: e.target.value }))}
            />
            <label htmlFor="request-showing-email-input">Email Address:</label>
            <input
            type="email"
            name="email"
            id="request-showing-email-input"
            required
            value={newShowingRequestValues.emailAddress}
            onChange={(e) => dispatch(setNewShowingRequestInputValue({ field: 'emailAddress', value: e.target.value }))}
            />
            <label htmlFor="request-showing-widget-datetime-input">Desired Date and Time:</label>
            <input
            type="datetime-local"
            name="datetime"
            id="request-showing-widget-datetime-input"
            value={newShowingRequestValues.desiredTime}
            onChange={(e) => dispatch(setNewShowingRequestInputValue({ field: 'desiredTime', value: e.target.value }))}
            />
            <div>
            <label>Request Showing </label>
            <input
            type= "radio"
            name="showing-type"
            checked={!newShowingRequestValues.testDriveRequested}
            onChange={() => dispatch(setNewShowingRequestInputValue({ field: 'testDriveRequested', value: false}))}
            />
            </div>
            <div>
            <label>Request Showing and Test Drive: </label>
            <input
            type="radio"
            name="showing-type"
            checked={newShowingRequestValues.testDriveRequested}
            onChange={() => dispatch(setNewShowingRequestInputValue({ field: 'testDriveRequested', value: true }))}
            />
            </div>
            <button type="submit">Request Showing</button>
          </form>  
        }
      </div>
    <button
    id="request-showing-button"
    className="btn btn-primary"
    type="button"
    data-bs-toggle="collapse"
    onClick={() => setIsOpen(!isOpen)}
    aria-expanded={isOpen}
    aria-controls="request-showing-widget-block"
    >
    Request a showing or test drive!
    </button>
    </div>
  )
}

export default RequestShowingWidget;