import * as yup from "yup";

export type InputData = {
  name: string;
  email: string;
  age: number | null;
};

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  age: yup.number().nullable().min(0, "Age must be at least 0"),
});

export const sendFormData = async (data: InputData) => {
  try {
    await userSchema.validate(data);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return error.message;
    }
  }
};
