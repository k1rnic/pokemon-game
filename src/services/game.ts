import gameApi from '../api/game';

export default class GameService {
  static getBoard() {
    return gameApi.get('board');
  }

  static createPlayer() {
    return gameApi.get('create-player');
  }
}
