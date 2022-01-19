import { DatePicker as DatePickerAntd, DatePickerProps } from "antd";

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const dateFormat = "DD/MM/YYYY";

  return (
    <DatePickerAntd
      allowClear
      format={dateFormat}
      style={{ borderRadius: "4px", width: '100%' }}
      size="large"
      {...props}
    />
  );
};

export { DatePicker };
