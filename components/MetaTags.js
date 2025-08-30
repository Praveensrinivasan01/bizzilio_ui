
export const MetaTags = ({ title, description }) => {
  console.log(title, description);
  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      images: [''],
    },
  };
};
