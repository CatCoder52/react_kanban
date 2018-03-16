import shortid from "shortid";

export default function createWelcomeBoard() {
  const welcomeCards = [
    { title: "# Welcome", color: "aquamarine" },
    { title: "This is *kanban.live*, a trello-esque app built with React.js" },
    {
      title:
        "A board consists of multiple lists with cards. Cards can be moved within a list or between lists by dragging them"
    },
    { title: "You can edit the contents of a card by clicking on it." },
    {
      title: "You can also give the cards a different color.",
      color: "yellow"
    },
    { title: "You can also give them a deadline", date: new Date() }
  ].map(card => ({ color: "white", _id: shortid.generate(), ...card }));

  const howToUseCards = [
    { title: "The site supports markdown" },
    {
      title: `Check out the source code on [GitHub](https://github.com/yogaboll/react-kanban-board)`
    }
  ].map(card => ({ color: "white", _id: shortid.generate(), ...card }));

  return {
    _id: shortid.generate(),
    title: "Welcome to kanban.live!",
    color: "blue",
    lists: [
      { _id: shortid.generate(), title: "Welcome!", cards: welcomeCards },
      { _id: shortid.generate(), title: "How to use", cards: howToUseCards }
    ],
    users: []
  };
}