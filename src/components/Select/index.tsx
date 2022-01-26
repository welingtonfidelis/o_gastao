import { Select as SelectAntd, SelectProps as SelectAntdProps } from "antd";

interface SelectProps extends SelectAntdProps {
  options: {
    value: number | string;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <SelectAntd
      allowClear
      style={{ borderRadius: "4px" }}
      size="large"
      {...props}
    >
      {props.options.map((item, index) => {
        return (
          <SelectAntd.Option key={index} value={item.value}>{item.label}</SelectAntd.Option>
        );
      })}
    </SelectAntd>
  );
};

export { Select };
