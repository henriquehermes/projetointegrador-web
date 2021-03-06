import React, {
  useState,
  useEffect,
} from "react";

import ReactMapGL, { Marker } from "react-map-gl";

import api from "../config/api";
import MARK from "./pin.png";
import LOGO_UNISINOS from "./unisinos.png";

import ModalEvent from "./ModalEvent";
import ModalCreateEvent from "./ModalCreateEvent";
import ModalAbout from "./ModalAbout";

import "./styles.css"

const AnyReactComponent = ({
  openEvent,
}) => (
  <div className="ButtonMark" onClick={openEvent}>
    <img
      src={MARK}
      width="30"
      height="30"
      alt="mark"
    />
  </div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(
    false,
  );
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [
    showModalAbout,
    setShowModalAbout,
  ] = useState(null);
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: -30.0277,
    longitude: -51.2287,
    zoom: 13,
  });

  useEffect(() => {
    getEvents();
  }, []);

  function handleModal() {
    setIsVisible(!isVisible);
  }

  function handleEvent() {
    setEvent(null);
  }

  async function getEvents() {
    try {
      const { data } = await api.get("/events");
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="Header">
        <span className="Title">
          EU ENCONTREI
        </span>
        <div className="Menu">
          <button
            className="MenuButton"
            onClick={handleModal}
          >
            <span className="ButtonText">
              Encontrei
            </span>
          </button>
          <button
            className="MenuButton"
            onClick={() =>
              setShowModalAbout(true)
            }
          >
            <span className="ButtonText">
              Sobre
            </span>
          </button>
        </div>
      </div>

      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiaGVucmlxdWVoOTciLCJhIjoiY2s4amp3a2p0MDJvNTNsbXk4Mmx4bWF1bSJ9.FpSor21qcCoSA03iyovLPg"
        }
        onViewportChange={setViewport}
      >
        {!!events &&
          events.length > 0 &&
          events.map((item) => (
            <Marker
              latitude={parseFloat(item.lat)}
              longitude={parseFloat(item.long)}
            >
              <AnyReactComponent
                openEvent={() => setEvent(item)}
              />
            </Marker>
          ))}
      </ReactMapGL>

      <div className="Footer">
        <div className="CenterFooter">
          <span className="TitleAbout">
            Eu encontrei
          </span>
          <span className="SubFooter">
            Criada por Henrique Hermes
          </span>
        </div>

        <div className="CenterFooter">
          <a href="http://www.unisinos.br/">
            <img
              src={LOGO_UNISINOS}
              width="140"
              height="70"
              alt="logo_unisinos"
            />
          </a>
        </div>
      </div>

      <ModalCreateEvent
        isVisible={isVisible}
        handleModal={handleModal}
      />

      <ModalEvent
        data={event}
        handleModal={handleEvent}
      />

      <ModalAbout
        isVisible={showModalAbout}
        handleModal={() =>
          setShowModalAbout(null)
        }
      />
    </div>
  );
}
