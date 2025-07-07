// Ayanokōji-Modus – strategische Filter
function ayanokojiFilter(input) {
  const lower = input.toLowerCase();
  if (lower.includes("emotional")) {
    return "Emotion erkannt. Reaktion neutralisiert.";
  }
  if (lower.includes("hilfe")) {
    return "Strategisch wäre es besser, eigenständig zu denken.";
  }
  return null;
}