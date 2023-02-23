import React from "react";
import doggy from "../../assets/images/doggydaycare.png"
import booksearch from "../../assets/images/booksearch.png";

export default function Projects() {
    return (
        <div>
            <br />
            <center><h1 className="projectTitle">Featured Projects</h1></center>
            <br />

            <div>
                <center><h3>Doggy Daycare</h3></center>
                <center><a className="projectImg" href="https://lit-everglades-07230.herokuapp.com/"><img src={doggy} className="image" alt="doggy_daycare"></img></a></center>
                <br />

                <br />
                <center><h3>Google Book Search</h3></center>
                <center><a className="projectImg" href="https://enigmatic-refuge-25283.herokuapp.com/"><img src={booksearch} className="image" alt="google_book_search"></img></a></center>
                <br />
                
            </div>
        </div>

    )
}