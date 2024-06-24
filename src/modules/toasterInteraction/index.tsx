import Layout from "common/Layout";
import Card from "./Card";
import classNames from "classnames/bind";
import styles from "./ToasterInteraction.module.scss";
const cx = classNames.bind(styles);

const ToasterInteraction = () => {
  return (
    <Layout>
      <h1 className={cx("title")}>Board</h1>
      <ul className={cx("card-wrap")}>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </Layout>
  );
};
export default ToasterInteraction;
