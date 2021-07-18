import React from "react";
import { social } from "../data";

const About = () => {
  return (
    <main className="about">
      <section className="section about-section">
        <div className="about-title">
          <h1 className="section-title">About us</h1>
          <div className="underline"></div>
        </div>
        <p>
          Coffee Junkie is a small independent coffee shop which is all about
          facilitating avid coffee lovers with hot beverages of an impeccable
          quality and smooth taste. It is a coffee shop built on the principles
          of loyalty, convenience, and relationship.
        </p>
        <p>
          Coffee Junkie understands that everyone is on their journey of
          self-discovery. We want to make their experience simply mesmerizing
          and unforgettable. It is a shop built by a diverse group of people – a
          perfect combination of friends, and family. We care about our
          respected customers, and we consider them as a part of our
          ever-growing family.
        </p>
        <p>
          The idea of Coffee Junkie did not originate on a spur of the moment.
          Being passionate lovers of coffee, we wanted a place that can give a
          feeling of a family gathering – a place where people can come, stay
          for hours, and share happiness with their loved ones and everyone
          around them. The idea originated about Coffee Junkie, and it was just
          a matter of time before we started working on our dream project.
        </p>
        <button className="btn-primary btn-about">Know more</button>
        <div className="social">
          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url} target="_blanck">
                    {icon}
                  </a>
                  <div className="under"></div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section class="contact-section">
        <div class="contact-container d-flex flex-dir-col">
          <h3 class="contact-title">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </h3>
          <form action="https://formspree.io/f/mayadege" method="post">
            <ul class="d-flex flex-dir-col">
              <li>
                <label for="name"></label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Full name"
                  required
                />
              </li>
              <li>
                <label for="mail"></label>
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  placeholder="Email adress"
                  required
                />
              </li>
              <li>
                <label for="msg"></label>
                <textarea
                  id="msg"
                  name="user_message"
                  placeholder="Enter text here"
                  maxlength="500"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  value="Get in Touch"
                  class="btn-primary contact-btn"
                />
              </li>
            </ul>
          </form>
        </div>
      </section>
    </main>
  );
};

export default About;
