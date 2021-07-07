import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required(),
  age: yup.string().required(),
});

async function validateInputs(data: any, locale: any) {
  let respond = {
    result: false,
    data: [],
  };
  console.log(data);
  await schema
    .validate(data, { abortEarly: false })
    .then((valid: any) => {
      respond.result = false;
    })
    .catch((err: any) => {
      respond.result = true;
      respond.data = err.inner.map((a: { path: string; errors: string[] }) => {
        let b = {
          name: '',
          message: '',
        };
        b.name = a.path;
        b.message = a.errors[0];
        return b;
      });
    });
  return respond;
}
export function validate(data: any, locale: any) {
  let response = validateInputs(data, locale);
  return response;
}
