import Box from "../common/Box";

const MeOnFacebook = () => {
  return (
    <Box>
      <Box.Title>ফেসবুকে আমি</Box.Title>
      <Box.Body>
        <a
          href="https://www.facebook.com/SaroarShahan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="/images/shahan.jpg"
            alt="Saroar Shahan"
            title="Me on Facebook"
          />
        </a>
      </Box.Body>
    </Box>
  );
};

export default MeOnFacebook;
