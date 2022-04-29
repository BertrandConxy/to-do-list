export default class RemoveActivities {
  static removeAct(target) {
    // target.parentNode.parentNode.RemoveActivities(target.parentNode)
    target.parentNode.parentNode.removeChild(target.parentNode);
  }

  static resetList() {
    localStorage.clear();
  }
}