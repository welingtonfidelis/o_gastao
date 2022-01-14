import { Modal, ModalProps } from "antd";

interface Props extends ModalProps {}

const ModalComponent: React.FC<Props> = (props) => {
  return (
    <Modal {...props}>{props.children}</Modal> 
  )
}

export default ModalComponent;