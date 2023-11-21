import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-[#00A9FF]">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#00A9FF] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Mark Zuckerberg
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior Product Designer
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,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"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#00A9FF] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Steve Jobs
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh7pkdBmTADlExjMRxyXSe9yKjSQszBPdAQ&usqp=CAU"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#00A9FF] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Elon Musk
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
