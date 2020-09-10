import ContactForm from '../components/ContactForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
export default function NAME() {
  return (
    <>
      <section>
        <h1 className="font-serif font-bold leading-none tracking-tight text-p3 text-40 xl:text-50 xl:tracking-normal">
          Get In Touch
        </h1>
        <p className="leading-7 pt-7 xl:text-xl text-p3">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </p>
        <div className="text-p3">
          <SocialMediaLinks />
        </div>
        <hr />
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
}
