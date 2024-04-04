import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { ReactNode, useEffect, useState } from "react";
import fetchingImage from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage";
type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {

  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();
  useEffect(() => {

    async function fetchPosts() {

      setIsFetching(true);
      try {

        const temp = (await get('https://jsonplaceholder.typicode.com/posts')) as unknown;

        const data = temp as RawDataBlogPost[];
        const blogPost: BlogPost[] = data.map((rawPost) => {
          return { id: rawPost.id, title: rawPost.title, text: rawPost.body }
        });
        setFetchedPosts(blogPost);
      }
      catch (error) {

        setError((error as Error).message);
        // setError('Failed to fetch posts!');

      }
      setIsFetching(false);
    }
    fetchPosts();

  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }


  return <main>
    <img src={fetchingImage} alt="An abstract image depicting a data fetching process." />
    {content}
  </main>;
}

export default App;
