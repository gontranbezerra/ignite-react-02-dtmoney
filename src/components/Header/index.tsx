// import { useState } from 'react';
// import Modal from 'react-modal';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
  const { onOpenNewTransactionModal } = props;

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova tansação
        </button>
      </Content>
    </Container>
  );
}
