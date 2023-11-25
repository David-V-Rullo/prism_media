import { Divider } from "@nextui-org/react";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col p-20">
      <div className="flex gap-3 justify-start  p-4">
        <div className="flex flex-col gap-3 bg-default-50  rounded-md p-5">
          <div className="rounded-md  text-slate-300 pt-16 pr-16 pb-16 pl-4">
            <h1 className="text-2xl  ">
              About Us
              <Divider className="my-4" />
            </h1>
            <div className="p-4 px-8">
              <p>
                Welcome to Prism.Media, the online destination that's reshaping
                the landscape of outdoor advertising. Founded by the dynamic duo
                of David Rullo, a software engineering visionary, and Matt
                Crawford, a former out-of-home advertising executive, our
                platform was born from a shared vision to democratize billboard
                advertising. Our mission is to make prime billboard space
                accessible to all businesses, big or small, while eliminating
                the need for traditional billboard agencies and middlemen. We're
                here to help you find the perfect billboard for your business,
                and we're excited to be a part of your journey.
              </p>

              <h1 className="text-2xl pt-4 ">Our Vision</h1>
              <p>
                At Prism.Media, our vision is to empower businesses with the
                ability to harness the power of billboard advertising. We
                believe that every business should have the opportunity to shine
                on billboards, regardless of their size or advertising budget.
                By removing the complexities and intermediaries, we are making
                outdoor advertising more accessible, cost-effective, and
                efficient for all.
              </p>
              <h1 className="text-2xl pt-4 ">The Origin Story</h1>
              <p>
                Prism.Media was conceived by David Rullo, a brilliant software
                engineer, and Matt Crawford, a seasoned veteran in the
                out-of-home advertising industry. With diverse backgrounds and
                experiences, they came together to address the challenges faced
                by businesses when trying to secure billboard space.
              </p>
              <p>
                The idea took root during one of their late-night brainstorming
                sessions, driven by their deep passion for advertising and a
                shared desire to disrupt the existing norms. They recognized the
                inefficiencies and high costs associated with the prevailing
                advertising model and were determined to bring about change.
              </p>
              <h1 className="text-2xl pt-4 ">Our Mission</h1>
              <p>
                Our mission at Prism.Media is simple yet impactful: to
                streamline the process of advertising on billboards, making it
                more accessible and cost-efficient. We firmly believe that
                advertising should be attainable for businesses of all sizes,
                whether you're a local startup aiming to increase your
                visibility or a well-established corporation seeking broader
                exposure.
              </p>
              <h1 className="text-2xl pt-4 ">How We Operate</h1>
              <li>
                <em>Search and Explore:</em> Our user-friendly platform allows
                advertisers to browse available billboard spaces in their
                desired locations. With a diverse range of options at your
                fingertips, you can find the perfect canvas to showcase your
                message.
              </li>
              <li>
                <em>Direct Booking:</em> Once you've identified your ideal
                billboard space, you can book it directly through our platform.
                No more protracted negotiations or middlemen; you have full
                control over your advertising campaign.
              </li>
              <li>
                <em>Transparent Pricing:</em> Transparency is at the core of our
                philosophy. We provide clear pricing information for each
                billboard space, ensuring there are no hidden fees or unexpected
                costs.
              </li>
              <li>
                <em>Analytics and Insights:</em> To help you gauge the
                effectiveness of your billboard campaign, we offer valuable
                analytics and insights. Keep track of your reach, engagement,
                and return on investment with ease.
              </li>
              <li>
                <em>Support:</em> Our dedicated support team is available around
                the clock to answer your questions and address your concerns.
                We're here to help you every step of the way.{" "}
              </li>
              <ol className="list-decimal list-inside"></ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
