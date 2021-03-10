const customSelect = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => {
    return {
      ...provided,
      transform: `rotate(${state.selectProps.menuIsOpen ? "180deg" : "0"})`,
      transition: "transform .4s",
    };
  },
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: '"Share Tech", sans-serif',
  }),
};

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "var(--main-color)",
    primary25: "var(--second-color)",
    primary50: "var(--second-color)",
  },
});

export { customSelect, customTheme };
