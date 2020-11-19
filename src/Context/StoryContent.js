import React, {useState} from 'react';

const StoryContext = React.createContext([{}, () => {}]);

const StoryProvider = (props) => {
  const [state, setState] = useState({
    story: 'Hamza'
  });

  return (
    <StoryContext.Provider value={[state, setState]}>
      {props.children}
    </StoryContext.Provider>
  );
};

export {StoryContext, StoryProvider};
