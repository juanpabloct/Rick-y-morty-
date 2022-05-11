import Flex from "../StyledComponents/Flex";

export default function History({ image, name, setHistory, value }) {
  return (
    <>
      <Flex
        style={{
          width: "100%",
          alignItems: "center",
          height: "5rem",
          backgroundColor: "rgb(241 241 241)",
          flexDirection: "row",
        }}
      >
        <img src={image} style={{ maxHeight: "100%" }} alt={name} />
        <h1 style={{ marginLeft: "3rem", fontSize: "2rem" }}>{name}</h1>
      </Flex>
    </>
  );
}
