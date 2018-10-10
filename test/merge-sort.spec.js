const mergeSort = require('../src/mergeSort');

describe('MergeSort', () => {
  describe('#0 sorting', () => {
    it('should sort empty arr [] to []', () => {
      const arr = [];
      expect(mergeSort(arr)).to.eql([]);
    });
  });

  describe('#1 sorting', () => {
    it('should sort arr [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', () => {
      const arr = [5, 4, 3, 2, 1];
      expect(mergeSort(arr)).to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('#2 sorting', () => {
    it('should sort arr [52, 34, 13, 24, 14, 66, 10, 7, 0] to [ 0, 7, 10, 13, 14, 24, 34, 52, 66 ]', () => {
      const arr = [52, 34, 13, 24, 14, 66, 10, 7, 0];
      expect(mergeSort(arr)).to.eql([0, 7, 10, 13, 14, 24, 34, 52, 66]);
    });
  });
});