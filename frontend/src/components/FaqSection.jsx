import React, {useState} from "react";

/*
====================================

FAQ SECTION

FAQ means:

Frequently
Asked
Questions

This component will later become interactive.

For now we are only building
the layout.

====================================
*/

import "./FaqSection.css";

function FaqSection() {

    // Stores whether the first FAQ is open or closed.
    // false = closed
    // true = open
    // isOpen

    const [isOpen, setIsOpen] = useState(false);

    return (

        <section className="faq">

            {/* Section Heading */}

            <h2>

                Frequently Asked Questions

            </h2>

            {/* First Question */}

            <div className="faq-item">

                <h3>

                    What is Netflix?

                </h3>

                <span>+</span>

            </div>

        </section>

    );

}

export default FaqSection;