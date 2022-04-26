import { CloseButton, Icon, ModalBackdrop, ModalContainer, ModalView } from '../../styled/modal';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../state/store/hook';
import { RootState } from '../../state/store/store';
import { showModal } from '../../state/store/showModal';
import SignIn from './SignIn';

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
                window.location.reload();
              }}
              className="fas fa-times"
            />
          </CloseButton>
          <SignIn />
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};
export default Modal;
