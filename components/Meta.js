import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Blog Des Devs, pour les passionnés du web",
  description:
    "Apprendre et comprendre le développement web, javascript, react ...",
};

export default Meta;
