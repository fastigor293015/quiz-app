import LogoDesktop from "@/icons/logo-desktop";
import clsx from "@/utils/clsx";
import styles from "./logo.module.css";

const Logo = ({
  className,
  href = '/',
}) => {
  return (
    <a href={href} className={clsx(styles.logo, className)}>
      <LogoDesktop />
    </a>
  );
}

export default Logo;
