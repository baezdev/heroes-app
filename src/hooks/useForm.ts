import { useState } from "react";

export const useForm = (init: any) => {
  const [formValues, setFormValues] = useState(init);

  const handleChange = ({ target }: any) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return {
    formValues,
    handleChange,
  };
};
