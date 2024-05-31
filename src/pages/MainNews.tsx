import { NewsContextProvider } from "@context";
import MainTitle from "../components/MainTitle";
import LinksNavigationRow from "../components/LinksNavigationRow/LinksNavigationRow";
import ArticlesGridContainer from "../components/ArticlesGrid/ArticlesGridContainer";

export default function MainNews() {
  return (
    <NewsContextProvider>
      <MainTitle />
      <LinksNavigationRow />
      <ArticlesGridContainer />
    </NewsContextProvider>
  );
}
