import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const philterlogo = `/images/philterlogo${useColorModeValue(
    "",
    "-dark"
  )}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={philterlogo} width={140} height={40} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
