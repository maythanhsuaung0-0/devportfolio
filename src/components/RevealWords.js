export default function RevealWords({ children }) {
  const text = String(children ?? "");
  const parts = text.split(/(\s+)/);

  return (
    <span data-token-reveal="">
      {parts.map((part, index) => part.trim() ? (
        <span className="reveal-word" key={index}>
          {part}
        </span>
      ) : part)}
    </span>
  );
}
