import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import styled from "styled-components";

// ! npm start
// ? npm i node-sass --save
// * npm i --save styled-components  (can see at add-header)

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

function App() {
  const data = [
    { label: "First somthing written", important: true, id: "fdi" },
    { label: "Second somthing written", important: false, id: "sdi" },
    { label: "Third somthing written", important: false, id: "tdi" },
  ];

  return (
    <AppBlock>
      <AppHeader className="search-panel d-flex" />
      <div>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </AppBlock>
  );
}

export default App;
