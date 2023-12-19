import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkrzqwz");
  if (state.succeeded) {
    return <p>I will get back to you soon!</p>;
  }

  return (
    <div className="flex justify-center items-center px-6 w-full">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start gap-4 max-sm:gap-0 max-sm:w-full max-sm:justify-center max-sm:items-center"
      >
        <label htmlFor="name">Name:</label>
        <input id="name" type="name" name="name" className="w-full p-2 w-max-sm:w-full"/>
        <ValidationError prefix="Name" field="text" errors={state.errors} />
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email"  className="w-full"/>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message:</label>

        <textarea id="message" name="message" className=" text-blue-500 max-sm:w-full" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
       <div className="py-4">
       <button className="bg-red-300 p-2 rounded-md">Submit</button>
       </div>
      </form>
    </div>
  );
};

export default ContactForm;
