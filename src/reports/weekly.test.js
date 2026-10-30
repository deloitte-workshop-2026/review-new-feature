const { generateWeeklyReport } = require('./weekly');

describe('generateWeeklyReport', () => {
  it('returns summary with login count', async () => {
    const result = await generateWeeklyReport('user-123');
    expect(result).toHaveProperty('logins');
    expect(result).toHaveProperty('actions');
  });
});
