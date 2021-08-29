import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import {
  serviceID,
  templateID,
  userID
}
  from '../keys/keysEmailjs';

const ContactMe = () => {

  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      },
      userID
    )

    setTimeout(function () {
      setSuccessMessage("");
    }, 7000);

    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Your email has been sent successfully. Thanks!");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contact" className="contact-me">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
      </svg>
      <div className="header__wrapper">
        <h1 className="header__header contact-header">
          contact
        </h1>
      </div>
      <div className="text-center">
        <div className="highlight">
          If you have any questions or want to work together,<br /> feel free to use the form.
        </div>

        {/* custome warning alert */}

        {
          successMessage ?
            (
              <div className="alert-wrapper fixed-bottom">
                <span className="alert-send-message" role="alert">
                  <FontAwesomeIcon className="success-icon" icon={faCheckCircle} />&nbsp;&nbsp;{successMessage}
                </span>
              </div>
            )
            : null
        }

      </div>
      <div className="container">
        <div className="contact-form-wrapper">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>

            {/*Name Input*/}
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              />
              <div className="line"></div>
            </div>
            <p className="error-message">
              {errors.name && errors.name.message}
            </p>
            {/*Email Input*/}
            <div className="text-center">

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: "Please provide your email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email"
                  }
                })}
              />
              <div className="line"></div>
            </div>
            <p className="error-message">
              {errors.email && errors.email.message}
            </p>
            {/*Subject Input*/}
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                aria-invalid={errors.subject ? "true" : "false"}
                {...register("subject", {
                  required: "Ooops, you forgot to add the subject",
                })}
              />
              <div className="line"></div>
            </div>
            <p className="error-message">
              {errors.subject && errors.subject.message}
            </p>
            {/*Description*/}

            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Message"
                name="message"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", {
                  required: "Please describe shortly your project needs...",
                })}
              >
              </textarea>
              <div className="line"></div>
            </div>
            <p className="error-message">
              {errors.message && errors.message.message}
            </p>
            <div className="align-btn">
              <button className="btn-main-offer contact-btn" type="submit">Send Message!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;