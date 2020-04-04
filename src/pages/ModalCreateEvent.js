import React, { useState } from "react";

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
  isVisible,
  handleModal,
}) {
  const [message, setMessage] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [createdBy, setCreatedBy] = useState(
    null,
  );

  async function submitForm() {
    if (!message || !lat || !long || !createdBy)
      return;

    try {
      await api.post("/event", {
        message,
        lat,
        long,
        createdBy,
      });

      window.location.reload();
    } catch (error) {
      //
    }
  }

  return (
    <Modal
      isOpen={isVisible}
      toggle={handleModal}
    >
      <ModalHeader toggle={handleModal}>
        Adicionar evento
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              Eu encontrei
            </Label>
            <Input
              type="textarea"
              placeholder="Insira uma descrição."
              onChange={(event) =>
                setMessage(event.target.value)
              }
              value={message}
            />
            <br />

            <Label>Latitude</Label>
            <Input
              value={lat}
              onChange={(event) =>
                setLat(event.target.value)
              }
            />
            <br />

            <Label>Longitude</Label>
            <Input
              value={long}
              onChange={(event) =>
                setLong(event.target.value)
              }
            />
            <br />

            <Label>Contato</Label>
            <Input
              value={createdBy}
              placeholder="Insira o seu contato."
              onChange={(event) =>
                setCreatedBy(event.target.value)
              }
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={submitForm}
        >
          Adicionar
        </Button>
        <Button
          color="secondary"
          onClick={handleModal}
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
