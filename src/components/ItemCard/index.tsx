import { ReactElement } from "react";
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
  return (
    <Container>
      <TitleComponent>
        <span>{title}</span>
        <ActionComponent>
          {editAction && <FaPencilAlt id="edit" onClick={editAction} />}
          {deleteAction && <FaTrashAlt id="delete" onClick={deleteAction} />}
        </ActionComponent>
      </TitleComponent>
      {children && <ChildrenComponent>{children}</ChildrenComponent>}
    </Container>
  );
};

export default ItemCard;
