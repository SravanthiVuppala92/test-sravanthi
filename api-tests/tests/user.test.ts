import { fetchRandomUser } from '../utils/apiClient';

describe('Random User API - Happy Path', () => {
  it('should return 1 user when results=1', async () => {
    const response = await fetchRandomUser(1);
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBe(1);
  });

  it('should return 5 users when results=5', async () => {
    const response = await fetchRandomUser(5);
    expect(response.data.results.length).toBe(5);
  });
});

describe('Random User API - Unhappy Path', () => {
  it('should return default number of users if invalid param is passed', async () => {
    const response = await fetchRandomUser(NaN as any);
    expect(response.status).toBe(200);
    expect(response.data.results.length).toBeGreaterThan(0);
  });
});