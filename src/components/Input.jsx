import { useEffect, useReducer } from "react";
import { validate } from "../util/validator";
import styled from "styled-components";
const StyledinputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;

  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const StyledErrorMessage = styled.span`
  font-size: 0.9rem;
  margin-top: 5px;
  color: #ef233c;
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

function Input({
  id,
  onInput,
  element,
  type,
  validators,
  placeholder,
  errorText,
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  function changeHandler(e) {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: validators,
    });
  }

  function touchHandler() {
    dispatch({
      type: "TOUCH",
    });
  }

  const elementOutput =
    element === "input" ? (
      <StyledInput
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
        placeholder={placeholder}
      />
    ) : (
      <StyledTextarea
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
        placeholder={placeholder}
        rows="10"
      />
    );

  return (
    <StyledinputWrapper>
      <label htmlFor={id}></label>
      {elementOutput}
      {!isValid && isTouched && (
        <StyledErrorMessage>{errorText}</StyledErrorMessage>
      )}
    </StyledinputWrapper>
  );
}

export default Input;
