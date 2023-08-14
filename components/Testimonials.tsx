"use client";

import { useEffect, useState } from "react";

import type { Testimonial } from "contentlayer/generated";

const TESTIMONIALS_AMOUNT = 3;

const getRandomElements = <T extends {}>({
  source,
  amount,
}: {
  source: T[];
  amount: number;
}) => {
  const arrayCopy = [...source];
  const result = new Array<T>();

  for (let i = 0; i < amount; i++) {
    if (arrayCopy.length == 0) {
      return result;
    }
    // Remove one random element from arrayCopy and add it to result
    result.unshift(
      arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1)[0]
    );
  }

  return result;
};

export const Testimonials = (props: { testimonials: Testimonial[] }) => {
  const [chosenTestimonials, setChosenTestimonials] = useState<Testimonial[]>(
    []
  );
  useEffect(() => {
    setChosenTestimonials(
      getRandomElements({
        source: props.testimonials,
        amount: TESTIMONIALS_AMOUNT,
      })
    );
  }, [props.testimonials]);

  return (
    <>
      <ul>
        {chosenTestimonials.map((testimonial) => (
          <li key={testimonial.message}>{testimonial.message}</li>
        ))}
      </ul>
      <p>
        <button
          onClick={() =>
            setChosenTestimonials(
              getRandomElements({
                source: props.testimonials,
                amount: TESTIMONIALS_AMOUNT,
              })
            )
          }
        >
          Give me more testimonials!
        </button>
      </p>
      <div>
        Want to submit your own? Head to the{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeii5nDElD8vt9aL5AIOCxtMB-CDHHMC-081QgU0ZiK-HseBQ/viewform">
          &quot;Ms Boba fishes for compliments&quot; survey
        </a>
        .
      </div>
    </>
  );
};
