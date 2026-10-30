const { sendEmail } = require('../email');

async function generateWeeklyReport(userId) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);

  const activity = await getActivity(userId, startDate);
  const summary = {
    logins: activity.filter(e => e.type === 'login').length,
    actions: activity.filter(e => e.type === 'action').length,
    period: `${startDate.toDateString()} – ${new Date().toDateString()}`
  };

  await sendEmail(userId, 'Your Weekly Report', renderTemplate(summary));
  return summary;
}

module.exports = { generateWeeklyReport };
