import Layout from "../common/Layout";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Home() {
  return (
    <Layout>
      <h1 className={cx("title")}>Welcome to React Quiz</h1>
    </Layout>
  );
}
export default Home;
