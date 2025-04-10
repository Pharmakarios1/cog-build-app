import { Collapse } from "antd";

const CollapseComponent = () => {
  const items = [
    {
      key: "1",
      label: "Is Rays of  Truth available in multiple languages?",
      children:
        "Rays of Truth is currently available in English, however, plans to expand to other major languages...",
    },
    {
      key: "2",
      label: "Is Rays of  Truth available offline?",
      children: "Rays of Truth currently supports online version",
    },
    {
      key: "3",
      label: "Can a single user signed up multiple accounts?",
      children:
        "ROT is free and myriads by a single user isn't prohibited. However, advised a single account as that suffice for all the info needed.",
    },
    {
      key: "4",
      label: "what ROT and does it work?",
      children:
        "Bibley uses advanced natural language processing and machine learning algorithms trained on vast amounts of Biblical scholarship. It analyzes context, historical data, and cross-references to provide accurate and insightful explanations.",
    },
    {
      key: "5",
      label: "Is my contents and prayers private?",
      children:
        "Yes, your data is securely encrypted and private. We never share your personal information or study content with third parties.",
    },
    {
      key: "6",
      label: "How accurate is the resources provided by the AI?",
      children:
        "ROT AI is trained on trusted Biblical resources and scholarly materials. While it provides helpful insights and explanations, we encourage users to consult religious leaders for definitive interpretations.",
    },
  ];
  return <Collapse items={items} />;
};

export default CollapseComponent;
