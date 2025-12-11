import { Link } from "react-router-dom";

const StartPages = () => {
  return (
    <div className="fixed inset-0 z-10 bg-white">
      <h1>Главная страница</h1>
      <p>Добро пожаловать!</p>
      <Link to="/">На главную</Link>
    </div>
  );
};
export default StartPages;
