import React from "react";
import Form from "./Form";

const FormSection = () => {
  return (
    <section className="w-[100%] h-auto md:h-[90vh] flex flex-col md:flex-row justify-center items-center">
      {/* LEFT DIV */}
      <div className="left w-[100%] md:w-1/2 h-auto md:h-[100vh] flex items-center justify-center relative">
        <p className="font-instrument-sans font-normal  text-base sm:text-lg text-[#252729] mt-6 md:mt-8 px-4 sm:px-8 md:px-16">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V’re just a message away. <br />
          Let’s catch up over coffee. <br />
          Great stories always begin with a good conversation
        </p>
      </div>

      {/* RIGHT DIV */}
      <div className="right mt-30  md:w-1/2 text-center md:h-[90vh] flex flex-col justify-between px-6 sm:px-10 md:px-16 py-6">
        <div className="">
          <h1 className="font-instrument-sans font-semibold text-2xl mb-2">
            Join the Story
          </h1>
          <p className="font-instrument-sans font-normal text-gray-700">
            Ready to bring your vision to life? Let’s talk.
          </p>
        </div>

        <div className="">
          <Form />
        </div>

        <div className="text-[#F15D2B] font-medium text-sm sm:text-base">
          <span>vernita@varnanfilms.co.in</span> | <span>+91 98736 84567</span>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
