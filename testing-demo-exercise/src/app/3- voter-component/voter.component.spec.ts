import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {

    beforeEach(() => {});

    it('should calculate total votes properly', () => {});

    // Note that I've grouped the 4 tests for upvotting under a separate suite.
    // This makes it easier to see the report of our tests: "When I upvote, it should ..."
    describe('When I upvote,', () => {
      it('should increment total votes', () => {

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

      it('should NOT increment total votes if I have already submitted a positive vote', () => {});

      it('should raise an event', () => {})

      it('should NOT raise an event if I have already submitted a positive vote', () => {});
    });

    describe('When I downvote,', () => {
      it('should decrement total votes', () => {});

      it('should NOT decrement total votes if I have already submitted a negative vote', () => {});

      it('should raise an event', () => {})

      it('should NOT raise an event if I have already submitted a negative vote', () => {});
    });
});
