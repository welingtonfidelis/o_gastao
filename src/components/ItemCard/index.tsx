import { Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import {
  ActionComponent,
  Container,
  ChildrenComponent,
  TitleComponent,
} from "./styled";

interface Props {
  title: string;
  editAction?: () => any;
  deleteAction?: () => any;
}

const ItemCard: React.FC<Props> = ({
  title,
  editAction,
  deleteAction,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleComponent>
        <span>{title}</span>
        <ActionComponent>
          {editAction && <FaPencilAlt id="edit" onClick={editAction} />}
          {deleteAction && (
            <Popconfirm
              placement="bottomRight"
              title={t("general.delete_confirm_title")}
              onConfirm={deleteAction}
              okText={t("general.delete_confirm_yes")}
              cancelText={t("general.delete_confirm_no")}
            >
              <FaTrashAlt id="delete" />
            </Popconfirm>
          )}
        </ActionComponent>
      </TitleComponent>
      {children && <ChildrenComponent>{children}</ChildrenComponent>}
    </Container>
  );
};

export default ItemCard;
