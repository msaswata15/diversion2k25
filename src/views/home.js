import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Features from "../components/features";
import Practice from "../components/practice";
import Doctor from "../components/doctor";
import "./home.css";
import Navbar from "../components/Navbar";
import Meetdoc from "../components/Meetdoc";
import Footer from "../components/Footer";
import Appprom from "../components/Appprom";
import ChatBotButton from "../components/ChatBotButton";
const Home = (props) => {
  const [activeLetters, setActiveLetters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Handle modal functionality
  useEffect(() => {
    const modalOpen = document.querySelectorAll("[data-open]");
    const modalClose = document.querySelectorAll("[data-close]");

    const handleModalOpen = (event) => {
      const modal = document.querySelector(
        `[data-modal="${event.target.dataset.open}"]`
      );
      if (modal) {
        modal.style.display = "flex";
      }
    };

    const handleModalClose = (event) => {
      const modal = document.querySelector(
        `[data-modal="${event.target.dataset.close}"]`
      );
      if (modal) {
        modal.style.display = "none";
      }
    };

    modalOpen.forEach((button) => {
      button.addEventListener("click", handleModalOpen);
    });

    modalClose.forEach((button) => {
      button.addEventListener("click", handleModalClose);
    });

    // Cleanup event listeners
    return () => {
      modalOpen.forEach((button) => {
        button.removeEventListener("click", handleModalOpen);
      });
      modalClose.forEach((button) => {
        button.removeEventListener("click", handleModalClose);
      });
    };
  }, []);

  // Handle search functionality
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json"
        );
        const data = await response.json();
        const filteredData = data.filter((item) => {
          const firstLetter = item.disease.charAt(0).toLowerCase();
          return activeLetters.includes(firstLetter);
        });
        setSearchResults(filteredData.slice(0, 6)); // Show only 6 results
        setShowResults(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (activeLetters.length > 0) {
      fetchData();
    } else {
      setShowResults(false);
    }
  }, [activeLetters]);

  const handleLetterClick = (letter) => {
    if (activeLetters.includes(letter)) {
      setActiveLetters(activeLetters.filter((l) => l !== letter));
    } else {
      setActiveLetters([...activeLetters, letter]);
    }
  };

  // Handle doctor carousel scroll
  const handleCarouselScroll = (direction) => {
    const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
    const scrollAmount = 300;

    if (doctorsDiv) {
      if (direction === "previous") {
        doctorsDiv.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "next") {
        doctorsDiv.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="home-container1">
      <Helmet>
        <title>Medica Healthcare</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <ChatBotButton />
      {/* Modal Section */}
      <div data-modal="practices" className="home-modal1">
        <div className="home-practices1">
          <div className="home-heading10">
            <span className="home-header10">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
              onClick={() => {
                const modal = document.querySelector(
                  '[data-modal="practices"]'
                );
                if (modal) {
                  modal.style.display = "none";
                }
              }}
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid1">
            <div className="home-section1">
              <div className="home-heading11">
                <span className="home-header11">Cardiology</span>
                <span className="home-caption1">
                  Our team consists of highly skilled and experienced cardiology
                  specialists dedicated to providing exceptional cardiovascular
                  care.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text10">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image10"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading12">
                <span className="home-header12">Orthopedics</span>
                <span className="home-caption2">
                  Our team consists of highly skilled and experienced orthopedic
                  specialists dedicated to providing exceptional musculoskeletal
                  care. With expertise in treating bone, joint, and spine
                  conditions, we are committed to helping patients regain
                  mobility and improve their quality of life.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text11">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image11"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading13">
                <span className="home-header13">Ophtalmology</span>
                <span className="home-caption3">
                  Our team consists of highly skilled and experienced
                  ophthalmology specialists dedicated to providing exceptional
                  eye care. With expertise in diagnosing and treating a wide
                  range of vision and eye health conditions, we are committed to
                  preserving and enhancing your sight.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text12">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image12"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading14">
                <span className="home-header14">Pediatrics</span>
                <span className="home-caption4">
                  Our team consists of highly skilled and experienced pediatrics
                  specialists dedicated to providing exceptional care for
                  infants, children, and adolescents. With a compassionate
                  approach, we focus on promoting healthy growth, development,
                  and well-being at every stage of childhood.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text13">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image13"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading15">
                <span className="home-header15">Nutrition</span>
                <span className="home-caption5">
                  Our team consists of highly skilled and experienced nutrition
                  specialists dedicated to promoting optimal health through
                  personalized dietary guidance. With expertise in balanced
                  nutrition and wellness, we help individuals achieve their
                  health goals through informed and sustainable choices.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text14">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image14"
                />
              </div>
            </div>
            <div className="home-section6">
              <div className="home-heading16">
                <span className="home-header16">General</span>
                <span className="home-caption6">
                  Our team consists of highly skilled and experienced medical
                  specialists dedicated to providing comprehensive and
                  compassionate healthcare. With expertise across various
                  medical fields, we are committed to ensuring the well-being
                  and quality of life of our patients.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text15">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <Navbar />
        <div className="home-main1">
          <div className="home-content10">
            <div className="home-heading17">
              <h1 className="home-header18">
                Your Health, Our Priority Compassionate Care You Can Trust
              </h1>
              <p className="home-caption7">
                At our hospital, we are committed to providing exceptional
                medical care with a compassionate touch. Your well-being is at
                the heart of everything we do. With world-class doctors,
                state-of-the-art technology, and a history of successful
                treatments, we ensure that you receive the best care possible.
              </p>
            </div>
            <button
              className="button button-main home-book3"
              onClick={() => (window.location.href = "/auth")}
            >
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image20"
              />
              <span>Book an appointment</span>
            </button>
          </div>
          <div className="home-image21">
            <img
              alt="image"
              src="/doctor-image-1500w.png"
              className="home-image22"
            />
          </div>
        </div>
        <div id="features" className="home-features1">
          <div className="home-content11">
            <Features
              title="Virtual Assistant"
              icon="/Icons/arrow-2.svg"
              description="Our Virtual Assistant automates appointments, manages records, handles billing, and streamlines hospital operations efficiently."
            ></Features>
            <Features
              title="Virtual Clinic"
              icon="/Icons/arrow-2.svg"
              description="Our Virtual Clinic enables remote consultations, manages patient records, and streamlines prescriptions for efficient healthcare delivery."
            ></Features>
            <Features
              title="Clinical results"
              icon="/Icons/arrow-2.svg"
              description="Our Clinical Results system automates test reporting, manages patient records, and ensures quick and accurate result delivery."
            ></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices2">
        <div className="home-heading18">
          <h2 className="home-text24">Our practices</h2>
          <p className="home-text25">
            We provide exceptional, patient-centered care with advanced
            technology, experienced specialists, and ethical transparency.
            Prioritizing comfort, safety, and trust, we strive for excellence in
            every aspect of healthcare. Our commitment is to healing with
            compassion, innovation, and integrity.
          </p>
        </div>
        <div className="home-content12">
          <div className="home-grid2">
            <Link to="/department/cardiology">
              <div className="home-practice-wrapper1">
                <Practice
                  title="Cardiology"
                  description="Our team consists of highly skilled and experienced cardiology
                  specialists dedicated to providing exceptional cardiovascular
                  care."
                ></Practice>
              </div>
            </Link>
            <Link to="/department/orthopedics">
              <div className="home-practice-wrapper2">
                <Practice title="Orthopedics"></Practice>
              </div>
            </Link>
            <Link to="/department/ophthalmology">
              <div className="home-practice-wrapper3">
                <Practice title="Ophtalmology"></Practice>
              </div>
            </Link>
            <Link to="/department/pediatrics">
              <div className="home-practice-wrapper4">
                <Practice title="Pediatrics"></Practice>
              </div>
            </Link>
            <Link to="/department/Nutrition">
              <div className="home-practice-wrapper5">
                <Practice title="Nutrition"></Practice>
              </div>
            </Link>
            <Link to="/department/general-medicine">
              <div className="home-practice-wrapper6">
                <Practice title="Medicine" description=""></Practice>
              </div>
            </Link>
          </div>
          <button data-open="practices" className="button button-main">
            <span>All practices</span>
          </button>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading19">
          <h2 className="home-header19">Why choose us</h2>
          <p className="home-header20">
            Choose us for expert care, advanced technology, and a patient-first
            approach. Our team of specialists ensures precise diagnosis,
            personalized treatment, and compassionate support at every step.
          </p>
        </div>
        <div className="home-content13">
          <div className="home-video1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jvmnZ_WyZ5g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="home-caption8">
            <h3 className="home-header21">
              Safeguarding today, empowering tomorrow—because your well-being
              shapes a better future. <span> </span>
            </h3>
            <p className="home-header22">
              We provide expert care, advanced technology, and personalized
              support to ensure a healthier, more secure life for you and your
              loved ones.
            </p>
          </div>
        </div>
      </section>
      <section className="home-features2">
        <div className="home-section7">
          <div className="home-content14">
            <div className="home-header23">
              <h2 className="home-heading20">
                Dedicated doctors with the core mission to help.
              </h2>
              <p className="home-capton1">
                Committed to excellence, our doctors bring over a decade of
                experience, providing expert care, personalized treatment, and
                unwavering support for your well-being.
              </p>
            </div>
            <div className="read-more">
              <span className="home-text27">See our doctors</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image24"
              />
            </div>
          </div>
          <img alt="image" src="/xray-1500w.png" className="home-image25" />
        </div>
        <div className="home-section8">
          <div className="home-content15">
            <div className="home-header24">
              <h2 className="home-heading21">
                Get access to specialty tests and breakthrough information.
              </h2>
              <p className="home-capton2">
                Experience advanced labs with cutting-edge technology, ensuring
                fast, accurate, and efficient test results for better diagnosis
                and treatment.
              </p>
            </div>
            <div className="read-more">
              <span className="home-text28">Find test</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image26"
              />
            </div>
          </div>
          <img alt="image" src="/lab-1500w.png" className="home-image27" />
        </div>
        <div className="home-section9">
          <div className="home-content16">
            <div className="home-header25">
              <h2 className="home-heading22">
                Find out how we can help you help you.
              </h2>
              <p className="home-capton3">
                Beyond medical care, we provide emotional and mental support,
                offering compassion, motivation, and reassurance.<br></br>Our
                team is dedicated to your well-being, ensuring you feel heard,
                valued, and cared for in every possible way.
              </p>
            </div>
            <button className="button button-main home-book4">
              <span>Book a virtual appointment</span>
            </button>
          </div>
          <img
            alt="image"
            src="/examination-1500w.png"
            className="home-image28"
          />
        </div>
        <button className="home-book5 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
      <section id="schedule" className="home-schedule">
        <div className="home-content17">
          <div className="home-header26">
            <h2 className="home-heading23">
              Schedule an in person or virtual appointment today
            </h2>
            <p className="home-caption9">
              Get the care you need, when you need it—convenient, accessible,
              and tailored to you.
            </p>
          </div>
          <div className="home-types1">
            <a
              href="#book"
              className="home-book-person1 button button-main button-white"
            >
              <span>Book in person appointment</span>
            </a>
            <button className="button button-main button-white home-book-person2">
              <span>Book virtual appointment</span>
            </button>
          </div>
        </div>
      </section>
      {/* Search Section */}
      <div className="home-search1">
        <div className="home-heading24">
          <h2 className="home-text33">Search diseases &amp; conditions</h2>
          <p className="home-text34">
            Check your body for these diseases.
            <br /> But it's okay, don't worry for we have your back.
          </p>
        </div>
        <div className="home-content18">
          <div className="home-type-one">
            <div className="home-alphabet">
              <div data-letter="a" className="letter">
                <span className="home-text35">A</span>
              </div>
              <div data-letter="b" className="letter">
                <span className="home-text36">B</span>
              </div>
              <div data-letter="c" className="letter">
                <span className="home-text37">C</span>
              </div>
              <div data-letter="d" className="letter">
                <span className="home-text38">D</span>
              </div>
              <div data-letter="e" className="letter">
                <span className="home-text39">E</span>
              </div>
              <div data-letter="f" className="letter">
                <span className="home-text40">F</span>
              </div>
              <div data-letter="g" className="letter">
                <span className="home-text41">G</span>
              </div>
              <div data-letter="h" className="letter">
                <span className="home-text42">H</span>
              </div>
              <div data-letter="i" className="letter">
                <span className="home-text43">I</span>
              </div>
              <div data-letter="j" className="letter">
                <span className="home-text44">J</span>
              </div>
              <div data-letter="k" className="letter">
                <span className="home-text45">K</span>
              </div>
              <div data-letter="l" className="letter">
                <span className="home-text46">L</span>
              </div>
              <div data-letter="m" className="letter">
                <span className="home-text47">M</span>
              </div>
              <div data-letter="n" className="letter">
                <span className="home-text48">N</span>
              </div>
              <div data-letter="o" className="letter">
                <span className="home-text49">O</span>
              </div>
              <div data-letter="p" className="letter">
                <span className="home-text50">P</span>
              </div>
              <div data-letter="q" className="letter">
                <span className="home-text51">Q</span>
              </div>
              <div data-letter="r" className="letter">
                <span className="home-text52">R</span>
              </div>
              <div data-letter="s" className="letter">
                <span className="home-text53">S</span>
              </div>
              <div data-letter="t" className="letter">
                <span className="home-text54">T</span>
              </div>
              <div data-letter="u" className="letter">
                <span className="home-text55">U</span>
              </div>
              <div data-letter="v" className="letter">
                <span className="home-text56">V</span>
              </div>
              <div data-letter="w" className="letter">
                <span className="home-text57">W</span>
              </div>
              <div data-letter="x" className="letter">
                <span className="home-text58">X</span>
              </div>
              <div data-letter="y" className="letter">
                <span className="home-text59">Y</span>
              </div>
              <div data-letter="z" className="letter">
                <span className="home-text60">Z</span>
              </div>
            </div>
            <p className="home-text61">
              You don’t know it’s name? Check out symptom checker below
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <div data-teleport="results" className="home-results">
              <span className="home-heading25">Results:</span>
              <div data-results="letters" className="home-list1"></div>
            </div>
          </div>
          <div className="home-type-two">
            <div className="home-heading26">
              <h3 className="home-text62">Symptom checker</h3>
              <p className="home-text63">Suggestions</p>
            </div>
            <div className="home-symptoms1">
              <div className="home-row1">
                <div className="symptom">
                  <span className="home-text64">Abdominal pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text65">Chest pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text66">Constipation</span>
                </div>
                <div className="symptom">
                  <span className="home-text67">Cough</span>
                </div>
                <div className="symptom">
                  <span className="home-text68">Breath difficulty</span>
                </div>
              </div>
              <div className="home-row2">
                <div className="symptom">
                  <span className="home-text69">Red eye</span>
                </div>
                <div className="symptom">
                  <span className="home-text70">Foot pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text71">Foot swelling</span>
                </div>
                <div className="symptom">
                  <span className="home-text72">Headache</span>
                </div>
                <div className="symptom">
                  <span className="home-text73">Heart palpitation</span>
                </div>
              </div>
              <div className="home-row3">
                <div className="symptom">
                  <span className="home-text74">Knee pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text75">Hip pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text76">Low back pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text77">Nasal congestion</span>
                </div>
                <div className="symptom">
                  <span className="home-text78">Neck pain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Meetdoc />

      {/* Footer Section */}
      <Appprom />
      <Footer />
    </div>
  );
};

export default Home;
