import TextInput from '../components/TextInput';
import SubmitButton from '../components/Buttons/SubmitButton';

export default function ContactForm() {
  return (
    <fieldset>
      <h2 className="font-serif font-bold leading-none tracking-tight text-p3 text-40 xl:text-50 xl:tracking-normal">
        Contact Me
      </h2>
      <form action="submit">
        <div className="flex flex-col">
          <label htmlFor=""></label>
          <TextInput />
          <TextInput />
          <TextInput />
          <TextInput />
        </div>
        <SubmitButton>submit</SubmitButton>
      </form>
    </fieldset>
  );
}
