import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
      <Button type="primary" {...props} style={{textTransform: 'uppercase'}}>
        {props.children}
      </Button>
  );
};

const SecondaryButton: React.FC<Props> = (props) => {
  return (
      <Button type="default" {...props} style={{textTransform: 'uppercase'}}>
        {props.children}
      </Button>
  );
};

export { PrimaryButton, SecondaryButton };
