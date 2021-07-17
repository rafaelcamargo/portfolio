export const plausibleInstanceMock = {
  trackPageview: jest.fn()
};

export const PlausibleMock = jest.fn(() => plausibleInstanceMock);
