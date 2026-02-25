export const document = {
  cv: process.env.NEXT_PUBLIC_CV_LINK,
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_LINK,
};

export const isValidLink = (url: string | undefined): boolean => {
  try {
    const newUrl = new URL(url ?? "");
    return newUrl.protocol === "https:";
  } catch {
    return false;
  }
};
