import { useState, useCallback } from "react";

export const Validation = (): any => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const onChange = useCallback((evt: any): void => {
    setValue(evt.target.value);
    setErrorMessage(evt.target.validationMessage);
    setIsValid(evt.target.validity.valid);
  }, []);
  return { value, errorMessage, setErrorMessage, isValid, setValue, onChange };
};