export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "Layla" } })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
