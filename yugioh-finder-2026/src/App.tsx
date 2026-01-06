import { useEffect, useState } from "react";
import "./App.css";
import { getAllCards } from "./services/getCards";

function App() {
  const [cards, setCards] = useState([]);
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

  // const cardsWithType = cards.map((card) => ({type: card.type, card}))
  const uniqueCards = new Map(cards.map(card => [card.type, card]));
  const uniqueCardsArray = Array.from(uniqueCards.values());
  console.log("Estos son los tipos y sus subtipos:", uniqueCardsArray)

  const monsterCards = cards.filter((card) => card.race && !card.race.includes("Skill"));
  const uniqueMonsterCards = new Set(monsterCards.map(card => card.race));
  console.log("Estos son los monstruos", uniqueMonsterCards)

  const spellCards = cards.filter((card) => card.type === "Spell Card");
  const uniqueSpellCards = new Set(spellCards.map(card => card.humanReadableCardType));
  console.log("Estos son los hechizos", uniqueSpellCards)

  const trapCards = cards.filter((card) => card.type === "Trap Card");
  const uniqueTrapCards = new Set(trapCards.map(card => card.humanReadableCardType));
  console.log("Estas son las trampas", uniqueTrapCards)
  return <>
  
  </>;
}

export default App;
