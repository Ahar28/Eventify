import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import NewsCard from "./NewsCard";

export default function Stories() {
  return (
    <section className="my-14">
      <Container>
        <div className="pt-14 pb-4 flex items-center lg:flex-nowrap flex-wrap gap-1 bg-[#F7F7F7]">
          <article className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:ml-14">
            <SectionTitle title="success stories" />
            <p className="text-[#5B6469]">Let's see what people say about us</p>
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto pr-4">
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  name="John Doe" holder="john_doe123"/>
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, " name="John Doe" holder="john_doe123" />
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." name="John Doe" holder="john_doe123" />
            </div>
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." name="John Doe" holder="john_doe123" />
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc, neque euismod mollis tincidunt." name="John Doe" holder="john_doe123" />
              <NewsCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed arcu parturient nunc," name="John Doe" holder="john_doe123" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
