import React from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import api from "../config/api";

export default function Home({
  data,
  handleModal,
}) {
  async function submitDelete() {
    try {
      await api.delete(`/event/${data._id}`);

      window.location.reload();
    } catch (error) {
      //
    }
  }
  return (
    <Modal isOpen={data} toggle={handleModal}>
      <ModalHeader toggle={handleModal}>
        Encontrei
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Descrição
            </Label>
            <Input
              type="textarea"
              disabled
              value={data?.message}
            />
            <Label>Latitude</Label>
            <Input disabled value={data?.lat} />
            <Label>Longitude</Label>
            <Input disabled value={data?.long} />
            <Label>Contato</Label>
            <Input
              disabled
              value={data?.createdBy}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={submitDelete}
        >
          Encontrado
        </Button>
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
