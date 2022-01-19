import { Input, InputProps } from "antd";

interface InputTextProps extends InputProps {}

const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <Input allowClear style={{ borderRadius: "4px" }} size="large" {...props} />
  );
};

export { InputText };
