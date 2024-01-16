import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Journey in the Snowscape</h2>
            <div className="underline"></div>
          </div>
          <p>
            Embark on the tale of our passion for winter adventures. Founded
            with a love for the crisp mountain air and the thrill of gliding
            through powdery slopes, our journey began with a simple idea – to
            provide fellow enthusiasts with top-notch ski gear and winter
            apparel. From the first snowflake to the soaring peaks, our
            commitment to quality and adventure has shaped the narrative of our
            brand. As outdoor enthusiasts ourselves, we understand the
            importance of reliable equipment and stylish attire in creating
            unforgettable moments on the slopes. Join us on this expedition as
            we continue to evolve, explore, and equip you for your own winter
            escapades. This is more than a brand; it's a celebration of the
            winter spirit. Welcome to our snow-covered story.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
