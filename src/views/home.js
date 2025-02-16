import React from "react";
import { Link } from "react-router-dom";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Features from "../components/features";
import Practice from "../components/practice";
import Doctor from "../components/doctor";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Medica Healthcare</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal1">
        <div className="home-practices1">
          <div className="home-heading10">
            <span className="home-header10">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
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
        <header className="home-header17">
          <header data-thq="thq-navbar" className="home-navbar">
            <div className="home-left1">
              <img
                alt="image"
                src="/Branding/logo-1500h.png"
                className="home-logo"
              />
              <nav className="home-links1">
                <a href="#features" className="home-link10">
                  Features
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Topic 
                </a>
                <a href="#how-it-works" className="home-link12">
                  How it works
                </a>
                <span className="home-link13">Prices</span>
                <a href="#schedule" className="home-link14">
                  Contact
                </a>
              </nav>
            </div>
            <div className="home-right1">
              <button className="home-phone button">
                <img
                  alt="image"
                  src="/Icons/phone.svg"
                  className="home-image16"
                />
                <span className="home-text29">1800 101 6346</span>
              </button>
              <a href="#book" className="home-book1 button button-main">
                <img
                  alt="image"
                  src="/Icons/calendar.svg"
                  className="home-image17"
                />
                <span className="home-text17">Book an appointment</span>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container2">
                  <img
                    alt="image"
                    src="/Branding/logo-1500h.png"
                    className="home-image18"
                  />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon4">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text18">Features</span>
                  <span className="home-text19">How it works</span>
                  <span className="home-text20">Prices</span>
                  <span className="home-text21">Contact</span>
                  <a href="#book" className="home-book2 button button-main">
                    <img
                      alt="image"
                      src="/Icons/calendar.svg"
                      className="home-image19"
                    />
                    <span className="home-text22">Book an appointment</span>
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </header>
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
            <button className="button button-main home-book3">
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
            <Features></Features>
            <Features title="Virtual Clinic"></Features>
            <Features title="Clinical results"></Features>
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
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice title="Cardiology"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice title="Orthopedics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice title="Ophtalmology"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice title="Pediatrics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice title="Nutrition"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper6">
                <Practice title="General"></Practice>
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
            <video
              src
              poster="/video-1500w.png"
              className="home-video2"
            ></video>
            <div className="home-play">
              <img alt="image" src="/Icons/play.svg" className="home-image23" />
            </div>
          </div>
          <div className="home-caption8">
            <h3 className="home-header21">
              Safeguarding today, empowering tomorrow—because your well-being
              shapes a better future.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
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
      <section id="book" className="home-book6">
        <div className="home-heading27">
          <h2 className="home-text79">Book an appointment</h2>
          <p className="home-text80">
            Easily schedule an appointment with our specialists—whether
            in-person or virtual—for expert care at your convenience.
          </p>
        </div>
        <div className="home-form">
          <div className="home-types2">
            <div className="book-type">
              <span className="home-text81">In person appointment</span>
            </div>
            <div className="book-type">
              <span className="home-text82">Virtual appointment</span>
            </div>
          </div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="home-date1">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image29"
              />
            </div>
            <input
              type="text"
              placeholder="Practice"
              className="input book-input"
            />
            <div className="home-lower">
              <p className="home-text83">
                Kindly complete the form with accurate details to ensure a
                smooth and efficient process.
              </p>
              <div className="home-button">
                <button className="home-book7 button button-main">
                  <span>Book</span>
                </button>
                <p className="home-text85">
                  <span>
                    T&C apply. Your information is used securely for
                    professional medical diagnosis and treatment, in compliance
                    with legal and ethical standards.For more read through
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span className="home-text87">Terms and Conditions</span>
                  <span>
                    , and the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <span className="home-text89">Agreement Policy</span>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-meet">
        <div className="home-heading28">
          <h2 className="home-text91">Meet our doctors</h2>
          <p className="home-text92">
            Get to know our experienced doctors dedicated to providing expert
            care, compassion, and personalized treatment.
          </p>
        </div>
        <div className="home-list2">
          <div className="home-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="home-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="home-doctors1">
            <Doctor></Doctor>
            <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
          </div>
        </div>
        <div className="home-search2">
          <input
            type="text"
            placeholder="Search by name"
            className="home-textinput6 input book-input"
          />
          <button className="button button-main home-book8">
            <span>Search doctor</span>
          </button>
        </div>
      </section>
      <section className="home-news">
        <div className="home-heading29">
          <h2 className="home-text94">Read our latest news</h2>
          <p className="home-text95">
            Stay updated with the latest medical advancements, health tips, and
            hospital news.
          </p>
        </div>
        <div className="home-list3">
          <div className="home-item1">
            <div className="home-image30">
              <img
                alt="image"
                src="/News/news-logo-1500w.png"
                className="home-image31"
              />
            </div>
            <div className="home-content19">
              <div className="home-details1">
                <span className="home-date2">November 23, 2024</span>
                <p className="home-quick-description1">
                  Our hospital has been recognized as the leading healthcare
                  provider in the region, receiving the Excellence in Patient
                  Care Award...
                </p>
              </div>
              <div className="read-more">
                <span className="home-text96">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image32"
                />
              </div>
            </div>
          </div>
          <div className="home-item2">
            <div className="home-image33">
              <img
                alt="image"
                src="/News/news-1-1500w.png"
                className="home-image34"
              />
            </div>
            <div className="home-content20">
              <div className="home-details2">
                <span className="home-date3">April 15, 2024</span>
                <p className="home-quick-description2">
                  Are you hydrating yourself enough? Studies show that staying
                  hydrated can boost your immune system and also...
                </p>
              </div>
              <div className="read-more">
                <span className="home-text97">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image35"
                />
              </div>
            </div>
          </div>
          <div className="home-item3">
            <div className="home-image36">
              <img
                alt="image"
                src="/News/news-2-1500w.png"
                className="home-image37"
              />
            </div>
            <div className="home-content21">
              <div className="home-details3">
                <span className="home-date4">February 7, 2024</span>
                <p className="home-quick-description3">
                  We are excited to announce the launch of our state-of-the-art
                  diagnostic center, featuring cutting-edge technology...
                </p>
              </div>
              <div className="read-more">
                <span className="home-text98">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image38"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-download">
        <div className="home-main2">
          <img alt="image" src="/phone-1500w.png" className="home-image39" />
          <div className="home-content22">
            <h2 className="home-text99">
              Download our mobile app and book your next appointment
            </h2>
            <div className="home-buttons">
              <button className="home-ios button button-main">
                <img
                  alt="image"
                  src="/Icons/apple.svg"
                  className="home-image40"
                />
                <span>Download for iOS</span>
              </button>
              <button className="button button-main home-android">
                <img
                  alt="image"
                  src="/Icons/android.svg"
                  className="home-image41"
                />
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-left2">
          <div className="home-brand">
            <img
              alt="image"
              src="/Branding/logo-2.svg"
              className="home-image42"
            />
            <p className="home-text102">
              Privacy Policy | Terms & Conditions <br /> Online payment & refund
              policy <br />
              Gifting Policy | Tele-consult | Sitemap | Contact Us <br />
              Contact | Partners
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image43"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image44"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image45"
              />
            </div>
          </div>
          <div className="home-legal1">
            <span className="home-copyright1">
              © 2024 Medica Healthcare. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-right2">
          <div className="home-list4">
            <span className="home-header27">Menu</span>
            <div className="home-links2">
              <span className="home-link15">Home</span>
              <span className="home-link16">About</span>
              <span className="home-link17">Services</span>
              <span className="home-link18">Blog</span>
              <span className="home-link19">Support</span>
            </div>
          </div>
          <div className="home-list5">
            <span className="home-header28">Resources</span>
            <div className="home-links3">
              <span className="home-link20">Test Results</span>
              <span className="home-link21">Patients</span>
              <span className="home-link22">Doctors</span>
              <span className="home-link23">Health</span>
            </div>
          </div>
          <div className="home-list6">
            <span className="home-header29">Contact</span>
            <div className="home-links4">
              <span className="home-link24">
                123, Lal Bahadur Shastri Avenue, Sector 5, New Delhi, India –
                110001
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link25"
              >
                contact@medicahealthcare.in
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link26">
                1800-123-4567
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal2">
          <div className="home-row4">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright6">
            © 2024 Medica Healthcare. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="home-container4">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container6">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container8">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default Home;
