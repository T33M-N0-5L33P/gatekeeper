import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Authorized Access Only Beyone This Point</h1>
      <h3> (You must have a hall pass to proceed)</h3>
      <p className={styles.explain}>
        spuntentertainment is not responsible, ever. spuntentertainment is not sorry,at all..
        For more information on how we don't care check out{" "}
        <b>
          <a
            href="https://www.sppunnt.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purple}
          >
            sppunnt
          </a>
        </b>
        !
      </p>

      <p className={styles.explain}>
        You cannot access the{" "}
        <Link className={styles.purple} href="/">
          administrative offices
        </Link>{" "}
        unless you own a hall pass!
      </p>

      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="#F213A4" />
      </>
    </div>
  );
}
