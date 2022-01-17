import { Select as SelectAntd, SelectProps as SelectAntdProps } from "antd"

interface SelectProps extends SelectAntdProps {
  options: {
    value: number,
    label: string
  }[]
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <SelectAntd allowClear style={{borderRadius: '4px' }} {...props}>
      {props.options.map((item, index) => {
        return <SelectAntd.Option value={item.value}>{item.label}</SelectAntd.Option>
      })}
    </SelectAntd>
  )
}

export {
  Select
}