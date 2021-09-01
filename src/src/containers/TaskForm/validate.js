const validate = (values) => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'Please input task name';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Must be 5 character or more';
  }
  return errors;
};

export default validate;
