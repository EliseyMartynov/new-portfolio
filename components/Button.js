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
          border: 4px solid transparent;
        }

        button:hover {
          border: 4px solid var(--main-color);
        }
      `}</style>
    </>
  );
};

export default Button;
