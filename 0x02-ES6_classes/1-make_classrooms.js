import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room19 = new ClassRoom(19);
  const room20 = new ClassRoom(20);
  const room34 = new ClassRoom(34);
  const array = { room19, room20, room34 };
  return array;
}
