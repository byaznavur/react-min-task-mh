import Input from "../UI/inputs/input";

const Intro = () => {
  return (
    <div className="intro container">
      <div className="inputs">
        <h2>Inputs Reusable</h2>

        <form className="form-input">
          <Input
            contentName="input-name"
            type="text"
            pleaceholder="Enter your name"
          />
          <Input
            contentName="input-number"
            type="number"
            pleaceholder="Enter your number"
          />
          <Input
            contentName="input-pasword"
            type="password"
            pleaceholder="Enter your passwor"
          />
          <Input
            contentName="input-email"
            type="email"
            pleaceholder="Enter your email"
          />
          <Input
            contentName="input-date"
            type="date"
            pleaceholder="Enter your date"
          />
        </form>
      </div>
    </div>
  );
};

export default Intro;
