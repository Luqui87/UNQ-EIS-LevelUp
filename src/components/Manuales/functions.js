export const getManuals = () => {
  const manuals = [];
  try {
    manuals.push(require(`../../resources/manuals/Manual-del-Jugador/Manual del Jugador.pdf`));
    manuals.push(require(`../../resources/manuals/Guia-del-Dungeon-Master/Guia del Dungeon Master.pdf`));
    manuals.push(require(`../../resources/manuals/Bestiario/Manual de monstruos.pdf`));
  } catch (error) {}
  return manuals;
};


