import { NewsContextProvider } from "@context";
import MainTitle from "../components/MainTitle/MainTitle";
import LinksNavigationRow from "../components/LinksNavigationRow/LinksNavigationRow";
import ArticlesGridContainer from "../components/ArticlesGrid/ArticlesGridContainer";
import SidebarAside from "../components/SidebarAside";

export default function MainNews() {
  return (
    <NewsContextProvider>
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <MainTitle />
          <LinksNavigationRow />
          <ArticlesGridContainer />
        </div>
        <SidebarAside />
      </div>
    </NewsContextProvider>
  );
}
