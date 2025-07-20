import generateDates from '../utils/generateDates';

describe('generateDates', () => {
  const baseConfig = {
    startDate: '2024-01-01',
    endDate: '2024-01-10',
  };

  test('generates daily dates correctly', () => {
    const dates = generateDates({ ...baseConfig, frequency: 'daily', interval: 2 });
    expect(dates.length).toBeGreaterThan(0);
    expect(dates[0].toDateString()).toBe(new Date('2024-01-01').toDateString());
    expect(dates[1].toDateString()).toBe(new Date('2024-01-03').toDateString());
  });

  test('generates weekly dates correctly', () => {
    const dates = generateDates({ ...baseConfig, frequency: 'weekly', interval: 1 });
    expect(dates[0].toDateString()).toBe(new Date('2024-01-01').toDateString());
    expect(dates[1].toDateString()).toBe(new Date('2024-01-08').toDateString());
  });
});
