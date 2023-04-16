export const getManuals = () => {
  const manuals = [];
  try {
    manuals.push(require('../../resources/manuals/Manual del Jugador.pdf'));
    manuals.push(
      require('../../resources/manuals/Guía del Dungeon Master.pdf')
    );
    manuals.push(require('../../resources/manuals/Manual de Monstruos.pdf'));
  } catch (error) {}
  return manuals;
};
