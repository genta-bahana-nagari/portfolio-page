export const links = {
  github: process.env.NEXT_PUBLIC_GITHUB_LINK,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK,
  discord: process.env.NEXT_PUBLIC_DISCORD_ID,
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
};

export const isValidLink = (url: string | undefined): boolean => {
  try {
    const newUrl = new URL(url ?? "");
    return newUrl.protocol === "https:";
  } catch {
    return false;
  }
};
