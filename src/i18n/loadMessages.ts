export const loadMessages = async (locale: string) => {
  const messages = {
    home: (await import(`@/../messages/${locale}/homepage.json`)).default,
    login: (await import(`@/../messages/${locale}/login.json`)).default,
    navbar: (await import(`@/../messages/${locale}/navbar.json`)).default,
    membership: (await import(`@/../messages/${locale}/membership.json`)).default,
    profile: (await import(`@/../messages/${locale}/profile.json`)).default,
    errors: (await import(`@/../messages/${locale}/errors.json`)).default,
  };

  return messages;
};