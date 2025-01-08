import "./Header.css";

interface Props {
  title: String;
  leftChild?: JSX.Element | null | undefined;
  rightChild?: JSX.Element | null | undefined;
}

const Header = ({ title, leftChild, rightChild }: Props) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
