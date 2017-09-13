import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
    let sut: VoterComponent;

    beforeEach(() => {
      sut = new VoterComponent();
    });

    it('should calculate total votes properly', () => {
      sut.othersVote = 7;
      sut.myVote = 8;

      expect(sut.totalVotes).toBe(15);
    });

    // Note that I've grouped the 4 tests for upvotting under a separate suite.
    // This makes it easier to see the report of our tests: "When I upvote, it should ..."
    describe('When I upvote,', () => {
      it('should increment total votes', () => {
        sut.upVote();
        expect(sut.myVote).toBe(1);

        // Note that I've made assertion against "totalVotes", not "myVote", because eventually
        // it's the value of "totalVotes" that we render on the view. So, that's what matters.
        // When testing components, think of them as a black box or a DVD player. When we press
        // the play button on a DVD player, we see the small monitor showing the play icon and the
        // movie starts to play. We don't care about what is happening inside the DVD player in
        // hundrds of ICs, transistors, etc. By the same token, we don't about the value of individual
        // properties in a component. We care about what is rendered on the view (or the public API
        // of a component). Now, in this case you can argue that "myVote" is part of the public API
        // because it is an input property and we set it from the outside. That is a valid argument.
        // So technically, we could write our assertion against myVote too, but asserting against
        // totalVotes better aligns with the responsibility of this component and what eventually
        // should be shown to the user.
      });

      it('should NOT increment total votes if I have already submitted a positive vote', () => {
        sut.myVote = 1;
        sut.upVote();

        expect(sut.myVote).toBe(1);
      });

      it('should raise an event', () => {
        let eventData = null;
        sut.myVoteChanged.subscribe(v => eventData = v);
        sut.upVote();

        expect(eventData).not.toBeNull();

        // I'm using toEqual() instead of toBe() here. The former performs a deep equality check
        // where as the latter (toBe) does a reference check.
        expect(eventData).toEqual({myVote: 1});
      });

      it('should NOT raise an event if I have already submitted a positive vote', () => {
        let eventData = null;
        sut.myVote = 1;
        sut.myVoteChanged.subscribe(v => eventData = v);
        sut.upVote();

        expect(eventData).toBeNull();
      });
    });

    describe('When I downvote,', () => {
      it('should decrement total votes', () => {
        sut.downVote();
        expect(sut.myVote).toBe(-1);
      });

      it('should NOT decrement total votes if I have already submitted a negative vote', () => {
        sut.myVote = -1;
        sut.downVote();

        expect(sut.myVote).toBe(-1);
      });

      it('should raise an event', () => {
        let eventData = null;
        sut.myVoteChanged.subscribe(v => eventData = v);
        sut.downVote();

        expect(eventData).not.toBeNull();
        expect(eventData).toEqual({myVote: -1});
      });

      it('should NOT raise an event if I have already submitted a negative vote', () => {
        let eventData = null;
        sut.myVote = -1;
        sut.myVoteChanged.subscribe(v => eventData = v);
        sut.downVote();

        expect(eventData).toBeNull();
      });
    });
});
