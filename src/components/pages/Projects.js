import React from "react";
import doggy from "../../assets/images/doggydaycare.png"

export default function Projects() {
    return (
        <div>
            <br />
            <center><h1>Featured Projects</h1></center>
            <br />

            <center><h3>Doggy Daycare</h3></center>
            <center><a className="projectImg" href="https://lit-everglades-07230.herokuapp.com/"><img src={doggy} className="doggy" alt="doggy_daycare"></img></a></center>
        </div>

    )
}