import { FaInstagram, FaFacebook, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" py-12">
      <div className="main-container">
        <div className="flex  flex-col">
        <h2 className="text-blue-700 text-4xl font-black text-center">Contact me</h2>
          <div className=" text-gray-300 font-thin">
            <p>
              Feel free to get in touch with me. You can use the form below or
              reach out through other channels.
            </p>
            <p>
              Connect with me on
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-xl font-black">
            <FaFacebook />
            <FaGithubSquare />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
