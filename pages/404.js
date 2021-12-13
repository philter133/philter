// Customized 404 Erorr page to let user know what steps they should they next

import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div text-align="center">
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>{" "}
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
