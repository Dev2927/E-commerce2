import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Testimonial() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <div>
      <section className="">
        <div className="container mx-auto px-5 py-10">
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
            What our <span className=" text-[#1640D6]">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUSFRcYFRIYFxoVGhYVGRkXGBgXGBcaHSggGBolGxcVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHx8tKy0tLS0vLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLS0tLTctLTctLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA7EAACAQIDBQYEAwgCAwEAAAAAAQIDEQQhMQUGEkFREyJhcYGhMpHB0UJSsQcUIzOC4fDxYqJjcpI0/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAgEQEBAQEAAgIDAQEAAAAAAAAAAQIRAyESMRMiUQRB/9oADAMBAAIRAxEAPwDkgAAAAAAAAAAAAAAAAAAAzYbDubsrepJ4PBwjJNxcsvxaHLeCOoYKpPOFOUl1UXb5khR3eqZcbjC/Ju7+SJ/BV51JcNNcrJLSK8+RKx3frXvKUlfQr15eLc+K1V47vRWblJ9MrZnyrsKP/JL86XFb05l7p7u3s23r83YxVNjcLd3q8n4+RX+ZZ+FzfHbGqU87cUeUl9VyI86dU2bNcrp66ctWQe2thRs248D5SSbT81y0Lc+SVVrx3KmAy4ihKD4ZKzMRYrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPUIttJK7eiPJYN0tlupU7Rruwta6ylK6VvTMWjcwGwXBLtGle7a6vonzSzN/D7NdWooQvwXausk0uab80WLE4Rtwk1bhXdvmrck/DmSWxqCj3ss7K6VvFmbyb5Or/Fj5XiQ3Z2FToxSsr831LPidnxcOJW7vIg6VWxvRxUuFpczPNf1s14/4jsUlHNuyI2Peejt+rN/F4dzM2HwlrHSRDVaTWfPT16m1g9nqrHhmrq1vP8AxkqsG+SRJ7M2e3f5tlmc9Q3ee65Jvfuu6Tva9OV7Sd7xfTwOe4rCzpu04tfo/J8z9Mbe2cqtKVOXNP0fKxw7evZTUZTfxUpJSTf4XdX+a9zRi/8AGTyZ57ipAAsVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM2Dw7qTjCOsmkjsWwNmxh2cIpOC59OHW/nL6nMtzlfF08l8WrzsvBdeXqdlhRUYKK11b5Xz+6IbdiN2lPp+FZ582tVl4GbC5RWd7mHbVNaLp15Ky+p7w8u6k+hk8rb/mn/W/SqdSQw7vkQaqZm5QxLyzIZjTqpx4c80Fmav7w8s9Ty67RZ6VzqXqJciR2fWSiVj97bNnD4xonnXL1HePlOJbFyuznu8uz4yqzg1lVh0Wbz666e6LmqxAbUoOpiY2/Lbyzu8yeL3SjyzmHBcZSUJyindRk1e1r28ORhJPeSkoYqrFaKbsRheygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbGAwrq1I007cTzk9EtW/RXFvHZO3kSO5//wCyjz72no/Y6tj9o9nF30aSSXTr+hWNn7u4WChiMNWnKdK/Em4yUna2lk4vMxvGOaV7u99eebv8iubzv6T349YvtOwxnFxSa/CjPhZ3j5ELgZcVv/XT3LNgMMkkZvL9tn+ecyy4elxI3sPhPBZHmkktLfMyxxFnr7kcxba2pUElb3ME6a6HyeLTPka0SbkZKGEXO5t/uP5TUp4uN7a+pJYTEp8yUkR11qT7uRqUs6vEtVoyUxWHTzRCKp2cpt62y/X7+xPxT9lHnv6OG7x1lPFVmlZdpNWtbRtZrqRp0TfPdbtY1sdSnFW70qX57LvSi+Tty8DnZf2Vlss+wABwAAAAAAAAAAAAAAAAAAAAAAAAAAAlN22u3V+cJr14WRZu7FnbEUX/AOWC9HJJ+zI7nc2J+PXx1L/K6js3Zy4P4aSfC3LlxK2d/EgdpS4eTcM9Pii3+KP20fuTksDOpOdqqhGDzlnf0SM+G2TTS4ZvjSjdyeXE+Rjxr4t3lz8pWHdzALgc7p30a6fQ1sbtKrF2i7a35ZJElJcCUYaKyWdv6W1p58iFxuxo1qjjJytldaJrNuN1otOWZ2ct7Ub2TiCx+9XZvKo5Stn3rJPwSu3628jVpb7Vnle3je/tJZ/NE7itysI45qUGvP8AumRlbdOkrKLm7eDX6rMv7niqY31KbJ3tnUkouN5eGd/sWSrVqQpubTyzfLxZWth4SnhaseBcTm7cLyz11d+SLrvEv4E+CMm2mrd1Wi4665u/IhZF01eKfU38hF2inJ8kuZ7h+0CSekI+Dbk1/wDCdvUpK3dnpGbzV27N5dE1yM+F3Pbz7VX5W/2TkzFN15K6RsrfCtWmo2i1+aLTXqnmvUkduuTule84LPxTWnsVfdPdnG4eqmkqlJ/E3aLS9dS6bdpynGPZ/wAxXcFld2V8r/0nOyV25tnFb3lwXZ4OU80oUqkOHThbilHJdczkZ0veCpWns/ESrTbzp2X/AC7SKz9zmh3w/Vv9Q/0+tTP8gAC5nAAAAAAAAAAAAAAAAAAAAAAAAAAAPUJ8LUl+Fp/LM8gDttJKVPtI3cppcUUrpxeal4XRhxU+84p5Wv7aexV9zNsKpTjQc3GdNNLO3FD+yy9ETzpKE7XbSV1d8uhiufjrjfNfLPY2nJcF9FbPO+X3f1MtF5ppd5ciPVWzd3lHTxb0+Wp7o45KxyTizN6naW0Z5p2STatZGhjsdGz4YLid1dakZtHbD17tvFfU1cJtCpVjanC0ZOzq2te/JW1XsTSsbWBwycu0mrtO0fPm7+Gnqy2V6a7PPSVl7EDQpulaLfElb5FkxkV2Sks3G1lbrax2Ry+o0K+xo4WEZwV4NRvF58l1M9HaVPV04+dlciNvbadOVOhO7VROXF0lkopeiI2rtOlTt3pX6cCfvc7UM59LutownF2T00+lzWo0FBOUpOT/ADS1tZZZZfh6EdsPEQkuOOr6/RciYhSk5pxaSTbd1e6I2nrrnX7Ua7oUaeFVv48nVlLrGFuFLp3pf9Tmhcv2rbSjWxvDF3VCmoO3523KS90vRlNNOJzLF5dfLVoACSsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeoTcWmm01o1k16lr3P2pVnUlCc3K8bx4s7Wav+pUib3PdsTHpwyT8rfexHc7E8XlXnH1Lxtfm/8AGV6deSjKebabSXrZJErtG8JpaX9NRgKMe0cZ/DJ69L6P5mbjXKjcDsitVmpV5JpO/ZrT1fMtFbGPhULWVtNMiO2lQqr+VOyjqmr+6zsRyeKlm+F9UnZv5/cnzv07LW3T2tKjLhnLjhfJv4l9yxbP3zjV46UEpXsl9/JLMpeI2VVqJdpSqLpZXv6q5jwuCqYWV6VKq1LV8Etel7EuOd19cW3a+Ga/mfxFqpWtrp5WIR4ht8Kjk/hfXwJTDbVxag3UwVRxXVJO1teFu7+RqbM4cR8MHGTldp8ksyOolnd+nnYmOqKt2U8ndWXqjZ/aNvLXw1SjSoT4b0pSk7JvvS4Vbo1wS+ZvzwV8bfJ24X7L7HP9/wDGqrjqrTvGnw04/wBCz/7ORLx57VPm16nFelJttt3bd23zb1bPgBcygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY9zoWqN85d2L8M237Ir0I3Zfdwtl92Vd/DnCHi18T9LJfMh5NTObU/Hn5akbeJXaRs7JwdvHw/zLU+QheJ52xBxmpx/Eu8l1WX6HzZ2MUu68ij7nY0z1eVK05cUU+aVnfmuphlLgTtG68T7CaTsbv7srLxVxE+tOO0HFXUXlla7Nylti2U7tZd2/wBDXrYWLTXXnr8j5R2VxWzzWT+jJuzVWfAVo1Fdqy8cr/5ci/3VUK05Kyhll59fU2qGGnGOTs16/wCjFt6mmlfpny9X4HELWhX2hGhTq4qdrwT4V+abyjF+PFb3OPVJuTcpO7k22+rbu38yw747dWImqdP+VS5/nno5+SWS9epXC7M5GXeu0ABJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6fYxufZvh0z8QPjVjon7PNoqWHqUb505XS8Ja+9/mc2nVubmwNryw1ZVFppOPWL1K/Lj554n4t/HXXUcbTTVvVFe2lhJL+JT+JarqTka8aiU4O8ZK6fU08RlyMubY3akqDwG37zUZ92SeaZb6ePi0rSTyty1KjtPZUKmdvlqvFFaxUa1H4Ztx8/1L88rPfll0artJQet/8z9DcwO1oLO6u311y+5yKW0qj1ZZ92dmyrShKVSVpd6y6LVZ3JWSE8lrrtPFRau3lw/PLn48jku929U8RKVOD4aSbTs852yz6R8C27ZxCw2FqOF0lG0bu/fl3U/HW5yolj37VeToACasAAAAAAAAAAAAAAAAAAAAAAAAAPUYNgeQZ1R6n3TQOdYlBnhmw5Hlg613VejHEZJWep5dPowMFSJgkzPNGGQExu7vBLDvhlnTbzXOL6r7F0lio1IqUJXi9GcwaNrZ+0alF3g8ucXmmVb8ffcXePy/H1fp0agaO0cIndrX2Meytv0qyUX3J9Hzfg+Zv2jz5+jKeWX20dmp6UrG4HPJW6r7HRNy8PejTbWifyv/ALK7tHDqTsn5l93apRhh4LRJa9b/AOyV16RmeKv+0fEWhSoc5uVR+Uckvd/IoBZN/ccqm0XbONCEYP3lL9fYheyjO7g/T+5fifqzeS/s1QZKlFx1XqYySIAAAAAAAAAAAAAAAAAAAAA9Rjc99mut30WXufQHHuNPy8l9z3xJAAeJVEeHIAApC59ABtPU8Ol0Z9AGKpA1qlMADE4sJHwANCWwe3Jq0al5Lr+JevMA5ZL9pZ1Z9JKnjqbz7T5/YncfvhQUYQg5NQjnk/i5P0+p9BH8cT/LpTpt1HLhecm3KTyvd/Q2aVNJZWyyt9QC2Kb9vl3fJnz93vrZeX2AA16lBrx8jEAcdgADjoAAAAAAAAAAAAA//9k="
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
                <span className="inline-block h-1 w-10 rounded bg-[#1640D6] mt-6 mb-4" />
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
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.livemint.com/img/2022/04/27/1600x900/ElonMusk_1651076367069_1651076367208.JPG"
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
                <span className="inline-block h-1 w-10 rounded bg-[#1640D6] mt-6 mb-4" />
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
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
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
                <span className="inline-block h-1 w-10 rounded bg-[#1640D6] mt-6 mb-4" />
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
