const NAVIGATE = 'NAVIGATE';

const navigate = (screen, params) => ({
  type: NAVIGATE,
  screen,
  params,
});

export { NAVIGATE, navigate };
