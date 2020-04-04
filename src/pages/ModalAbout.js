import React from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import "./styles.css"

export default function Home({
  handleModal,
  isVisible,
}) {
  return (
    <Modal
      isOpen={isVisible}
      toggle={handleModal}
    >
      <ModalHeader toggle={handleModal}>
        Sobre a plataforma
      </ModalHeader>
      <ModalBody>
        <span className="TitleAbout">EU ENCONTREI</span>
          <p>
            Com o crescente número de moradores de
            rua nos últimos anos, vemos pouca ação
            por parte do nosso governo para cuidar
            dessa questão social por outro lado,
            empresas privadas tomam atitudes mas
            sabemos que precisamos fazer mais.
          </p>
          <p>
            O projeto visa ajudar moradores de rua
            a serem localizados e receberem apoio
            de pessoas dispostas bem como,
            famílias que buscam seus parentes
            desaparecidos e que não sabem onde
            estão, talvez nem imaginam que estejam
            morando na rua.
          </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={handleModal}
        >
          Fechar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
