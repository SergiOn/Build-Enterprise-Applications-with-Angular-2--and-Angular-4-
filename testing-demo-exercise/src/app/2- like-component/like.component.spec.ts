import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
    let sut: LikeComponent;

    beforeEach(() => {
      sut = new LikeComponent();
    });

    it('should toggle the iLike property when I click it', () => {
      sut.click();
      expect(sut.iLike).toBe(true);
    });

    it('should decrement total likes if I like an object and click the LikeComponent to unlike it', () => {
      sut.iLike = true;
      sut.click();

      expect(sut.totalLikes).toBe(-1);
    });

    it('should increment total likes if I do NOT like an object and click the LikeComponent to like it', () => {
      sut.click();
      expect(sut.totalLikes).toBe(1);
    });
});
