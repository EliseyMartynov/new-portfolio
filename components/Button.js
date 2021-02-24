const Button = ({ style, children, className }) => {
  return (
    <>
      <button style={style} className={className}>
        {children}
      </button>
      <style jsx>{`
        button {
          padding: 1rem;
          text-transform: uppercase;
          outline: none;
          border: none;
          background: var(--second-color);
          color: var(--main-color);
          font-family: inherit;
          letter-spacing: 0.5rem;
          font-size: 1.3rem;
          cursor: pointer;
        }

        button:hover {
          box-shadow: 0 0 0 4px var(--main-color);
        }
      `}</style>
    </>
  );
};

export default Button;
