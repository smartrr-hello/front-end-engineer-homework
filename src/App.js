import React, { useState } from "react";

import EmojiResults from "./components/EmojiResults";
import SearchInput from "./components/SearchInput";
import Header from "./components/Header/Header";
import filterEmoji from "./filterEmoji";

const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = (event) => {
    setFilteredEmoji(filterEmoji(event.target.value, 20));
  };

  return (
    <div className="mx-2 my-4">
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
};

export default App;
