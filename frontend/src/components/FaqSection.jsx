import EmailSignup from "./EmailSignup";
import React, { useState } from "react";

/*
========================================================

FAQ SECTION

FAQ = Frequently Asked Questions

This section teaches some of the most important React concepts.

Concepts learned in this component:

1. useState()
   → React remembers data.

2. Arrays of Objects
   → Store multiple questions in one place.

3. map()
   → Generate UI automatically instead of
     writing the same HTML many times.

4. Conditional Rendering
   → Show the answer only when needed.

5. Click Events (onClick)
   → User interaction.

========================================================
*/

import "./FaqSection.css";

function FaqSection() {

    /*
    ========================================================

    React State

    Earlier we used:

    const [isOpen, setIsOpen] = useState(false);

    That only remembered

        Open
        or
        Closed

    The problem:

    If one FAQ opened,
    ALL FAQs opened.

    So we changed our approach.

    Now we remember

    WHICH FAQ

    is currently open.

    openIndex = null
        → Nothing is open.

    openIndex = 0
        → First question is open.

    openIndex = 1
        → Second question is open.

    openIndex = 2
        → Third question is open.

    and so on...

    This is exactly how Netflix
    and many real React applications
    build accordions.

    ========================================================
    */

    const [openIndex, setOpenIndex] = useState(null);

    /*
    ========================================================

    FAQ DATA

    Instead of writing

        Question
        Answer

    six different times,

    we store everything inside an array.

    Each object has

    question
    answer

    React will automatically create
    all FAQ cards using map().

    ========================================================
    */

    const faqs = [

        {
            question: "What is Netflix?",
            answer:
                "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
        },

        {
            question: "How much does Netflix cost?",
            answer:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device for one fixed monthly fee.",
        },

        {
            question: "Where can I watch?",
            answer:
                "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices.",
        },

        {
            question: "How do I cancel?",
            answer:
                "Netflix is flexible. There are no annoying contracts and no commitments. You can cancel your account online anytime.",
        },

        {
            question: "What can I watch on Netflix?",
            answer:
                "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more.",
        },

        {
            question: "Is Netflix good for kids?",
            answer:
                "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly shows and movies.",
        },

    ];

    return (

        <section className="faq">

            {/* Main Heading */}

            <h2>

                Frequently Asked Questions

            </h2>

            {/*
            ====================================================

            map()

            Instead of writing

            <div>Question 1</div>
            <div>Question 2</div>
            <div>Question 3</div>

            React loops through every object
            inside the array.

            faq
                → current object

            index
                → current position

                0
                1
                2
                3
                ...

            key

            React requires every generated element
            to have a unique key.

            ====================================================
            */}

            {faqs.map((faq, index) => (

                <div key={index}>

                    {/* ===============================
                        QUESTION
                    ================================ */}

                    <div

                        className="faq-item"

                        onClick={() =>

                            /*
                            ======================================

                            If the clicked FAQ

                            is already open

                            close it.

                            Otherwise

                            open that FAQ.

                            Example

                            openIndex = 2

                            User clicks Question 2 again

                            →

                            openIndex becomes null

                            Everything closes.

                            ======================================
                            */

                            setOpenIndex(

                                openIndex === index

                                    ? null

                                    : index

                            )

                        }

                    >

                        {/* Question */}

                        <h3>

                            {faq.question}

                        </h3>

                        {/*

                        If current question
                        is open

                        show

                        ×

                        Otherwise

                        show

                        +

                        */}

                        <span>

                            {openIndex === index ? "×" : "+"}

                        </span>

                    </div>

                    {/* ===================================
                        ANSWER

                        Only show the answer if

                        current index

                        equals

                        openIndex

                        This is called

                        Conditional Rendering.

                    ==================================== */}

                    {openIndex === index && (

                        <div className="faq-answer">

                            <p>

                                {faq.answer}

                            </p>

                        </div>

                    )}

                </div>

            ))}
<EmailSignup />
        </section>

    );

}

export default FaqSection;