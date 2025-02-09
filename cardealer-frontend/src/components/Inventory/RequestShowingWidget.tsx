import React, { useState, useEffect } from "react";

interface Props {
  vehicleID: number
  vehicleYear: number
  vehicleMake: string
  vehicleModel: string
}

const RequestShowingWidget: React.FC<Props> = ({ vehicleID, vehicleYear, vehicleMake, vehicleModel} ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const currentTime = new Date()
    const formattedTime = currentTime.toISOString().slice(0,16);
    const dateInput = (document.getElementById('request-showing-widget-datetime-input') as HTMLInputElement);
    if (dateInput) {
      dateInput.min = formattedTime
    }
  }, [])

  return (
    <div id="request-showing-widget">
      <div id="request-showing-widget-block" className={`collapse card card-body ${isOpen ? "show" : ""}`}>
        <h1>{vehicleYear} {vehicleMake} {vehicleModel}</h1>
        <form>
          <label htmlFor="request-showing-firstname-input">First Name:</label>
          <input
          type="text"
          name="firstname"
          id="request-showing-firstname-input"
          required
          />
          <label htmlFor="request-showing-lastname-input">Last Name:</label>
          <input
          type="text"
          name="lastname"
          id="request-showing-lastname-input"
          required
          />
          <label htmlFor="request-showing-telephone-number-input">Phone Number:</label>
          <input
          type="tel"
          name="telephone"
          id="request-showing-telephone-number-input"
          required
          />
          <label htmlFor="request-showing-email-input">Email Address:</label>
          <input
          type="email"
          name="email"
          id="request-showing-email-input"
          required
          />
          <label htmlFor="request-showing-widget-datetime-input">Desired Date and Time:</label>
          <input
          type="datetime-local"
          name="datetime"
          id="request-showing-widget-datetime-input"
          />
          <div>
          <label>Request Showing </label>
          <input type= "radio" name="showing-type"/>
          </div>
          <div>
          <label>Request Showing and Test Drive: </label>
          <input type="radio" name="showing-type"/>
          </div>
          <button>Request Showing</button>
        </form>
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