export const LOGIN_RULES = {
  email: 'required|email',
  password: ['required', 'regex:/^(?=.*[a-z])(?=.*\\d)([^\\s]){8,}$/i'],
};
