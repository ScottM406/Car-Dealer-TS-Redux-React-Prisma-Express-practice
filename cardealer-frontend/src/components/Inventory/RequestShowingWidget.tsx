import React, { useState, useEffect } from "react";

const RequestShowingWidget: React.FC = () => {
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
        <form>
          <label>First Name:</label>
          <input type="text"></input>
          <label>Last Name:</label>
          <input type="text"></input>
          <label>Phone Number:</label>
          <input type="tel"></input>
          <label>Email Address:</label>
          <input type="email"></input>
          <label>Desired Date and Time:</label>
          <input type="datetime-local" id="request-showing-widget-datetime-input"></input>
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