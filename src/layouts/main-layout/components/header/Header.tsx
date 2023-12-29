import styles from "./Header.module.scss";
import ReplyIcon from "@mui/icons-material/Reply";
import AppsIcon from "@mui/icons-material/Apps";
import { CustomTabs } from "../../../../components/custom-tabs/CustomTabs.tsx";
import { tabsListMock } from "../../../../mock/tabs.ts";

function Header() {
  return (
    <header className={styles.header}>
      <AppsIcon />
      <ReplyIcon />
      <CustomTabs tabsList={tabsListMock} />
    </header>
  );
}

export default Header;
