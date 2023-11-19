export default function DefaultInput({
  placeholder = "you@example.com",
  htmlFor = "email",
  label = "Email",
  inputType = "text",
  inputName = "name",
  theme = "light",
}: {
  placeholder: string;
  htmlFor: string;
  label: string;
  inputType: string;
  inputName: string;
  theme: string;
}) {
  return (
    <div>
      <div className="mt-2">
        <input
          type={inputType}
          name={inputName}
          className="block w-full rounded-2xl outline-none pl-5  pr-28 py-5 text-grey-800 shadow-sm placeholder:text-grey-400 tracking-wider selection:placholder:font-light caret-grey-500 bg-grey-50  text-md sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
