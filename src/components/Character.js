import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import CharacterQuery from "../api/characterQuery";
import Button from "../StyledComponents/Button";
import Flex from "../StyledComponents/Flex";
import Container from "../StyledComponents/Container";
import Title from "../StyledComponents/Title";
import Ul from "../StyledComponents/Ul";
import History from "./History";

export default function Character({ id }) {
  const { data, loading, error } = useQuery(CharacterQuery, {
    variables: {
      characterId: id,
    },
    skip: !id,
  });
  const [history, setHistory] = useState([]);
  const [lastInsertedValue, setLastInsertedValue] = useState(0);
  const CallbackSetLastInsertedValue = useCallback((i) => { setLastInsertedValue(i) }, [id])
  useEffect(() => {
    if (data) {
      setHistory((current) => [...current, data]);
    }
  }, [id, data]);
  useEffect(() => {
    setLastInsertedValue(history[history.length - 1]);
  }, [history]);
  if (loading) return <p>Loading...</p>;
  if (data && lastInsertedValue) {
    const {
      created,
      gender,
      id,
      image,
      location,
      name,
      origin,
      species,
      status,
      type,
    } = lastInsertedValue?.character;
    return (
      <>
        <Flex
          style={{
            marginTop: "5rem",
            width: "80%",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Flex>
            <Container style={{ display: "flex", justifyContent: "center" }}>
              <img src={image} style={{ borderRadius: "10px" }} alt={name} />
            </Container>
            <Container style={{ backgroundColor: "rgb(241 241 241)" }}>
              <Title style={{ textAlign: "center" }}>{name}</Title>
              <hr />
              <Ul>
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>ID:</span>
                  <li style={{ fontWeight: "400" }}>{id}</li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Species:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {species}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Type:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {type}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Gender:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {gender}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Origin:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {origin.name}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Location:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {location.name}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Created:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {created}
                  </li>
                </Flex>
                <hr />
                <Flex style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "500" }}>Status:</span>
                  <li style={{ fontWeight: "400", marginRight: "8px" }}>
                    {status}
                  </li>
                </Flex>
                <hr />
              </Ul>
            </Container>
          </Flex>
          <Flex style={{ flexDirection: "column", gap: "1rem" }}>
            <h1 style={{ textAlign: "center" }}>History</h1>
            {history.map((item) => {
              const { image, name, id } = item.character;
              return (
                <Flex style={{ flexDirection: "row" }} key={id}>
                  <History name={name} image={image} value={item} />
                  <Button
                    style={{ margin: "auto" }}
                    onClick={() => {
                      CallbackSetLastInsertedValue(item);
                    }}
                  >
                    View
                  </Button>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  }
  if (error) {
    <div>Error</div>;
  }
}
