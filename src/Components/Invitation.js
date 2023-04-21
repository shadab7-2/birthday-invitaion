import React, { Fragment } from "react";
export default function Invitation(props){
    const { subject, to, recipientName, occasion, friend1, friend2, friend3, location, hostName } = props;

    return (
       <Fragment>
        <h2> Subject: {subject}</h2>
        <p>To: {to}</p>
        <p>Hi, {recipientName}</p>
        <p>
          I am having a {occasion} next Friday at my Home. Would you like to come? It will be fun. Lots of people from my school are coming. You know some of them - {friend1}, {friend2}, {friend3}.
        </p>
        <p>
          My house is behind our school, near {location}.
        </p>
        <p>
          I hope you will come and see you soon.
        </p>
        <p>From,</p>
        <p>{hostName}</p>
        </Fragment>
    );
}