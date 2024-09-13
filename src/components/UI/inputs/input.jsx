const Input = ({ type, pleaceholder, contentName }) => {
  return (
    <div>
      <input className={contentName} type={type} placeholder={pleaceholder} />
    </div>
  );
};

export default Input;
