import { CloseButton, Icon, ModalBackdrop, ModalContainer, ModalView } from '../../styled/modal';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../state/store/hook';
import { RootState } from '../../state/store/store';
import { showModal } from '../../state/store/showModal';

const Modal = () => {
  const dispatch = useAppDispatch();
  const show: boolean = useSelector((state: RootState) => state.showModal.value);

  return (
    <ModalContainer show={show}>
      <ModalBackdrop>
        <ModalView>
          <CloseButton>
            <Icon
              onClick={() => {
                dispatch(showModal(false));
              }}
              className="fas fa-times"
            />
          </CloseButton>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};
export default Modal;
