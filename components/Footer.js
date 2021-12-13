// Footer Components

import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box marginTop={"30px"} align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Philter. All Rights Reserved.
    </Box>
  );
};

export default Footer;
