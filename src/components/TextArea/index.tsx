import { Input } from "antd";

const { TextArea } = Input;
interface InputTextProps {
  placeholder: string;
  rows?: number;
}

const InputTextArea: React.FC<InputTextProps> = (props) => {
  return (
    <TextArea
      allowClear
      style={{ borderRadius: "4px" }}
      size="large"
      {...props}
    />
  );
};

export { InputTextArea };
