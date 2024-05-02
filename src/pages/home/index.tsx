import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../../components/container";
import SearchBar from "../../components/search-bar";
import { API_RESPONSE, LoadingTypes, News } from "../../types";
import Card from "../../components/card";

const API = "http://hn.algolia.com/api/v1/search";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") as string);
  const [news, setNews] = useState<News[]>([]);
  const [busy, setBusy] = useState<LoadingTypes>(null);

  const queryChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const searchHandler = async () => {
    if (!query) return;

    setSearchParams({ query });
    setBusy("loading");
    try {
      const response = await fetch(`${API}?query=${query}`);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const { hits } = await response.json();

      const refinedData = hits?.map(
        (e: API_RESPONSE): News => ({
          author: e.author,
          createdAt: e.created_at,
          id: e.objectID,
          title: e.title,
          updatedAt: e.updated_at,
          tags: e._tags,
        })
      );

      setNews(refinedData);
      setBusy("success");
    } catch (error) {
      setBusy("error");
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <section>
      <Container>
        <div className="w-1/2 mx-auto mt-8">
          <SearchBar
            onChange={queryChangeHandler}
            value={query}
            onSearch={searchHandler}
            searching={busy === "loading"}
          />
        </div>

        <div className="flex gap-4 flex-col mt-6 mb-8 w-3/4 mx-auto">
          {news.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              title={e.title}
              author={e.author}
              createdAt={e.createdAt}
              updatedAt={e.updatedAt}
              tags={e.tags}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
