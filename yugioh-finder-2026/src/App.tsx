import { useEffect, useState } from "react";
import "./App.css";
import { getAllCards, type CardPayload } from "./services/getCards";

function App() {
  const [cards, setCards] = useState<CardPayload[]>([]);
  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await getAllCards();
        if (response) {
          setCards(response.data.data);
        } else {
          console.log("No se han encontrado tarjetas");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCards();
  }, []);

  const getOneExamplePerSubtype = (cards, cardType) => {
    const map = new Map();

    cards
      .filter((card) => card.type === cardType)
      .forEach((card) => {
        if (!map.has(card.humanReadableCardType)) {
          map.set(card.humanReadableCardType, card);
        }
      });

    return Array.from(map.values());
  };

  const getOneExamplePerType = (cards:CardPayload[]) => {
    const spellExamples = getOneExamplePerSubtype(cards, "Spell Card");
    const trapExamples = getOneExamplePerSubtype(cards, "Trap Card");

    console.log("Ejemplos de Spell por subtipo:", spellExamples);
    console.log("Ejemplos de Trap por subtipo:", trapExamples);

    return { spellExamples, trapExamples };
  };

  // Call the function to test it
  const examples = getOneExamplePerType(cards);
  console.log("Ejemplos por tipo:", cards.find((card) => card.name === "Kuriboh"));

  return <></>;
}

export default App;
