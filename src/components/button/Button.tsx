import "./Button.css";

interface Props {
  text: string;
  type?: string; // green, red, blue
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
