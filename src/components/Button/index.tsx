import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <Button
      type="primary"
      size="large"
      {...props}
      style={{ textTransform: "uppercase", width: "100%", borderRadius: "4px" }}
    >
      {props.children}
    </Button>
  );
};

const SecondaryButton: React.FC<Props> = (props) => {
  return (
    <Button
      type="default"
      size="large"
      {...props}
      style={{ textTransform: "uppercase", width: "100%", borderRadius: "4px" }}
    >
      {props.children}
    </Button>
  );
};

export { PrimaryButton, SecondaryButton };
