import {
  FaInstagram,
  FaFacebook,
  FaGithubSquare,
  FaMailBulk,
  FaPhoneAlt,
  FaSearchLocation,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
const Footer = () => {

  return (
    <section className=" py-12 ">
      <div className="main-container ">
        <h5>Get in touch</h5>
        <div className="flex max-sm:flex-col gap-4">
          <div className="grid grid-cols-2 w-full gap-2 max-sm:grid-cols-1">
            <div className="text-left py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              inventore illo hic, optio minima tempora rem dolorum aspernatur
              aut minus fugit dicta est a unde voluptas laborum sunt nulla
              consequuntur.
            </div>
            <div className="text-left py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              saepe maiores non odio. Repellendus perferendis, id ad error eius
              alias dolor suscipit tempore quibusdam. Velit quam reiciendis
              cupiditate iure tempore?
            </div>

            <div>
              <ul>
                <li className="flex -center gap-4">
                  <FaMailBulk /> rikeshmania123@gmail.com
                </li>
                <li className="flex  gap-4">
                  <FaPhoneAlt /> +977-12345667
                </li>
                <li className="flex  gap-4">
                  <FaSearchLocation /> Boston,USA
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-4 py-4">
              <a href="https://github.com/rikeshhh" target="_blank">
                <FaGithubSquare />{" "}
              </a>
              <a href="https://github.com/rikeshhh" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://github.com/rikeshhh" target="_blank" >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className=" h-auto w-full text-white  z-50 flex flex-col justify-center items-center  gap-4 border max-sm:p-0 footer-form rounded-md ">
            <h6>Contact Form</h6>
      <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
