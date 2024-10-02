export function formatPublicationDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const msPerDay = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor((now.getTime() - date.getTime()) / msPerDay);

  // Si la différence est d'une semaine ou moins
  if (daysDiff === 0) {
    return "Il y a un jour";
  } else if (daysDiff === 1) {
    return "Il y a deux jours";
  } else if (daysDiff <= 7) {
    return `Il y a ${daysDiff} jours`;
  }

  // Si la différence est supérieure à une semaine mais dans la même année
  const dateYear = date.getFullYear();
  const nowYear = now.getFullYear();

  if (daysDiff > 7 && dateYear === nowYear) {
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }); // Exemple: "09 janv."
  }

  // Si la différence est d'une autre année
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }); // Exemple: "09 janv. 2023"
}
